import { useId, useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  type Variants,
} from "motion/react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- Reveal */

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export const staggerParent: Variants = {
  hidden: {},
  show: {},
};

export const staggerChild: Variants = {
  hidden: {},
  show: {},
};

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

/* ----------------------------------------------------------- Word reveal */

export function WordReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return <span className={cn("inline-block", className)}>{text}</span>;
}

/* ------------------------------------------------------------ Decoration */

export function Orbs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        aria-hidden
        className="absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="absolute -right-24 top-1/3 h-[30rem] w-[30rem] rounded-full bg-mist/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-primary/15 blur-[150px]"
      />
    </div>
  );
}

export function Particles({ className }: { className?: string }) {
  return null;
}

export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto flex w-full max-w-xs items-center gap-3", className)}>
      <span className="hairline" />
      <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0 text-gold" aria-hidden>
        <path d="M7 0l1.7 5.3L14 7l-5.3 1.7L7 14l-1.7-5.3L0 7l5.3-1.7z" fill="currentColor" />
      </svg>
      <span className="hairline" />
    </div>
  );
}

function FlyingAngel({ soft }: { soft: string }) {
  return (
    <g filter={soft} fill="currentColor">
      <path d="M4 -6C-4 -22 -19 -32 -37 -34c12 11 19 23 21 36 1 8 5 12 11 12z" opacity="0.55" />
      <path d="M9 -4c5 2 7 8 4 14-6 12-19 22-38 29 9-12 14-24 16-35 1-7 8-11 18-8z" opacity="0.75" />
      <ellipse cx="12" cy="-9" rx="3.6" ry="4" opacity="0.85" />
      <path d="M7 -5C1 -24 -12 -37 -31 -43c10 13 15 27 16 41 0 8 5 11 12 8z" opacity="0.9" />
      <path d="M-16 16C-30 22 -44 25 -58 25c13 3 27 2 41-2z" opacity="0.35" />
    </g>
  );
}

export function Botanical({ className }: { className?: string }) {
  const uid = useId().replace(/[:]/g, "");
  const soft = `url(#soft-${uid})`;
  const softer = `url(#softer-${uid})`;

  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={cn("pointer-events-none absolute text-mist/40", className)}
      fill="none"
    >
      <defs>
        <radialGradient id={`glow-${uid}`} cx="50%" cy="34%" r="58%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.42" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`ray-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.24" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <filter id={`soft-${uid}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id={`softer-${uid}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4.5" />
        </filter>
      </defs>
      <circle cx="100" cy="72" r="88" fill={`url(#glow-${uid})`} />
      <g filter={softer} fill={`url(#ray-${uid})`}>
        <path d="M104 14 80 190h14z" />
        <path d="M104 14 112 190h13z" />
        <path d="M104 14 138 180l12-6z" />
        <path d="M104 14 68 180l-12-6z" />
      </g>
      <g opacity="0.34">
        <g transform="translate(76 74) rotate(-16) scale(1.05)">
          <FlyingAngel soft={soft} />
        </g>
      </g>
      <g opacity="0.2">
        <g transform="translate(148 128) rotate(-8) scale(0.6)">
          <FlyingAngel soft={softer} />
        </g>
      </g>
      <g opacity="0.12">
        <g transform="translate(42 148) rotate(-22) scale(0.42)">
          <FlyingAngel soft={softer} />
        </g>
      </g>
      <g filter={soft} fill="currentColor" opacity="0.18">
        <ellipse cx="72" cy="168" rx="46" ry="13" />
        <ellipse cx="128" cy="176" rx="52" ry="14" />
        <ellipse cx="100" cy="154" rx="30" ry="9" opacity="0.7" />
        <ellipse cx="44" cy="60" rx="26" ry="8" opacity="0.5" />
        <ellipse cx="160" cy="86" rx="28" ry="8" opacity="0.5" />
      </g>
    </svg>
  );
}

export function QuoteMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("display pointer-events-none select-none text-gold/20", className)}
    >
      &ldquo;
    </span>
  );
}

/* -------------------------------------------------------- Scroll progress */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gold"
    />
  );
}

/* ------------------------------------------------------- Magnetic button */

export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-block", className)}>{children}</span>;
}

/* ------------------------------------------------------------- Parallax */

export function Parallax({
  children,
  amount = 60,
  className,
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

/* ------------------------------------------------------- Cursor spotlight */

export function CursorSpotlight() {
  return null;
}

/* --------------------------------------------------------------- Headings */

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <h2 className="display text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {intro ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      ) : null}
      {align === "center" ? <GoldDivider className="mt-8" /> : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative overflow-hidden px-6 py-24 sm:py-32 lg:py-40", className)}>
      <div className="relative z-10 mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
