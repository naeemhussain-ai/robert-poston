import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
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
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerChild} className={className}>
      {children}
    </motion.div>
  );
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
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%", opacity: 0, filter: "blur(12px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1.4,
              delay: delay + i * 0.11,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------ Decoration */

export function Orbs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        aria-hidden
        className="absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-[130px]"
        animate={{ x: [0, 60, -20, 0], y: [0, -40, 30, 0], scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-24 top-1/3 h-[30rem] w-[30rem] rounded-full bg-mist/20 blur-[140px]"
        animate={{ x: [0, -50, 25, 0], y: [0, 50, -25, 0], scale: [1, 0.94, 1.1, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-primary/15 blur-[150px]"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 61) % 100,
  size: 1.5 + ((i * 13) % 5) * 0.7,
  duration: 14 + ((i * 7) % 12),
  delay: (i % 9) * 0.9,
}));

export function Particles({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold/60"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 12px 2px color-mix(in oklab, var(--color-gold) 45%, transparent)",
          }}
          animate={{ y: [0, -70, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
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

/**
 * Decorative heavenly motif: a couple of wispy angels flying through soft clouds
 * and gentle rays of light. Purely decorative, semi-transparent, never a focal point.
 * (Replaces the previous botanical/foliage motif — same name, props and placement.)
 */
function FlyingAngel({ soft }: { soft: string }) {
  // Local coords, angel facing right, ascending. Kept loose and soft on purpose.
  return (
    <g filter={soft} fill="currentColor">
      {/* far wing */}
      <path d="M4 -6C-4 -22 -19 -32 -37 -34c12 11 19 23 21 36 1 8 5 12 11 12z" opacity="0.55" />
      {/* trailing robe */}
      <path d="M9 -4c5 2 7 8 4 14-6 12-19 22-38 29 9-12 14-24 16-35 1-7 8-11 18-8z" opacity="0.75" />
      {/* head */}
      <ellipse cx="12" cy="-9" rx="3.6" ry="4" opacity="0.85" />
      {/* near wing */}
      <path d="M7 -5C1 -24 -12 -37 -31 -43c10 13 15 27 16 41 0 8 5 11 12 8z" opacity="0.9" />
      {/* light trail */}
      <path d="M-16 16C-30 22 -44 25 -58 25c13 3 27 2 41-2z" opacity="0.35" />
    </g>
  );
}

export function Botanical({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const uid = useId().replace(/[:]/g, "");
  const soft = `url(#soft-${uid})`;
  const softer = `url(#softer-${uid})`;

  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 200 200"
      className={cn("pointer-events-none absolute text-mist/40", className)}
      fill="none"
      animate={reduce ? undefined : { opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
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

      {/* heavenly haze */}
      <circle cx="100" cy="72" r="88" fill={`url(#glow-${uid})`} />

      {/* gentle rays of light */}
      <g filter={softer} fill={`url(#ray-${uid})`}>
        <path d="M104 14 80 190h14z" />
        <path d="M104 14 112 190h13z" />
        <path d="M104 14 138 180l12-6z" />
        <path d="M104 14 68 180l-12-6z" />
      </g>

      {/* first angel, gliding upward */}
      <motion.g
        opacity="0.34"
        animate={reduce ? undefined : { x: [0, 14, 0], y: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <g transform="translate(76 74) rotate(-16) scale(1.05)">
          <FlyingAngel soft={soft} />
        </g>
      </motion.g>

      {/* second angel, further away and slightly behind */}
      <motion.g
        opacity="0.2"
        animate={reduce ? undefined : { x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 27, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <g transform="translate(148 128) rotate(-8) scale(0.6)">
          <FlyingAngel soft={softer} />
        </g>
      </motion.g>

      {/* distant third angel, barely there */}
      <motion.g
        opacity="0.12"
        animate={reduce ? undefined : { x: [0, 8, 0], y: [0, -7, 0] }}
        transition={{ duration: 31, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      >
        <g transform="translate(42 148) rotate(-22) scale(0.42)">
          <FlyingAngel soft={softer} />
        </g>
      </motion.g>

      {/* soft flowing clouds */}
      <g filter={soft} fill="currentColor" opacity="0.18">
        <ellipse cx="72" cy="168" rx="46" ry="13" />
        <ellipse cx="128" cy="176" rx="52" ry="14" />
        <ellipse cx="100" cy="154" rx="30" ry="9" opacity="0.7" />
        <ellipse cx="44" cy="60" rx="26" ry="8" opacity="0.5" />
        <ellipse cx="160" cy="86" rx="28" ry="8" opacity="0.5" />
      </g>
    </motion.svg>
  );
}



export function QuoteMark({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className={cn("display pointer-events-none select-none text-gold/20", className)}
      animate={reduce ? undefined : { y: [0, -12, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      &ldquo;
    </motion.span>
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
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const reduce = useReducedMotion();

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      style={reduce ? undefined : { x: sx, y: sy }}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
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
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/* ------------------------------------------------------- Cursor spotlight */

export function CursorSpotlight() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 90, damping: 22 });
  const sy = useSpring(y, { stiffness: 90, damping: 22 });

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[55] h-[26rem] w-[26rem] rounded-full opacity-40 mix-blend-soft-light"
      style={{
        left: sx,
        top: sy,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--color-gold) 32%, transparent), transparent 65%)",
      }}
    />
  );
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
