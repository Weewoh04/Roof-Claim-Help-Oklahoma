import { NextRequest, NextResponse } from "next/server";
import { contact } from "@/lib/site";

const resendEndpoint = "https://api.resend.com/emails";

function field(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function leadRows(lead: Record<string, string>) {
  return Object.entries(lead)
    .map(
      ([label, value]) =>
        `<tr><th style="text-align:left;padding:8px 12px;border-bottom:1px solid #e5e7eb;background:#f8fafc;">${escapeHtml(
          label,
        )}</th><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(
          value || "Not provided",
        )}</td></tr>`,
    )
    .join("");
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  if (field(formData, "companyWebsite")) {
    return NextResponse.redirect(new URL("/thank-you", request.url), 303);
  }

  const lead = {
    Name: field(formData, "name"),
    Phone: field(formData, "phone"),
    Email: field(formData, "email"),
    "Property Address": field(formData, "propertyAddress"),
    City: field(formData, "city"),
    "Insurance Company": field(formData, "insuranceCompany"),
    "Type of Issue": field(formData, "issueType"),
    Message: field(formData, "message"),
    "Best Time to Call": field(formData, "bestTimeToCall"),
  };

  if (!lead.Name || !lead.Phone) {
    return NextResponse.redirect(new URL("/free-roof-inspection?error=missing", request.url), 303);
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return NextResponse.redirect(new URL("/free-roof-inspection?error=email", request.url), 303);
  }

  const toEmail = process.env.LEAD_TO_EMAIL || contact.email;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "Roof Claim Help Oklahoma <onboarding@resend.dev>";

  const text = Object.entries(lead)
    .map(([label, value]) => `${label}: ${value || "Not provided"}`)
    .join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#17212f;line-height:1.5;">
      <h1 style="color:#10243e;">New Roof Claim Help Oklahoma Lead</h1>
      <p>A homeowner submitted the free roof check form.</p>
      <table style="border-collapse:collapse;width:100%;max-width:720px;border:1px solid #e5e7eb;">
        ${leadRows(lead)}
      </table>
      <p style="margin-top:20px;color:#617085;font-size:14px;">
        Reply directly to the homeowner if they provided an email address, or call/text the phone number above.
      </p>
    </div>
  `;

  const payload: Record<string, unknown> = {
    from: fromEmail,
    to: [toEmail],
    subject: `New roof check request from ${lead.Name}`,
    html,
    text,
  };

  if (isEmail(lead.Email)) {
    payload.reply_to = lead.Email;
  }

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend email failed:", errorText);
    return NextResponse.redirect(new URL("/free-roof-inspection?error=email", request.url), 303);
  }

  return NextResponse.redirect(new URL("/thank-you", request.url), 303);
}
