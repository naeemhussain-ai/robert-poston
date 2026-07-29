import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, BookOpen, Music2 } from "lucide-react";
import { nav, site, socials } from "@/data/content";
import { GoldDivider } from "@/components/lux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const icons = [Instagram, Facebook, Music2, BookOpen];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-midnight px-6 pb-12 pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-[0.65rem] tracking-[0.2em] text-gold">
              {site.monogram}
            </span>
            <span className="display text-2xl">{site.author}</span>
          </div>
          {/* EDIT: Replace footer tagline */}
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{site.tagline}</p>
          <div className="mt-8 flex gap-3">
            {socials.map((s, i) => {
              const Icon = icons[i % icons.length];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/70 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:text-gold"
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
          <p className="eyebrow mb-4">The Reader Circle</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {/* EDIT: Replace newsletter blurb */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
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
        © {new Date().getFullYear()} {site.author} · {site.bookTitle}
      </p>
    </footer>
  );
}
