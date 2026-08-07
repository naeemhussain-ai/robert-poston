import { Link } from "@/lib/router";
import { Star } from "lucide-react";
import { ArrowDown } from "lucide-react";
import {
  Botanical,
  GoldDivider,
  Magnetic,
  Orbs,
  Parallax,
  Reveal,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
} from "@/components/lux";
import {
  BookCollectionSection,
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
  books,
  featuredQuote,
  hero,
  journey,
  site,
  synopsis,
  testimonials,
  themes,
} from "@/data/content";
import deskImg from "@/assets/desk.jpg";
import { withBase } from "@/lib/asset-path";

const stellaPortrait = withBase("/stella-portrait.jpg");

function Hero() {
  return (
    <section className="surface-midnight relative grain flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-36">
      <img
        src={withBase("/sky.png")}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.19 0.032 260 / 0.70) 0%, oklch(0.19 0.032 260 / 0.45) 45%, oklch(0.19 0.032 260 / 0.10) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-aurora)" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>

          <h1 className="display mt-8 text-[3.25rem] leading-[0.98] sm:text-7xl lg:text-[6.5rem]">
            {hero.title}
          </h1>

          <div className="mt-10 h-px w-40 bg-gold/70" />

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            {hero.body}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-9 text-[0.7rem] uppercase tracking-[0.26em]">
              <a href={books[0].amazonLink} target="_blank" rel="noopener noreferrer">{hero.primaryCta}</a>
            </Button>
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
          </div>
        </div>

        <div className="relative w-[115%] translate-x-6">
          <BookMockup />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-3">
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">Scroll</span>
        <ArrowDown className="h-4 w-4 text-gold" />
      </div>
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
        intro="The Spirit of Love is built around four emotional threads that run through every chapter of Denise's life."
      />
      <Stagger className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {themes.map((t, i) => (
          <StaggerItem key={t.title}>
            <div className="glass-blue group h-full rounded-3xl p-9 transition-transform duration-700 hover:-translate-y-2">
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
                src={stellaPortrait}
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
      <Reveal className="glass-blue relative mx-auto max-w-3xl rounded-[2rem] p-10 text-center sm:p-16">
        <GoldDivider className="mb-10 max-w-[10rem]" />
        <h2 className="display text-4xl sm:text-5xl">Join the Reader Circle</h2>
        {/* EDIT: Replace newsletter copy */}
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Receive a personal note from Denise, early access to new writing, reflections on faith and survival, and the bonus chapter available only to subscribers. No noise   only words worth reading.
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

export function HomePage() {
  return (
    <>
      <Hero />
      <Themes />
      <Introduction />
      <QuoteBlock text={featuredQuote.text} attribution={featuredQuote.attribution} />
      <AuthorPreview />
      <BookCollectionSection />
      <FormatsSection />
      <Testimonials />
      <TimelineSection eyebrow="Reader Journey" title="Four movements of the story" items={journey} />
      <Newsletter />
      <CtaBanner headline="Your Next Favorite Story Awaits" cta="Get the Book" href={books[0].amazonLink} />
    </>
  );
}
