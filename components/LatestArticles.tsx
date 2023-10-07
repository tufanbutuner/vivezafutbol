import { getPosts } from "@/sanity/schemas/sanity-utils";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

export default async function LatestArticles() {
  const posts: Post[] = await getPosts();
  const latestPosts = posts
    .slice(0, 5)
    .sort(
      (a, b) =>
        new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
    );

  return (
    <div className="posts-container">
      {latestPosts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post._id}>
          <div className="card-container">
            <Image
              src={post.image}
              width={350}
              height={350}
              alt=""
              objectFit="cover"
            />
            <p>{post.name}</p>
            <p>{post.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
