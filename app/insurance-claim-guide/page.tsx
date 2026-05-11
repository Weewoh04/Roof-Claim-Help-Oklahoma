import type { Metadata } from "next";
import { CtaRow } from "@/components/Buttons";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Insurance Claim Guide",
  description:
    "Insurance roof claim help Oklahoma homeowners can use to understand ACV vs RCV, deductibles, depreciation, adjuster meetings, and supplements.",
};

const sections = [
  {
    title: "ACV vs RCV",
    text: "ACV generally refers to actual cash value after depreciation. RCV generally refers to replacement cost value. Your policy language controls how and when funds may be released.",
  },
  {
    title: "Deductibles",
    text: "Your deductible is the portion of the covered loss you are responsible for under your policy. Oklahoma homeowners should understand whether their deductible is a flat amount or a percentage.",
  },
  {
    title: "Depreciation",
    text: "Depreciation is the amount held back for age, condition, or policy terms. Some depreciation may be recoverable after approved work is completed, depending on the policy.",
  },
  {
    title: "Adjuster meetings",
    text: "The adjuster meeting documents the carrier's view of the damage. Clear photos, roof observations, and a calm explanation of storm timing can help the conversation stay organized.",
  },
  {
    title: "Supplements",
    text: "A supplement is a request for additional covered scope or pricing when something was missed or changed. Supplements should be documented clearly and tied to real work needed.",
  },
  {
    title: "Why homeowners should understand their policy",
    text: "Policy details affect deductibles, exclusions, matching, code items, depreciation, and payment timing. Reading your policy and asking your carrier direct questions can prevent surprises.",
  },
];

export default function InsuranceClaimGuidePage() {
  return (
    <main>
      <PageHero
        eyebrow="Insurance roof claim help Oklahoma"
        title="Insurance Claim Guide for Roof Damage"
        description="Understand common roof claim terms before you make decisions after hail, wind, or leak damage."
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
            <article className="info-block">
              <h2>Important disclaimer</h2>
              <p>
                This website provides general information and does not replace advice from your
                insurance carrier, attorney, or licensed professional.
              </p>
            </article>
          </div>
          <LeadForm title="Ask About a Roof Claim" />
        </div>
      </section>
    </main>
  );
}
