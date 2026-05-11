import { contact } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="mobile-cta" aria-label="Mobile quick contact">
      <a className="button primary" href="/free-roof-inspection">
        Free Roof Check
      </a>
      <a className="button secondary" href={contact.textHref}>
        Text Morgan
      </a>
    </div>
  );
}
