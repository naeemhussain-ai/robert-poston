import { ArrowRight, BookOpen, HeartHandshake, Leaf, Trees } from "lucide-react";
import { Link } from "@/lib/router";
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
import { CtaBanner, QuoteBlock, TimelineSection } from "@/components/sections/shared";
import { Button } from "@/components/ui/button";
import {
  authorBio,
  featuredQuote,
  hero,
  homeHighlights,
  journey,
  site,
  synopsis,
  themes,
} from "@/data/content";

import { withBase } from "@/lib/asset-path";

const portrait = withBase("/author-portrait-home.jpg");
const heroBackground = withBase("/hero-door.png");
const bookCover = withBase("/when-one-door-opens-cover.png");
const featureIcons = [Leaf, HeartHandshake, Trees, BookOpen];

function Hero() {
  return (
    <section className="surface-midnight relative h-screen max-h-screen overflow-hidden border-b border-white/8 pt-20 sm:pt-24">
      <img
        src={heroBackground}
        alt=""
        aria-hidden
        width={1536}
        height={1024}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[72%_center]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(4,10,17,0.97) 0%, rgba(4,10,17,0.9) 28%, rgba(4,10,17,0.62) 48%, rgba(4,10,17,0.22) 72%, rgba(4,10,17,0.3) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,10,17,0.28) 0%, rgba(4,10,17,0.08) 30%, rgba(4,10,17,0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-75"
        style={{ background: "var(--gradient-aurora)" }}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[88rem] items-center px-4 py-4 sm:px-6 sm:py-6">
        <div className="max-w-[42rem]">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-gold/80 sm:text-[0.75rem] sm:tracking-[0.42em]">
            {hero.eyebrow}
          </p>
          <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            <p className="hero-serif text-[1.35rem] uppercase leading-[1.02] tracking-[0.05em] text-gold/92 sm:text-[1.8rem] lg:text-[2.25rem]">
              Sometimes, what you're
            </p>
            <p className="hero-serif text-[1.35rem] uppercase leading-[1.02] tracking-[0.05em] text-gold/92 sm:text-[1.8rem] lg:text-[2.25rem]">
              looking for is on the
            </p>
            <h1 className="hero-serif text-[2.5rem] uppercase leading-[0.9] text-gold sm:text-[3.7rem] lg:text-[5rem]">
              Other Side
            </h1>
            <h2 className="hero-serif text-[2.2rem] uppercase leading-[0.9] text-gold sm:text-[3.35rem] lg:text-[4.5rem]">
              of <span className="text-primary">Fear.</span>
            </h2>
          </div>

          <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
            <span className="h-px w-12 bg-primary/75 sm:w-20" />
            <span className="text-primary text-lg sm:text-xl">✦</span>
            <span className="h-px w-12 bg-primary/75 sm:w-20" />
          </div>

          <p className="mt-5 max-w-xl text-[0.94rem] leading-7 text-white/80 sm:mt-6 sm:text-base sm:leading-8">
            {hero.body}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-primary/55 bg-transparent px-4 py-4 text-[0.75rem] uppercase tracking-[0.13em] text-primary hover:bg-primary/10 hover:text-primary sm:px-6 sm:py-5 sm:text-[0.82rem]"
            >
              <Link to="/book">
                {hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-xl px-2 py-4 text-[0.75rem] uppercase tracking-[0.12em] text-white/85 hover:bg-white/5 hover:text-gold sm:px-4 sm:py-5 sm:text-[0.82rem]"
            >
              <Link to="/about">{hero.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroHighlights() {
  return (
    <section className="relative z-10 border-b border-white/8 bg-[linear-gradient(180deg,rgba(8,20,32,0.88),rgba(7,18,29,0.98))] px-4 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto grid w-full max-w-[88rem] gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        {homeHighlights.map((item, index) => {
          const Icon = featureIcons[index % featureIcons.length];
          return (
            <div
              key={item.title}
              className="flex gap-4 border-white/8 xl:border-l xl:pl-8 first:xl:border-l-0 first:xl:pl-0"
            >
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/8 text-primary sm:h-12 sm:w-12">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div>
                <h3 className="hero-serif text-[0.95rem] uppercase leading-[1.12] tracking-[0.04em] text-ivory sm:text-[1.15rem]">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-xs text-xs leading-5 text-white/68 sm:mt-2 sm:text-sm sm:leading-6">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Summary() {
  return (
    <Section className="surface-ivory">
      <Botanical className="right-[-6rem] top-8 hidden h-[24rem] w-[24rem] lg:block" />
      <div className="mx-auto max-w-[88rem]">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <Parallax amount={30}>
          <Reveal>
            <img
              src={bookCover}
              alt="Book cover of When One Door Opens"
              loading="lazy"
              className="mx-auto h-full min-h-[20rem] w-full max-w-[26rem] object-contain [filter:brightness(0.9)_saturate(0.9)] sm:min-h-[24rem] lg:max-w-[30rem]"
            />
          </Reveal>
        </Parallax>
        <div>
          <SectionHeading
            align="left"
            eyebrow={synopsis.eyebrow}
            title={synopsis.heading}
            className="[&_h2]:max-w-[16ch] [&_h2]:text-gold [&_h2]:text-[2.2rem] sm:[&_h2]:text-5xl lg:[&_h2]:text-6xl"
          />
          {synopsis.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={0.24}>
            <Magnetic className="mt-10 block">
              <Button asChild variant="outline" className="rounded-xl border-primary/55 bg-transparent px-8 text-[0.74rem] uppercase tracking-[0.2em] text-primary hover:bg-primary/10 hover:text-primary">
                <Link to="/book">{synopsis.cta}</Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </div>
      </div>
    </Section>
  );
}

function Themes() {
  return (
    <Section className="bg-background">
      <div className="mx-auto max-w-[88rem]">
      <div className="text-center">
        <p className="eyebrow mb-5">Core Themes</p>
        <h2 className="display text-4xl text-gold sm:text-5xl lg:text-6xl">
          Darkness, warning, and new beginnings
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          The visual identity now follows the same emotional language as the hero artwork: midnight atmosphere, green life, and gold-lit consequence.
        </p>
        <GoldDivider className="mt-8" />
      </div>
      <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {themes.map((theme, index) => (
          <StaggerItem key={theme.title}>
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,25,37,0.92),rgba(8,17,27,0.98))] p-8 text-card-foreground shadow-[0_30px_70px_-50px_rgba(0,0,0,0.8)] transition-all duration-700 hover:-translate-y-2 hover:border-primary/45">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <span className="display text-sm tracking-[0.3em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-5 text-3xl text-gold">{theme.title}</h3>
              <div className="mt-5 h-px w-16 bg-gold/35 transition-all duration-700 group-hover:w-24 group-hover:bg-primary/55" />
              <p className="mt-5 text-sm leading-7 text-white/68">{theme.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      </div>
    </Section>
  );
}

function AuthorPreview() {
  return (
    <Section className="surface-pearl">
      <div className="mx-auto max-w-[88rem]">
      <div className="grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
        <Reveal>
          <div className="group overflow-hidden rounded-[2rem] border border-gold/15 bg-[#08111a] shadow-[0_45px_100px_-60px_rgba(0,0,0,0.95)]">
            <img
              src={portrait}
              alt={`Portrait placeholder for ${site.author}`}
              loading="lazy"
              className="w-full object-cover transition-transform duration-[1600ms] [filter:brightness(0.92)_saturate(0.9)] group-hover:scale-105"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow={authorBio.eyebrow}
            title={authorBio.name}
            className="[&_h2]:text-gold"
          />
          {authorBio.short.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <p className="mt-6 text-base leading-8 text-white/72">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={0.24}>
            <Magnetic className="mt-10 block">
              <Button asChild className="rounded-xl bg-primary px-8 text-[0.74rem] uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90">
                <Link to="/about">{authorBio.cta}</Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </div>
      </div>
    </Section>
  );
}


export function HomePage() {
  return (
    <>
      <Hero />
      <HeroHighlights />
      <Summary />
      <QuoteBlock text={featuredQuote.text} attribution={featuredQuote.attribution} />
      <Themes />
      <AuthorPreview />
      <TimelineSection eyebrow="Story Arc" title="Four doors in Robert's journey" items={journey} />
      <CtaBanner headline="Step Into the Story Behind the Crash" cta="About the Book" to="/book" />
    </>
  );
}
