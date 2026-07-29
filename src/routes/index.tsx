import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Star } from "lucide-react";
import {
  Botanical,
  GoldDivider,
  Magnetic,
  Orbs,
  Parallax,
  Particles,
  Reveal,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
  WordReveal,
} from "@/components/lux";
import {
  BookMockup,
  CtaBanner,
  FormatsSection,
  QuoteBlock,
  TimelineSection,
} from "@/components/sections/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  authorBio,
  featuredQuote,
  hero,
  journey,
  site,
  synopsis,
  testimonials,
  themes,
} from "@/data/content";
import authorPortrait from "@/assets/author-portrait.jpg";
import deskImg from "@/assets/desk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Spirit of Love — A Novel by Stella Denise Solano" },
      {
        name: "description",
        content:
          "Enter the world of The Spirit of Love, a luminous novel by Stella Denise Solano about love, destiny, hope and healing.",
      },
      { property: "og:title", content: "The Spirit of Love — A Novel by Stella Denise Solano" },
      {
        property: "og:description",
        content: "A cinematic literary experience: love, destiny, hope and healing.",
      },
    ],
  }),
  component: Home,
});

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative grain flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-midnight)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <Orbs />
      <Particles />
      <Botanical className="left-[-6rem] top-24 hidden h-[28rem] w-[28rem] lg:block" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="display mt-8 text-[3.25rem] leading-[0.98] sm:text-7xl lg:text-[6.5rem]">
            <WordReveal text={hero.title} delay={0.2} />
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 h-px w-40 origin-left bg-gold/70"
          />

          {/* EDIT: Replace hero paragraph */}
          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.body}
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.25 }}
          >
            <Magnetic>
              <Button asChild size="lg" className="rounded-full px-9 text-[0.7rem] uppercase tracking-[0.26em]">
                <Link to="/book">{hero.primaryCta}</Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent px-9 text-[0.7rem] uppercase tracking-[0.26em] hover:bg-secondary"
              >
                <Link to="/book" hash="chapters">
                  {hero.secondaryCta}
                </Link>
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-[74%] max-w-md lg:w-full"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(16px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            aria-hidden
            className="absolute -inset-16 -z-10 rounded-full border border-gold/10"
          />
          <span aria-hidden className="absolute -inset-28 -z-10 rounded-full border border-gold/[0.06]" />
          <BookMockup />
          {!reduce &&
            [0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute h-2.5 w-2.5 rounded-full bg-lavender/50 blur-[1px]"
                style={{ left: `${12 + i * 24}%`, top: `${18 + ((i * 27) % 60)}%` }}
                animate={{ y: [0, -50, 0], x: [0, 18, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 11 + i * 3, repeat: Infinity, ease: "easeInOut", delay: i }}
              />
            ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">Scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-gold" />
        </motion.span>
      </motion.div>
    </section>
  );
}

function Themes() {
  return (
    <Section className="bg-background">
      <Orbs className="opacity-60" />
      <SectionHeading
        eyebrow="Story Themes"
        title="Four threads woven through the novel"
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
      />
      <Stagger className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {themes.map((t, i) => (
          <StaggerItem key={t.title}>
            <div className="glass group h-full rounded-3xl p-9 transition-transform duration-700 hover:-translate-y-2">
              <span className="display text-sm tracking-[0.3em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-6 text-4xl">{t.title}</h3>
              {/* EDIT: Replace theme description */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Introduction() {
  return (
    <Section className="surface-ivory">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Parallax amount={40}>
          <Reveal>
            <div className="group overflow-hidden rounded-3xl shadow-[0_50px_90px_-60px_oklch(0.2_0.03_262/0.8)]">
              <img
                src={deskImg}
                alt="A fountain pen, handwritten letters and candlelight on a writing desk"
                loading="lazy"
                width={1008}
                height={1008}
                className="w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </div>
          </Reveal>
        </Parallax>
        <div>
          <SectionHeading align="left" eyebrow={synopsis.eyebrow} title={synopsis.heading} />
          {/* EDIT: Replace with real synopsis */}
          {synopsis.paragraphs.slice(0, 2).map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <Magnetic className="mt-10 block">
              <Button asChild variant="outline" className="rounded-full border-foreground/20 bg-transparent px-8 text-[0.7rem] uppercase tracking-[0.24em]">
                <Link to="/book">{synopsis.cta}</Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function AuthorPreview() {
  return (
    <Section className="bg-background">
      <Botanical className="right-[-8rem] top-10 hidden h-[26rem] w-[26rem] lg:block" />
      <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Parallax amount={30}>
          <Reveal>
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src={authorPortrait}
                alt={`Portrait of ${site.author}`}
                loading="lazy"
                width={1008}
                height={1264}
                className="w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent" />
            </div>
          </Reveal>
        </Parallax>
        <div>
          <SectionHeading align="left" eyebrow={authorBio.eyebrow} title={authorBio.name} />
          {/* EDIT: Replace author biography */}
          {authorBio.short.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <Magnetic className="mt-10 block">
              <Button asChild className="rounded-full px-8 text-[0.7rem] uppercase tracking-[0.24em]">
                <Link to="/about">{authorBio.cta}</Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section className="bg-background">
      <SectionHeading eyebrow="Praise" title="What readers are saying" />
      <Stagger className="mt-20 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <figure className="glass h-full rounded-3xl p-9">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              {/* EDIT: Replace testimonials */}
              <blockquote className="display mt-7 text-2xl italic leading-snug">{t.quote}</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-xs tracking-widest text-gold">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm">{t.name}</span>
                  <span className="block text-xs tracking-[0.2em] text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Newsletter() {
  return (
    <Section className="bg-background">
      <Orbs className="opacity-70" />
      <Reveal className="glass relative mx-auto max-w-3xl rounded-[2rem] p-10 text-center sm:p-16">
        <GoldDivider className="mb-10 max-w-[10rem]" />
        <h2 className="display text-4xl sm:text-5xl">Join the Reader Circle</h2>
        {/* EDIT: Replace newsletter copy */}
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Receive a bonus chapter, letters from
          the desk, and early notes on new work.
        </p>
        <form
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input type="email" required placeholder="Your email" aria-label="Email address" className="rounded-full" />
          <Button type="submit" className="rounded-full px-8 text-[0.7rem] uppercase tracking-[0.24em]">
            Subscribe
          </Button>
        </form>
        <p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground">
          Bonus chapter sent instantly · No noise, ever
        </p>
      </Reveal>
    </Section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Themes />
      <Introduction />
      <QuoteBlock text={featuredQuote.text} attribution={featuredQuote.attribution} />
      <AuthorPreview />
      <FormatsSection />
      <Testimonials />
      <TimelineSection eyebrow="Reader Journey" title="Four movements of the story" items={journey} />
      <Newsletter />
      <CtaBanner headline="Your Next Favorite Story Awaits" cta="Get the Book" />
    </>
  );
}
