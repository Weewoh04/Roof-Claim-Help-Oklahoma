import type { Metadata } from "next";
import { CtaRow, PrimaryCta, TextCta } from "@/components/Buttons";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Oklahoma Storm Damage Roof Help",
  description:
    "Get Oklahoma hail damage roof help, OKC storm damage roof inspection guidance, roof leak help Oklahoma homeowners can use, and insurance roof claim help Oklahoma.",
};

const educationCards = [
  {
    title: "Hail Damage Signs",
    icon: "H",
    text: "Bruised shingles, granule loss, dented vents, marked gutters, and soft spots can all point to hail impact.",
    href: "/hail-damage-help",
  },
  {
    title: "Wind Damage Signs",
    icon: "W",
    text: "Missing, lifted, creased, or loose shingles can let water travel under the roof system after a storm.",
    href: "/wind-damage-help",
  },
  {
    title: "Roof Leak Steps",
    icon: "L",
    text: "Protect valuables, catch water safely, document everything, and avoid climbing on a wet roof.",
    href: "/roof-leak-emergency-guide",
  },
  {
    title: "Insurance Claim Basics",
    icon: "C",
    text: "Understand ACV, RCV, depreciation, deductibles, adjuster meetings, and supplements before decisions stack up.",
    href: "/insurance-claim-guide",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Oklahoma homeowner roof guidance</p>
            <h1>Oklahoma Storm Damage Roof Help</h1>
            <p>
              Hail, wind, leaks, and insurance claim confusion — get local guidance before the
              damage gets worse.
            </p>
            <div className="hero-actions">
              <PrimaryCta />
              <TextCta className="ghost" />
            </div>
          </div>
        </div>
      </section>

      <section className="alert-bar">
        <div className="container alert-inner">
          <span>
            Active leak or storm damage? Document it, prevent further damage, and request help fast.
          </span>
          <CtaRow light />
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Start with what you can see</p>
            <h2>Storm damage can be confusing from the ground.</h2>
            <p>
              These homeowner guides explain what to look for, what to document, and when an
              Oklahoma roof inspection makes sense after hail, wind, or a leak.
            </p>
          </div>
          <div className="grid four">
            {educationCards.map((card) => (
              <a className="card" href={card.href} key={card.title}>
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container trust-layout">
          <div>
            <p className="eyebrow">Helpful before salesy</p>
            <h2>Built to help Oklahoma homeowners make calmer roof decisions.</h2>
            <p>
              Roof Claim Help Oklahoma helps you understand storm damage, documentation, adjuster
              meetings, ACV vs RCV, depreciation, supplements, and practical next steps after a
              storm. The goal is simple: know what you are looking at before the damage spreads or
              the claim process gets ahead of you.
            </p>
            <ul className="trust-list">
              <li>Local guidance for hail and wind damage roof inspection questions</li>
              <li>Plain-English insurance roof claim help Oklahoma homeowners can understand</li>
              <li>Practical leak and storm response steps you can take right away</li>
            </ul>
          </div>
          <div className="callout">
            <h3>Unsure if your roof needs attention?</h3>
            <p>
              A free roof check can help you document visible concerns, understand urgency, and
              decide what to do next without guessing from the driveway.
            </p>
            <CtaRow light />
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container split">
          <div>
            <p className="eyebrow">Direct lead capture</p>
            <h2>Send your roof concern directly to Morgan.</h2>
            <p>
              Use the form to request an OKC storm damage roof inspection, roof leak help Oklahoma
              homeowners need after heavy rain, or wind damage roof inspection guidance. Your lead
              details are structured so this can connect cleanly to Formspree, Resend, Nodemailer,
              or a CRM later.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
