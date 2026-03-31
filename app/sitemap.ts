import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts();
  const latestPostDate = posts.length > 0 ? posts[0].date : new Date().toISOString().slice(0, 10);

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://leveracc.xyz/",
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://leveracc.xyz/blog",
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://leveracc.xyz/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...coreRoutes, ...blogRoutes];
}
