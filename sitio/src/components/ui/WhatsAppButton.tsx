import { type ReactNode } from "react";
import { reportWhatsAppClick } from "@/lib/googleAdsConversion";
import { WHATSAPP_DEFAULT_MESSAGE, whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.51A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.3 14.96l-.3-.19-3.06.9.92-2.98-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.2 4.2c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.15 0 1.26.92 2.49 1.05 2.66.13.17 1.78 2.84 4.4 3.87 2.18.86 2.62.69 3.1.65.47-.04 1.52-.62 1.73-1.22.21-.6.21-1.11.15-1.22-.06-.11-.23-.17-.49-.3-.26-.13-1.52-.75-1.76-.84-.23-.09-.4-.13-.58.13-.17.26-.66.84-.81 1.01-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44h-.5Z" />
    </svg>
  );
}

interface Props {
  children?: ReactNode;
  /** Mensaje precargado; por defecto, uno genérico. */
  message?: string;
  className?: string;
  icon?: boolean;
}

/** Botón «Cotizar por WhatsApp». Reporta la conversión a Google Ads al hacer clic. */
export function WhatsAppButton({ children = "Cotizar por WhatsApp", message, className, icon = true }: Props) {
  return (
    <a
      href={whatsappUrl(message ?? WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={reportWhatsAppClick}
      className={cn("btn btn-teal", className)}
    >
      {icon && <WhatsAppIcon className="h-[1.1em] w-[1.1em]" />}
      <span>{children}</span>
    </a>
  );
}
