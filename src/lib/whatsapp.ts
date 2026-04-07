const WHATSAPP_PHONE = "21625252050";

export const DEFAULT_WHATSAPP_MESSAGE = "Bonjour, je souhaite commander de la glace.";

export const buildWhatsAppUrl = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
