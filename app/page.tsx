import { getPosts } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);

  return (
    <div className="container">
      <h1 className="posts-header">LATEST ARTICLES</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post._id} className="card-container">
            <Image src={post.image} width={400} height={400} alt="" />
            <p>{post.name}</p>
            <p>{post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
