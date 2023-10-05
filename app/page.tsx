import { getPosts } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);

  return (
    <div>
      Latest posts:
      {posts.map((post) => (
        <div key={post._id} style={{ margin: "2rem" }}>
          <Image src={post.image} width={200} height={200} alt="" />
          {post.name}
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
}
