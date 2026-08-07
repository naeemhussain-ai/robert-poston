import { Link } from "@/lib/router";
import { motion, useReducedMotion } from "motion/react";
import { BookOpen, Headphones, Tablet, BookMarked } from "lucide-react";
import {
  GoldDivider,
  Magnetic,
  Orbs,
  Parallax,
  Particles,
  QuoteMark,
  Reveal,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/lux";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/asset-path";
import { books, formats } from "@/data/content";
import { cn } from "@/lib/utils";
import book2 from "@/assets/book-collection-2.jpg";
import book3 from "@/assets/book-collection-3.jpg";

const bookImages = [withBase("/book.png"), book2, book3];

const formatIcons = [BookMarked, BookOpen, Tablet, Headphones];

export function FormatsSection({
  eyebrow = "Reading Experience",
  title = "Choose how you meet the story",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <Section className="surface-ivory">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <Stagger className="mt-20 grid gap-8 sm:grid-cols-2">
        {formats.map((f, i) => {
          const Icon = formatIcons[i % formatIcons.length];
          return (
            <StaggerItem key={f.name}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-midnight p-10 text-white transition-all duration-700 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_30px_70px_-30px_oklch(0.1_0.03_260/0.5)]">
                <div className="absolute -right-8 -top-8 flex h-28 w-28 items-center justify-center rounded-full border border-gold/10 text-gold/10">
                  <Icon className="h-14 w-14" />
                </div>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="display mt-8 text-3xl">{f.name}</h3>
                  <div className="hairline my-5" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-muted-foreground">from</span>
                    <span className="display text-2xl text-gold">{f.price}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

export function QuoteBlock({ text, attribution }: { text: string; attribution: string }) {
  return (
    <Section className="surface-midnight grain">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <Particles />
      <div className="relative mx-auto max-w-4xl text-center">
        <QuoteMark className="absolute -top-24 left-1/2 -translate-x-1/2 text-[14rem] leading-none" />
        <Reveal>
          <p className="display text-3xl italic leading-[1.25] sm:text-4xl lg:text-5xl">{text}</p>
          <GoldDivider className="mt-12" />
          <p className="mt-8 text-[0.7rem] uppercase tracking-[0.38em] text-muted-foreground">
            {attribution}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export function TimelineSection({
  eyebrow,
  title,
  items,
  className,
}: {
  eyebrow: string;
  title: string;
  items: { step?: string; year?: string; title: string; body: string }[];
  className?: string;
}) {
  return (
    <Section className={cn("bg-background overflow-hidden", className)}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="relative mx-auto mt-24 max-w-6xl">
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/40 via-gold/10 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
          />
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((item, i) => {
            const stepNum = item.step ?? String(i + 1);
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <motion.div
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border border-white/10 bg-midnight p-10 transition-all duration-700 hover:-translate-y-2 hover:border-gold/50",
                    i % 2 === 1 ? "sm:mt-16" : "",
                  )}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <div className="absolute -right-6 -top-6 flex h-24 w-24 items-center justify-center rounded-full border border-gold/10">
                    <span className="display text-5xl font-bold tracking-tight text-gold/15">
                      {stepNum}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-lg font-semibold tracking-wider text-gold">
                        {stepNum}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
                    </div>
                    <h3 className="display mt-8 text-3xl text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    <div className="mt-8 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-gold/60">
                      <span>Movement {stepNum}</span>
                      <span className="h-px w-8 bg-gold/30" />
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function CtaBanner({
  headline,
  cta,
  to,
  href,
}: {
  headline: string;
  cta: string;
  to?: string;
  href?: string;
}) {
  return (
    <Section className="surface-midnight grain text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <Particles />
      <Reveal className="relative mx-auto max-w-3xl">
        <h2 className="display text-4xl sm:text-6xl lg:text-7xl">{headline}</h2>
        <GoldDivider className="mt-10" />
        <div className="mt-12 flex justify-center">
          <Magnetic>
            <Button asChild size="lg" className="rounded-full px-10 text-[0.7rem] uppercase tracking-[0.28em]">
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer">{cta}</a>
              ) : (
                <Link to={to!}>{cta}</Link>
              )}
            </Button>
          </Magnetic>
        </div>
      </Reveal>
    </Section>
  );
}

export function BookMockup({ className, floating = true }: { className?: string; floating?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn("relative", className)}
      animate={reduce || !floating ? undefined : { y: [0, -18, 0], rotateZ: [-1.2, 1.2, -1.2] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      style={{ perspective: 1200 }}
    >
      <div
        aria-hidden
        className="absolute inset-6 rounded-[2rem] bg-gold/25 blur-[80px]"
        style={{ boxShadow: "var(--shadow-glow)" }}
      />
      <img
        src={withBase("/book.png")}
        alt="Hardcover edition of The Spirit of Love"
        width={1200}
        height={1504}
        className="relative w-full rounded-[1.75rem] shadow-[var(--shadow-lux)]"
      />
    </motion.div>
  );
}

export function BookCollectionSection({
  eyebrow = "All Books",
  title = "The collection",
  className,
}: {
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  return (
    <Section className={cn("bg-background", className)}>
      <Orbs className="opacity-60" />
      <SectionHeading eyebrow={eyebrow} title={title} />
      <Stagger className="mt-20 grid gap-10 lg:grid-cols-3">
        {books.map((b, i) => (
          <StaggerItem key={b.title}>
            <div className="group h-full overflow-hidden rounded-3xl border border-border transition-all duration-700 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_30px_80px_-50px_oklch(0.7_0.12_85/0.3)]">
              <div className="overflow-hidden">
                <img
                  src={bookImages[i]}
                  alt={b.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <p className="eyebrow">{b.year} · {b.tag}</p>
                <h3 className="display mt-3 text-3xl">{b.title}</h3>
                <div className="hairline my-5" />
                <p className="text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                <Link
                  to="/books/$slug"
                  params={{ slug: b.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold/80"
                >
                  Read More
                  <span aria-hidden className="text-base leading-none">→</span>
                </Link>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function GallerySection({
  images,
  eyebrow,
  title,
}: {
  images: { src: string; alt: string }[];
  eyebrow: string;
  title: string;
}) {
  return (
    <Section className="surface-pearl">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <Parallax
            key={img.src}
            amount={i % 2 === 0 ? 26 : -18}
            className={cn(i % 3 === 0 ? "lg:row-span-2" : "")}
          >
            <Reveal delay={i * 0.06}>
              <div className="group overflow-hidden rounded-2xl shadow-[0_30px_60px_-45px_oklch(0.2_0.03_262/0.7)]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110",
                    i % 3 === 0 ? "h-[34rem]" : "h-64",
                  )}
                />
              </div>
            </Reveal>
          </Parallax>
        ))}
      </div>
    </Section>
  );
}
