import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/lib/site";

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
        description="Helpful articles are staged here so the site can grow into detailed posts for hail damage, leaks, claims, and city-specific roof guidance."
      />
      <section className="section">
        <div className="container">
          <div className="grid three">
            {blogPosts.map((post) => (
              <article className="blog-card" key={post}>
                <p className="eyebrow">Coming soon</p>
                <h3>{post}</h3>
                <p>
                  A homeowner-friendly guide for Oklahoma roof inspection questions, storm damage
                  documentation, and practical next steps after severe weather.
                </p>
              </article>
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
