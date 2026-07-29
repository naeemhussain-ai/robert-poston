import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import {
  Botanical,
  GoldDivider,
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
import { CtaBanner, QuoteBlock, TimelineSection } from "@/components/sections/shared";
import { authorBio, authorTimeline, awards, philosophy, site } from "@/data/content";
import authorPortrait from "@/assets/author-portrait.jpg";
import deskImg from "@/assets/desk.jpg";
import libraryImg from "@/assets/library.jpg";
import mistImg from "@/assets/mist.jpg";
import petalsImg from "@/assets/petals.jpg";
import readingRoomImg from "@/assets/reading-room.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Stella Denise Solano — Author of The Spirit of Love" },
      {
        name: "description",
        content:
          "Meet Stella Denise Solano: her story, writing philosophy, milestones and the world behind The Spirit of Love.",
      },
      { property: "og:title", content: "About Stella Denise Solano" },
      {
        property: "og:description",
        content: "The story, philosophy and milestones behind The Spirit of Love.",
      },
    ],
  }),
  component: About,
});

const gallery = [
  { src: libraryImg, alt: "A candlelit historic library at dusk" },
  { src: petalsImg, alt: "White rose petals resting on parchment" },
  { src: deskImg, alt: "Fountain pen and handwritten letters by candlelight" },
  { src: mistImg, alt: "Light through a misty forest at dawn" },
  { src: readingRoomImg, alt: "A velvet armchair in a moonlit reading room" },
  { src: authorPortrait, alt: `${site.author} writing at her desk` },
];

function AboutHero() {
  return (
    <section className="grain relative overflow-hidden px-6 pb-24 pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-aurora)" }} />
      <Particles />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">The Author</p>
          <h1 className="display mt-8 text-5xl leading-[1] sm:text-7xl lg:text-8xl">
            <WordReveal text={site.author} />
          </h1>
          <GoldDivider className="ml-0 mt-10 max-w-[12rem]" />
          {/* EDIT: Replace author introduction */}
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            {authorBio.short[0]}
          </p>
        </div>
        <Parallax amount={30}>
          <Reveal>
            <div className="group overflow-hidden rounded-[2rem] shadow-[var(--shadow-lux)]">
              <img
                src={authorPortrait}
                alt={`Portrait of ${site.author}`}
                width={1008}
                height={1264}
                className="w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
              />
            </div>
          </Reveal>
        </Parallax>
      </div>
    </section>
  );
}

function Biography() {
  return (
    <Section className="surface-ivory">
      <Botanical className="left-[-7rem] top-16 hidden h-[24rem] w-[24rem] lg:block" />
      <div className="mx-auto max-w-3xl">
        <SectionHeading align="left" eyebrow="Biography" title="A life spent listening for stories" />
        {/* EDIT: Replace author biography */}
        {authorBio.long.map((p, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p
              className={`mt-8 text-lg leading-[1.9] text-foreground/80 ${i === 0 ? "dropcap" : ""}`}
            >
              {p}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Philosophy() {
  return (
    <Section className="bg-background">
      <Orbs className="opacity-70" />
      <SectionHeading eyebrow="Craft" title="Philosophy, mission and vision" />
      <Stagger className="mt-20 grid gap-6 lg:grid-cols-3">
        {philosophy.map((p) => (
          <StaggerItem key={p.title}>
            <div className="glass h-full rounded-3xl p-10 transition-transform duration-700 hover:-translate-y-2">
              <h3 className="display text-3xl">{p.title}</h3>
              <div className="hairline my-6" />
              {/* EDIT: Replace philosophy copy */}
              <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <Section className="surface-pearl">
      <SectionHeading eyebrow="Gallery" title="The world around the writing" />
      <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((img, i) => (
          <Reveal key={img.src} delay={i * 0.05}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-45px_oklch(0.2_0.03_262/0.7)]"
              aria-label={`View image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-midnight/90 p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory"
              onClick={() => setActive(null)}
            >
              <X className="h-4 w-4" />
            </button>
            <motion.img
              key={gallery[active].src}
              src={gallery[active].src}
              alt={gallery[active].alt}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[82vh] w-auto rounded-2xl shadow-[var(--shadow-lux)]"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}

function Awards() {
  return (
    <Section className="bg-background">
      <SectionHeading eyebrow="Recognition" title="Awards and honours" />
      <Stagger className="mt-20 grid gap-6 lg:grid-cols-3">
        {awards.map((a) => (
          <StaggerItem key={a.title}>
            <div className="h-full rounded-3xl border border-border p-10 transition-colors duration-700 hover:border-gold/50">
              <p className="eyebrow">{a.year}</p>
              <h3 className="display mt-5 text-3xl">{a.title}</h3>
              {/* EDIT: Replace award details */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function About() {
  return (
    <>
      <AboutHero />
      <Biography />
      <QuoteBlock
        // EDIT: Replace inspirational quote
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        attribution={site.author}
      />
      <TimelineSection eyebrow="Milestones" title="A writing life, in chapters" items={authorTimeline} />
      <Philosophy />
      <Gallery />
      <Awards />
      <CtaBanner headline="Discover The Spirit of Love" cta="Explore the Book" />
    </>
  );
}
