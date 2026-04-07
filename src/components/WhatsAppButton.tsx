import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/21625252050?text=" + encodeURIComponent("Bonjour, je souhaite commander de la glace.");

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] font-heading font-bold px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
    aria-label="WhatsApp"
  >
    <MessageCircle className="w-5 h-5" />
    <span className="hidden sm:inline">WhatsApp</span>
  </a>
);

export default WhatsAppButton;
