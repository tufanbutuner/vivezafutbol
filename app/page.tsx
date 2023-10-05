import { getPosts } from "@/sanity/schemas/sanity-utils";

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);

  return (
    <div>
      posts go here:
      {posts.map((post) => (
        <div key={post._id} style={{ margin: "2rem" }}>
          {post.name}
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  );
}
