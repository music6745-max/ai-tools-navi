import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // /go/* はアフィリエイトリダイレクタなのでクロール対象外
      { userAgent: "*", allow: "/", disallow: "/go/" },
      { userAgent: "Googlebot", allow: "/", disallow: "/go/" },
      { userAgent: "Bingbot", allow: "/", disallow: "/go/" },
      { userAgent: "GPTBot", allow: "/", disallow: "/go/" },
      { userAgent: "ClaudeBot", allow: "/", disallow: "/go/" },
      { userAgent: "PerplexityBot", allow: "/", disallow: "/go/" },
      { userAgent: "Google-Extended", allow: "/", disallow: "/go/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
