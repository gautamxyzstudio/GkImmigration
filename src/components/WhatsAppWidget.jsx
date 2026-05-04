import { MessageCircle } from 'lucide-react';
import { OFFICE } from '../utils/constants.js';

export function WhatsAppWidget() {
  return (
    <a
      href={OFFICE.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105 md:flex"
      aria-label="Chat with GK Immigration on WhatsApp"
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}
