import { Post } from "@/types/post";
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
        _id,
        _createdAt,
        title,
        description,
        "slug": slug.current,
        author,
        "image": image.asset->url,
        content,
        tags,
    }`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        description,
        "slug": slug.current,
        author,
        "image": image.asset->url,
        content,
        tags,
    }`,
    { slug }
  );
}
