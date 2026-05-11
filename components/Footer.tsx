import { contact, serviceAreas } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Roof Claim Help Oklahoma</h3>
          <p>
            Local homeowner education for storm damage, roof leaks, hail and wind documentation,
            and insurance roof claim questions.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>{contact.name}</p>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
        </div>
        <div>
          <h3>Service Areas</h3>
          <p>
            {serviceAreas.map((area) => (
              <a href="/service-areas" key={area}>
                {area}
              </a>
            ))}
          </p>
          <p className="disclaimer">
            This website provides general information and does not replace advice from your
            insurance carrier, attorney, or licensed professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
