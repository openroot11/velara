import { reportWhatsAppClick } from "@/lib/googleAdsConversion";
import { WHATSAPP_DEFAULT_MESSAGE, whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppButton";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={reportWhatsAppClick}
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-4 right-4 z-[90] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
