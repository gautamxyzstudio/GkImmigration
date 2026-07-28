const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_EMAILJS_PRIVATE_KEY;

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

    const payload = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      accessToken: PRIVATE_KEY,
      template_params: {
        name: safeName,
        phone: safePhone,
        email: safeEmail,
        service: safeService,
        message: safeMessage,
        formType: safeFormType,
        form_type: safeFormType,
        from_name: safeName,
        from_email: safeEmail,
        reply_to: safeEmail,
      },
    };

    const emailjsRes = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!emailjsRes.ok) {
      const errorText = await emailjsRes.text();
      console.error("EmailJS API Error:", errorText);
      return res
        .status(500)
        .json({ success: false, message: "Email failed to send via EmailJS." });
    }

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully via EmailJS." });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
}
