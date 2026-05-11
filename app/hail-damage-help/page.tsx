import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { CtaRow } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "Hail Damage Help",
  description:
    "Oklahoma hail damage roof help for homeowners who need signs to look for, documentation tips, and a free roof check request.",
};

const sections = [
  {
    title: "What hail damage can look like",
    text: "Hail can leave bruised shingles, missing granules, exposed asphalt, dented vents, marked gutters, damaged ridge caps, and soft impact spots. Some signs are obvious; others are subtle and need a closer look.",
  },
  {
    title: "Why damage may not be visible from the ground",
    text: "From the yard, a roof can look normal even when shingles have impact marks or granule loss. Steep slopes, roof height, lighting, and shingle color can hide damage until leaks or accelerated wear show up later.",
  },
  {
    title: "Why photos and documentation matter",
    text: "Photos of hail size, property damage, damaged metal, interior stains, and the storm date can help create a clear timeline. Documentation gives you a better record before repairs, adjuster meetings, or follow-up questions.",
  },
  {
    title: "When to request an inspection",
    text: "Request an Oklahoma roof inspection after confirmed hail nearby, dents on soft metals, new granules in gutters, ceiling stains, or when neighbors are reporting roof damage. It is better to understand the condition before small problems expand.",
  },
];

export default function HailDamageHelpPage() {
  return (
    <main>
      <PageHero
        eyebrow="Oklahoma hail damage roof help"
        title="Hail Damage Help for Oklahoma Homeowners"
        description="Learn what hail can do to shingles, why roof damage is easy to miss from the ground, and when a free roof check makes sense."
      />
      <section className="section">
        <div className="container split">
          <div className="rich-text">
            {sections.map((section) => (
              <article className="info-block" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
                <CtaRow />
              </article>
            ))}
          </div>
          <LeadForm title="Request Hail Damage Roof Help" />
        </div>
      </section>
    </main>
  );
}
