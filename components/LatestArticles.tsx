import { getPosts } from "@/sanity/schemas/sanity-utils";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

export default async function LatestArticles() {
  const posts: Post[] = await getPosts();

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post._id}>
          <div className="card-container">
            <Image
              src={post.image}
              width={320}
              height={320}
              alt={post.alt}
              style={{ objectFit: "cover" }}
            />
            <div>
              <p>{post.title}</p>
              <p>{post.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  const revalidate = 60; // 1 hour

  return {
    props: { posts },
    revalidate,
  };
}
