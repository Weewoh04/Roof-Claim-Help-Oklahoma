import type { Metadata } from "next";
import { CtaRow } from "@/components/Buttons";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your roof check request was submitted to Roof Claim Help Oklahoma.",
};

export default function ThankYouPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Request received</p>
          <h1>Thank you. Morgan has your roof request.</h1>
          <p>
            Your information was submitted. If this is an active leak or urgent storm issue, call
            or text Morgan directly at <a href={contact.phoneHref}>{contact.phone}</a>.
          </p>
          <CtaRow light />
        </div>
      </section>
      <section className="section white">
        <div className="container">
          <div className="section-header">
            <h2>What to do while you wait</h2>
            <p>
              Keep photos of the storm damage, save any temporary repair receipts, and avoid
              climbing on a wet or damaged roof. If insurance is involved, keep your claim number
              and adjuster appointment details handy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
