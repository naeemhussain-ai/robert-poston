import { Link, useRouteParams } from "@/lib/router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Magnetic, Orbs, Particles, Reveal, Section, SectionHeading } from "@/components/lux";
import { Button } from "@/components/ui/button";
import { books } from "@/data/content";
import book2 from "@/assets/book-collection-2.jpg";
import book3 from "@/assets/book-collection-3.jpg";
import { withBase } from "@/lib/asset-path";

const bookImages = [withBase("/book.png"), book2, book3];

export function BookDetailPage() {
  const { slug } = useRouteParams<{ slug: string }>();
  const book = books.find((item) => item.slug === slug);

  if (!book) {
    return (
      <section className="grain flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="display text-6xl">Book not found</h1>
          <p className="mt-4 text-muted-foreground">The book you are looking for does not exist.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const index = books.findIndex((b) => b.slug === book.slug);
  const image = bookImages[index] ?? bookImages[0];

  return (
    <>
      <section className="surface-midnight grain relative overflow-hidden px-6 pb-24 pt-40">
        <img
          src={withBase("/sky.png")}
          alt=""
          aria-hidden
          width={1920}
          height={1280}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-midnight)" }} />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-aurora)" }} />
        <Particles />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="mx-auto w-[70%] max-w-sm lg:w-full lg:max-w-md">
            <img
              src={image}
              alt={book.title}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <p className="eyebrow">{book.year} · {book.tag}</p>
            <h1 className="display mt-7 text-5xl leading-[1] sm:text-7xl">{book.title}</h1>
            <div className="hairline my-8" />
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{book.body}</p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Magnetic>
                <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full px-9 text-[0.7rem] uppercase tracking-[0.26em]">
                    Buy on Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </Magnetic>
              <Magnetic>
                <Link to="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-border bg-transparent px-9 text-[0.7rem] uppercase tracking-[0.26em] hover:bg-secondary"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-background">
        <Orbs className="opacity-60" />
        <SectionHeading eyebrow="Description" title={book.title} />
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl">
            {book.description.map((p, i) => (
              <p key={i} className={`text-lg leading-[1.9] text-foreground/80 ${i === 0 ? "dropcap" : "mt-8"}`}>
                {p}
              </p>
            ))}
            <div className="mt-12 text-center">
              <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-12 text-[0.7rem] uppercase tracking-[0.26em]">
                  Buy on Amazon
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
