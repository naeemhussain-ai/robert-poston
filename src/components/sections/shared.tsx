import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { BookOpen, Headphones, Tablet, BookMarked } from "lucide-react";
import {
  GoldDivider,
  Magnetic,
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
import { formats } from "@/data/content";
import { cn } from "@/lib/utils";
import bookHero from "@/assets/book-hero.jpg";

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
      <Stagger className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {formats.map((f, i) => {
          const Icon = formatIcons[i % formatIcons.length];
          return (
            <StaggerItem key={f.name}>
              <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-700 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_30px_60px_-40px_oklch(0.2_0.03_262/0.6)]">
                <Icon className="h-6 w-6 text-gold transition-transform duration-700 group-hover:scale-110" />
                <h3 className="display mt-8 text-3xl">{f.name}</h3>
                {/* EDIT: Replace format detail */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
                <p className="mt-8 text-sm tracking-[0.2em] text-foreground/80">{f.price}</p>
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
    <Section className="bg-midnight grain">
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
    <Section className={cn("bg-background", className)}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="relative mx-auto mt-24 max-w-3xl">
        <motion.span
          aria-hidden
          className="absolute left-[7px] top-2 w-px origin-top bg-gradient-to-b from-gold/70 via-gold/30 to-transparent md:left-1/2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: "100%" }}
        />
        <div className="flex flex-col gap-16">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div
                className={cn(
                  "relative pl-10 md:w-1/2 md:pl-0",
                  i % 2 === 0 ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-3 h-3.5 w-3.5 rounded-full border border-gold/70 bg-background",
                    "left-0 md:left-auto",
                    i % 2 === 0 ? "md:-right-[7px]" : "md:-left-[7px]",
                  )}
                />
                <p className="eyebrow">{item.step ?? item.year}</p>
                <h3 className="display mt-3 text-3xl">{item.title}</h3>
                {/* EDIT: Replace milestone copy */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function CtaBanner({
  headline,
  cta,
  to = "/book",
}: {
  headline: string;
  cta: string;
  to?: string;
}) {
  return (
    <Section className="bg-midnight grain text-center">
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
              <Link to={to}>{cta}</Link>
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
        src={bookHero}
        alt="Hardcover edition of The Spirit of Love"
        width={1200}
        height={1504}
        className="relative w-full rounded-[1.75rem] shadow-[var(--shadow-lux)]"
      />
    </motion.div>
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
