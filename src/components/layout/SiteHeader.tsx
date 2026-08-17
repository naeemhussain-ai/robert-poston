import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu } from "lucide-react";
import { nav, site } from "@/data/content";
import { Magnetic } from "@/components/lux";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { withBase } from "@/lib/asset-path";
import { Link, useCurrentPath } from "@/lib/router";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useCurrentPath();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-midnight/90 border-b border-white/10 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[88rem] items-center justify-between px-4 sm:px-6 transition-all duration-700",
          scrolled ? "h-16" : "h-20 sm:h-24",
        )}
      >
        <Link to="/" className="group flex flex-col items-start justify-center">
          <img
            src={withBase("/robert-poston-logo.png")}
            alt={site.author}
            className="h-9 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-[0.72rem] uppercase tracking-[0.22em] transition-colors duration-500",
                pathname === item.to
                  ? "text-primary"
                  : "text-white/78 hover:text-gold",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Magnetic className="hidden sm:inline-block">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-xl border-gold/60 bg-transparent px-5 text-[0.68rem] uppercase tracking-[0.18em] text-gold hover:bg-gold/10 hover:text-gold sm:px-6 sm:text-[0.72rem]"
            >
              <Link to="/">Get Your Copy</Link>
            </Button>
          </Magnetic>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
                  "border-white/30 text-white",
                )}
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] border-border surface-ivory px-8 sm:w-96">
              <AnimatePresence>
                {open ? (
                  <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-20 flex flex-col gap-8"
                  >
                    {nav.map((item, i) => (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.09, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link to={item.to} className="display text-4xl text-foreground">
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <Button asChild className="mt-6 w-full rounded-full">
                        <Link to="/">Get Your Copy</Link>
                      </Button>
                    </motion.div>
                  </motion.nav>
                ) : null}
              </AnimatePresence>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
