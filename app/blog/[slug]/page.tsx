import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leveracc.xyz";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | LeverAcc Blog",
    };
  }

  return {
    title: `${post.title} | LeverAcc Blog`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName: "LeverAcc",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og.png"],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "LeverAcc",
    },
    publisher: {
      "@type": "Organization",
      name: "LeverAcc",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/576x576-transparent-bg-transparent-fill.png`,
      },
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="min-h-screen px-4 py-16 md:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <article className="blog-prose mx-auto w-full max-w-3xl">
          <Link href="/blog" className="mb-8 inline-flex text-sm text-muted-foreground hover:underline">
            Back to blog
          </Link>
          <header className="mb-8">
            <time className="text-xs uppercase tracking-wide text-muted-foreground">{post.date}</time>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{post.description}</p>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
