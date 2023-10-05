import { Post } from "@/types/post";
import { createClient, groq } from "next-sanity";

export async function getPosts(): Promise<Post[]> {
  const client = createClient({
    projectId: "hl99jlx1",
    dataset: "production",
    apiVersion: "2023-10-05",
  });

  return client.fetch(
    groq`*[_type == "post"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        author,
        "image": image.asset->url,
        url,
        content
    }`
  );
}
