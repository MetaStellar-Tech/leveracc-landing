import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | LeverAcc",
  description: "LeverAcc updates, educational guides, and technical write-ups for DeFi traders.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="min-h-screen px-4 py-16 md:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Product updates, educational guides, market insights, and engineering notes from LeverAcc.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="rounded-2xl border border-border/70 bg-card p-8">
              <p className="text-muted-foreground">
                No posts yet. Add Markdown files to <code>content/blog</code>.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-border"
                >
                  <time className="text-xs uppercase tracking-wide text-muted-foreground">{post.date}</time>
                  <h2 className="mt-2 text-2xl font-semibold">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                    {post.description}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
