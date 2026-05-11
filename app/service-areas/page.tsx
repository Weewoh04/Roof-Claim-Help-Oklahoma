import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Oklahoma roof inspection, hail damage help, wind damage documentation, and storm-related roof guidance across OKC, Edmond, Yukon, Mustang, Moore, Norman, and nearby cities.",
};

export default function ServiceAreasPage() {
  return (
    <main>
      <PageHero
        eyebrow="Local Oklahoma service areas"
        title="Storm Damage Roof Help Near You"
        description="Roof inspections, documentation support, leak guidance, and insurance claim education for homeowners across central Oklahoma."
      />
      <section className="section">
        <div className="container">
          <div className="grid three">
            {serviceAreas.map((city) => (
              <article className="city-card" key={city}>
                <h3>{city}</h3>
                <p>
                  Roof inspections, hail damage help, wind damage documentation, and storm-related
                  roof guidance in {city}, Oklahoma.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section white">
        <div className="container split">
          <div>
            <p className="eyebrow">Oklahoma storm response</p>
            <h2>Request guidance even if you are not sure damage is visible.</h2>
            <p>
              Oklahoma storms can create roof issues that are hard to spot from the ground. A free
              roof check can help document concerns and clarify next steps.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
