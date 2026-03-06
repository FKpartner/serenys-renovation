export function buildWhatsAppLink(message: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "33600000000";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}