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

const bookImages = [withBase("/when-one-door-opens-cover.png"), book2, book3];

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
    <Section className="surface-midnight">
      <div className="relative mx-auto max-w-4xl text-center">
        <QuoteMark className="absolute -top-20 left-1/2 -translate-x-1/2 text-[10rem] leading-none sm:-top-24 sm:text-[14rem]" />
        <Reveal>
          <p className="display text-3xl italic leading-[1.25] text-gold sm:text-4xl lg:text-5xl">{text}</p>
          <GoldDivider className="mt-12" />
          <p className="mt-8 text-[0.7rem] uppercase tracking-[0.38em] text-white/55">
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
      <div className="mx-auto max-w-[88rem]">
      <SectionHeading eyebrow={eyebrow} title={title} className="[&_h2]:text-gold" />
      <div className="relative mx-auto mt-20 max-w-6xl">
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/40 via-gold/10 to-transparent"
          />
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((item, i) => {
            const stepNum = item.step ?? String(i + 1);
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div
                  className={cn(
                    "group relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,25,37,0.92),rgba(8,17,27,0.98))] p-8 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.8)] transition-all duration-700 hover:-translate-y-2 hover:border-primary/45 sm:p-10",
                    i % 2 === 1 ? "sm:mt-16" : "",
                  )}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  <div className="absolute -right-6 -top-6 flex h-24 w-24 items-center justify-center rounded-full border border-gold/10">
                    <span className="display text-5xl font-bold tracking-tight text-gold/15">
                      {stepNum}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-semibold tracking-wider text-primary">
                        {stepNum}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                    </div>
                    <h3 className="display mt-8 text-3xl text-gold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>
                    <div className="mt-8 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-primary/70">
                      <span>Movement {stepNum}</span>
                      <span className="h-px w-8 bg-primary/30" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
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
      <Reveal className="relative mx-auto max-w-[88rem]">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-10 lg:px-16">
        <h2 className="display text-4xl text-gold sm:text-6xl lg:text-7xl">{headline}</h2>
        <GoldDivider className="mt-10" />
        <div className="mt-12 flex justify-center">
          <Magnetic>
            <Button asChild size="lg" className="rounded-xl bg-primary px-10 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground hover:bg-primary/90">
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer">{cta}</a>
              ) : (
                <Link to={to!}>{cta}</Link>
              )}
            </Button>
          </Magnetic>
        </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function BookMockup({ className, floating = true }: { className?: string; floating?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn("relative mx-auto w-full max-w-[25rem] lg:max-w-[28rem]", className)}
      animate={reduce || !floating ? undefined : { y: [0, -24, 0], rotateZ: [-1, 1, -1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{ perspective: 1200 }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 scale-75 rounded-full bg-gold/12 blur-[90px]"
      />
      <img
        src={withBase("/when-one-door-opens-cover.png")}
        alt="Hardcover edition of When One Door Opens"
        width={1200}
        height={1504}
        className="relative w-full drop-shadow-[0_50px_70px_rgba(0,0,0,0.58)] [filter:brightness(0.84)_saturate(0.88)_contrast(0.96)]"
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
