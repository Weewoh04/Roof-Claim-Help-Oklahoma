export function LeadForm({ title = "Request a Free Roof Check" }: { title?: string }) {
  return (
    <div className="form-panel" id="contact">
      <h2>{title}</h2>
      <p className="form-note">
        Share what happened and Morgan will follow up directly. Photos can help document timing,
        location, and visible damage.
      </p>
      {/*
        Connect this form to an email service before launch.
        Options:
        - Formspree: set action="https://formspree.io/f/YOUR_ID" and method="POST"
        - Resend: POST to a Next.js route handler that calls Resend's email API
        - Nodemailer: POST to a server route that sends SMTP mail to morgan@triplediamondok.com
        - Vercel Forms or another lead CRM can be added here later
      */}
      <form className="lead-form">
        <div className="form-grid">
          <label>
            Name
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            Property Address
            <input name="propertyAddress" autoComplete="street-address" />
          </label>
          <label>
            City
            <input name="city" autoComplete="address-level2" />
          </label>
          <label>
            Insurance Company
            <input name="insuranceCompany" />
          </label>
          <label>
            Type of Issue
            <select name="issueType" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Hail</option>
              <option>Wind</option>
              <option>Leak</option>
              <option>Old Roof</option>
              <option>Not Sure</option>
            </select>
          </label>
          <label>
            Best Time to Call
            <input name="bestTimeToCall" placeholder="Morning, afternoon, evening..." />
          </label>
        </div>
        <label>
          Message
          <textarea name="message" placeholder="Tell me what happened, when the storm came through, and what you are seeing." />
        </label>
        <div className="file-placeholder">
          Optional photo upload placeholder. Add a file input after choosing your form/email
          provider so attachments are handled correctly.
        </div>
        <button className="button primary" type="submit">
          Send My Roof Check Request
        </button>
        <p className="form-note">
          By submitting, you are asking to be contacted about your roof. This form is ready for
          Formspree, Resend, Nodemailer, or another email service connection.
        </p>
      </form>
    </div>
  );
}
