import type { Metadata } from "next";
import { contact } from "@/lib/site";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Free Roof Inspection",
  description:
    "Request a free Oklahoma roof inspection for hail damage, wind damage, roof leaks, or storm-related insurance roof claim questions.",
};

export default function FreeRoofInspectionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Request help directly"
        title="Request a Free Roof Check"
        description="Send your roof concern to Morgan Valentine for local Oklahoma storm damage guidance, documentation help, and next-step clarity."
      />
      <section className="section white">
        <div className="container split">
          <div>
            <p className="eyebrow">Direct contact</p>
            <h2>All inquiries come straight to Morgan.</h2>
            <p>
              Call, text, email, or use the form. Include the storm date if you know it, the city,
              what you are seeing, and whether water is actively entering the home.
            </p>
            <p>
              <strong>Phone:</strong> <a href={contact.phoneHref}>{contact.phone}</a>
              <br />
              <strong>Email:</strong> <a href={contact.emailHref}>{contact.email}</a>
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
