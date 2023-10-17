import { getPost } from "@/sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Script from "next/script";

type Props = {
  params: { post: string };
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);

  return (
    <div className="post-container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-27DMNSPFPY" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-27DMNSPFPY');
        `}
      </Script>
      <h1>{post.name}</h1>

      <div className="post-image-container">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          sizes="(max-width: 768px) 100vh, 1920px"
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
