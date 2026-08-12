import { Link } from "@/lib/router";
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { nav, site, socials } from "@/data/content";
import { GoldDivider } from "@/components/lux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { withBase } from "@/lib/asset-path";

const icons = [Instagram, Facebook, Youtube, Mail];

export function SiteFooter() {
  return (
    <footer className="surface-midnight relative overflow-hidden border-t border-border px-6 pb-12 pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <img
            src={withBase("/robert-poston-logo.png")}
            alt={site.author}
            className="h-12 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{site.tagline}</p>
          <div className="mt-8 flex gap-3">
            {socials.map((s, i) => {
              const Icon = icons[i % icons.length];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/70 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <nav className="flex flex-col gap-4">
          <p className="eyebrow mb-2">Explore</p>
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="lux-underline w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div>
          <p className="eyebrow mb-4">Stay Connected</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Updates about the book, gallery additions, and future author news can live here once the final mailing flow is connected.
          </p>
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input type="email" required placeholder="Your email" aria-label="Email address" className="rounded-full" />
            <Button type="submit" className="rounded-full px-7 text-[0.7rem] uppercase tracking-[0.22em]">
              Join
            </Button>
          </form>
        </div>
      </div>

      <GoldDivider className="relative z-10 mt-20 max-w-2xl" />

      <p className="relative z-10 mt-8 text-center text-xs tracking-[0.18em] text-muted-foreground">
        &copy; {new Date().getFullYear()} {site.author} · {site.bookTitle}
      </p>
    </footer>
  );
}
