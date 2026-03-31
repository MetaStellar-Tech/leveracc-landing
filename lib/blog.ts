import fs from "node:fs";
import path from "node:path";
import { renderMarkdownToHtml } from "@/lib/markdown";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog");

type Frontmatter = {
  title?: string;
  description?: string;
  date?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  html: string;
};

const ensureBlogContentDir = () => {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    fs.mkdirSync(BLOG_CONTENT_DIR, { recursive: true });
  }
};

const parseFrontmatter = (raw: string): { frontmatter: Frontmatter; content: string } => {
  if (!raw.startsWith("---\n")) {
    return { frontmatter: {}, content: raw };
  }

  const endIndex = raw.indexOf("\n---\n", 4);
  if (endIndex === -1) {
    return { frontmatter: {}, content: raw };
  }

  const frontmatterRaw = raw.slice(4, endIndex).trim();
  const content = raw.slice(endIndex + 5).trim();
  const frontmatter: Frontmatter = {};

  for (const line of frontmatterRaw.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");

    if (key === "title") {
      frontmatter.title = value;
    } else if (key === "description") {
      frontmatter.description = value;
    } else if (key === "date") {
      frontmatter.date = value;
    }
  }

  return { frontmatter, content };
};

const getPostSlugFromFilename = (filename: string): string => filename.replace(/\.md$/, "");

const getPostTitleFromSlug = (slug: string): string =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const isMarkdownFile = (filename: string): boolean => filename.endsWith(".md");

export const getBlogPostSlugs = (): string[] => {
  ensureBlogContentDir();
  const filenames = fs.readdirSync(BLOG_CONTENT_DIR).filter(isMarkdownFile);
  return filenames.map(getPostSlugFromFilename);
};

const sortPostsByDateDesc = (posts: BlogPost[]): BlogPost[] =>
  posts.sort((a, b) => {
    const aTime = Date.parse(a.date);
    const bTime = Date.parse(b.date);
    if (Number.isNaN(aTime) || Number.isNaN(bTime)) {
      return b.slug.localeCompare(a.slug);
    }
    return bTime - aTime;
  });

export const getAllBlogPosts = (): BlogPost[] => {
  ensureBlogContentDir();

  const filenames = fs.readdirSync(BLOG_CONTENT_DIR).filter(isMarkdownFile);
  const posts = filenames.map((filename) => {
    const slug = getPostSlugFromFilename(filename);
    const filePath = path.join(BLOG_CONTENT_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { frontmatter, content } = parseFrontmatter(raw);
    const stats = fs.statSync(filePath);
    const date = frontmatter.date ?? stats.birthtime.toISOString().slice(0, 10);
    const title = frontmatter.title ?? getPostTitleFromSlug(slug);
    const description = frontmatter.description ?? "No description provided.";

    return {
      slug,
      title,
      description,
      date,
      content,
      html: renderMarkdownToHtml(content),
    };
  });

  return sortPostsByDateDesc(posts);
};

export const getBlogPostBySlug = (slug: string): BlogPost | null => {
  const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { frontmatter, content } = parseFrontmatter(raw);
  const stats = fs.statSync(filePath);
  const date = frontmatter.date ?? stats.birthtime.toISOString().slice(0, 10);

  return {
    slug,
    title: frontmatter.title ?? getPostTitleFromSlug(slug),
    description: frontmatter.description ?? "No description provided.",
    date,
    content,
    html: renderMarkdownToHtml(content),
  };
};
