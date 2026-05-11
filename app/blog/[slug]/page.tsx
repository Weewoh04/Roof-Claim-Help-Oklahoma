import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaRow } from "@/components/Buttons";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { blogPosts, getBlogPost } from "@/lib/blog";

type BlogArticleProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogArticlePage({ params }: BlogArticleProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageHero eyebrow={post.readTime} title={post.title} description={post.description} />
      <section className="section">
        <div className="container split">
          <article className="article">
            {post.sections.map((section) => (
              <section className="article-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            <aside className="article-callout">
              <h2>Why roof claim support matters</h2>
              <p>
                A roofer does not replace your insurance carrier, attorney, or policy. A roofer
                helps document the physical roof condition, explain repair scope, and stay with you
                through inspections, adjuster meetings, estimate reviews, and supplement questions.
              </p>
              <CtaRow />
            </aside>
            <p className="disclaimer">
              This article provides general information and does not replace advice from your
              insurance carrier, attorney, or licensed professional.
            </p>
          </article>
          <LeadForm title="Ask Morgan About Your Roof Claim" />
        </div>
      </section>
    </main>
  );
}
