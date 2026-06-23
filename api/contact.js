/* eslint-disable no-undef */
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function sanitize(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .trim();
}

function isValidEmail(email = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, phone, email, service, message, formType } = req.body || {};

    if (!name?.trim() || !phone?.trim() || !service?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name, phone, and service are required.",
      });
    }

    if (email && !isValidEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address.",
      });
    }

    const safeName = sanitize(name);
    const safePhone = sanitize(phone);
    const safeEmail = sanitize(email || "Not provided");
    const safeService = sanitize(service);
    const safeMessage = sanitize(message || "No message provided");
    const safeFormType = sanitize(formType || "General");

    const html = `
  <div style="margin:0; padding:0; background:#f9f9f9; font-family:Arial, Helvetica, sans-serif;">
    <div style="max-width:680px; margin:0 auto; padding:24px;">
      <div style="background:#ffffff; border:1px solid #c4c6d3; border-radius:18px; overflow:hidden;">
        
        <div style="background:#002155; color:#ffffff; padding:26px 28px;">
          <h2 style="margin:0; font-size:24px; line-height:1.3; font-weight:700;">
            New GK Immigration Inquiry
          </h2>
          <p style="margin:8px 0 0; color:#d9e2ff; font-size:14px;">
            A new lead has submitted the ${safeFormType} form.
          </p>
        </div>

        <div style="padding:26px 28px; color:#1a1c1c; background:#ffffff;">
          <div style="background:#f3f3f3; border:1px solid #e2e2e2; border-radius:14px; padding:18px;">
            
            <p style="margin:0 0 14px;">
              <span style="display:block; color:#434651; font-size:13px;">Name</span>
              <strong style="color:#002155; font-size:16px;">${safeName}</strong>
            </p>

            <p style="margin:0 0 14px;">
              <span style="display:block; color:#434651; font-size:13px;">Phone</span>
              <strong style="color:#002155; font-size:16px;">${safePhone}</strong>
            </p>

            <p style="margin:0 0 14px;">
              <span style="display:block; color:#434651; font-size:13px;">Email</span>
              <strong style="color:#002155; font-size:16px;">${safeEmail}</strong>
            </p>

            <p style="margin:0;">
              <span style="display:block; color:#434651; font-size:13px;">Service</span>
              <strong style="color:#b02f00; font-size:16px;">${safeService}</strong>
            </p>

          </div>

          <div style="margin-top:22px;">
            <div style="display:inline-block; background:#ffdbd1; color:#541100; padding:7px 12px; border-radius:999px; font-size:13px; font-weight:700;">
              Message
            </div>

            <div style="margin-top:12px; background:#eeeeee; color:#1a1c1c; padding:16px; border-radius:12px; border:1px solid #c4c6d3; line-height:1.6; font-size:15px;">
              ${safeMessage}
            </div>
          </div>
        </div>

        <div style="background:#eeeeee; border-top:1px solid #e2e2e2; padding:16px 28px; text-align:center;">
          <p style="margin:0; color:#747782; font-size:12px;">
            This email was sent from the GK Immigration website ${safeFormType} form.
          </p>
        </div>

      </div>
    </div>
  </div>
`;

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email || undefined,
      subject: `New inquiry from ${safeName} - ${safeService}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return res
        .status(500)
        .json({ success: false, message: "Email failed to send." });
    }

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
}
