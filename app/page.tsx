import LatestArticles from "@/components/LatestArticles";

export default async function Home() {
  return (
    <div className="container">
      <h1 className="posts-header">LATEST ARTICLES</h1>
      <LatestArticles />
    </div>
  );
}
