export const CONTACT_ENDPOINT = '/api/contact';

export const OFFICE = {
  label: 'GK Immigration, Bhawanigarh',
  address: 'GK Immigration, Near SBI Bank, New Bus Stand, Bhawanigarh, Punjab 148026',
  // TODO(project-owner): Confirm the final office pin. These coordinates target New Bus Stand Bhawanigarh.
  coordinates: [30.26479, 76.04449],
  phone: '+91-84370-26369',
  email: 'info@gkimmigration.com',
  whatsappUrl: 'https://wa.me/918437026369',
};

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Visa', href: '/visas' },
  { label: 'Packages', href: '/destinations' },
  { label: 'Travel Insurence', href: '/insurance' },
  { label: 'Contact Us', href: '/contact' },
];

export const HERO_IMAGES = {
  home: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2200',
  services: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2200',
  visas: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=2200',
  destinations: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2200',
  insurance: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=2200',
  contact: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2200',
};

export const visaTypes = ['Tourist Visa', 'Visitor Visa', 'Study Visa', 'SOWP', 'Business Visa'];
export const serviceTypes = ['Visa Services', 'Air Tickets', 'Tour Packages', 'Travel Insurance'];
