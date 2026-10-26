import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts();
  const latestPostDate = posts.length > 0 ? posts[0].date : new Date().toISOString().slice(0, 10);

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      // No reliable content date for the homepage, so no lastModified rather than a wrong one.
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updated ?? post.date,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...coreRoutes, ...blogRoutes];
}
