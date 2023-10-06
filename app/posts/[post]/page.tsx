import { getPost } from "@/sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { post: string };
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);

  return (
    <div className="post-container">
      <h1>{post.name}</h1>

      <div className="post-image-container">
        <Image
          src={post.image}
          alt={post.name}
          fill
          sizes="(max-width: 768px) 100vh, 700px"
          objectFit="cover"
          priority
        />
      </div>

      <div>
        <PortableText value={post.content} />
      </div>
    </div>
  );
}
