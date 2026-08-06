export const CONTACT_ENDPOINT = "/api/contact";

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  privateKey: import.meta.env.VITE_EMAILJS_PRIVATE_KEY,
};

export const OFFICE = {
  label: "GK Immigrations, Bhawanigarh",
  address:
    "GK Immigrations, Near SBI Bank, New Bus Stand, Bhawanigarh, Punjab 148026",
  // TODO(project-owner): Confirm the final office pin. These coordinates target New Bus Stand Bhawanigarh.
  coordinates: [30.26479, 76.04449],
  phone: "+91-84370-26369",
  email: "info@gkimmigration.com",
  whatsappUrl: "https://wa.me/918437026369",
  socials: {
    facebook: "https://www.facebook.com/share/1BhdB9K636/",
    instagram: "https://www.instagram.com/gkimmigrations?igsh=bXBibmN1ZTQxNXoy",
    threads: "https://www.threads.com/@gkimmigrations",
    twitter: "https://x.com/Immigrationgk",
    youtube: "https://youtube.com/@gkimmigration?si=gH4xgyih-HfzajFu",
    sharechat: "https://sharechat.com/profile/4031308681?d=n",
    snapchat: "https://www.snapchat.com/add/gk_immigrations?share_id=Y_-D_VG8i_k&locale=en-IN",
  },
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Visa", href: "/visas" },
  // { label: 'Packages', href: '/destinations' },
  { label: "Travel Insurance", href: "/insurance" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const HERO_IMAGES = {
  home: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2200",
  services:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2200",
  visas:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=2200",
  destinations:
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2200",
  gallery:
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2200",
  insurance:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=2200",
  contact:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2200",
};

export const visaTypes = [
  "Tourist Visa",
  "Visitor Visa",
  "Study Visa",
  "Spouse Visa",
  "Business Visa",
];
export const serviceTypes = [
  "Visa Services",
  "Air Tickets",
  "Travel Insurance",
];
