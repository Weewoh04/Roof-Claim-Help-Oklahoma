import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Oklahoma storm damage roof education blog topics covering hail, leaks, ACV vs RCV, adjuster meetings, and insurance roof claim help.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Homeowner education"
        title="Oklahoma Roof Claim Help Blog"
        description="Practical articles for Oklahoma homeowners dealing with hail, leaks, wind damage, adjuster meetings, and roof insurance claims."
      />
      <section className="section">
        <div className="container">
          <div className="grid three">
            {blogPosts.map((post) => (
              <a className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
                <p className="eyebrow">{post.readTime}</p>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className="text-link">Read article</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section white">
        <div className="container split">
          <div>
            <p className="eyebrow">Have a current roof concern?</p>
            <h2>You do not have to wait for an article.</h2>
            <p>
              If hail, wind, or a leak already hit your home, request a free roof check and send the
              details directly.
            </p>
          </div>
          <LeadForm title="Send Morgan Your Roof Question" />
        </div>
      </section>
    </main>
  );
}
