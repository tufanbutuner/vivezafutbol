import { getPost } from "@/sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Script from "next/script";

type Props = {
  params: { post: string };
};

const customSerializers = {
  types: {
    image: ({ value }: any) => {
      return (
        <>
          <div className="post-image-container">
            <Image
              src={value.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vh, 1920px"
              style={{ objectFit: "cover" }}
              priority
              loading="eager"
            />
          </div>
          <p
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              fontStyle: "italic",
              fontSize: "0.9rem",
            }}
          >
            {value.caption}
          </p>
        </>
      );
    },
  },
};

const components = {
  types: customSerializers.types, // Include your custom serializer for 'image'
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);

  console.log(post);

  const createdAtDate = new Date(post._createdAt).toLocaleDateString("en-GB");

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-27DMNSPFPY" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-27DMNSPFPY');
        `}
      </Script>

      <div className="post-image-container">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          sizes="(max-width: 768px) 100vh, 1920px"
          style={{ objectFit: "cover" }}
          priority
          loading="eager"
        />
      </div>

      <div className="post-container">
        <div className="post-metadata-container">
          <h1>{post.title}</h1>
          <div className="post-metadata">
            <span>{post.author}</span>
            <span>{createdAtDate}</span>
          </div>
        </div>
        <div className="post-content-container">
          <PortableText value={post.content} components={components} />
        </div>

        <div className="post-tags">
          {post.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
    </>
  );
}
