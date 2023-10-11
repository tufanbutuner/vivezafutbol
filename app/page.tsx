import LatestArticles from "@/components/LatestArticles";
import Script from "next/script";

export default async function Home() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-27DMNSPFPY" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-27DMNSPFPY');
        `}
      </Script>

      <h1 className="posts-header">LATEST ARTICLES</h1>
      <LatestArticles />
    </div>
  );
}
