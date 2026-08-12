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
import { CtaBanner } from "@/components/sections/shared";
import {
  faq,
  featuredQuote,
  genres,
  hero,
  reviews,
  site,
  synopsis,
  themes,
  chapters,
} from "@/data/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { withBase } from "@/lib/asset-path";

function BookHero() {
  const bookCover = withBase("/when-one-door-opens-cover.png");
  return (
    <section className="surface-midnight grain relative overflow-hidden px-6 pb-24 pt-40">
      <img
        src={withBase("/sky.png")}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-midnight)", opacity: 0.82 }} />
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-aurora)" }} />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <img
            src={bookCover}
            alt={`Book cover of ${site.bookTitle}`}
            loading="lazy"
            className="mx-auto w-full max-w-[20rem] object-contain [filter:brightness(0.9)_saturate(0.9)] sm:max-w-[24rem] lg:max-w-[26rem]"
          />
        </div>
        <div>
          <p className="eyebrow">About the Book</p>
          <h1 className="display mt-7 text-5xl leading-[1] sm:text-7xl">
            <WordReveal text={site.bookTitle} />
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-primary/35 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-primary"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Summary() {
  return (
    <Section className="surface-ivory">
      <Botanical className="right-[-7rem] top-20 hidden h-[24rem] w-[24rem] lg:block" />
      <div className="mx-auto max-w-3xl">
        <SectionHeading align="left" eyebrow="Summary" title={synopsis.heading} />
        {synopsis.paragraphs.map((paragraph, index) => (
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

function ThemeCards() {
  return (
    <Section className="bg-background">
      <Orbs className="opacity-60" />
      <SectionHeading eyebrow="Themes" title="What the story keeps asking" />
      <Stagger className="mt-20 grid gap-6 lg:grid-cols-2">
        {themes.map((theme, index) => (
          <StaggerItem key={theme.title}>
            <div className="glass-blue h-full rounded-3xl p-10 transition-transform duration-700 hover:-translate-y-2">
              <span className="display text-sm tracking-[0.3em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-6 text-4xl">{theme.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{theme.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function Structure() {
  return (
    <Section className="surface-pearl">
      <SectionHeading eyebrow="Structure" title="Four major movements of the novel" />
      <Stagger className="mt-20 grid gap-6 sm:grid-cols-2">
        {chapters.map((chapter) => (
          <StaggerItem key={chapter.number}>
            <article className="h-full rounded-3xl border border-border bg-card p-10 text-card-foreground transition-all duration-700 hover:-translate-y-1 hover:border-primary/50">
              <p className="eyebrow">{chapter.number}</p>
              <h3 className="display mt-5 text-4xl">{chapter.title}</h3>
              <div className="hairline my-6" />
              <p className="text-sm leading-relaxed italic text-muted-foreground">{chapter.body}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function EditorialNote() {
  return (
    <Section className="bg-background">
      <Reveal className="mx-auto max-w-4xl p-10 text-center sm:p-14">
        <p className="eyebrow">Editorial Note</p>
        <h2 className="display mt-6 text-4xl sm:text-5xl">{featuredQuote.text}</h2>
        <GoldDivider className="mt-8" />
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          This section now gives the client a focused book page where summary, themes, structure, and final positioning all live in one place without the previous multi-book setup.
        </p>
      </Reveal>
    </Section>
  );
}

function Reviews() {
  return (
    <Section className="surface-ivory">
      <SectionHeading eyebrow="Positioning" title="How the book can be framed for readers" />
      <Stagger className="mt-20 grid gap-6 lg:grid-cols-3">
        {reviews.map((review) => (
          <StaggerItem key={review.name}>
            <figure className="rounded-3xl border border-border bg-card p-9 text-card-foreground">
              <blockquote className="display text-2xl italic leading-snug">{review.quote}</blockquote>
              <figcaption className="mt-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {review.name} · {review.source}
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
    <Section className="bg-background">
      <SectionHeading eyebrow="Questions" title="Quick answers about the book" />
      <Reveal className="mx-auto mt-16 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="display py-7 text-left text-2xl hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-7 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}

export function BookPage() {
  return (
    <>
      <BookHero />
      <Summary />
      <ThemeCards />
      <Structure />
      <EditorialNote />
      <Reviews />
      <Faq />
      <CtaBanner headline="See the Visual World Around the Story" cta="Open the Gallery" to="/gallery" />
    </>
  );
}
