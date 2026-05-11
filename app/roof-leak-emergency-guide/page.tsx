import type { Metadata } from "next";
import { CtaRow } from "@/components/Buttons";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Roof Leak Emergency Guide",
  description:
    "Roof leak help Oklahoma homeowners can use after storms, including safety steps, documentation, preventing further damage, and emergency tarping requests.",
};

const steps = [
  "Move valuables away from the leak and protect furniture, electronics, documents, and flooring.",
  "Catch water safely with buckets or containers, and avoid placing anything where it can tip or create an electrical hazard.",
  "Take photos and videos of the leak, ceiling stains, wet flooring, exterior storm conditions, and any visible roof concerns.",
  "Do not climb on a wet roof. Wet shingles, steep slopes, lightning, wind, and damaged decking can be dangerous.",
  "Prevent further damage where you safely can, such as moving items, containing water, and documenting temporary steps.",
  "Request emergency help or tarping when water is actively entering or more rain is expected.",
];

export default function RoofLeakEmergencyGuidePage() {
  return (
    <main>
      <PageHero
        eyebrow="Roof leak help Oklahoma"
        title="Roof Leak Emergency Guide"
        description="When water is coming in, the first job is safety, documentation, and preventing additional damage without putting yourself on the roof."
      />
      <section className="section">
        <div className="container split">
          <div className="rich-text">
            {steps.map((step, index) => (
              <article className="info-block" key={step}>
                <h2>{index + 1}. {step.split(".")[0]}</h2>
                <p>{step}</p>
                <CtaRow />
              </article>
            ))}
          </div>
          <LeadForm title="Request Leak or Tarping Help" />
        </div>
      </section>
    </main>
  );
}
