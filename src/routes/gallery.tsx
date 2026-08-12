import { useMemo, useState } from "react";
import { X } from "lucide-react";
import {
  GoldDivider,
  Orbs,
  Reveal,
  Section,
  SectionHeading,
  Stagger,
  StaggerItem,
  WordReveal,
} from "@/components/lux";
import { galleryImages, site } from "@/data/content";
import deskImg from "@/assets/desk.jpg";
import libraryImg from "@/assets/library.jpg";
import mistImg from "@/assets/mist.jpg";
import readingRoomImg from "@/assets/reading-room.jpg";
import { withBase } from "@/lib/asset-path";

const imageMap: Record<string, string> = {
  "/sky.png": withBase("/sky.png"),
  "/when-one-door-opens-cover.png": withBase("/when-one-door-opens-cover.png"),
  "asset:mist": mistImg,
  "asset:library": libraryImg,
  "asset:desk": deskImg,
  "asset:reading-room": readingRoomImg,
};

export function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const images = useMemo(
    () =>
      galleryImages.map((image) => ({
        ...image,
        resolvedSrc: imageMap[image.src] ?? image.src,
      })),
    [],
  );

  return (
    <>
      <section className="surface-midnight grain relative overflow-hidden px-6 pb-24 pt-44 text-center">
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
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="eyebrow">Gallery</p>
          <h1 className="display mt-8 text-5xl sm:text-7xl">
            <WordReveal text={`Inside ${site.bookTitle}`} />
          </h1>
          <GoldDivider className="mt-10" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            A moody visual collection for the book's atmosphere. When you send the final images, we can replace any of these placeholders while keeping the same page structure.
          </p>
        </div>
      </section>

      <Section className="bg-background">
        <Orbs className="opacity-60" />
        <SectionHeading
          eyebrow="Visual Atmosphere"
          title="Mystery, stillness, and renewal"
          intro="This standalone gallery page gives the second client a more custom feeling and separates the visual world of the book from the book summary itself."
        />
        <Stagger className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <StaggerItem key={image.title}>
              <Reveal delay={index * 0.05}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className="group block h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-card text-left shadow-[var(--shadow-lux)]"
                >
                  <img
                    src={image.resolvedSrc}
                    alt={image.alt}
                    loading="lazy"
                    className="h-[24rem] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 sm:h-[26rem] lg:h-[28rem]"
                  />
                  <div className="p-6">
                    <p className="display text-2xl text-card-foreground">{image.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{image.alt}</p>
                  </div>
                </button>
              </Reveal>
            </StaggerItem>
          ))}
        </Stagger>

        {active !== null ? (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-midnight/92 p-6 backdrop-blur-xl"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary"
              onClick={() => setActive(null)}
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={images[active].resolvedSrc}
              alt={images[active].alt}
              className="max-h-[82vh] w-auto rounded-2xl border border-border shadow-[var(--shadow-lux)]"
            />
          </div>
        ) : null}
      </Section>
    </>
  );
}
