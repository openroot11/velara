import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Cta } from "@/components/ui/Cta";
import { cn } from "@/lib/cn";

function PlusToggle({ open }: { open: boolean }) {
  return (
    <span className="relative grid h-6 w-6 shrink-0 place-items-center text-accent-deep" aria-hidden>
      <span className="absolute h-[1.6px] w-4 bg-current" />
      <span className={cn("absolute h-4 w-[1.6px] bg-current transition-transform duration-300 ease-soft", open && "rotate-90 opacity-0")} />
    </span>
  );
}

/** Menú móvil a pantalla completa — acordeón, como navegar entre carpetas. */
export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[90] flex flex-col overflow-y-auto bg-paper pt-[68px] lg:hidden"
        >
          <div className="shell flex flex-col py-4">
            {mainNav.map((item, i) => {
              const hasChildren = Boolean(item.columns?.length);
              const isOpen = expanded === item.label;
              return (
                <div key={item.label} className="border-b border-smoke-line">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.to ?? "#"}
                      onClick={onClose}
                      className="flex items-baseline gap-3 py-4 font-display text-2xl text-ink"
                    >
                      <span className="text-[0.7rem] font-sans font-semibold text-accent-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        aria-label={isOpen ? `Cerrar ${item.label}` : `Abrir ${item.label}`}
                        aria-expanded={isOpen}
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        className="p-2"
                      >
                        <PlusToggle open={isOpen} />
                      </button>
                    )}
                  </div>

                  <AnimatePresence initial={false}>
                    {hasChildren && isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-5 pb-5 pl-7">
                          {item.columns?.map((col) => (
                            <div key={col.label} className="flex flex-col gap-2">
                              {col.to ? (
                                <Link
                                  to={col.to}
                                  onClick={onClose}
                                  className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-accent-deep"
                                >
                                  {col.label}
                                </Link>
                              ) : (
                                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-smoke">
                                  {col.label}
                                </span>
                              )}
                              {col.links.map((l) => (
                                <Link
                                  key={l.to}
                                  to={l.to}
                                  onClick={onClose}
                                  className="text-[0.98rem] text-ink-700"
                                >
                                  {l.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                          {item.feature?.map((f) => (
                            <Link
                              key={f.to + f.label}
                              to={f.to}
                              onClick={onClose}
                              className="text-[0.95rem] font-semibold text-ink"
                            >
                              {f.label} →
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="shell mt-auto flex flex-col gap-4 py-8">
            <Cta href={site.cta.href} variant="teal" className="w-full" onClick={onClose}>
              {site.cta.label}
            </Cta>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.82rem] text-smoke-dark">
              <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="link-underline">
                WhatsApp {site.contact.whatsappDisplay}
              </a>
              <a href={site.contact.emailHref} className="link-underline">
                {site.contact.email}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
