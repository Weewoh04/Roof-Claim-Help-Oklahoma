import { contact, navItems } from "@/lib/site";
import { PrimaryCta } from "./Buttons";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">
          Roof Claim Help Oklahoma
          <span>Storm roof guidance</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="button light" href={contact.phoneHref}>
            {contact.phone}
          </a>
          <PrimaryCta />
        </div>
      </div>
    </header>
  );
}
