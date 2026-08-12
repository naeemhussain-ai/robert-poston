import {
  Botanical,
  GoldDivider,
  Orbs,
  Reveal,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
  WordReveal,
} from "@/components/lux";
import { CtaBanner, QuoteBlock, TimelineSection } from "@/components/sections/shared";
import { authorBio, authorTimeline, philosophy, site } from "@/data/content";
import deskImg from "@/assets/desk.jpg";
import { withBase } from "@/lib/asset-path";

const portrait = withBase("/author-portrait.jpg");

function AboutHero() {
  return (
    <section className="surface-midnight grain relative overflow-hidden px-6 pb-24 pt-44">
      <img
        src={withBase("/sky.png")}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-midnight)", opacity: 0.82 }} />
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-aurora)" }} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">About the Author</p>
          <h1 className="display mt-8 text-5xl leading-[1] sm:text-7xl lg:text-8xl">
            <WordReveal text={site.author} />
          </h1>
          <GoldDivider className="ml-0 mt-10 max-w-[12rem]" />
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            {authorBio.short[0]}
          </p>
        </div>
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-lux)]">
            <img
              src={portrait}
              alt={`Portrait placeholder for ${site.author}`}
              width={1008}
              height={1264}
              className="w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Biography() {
  return (
    <Section className="surface-ivory">
      <Botanical className="left-[-7rem] top-16 hidden h-[24rem] w-[24rem] lg:block" />
      <div className="mx-auto max-w-3xl">
        <SectionHeading align="left" eyebrow="Biography" title="A voice drawn to consequence, faith, and renewal" />
        {authorBio.long.map((paragraph, index) => (
          <Reveal key={index} delay={index * 0.06}>
            <p className={`mt-8 text-lg leading-[1.9] text-foreground/80 ${index === 0 ? "dropcap" : ""}`}>
              {paragraph}
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
      <SectionHeading eyebrow="Perspective" title="How the work is grounded" />
      <Stagger className="mt-20 grid gap-6 lg:grid-cols-3">
        {philosophy.map((item) => (
          <StaggerItem key={item.title}>
            <div className="glass-blue h-full rounded-3xl p-10 transition-transform duration-700 hover:-translate-y-2">
              <h3 className="display text-3xl">{item.title}</h3>
              <div className="hairline my-6" />
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function WritingTable() {
  return (
    <Section className="surface-pearl">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-lux)]">
            <img
              src={deskImg}
              alt="Writing desk with candlelight and letters"
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading align="left" eyebrow="Creative Atmosphere" title="Stories written at the edge of warning and grace" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            This author page now supports a darker, more reflective presentation that fits the spiritual-drama tone of the new book. It can easily absorb fuller biography details, press material, or a personal note from the author later.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            If you share a final portrait or any author-specific media, we can replace the current placeholder visuals without changing the page structure.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <Biography />
      <QuoteBlock
        text="Renewal matters because consequence matters. A second chance only means something when a person chooses differently."
        attribution={site.author}
      />
      <TimelineSection eyebrow="Development" title="How the author vision takes shape" items={authorTimeline} />
      <Philosophy />
      <WritingTable />
      <CtaBanner headline="Discover the Story Behind the Book" cta="About the Book" to="/book" />
    </>
  );
}
