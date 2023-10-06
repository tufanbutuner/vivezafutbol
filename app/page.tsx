import { getPosts } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);

  return (
    <div className="container">
      <h1 className="posts-header">LATEST ARTICLES</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post._id}>
            <div className="card-container">
              <Image src={post.image} width={400} height={400} alt="" />
              <p>{post.name}</p>
              <p>{post.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
