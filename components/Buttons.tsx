import { contact } from "@/lib/site";

export function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a className={`button primary ${className}`} href="/free-roof-inspection">
      Request a Free Roof Check
    </a>
  );
}

export function TextCta({ className = "" }: { className?: string }) {
  return (
    <a className={`button secondary ${className}`} href={contact.textHref}>
      Text Me About My Roof
    </a>
  );
}

export function CtaRow({ light = false }: { light?: boolean }) {
  return (
    <div className="cta-row">
      <PrimaryCta />
      <a className={`button ${light ? "ghost" : "light"}`} href={contact.phoneHref}>
        Call {contact.phone}
      </a>
    </div>
  );
}
