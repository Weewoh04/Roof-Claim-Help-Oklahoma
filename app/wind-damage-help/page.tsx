import type { Metadata } from "next";
import { CtaRow } from "@/components/Buttons";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Wind Damage Help",
  description:
    "Wind damage roof inspection guidance for missing shingles, lifted shingles, creased shingles, exposed underlayment, and Oklahoma storm damage.",
};

const sections = [
  {
    title: "Missing shingles",
    text: "Missing shingles can expose the roof system to rain quickly. Even one open area can allow water to move under surrounding shingles and into decking, insulation, or ceilings.",
  },
  {
    title: "Lifted shingles",
    text: "Wind can loosen seals without fully removing the shingle. Lifted shingles may settle back down and look normal from the ground, but they can be vulnerable in the next storm.",
  },
  {
    title: "Creased shingles",
    text: "A crease can show that a shingle was bent back by wind. Creased shingles often lose strength and may not seal properly again.",
  },
  {
    title: "Exposed underlayment",
    text: "If shingles or flashing have moved enough to expose underlayment, the roof has less protection from rain. This can become urgent during repeated Oklahoma storm cycles.",
  },
  {
    title: "Why wind damage can worsen over time",
    text: "Loose shingles, broken seals, and lifted edges can spread as more wind gets underneath them. A wind damage roof inspection helps document current conditions before the next round of weather.",
  },
];

export default function WindDamageHelpPage() {
  return (
    <main>
      <PageHero
        eyebrow="Wind damage roof inspection"
        title="Wind Damage Help After Oklahoma Storms"
        description="Missing, lifted, or creased shingles can become leak paths. Get clear guidance before the next storm makes it worse."
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
          <LeadForm title="Request Wind Damage Roof Help" />
        </div>
      </section>
    </main>
  );
}
