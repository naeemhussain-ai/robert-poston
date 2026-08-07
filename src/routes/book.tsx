import { Star } from "lucide-react";
import {
  Botanical,
  GoldDivider,
  Magnetic,
  Orbs,
  Particles,
  Reveal,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
  WordReveal,
} from "@/components/lux";
import {
  BookCollectionSection,
  BookMockup,
  CtaBanner,
  FormatsSection,
  GallerySection,
} from "@/components/sections/shared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { books, chapters, faq, genres, reviews, site, synopsis, themes } from "@/data/content";
import deskImg from "@/assets/desk.jpg";
import libraryImg from "@/assets/library.jpg";
import mistImg from "@/assets/mist.jpg";
import petalsImg from "@/assets/petals.jpg";
import readingRoomImg from "@/assets/reading-room.jpg";
import { withBase } from "@/lib/asset-path";

function BookHero() {
  return (
    <section className="surface-midnight grain relative overflow-hidden px-6 pb-24 pt-40">
      <img
        src={withBase("/sky.png")}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-midnight)", opacity: 0.7 }} />
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-aurora)" }} />
      <Particles />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <BookMockup className="mx-auto w-[70%] max-w-sm lg:w-full lg:max-w-md" />
        <div>
          <p className="eyebrow">The Novel</p>
          <h1 className="display mt-7 text-5xl leading-[1] sm:text-7xl">
            <WordReveal text={site.bookTitle} />
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.32em] text-muted-foreground">{site.author}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {genres.map((g) => (
              <span
                key={g}
                className="rounded-full border border-gold/40 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-gold"
              >
                {g}
              </span>
            ))}
          </div>
          {/* EDIT: Replace book description */}
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            {synopsis.paragraphs[0]}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Magnetic>
              <a href={books[0].amazonLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-9 text-[0.7rem] uppercase tracking-[0.26em]">
                  Buy Now
                </Button>
              </a>
            </Magnetic>
            <Magnetic>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent px-9 text-[0.7rem] uppercase tracking-[0.26em] hover:bg-secondary"
              >
                Read Sample
              </Button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}

function Synopsis() {
  return (
    <Section className="surface-ivory">
      <Botanical className="right-[-7rem] top-20 hidden h-[24rem] w-[24rem] lg:block" />
      <div className="mx-auto max-w-3xl">
        <SectionHeading align="left" eyebrow="Synopsis" title={synopsis.heading} />
        {/* EDIT: Replace with real synopsis */}
        {synopsis.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p className={`mt-8 text-lg leading-[1.9] text-foreground/80 ${i === 0 ? "dropcap" : ""}`}>
              {p}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Themes() {
  return (
    <Section className="bg-background">
      <Orbs className="opacity-60" />
      <SectionHeading eyebrow="Story Themes" title="What the novel holds" />
      <Stagger className="mt-20 grid gap-6 lg:grid-cols-3">
        {themes.slice(0, 3).map((t, i) => (
          <StaggerItem key={t.title}>
            <div className="glass-blue h-full rounded-3xl p-10 transition-transform duration-700 hover:-translate-y-2">
              <span className="display text-sm tracking-[0.3em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-6 text-4xl">{t.title}</h3>
              {/* EDIT: Replace theme copy */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Chapters() {
  return (
    <Section id="chapters" className="bg-background">
      <SectionHeading eyebrow="Preview" title="The first four chapters" />
      <Stagger className="mt-20 grid gap-6 sm:grid-cols-2">
        {chapters.map((c) => (
          <StaggerItem key={c.number}>
            <article className="group h-full rounded-3xl border border-border bg-card p-10 text-card-foreground transition-all duration-700 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
              <p className="eyebrow">{c.number}</p>
              <h3 className="display mt-5 text-4xl">{c.title}</h3>
              <div className="hairline my-6" />
              {/* EDIT: Replace chapter preview */}
              <p className="text-sm leading-relaxed italic text-muted-foreground">{c.body}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Reviews() {
  return (
    <Section className="bg-background">
      <SectionHeading eyebrow="Reviews" title="Early words for the novel" />
      <Stagger className="mt-20 grid gap-6 lg:grid-cols-3">
        {reviews.map((r) => (
          <StaggerItem key={r.name}>
            <figure className="glass h-full rounded-3xl p-9">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              {/* EDIT: Replace reviews */}
              <blockquote className="display mt-7 text-2xl italic leading-snug">{r.quote}</blockquote>
              <figcaption className="mt-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {r.name} · {r.source}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Faq() {
  return (
    <Section className="surface-ivory">
      <SectionHeading eyebrow="Questions" title="Everything you might ask" />
      <Reveal className="mx-auto mt-16 max-w-3xl">
        {/* EDIT: Replace FAQ */}
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="display py-7 text-left text-2xl hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-7 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <GoldDivider className="mt-14" />
      </Reveal>
    </Section>
  );
}

export function BookPage() {
  return (
    <>
      <BookHero />
      <Synopsis />
      <Themes />
      <FormatsSection eyebrow="Formats" title="Every way to hold the story" />
      <BookCollectionSection eyebrow="Works" title="More from the author" />
      <Chapters />
      <GallerySection
        eyebrow="Atmosphere"
        title="Inside the world of the novel"
        images={[
          { src: libraryImg, alt: "Candlelit historic library" },
          { src: petalsImg, alt: "White rose petals on parchment" },
          { src: mistImg, alt: "Misty forest at dawn" },
          { src: readingRoomImg, alt: "Moonlit reading room" },
          { src: deskImg, alt: "Writing desk with letters and candlelight" },
        ]}
      />
      <Reviews />
      <Faq />
      <CtaBanner headline="Get Your Copy Today" cta="Buy the Book" href={books[0].amazonLink} />
    </>
  );
}
