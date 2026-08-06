import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Clock, Facebook, Instagram, Mail, MapPin, Music2, Phone, BookOpen, UserRound } from "lucide-react";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contact, contactFaq } from "@/data/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Stella Denise Solano, Author" },
      {
        name: "description",
        content:
          "Write to Stella Denise Solano: press enquiries, book club visits, speaking invitations and reader letters.",
      },
      { property: "og:title", content: "Contact Stella Denise Solano" },
      {
        property: "og:description",
        content: "Press, book clubs, speaking invitations and reader letters.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "A little more, please").max(2000),
});

type FormValues = z.infer<typeof schema>;

const details = [
  { icon: Mail, label: "Email", value: contact.email },
  { icon: Phone, label: "Phone", value: contact.phone },
  { icon: UserRound, label: "Literary Agent", value: contact.agent },
  { icon: Clock, label: "Response Time", value: contact.responseTime },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Music2, label: "TikTok" },
  { icon: BookOpen, label: "Goodreads" },
  { icon: Mail, label: "Newsletter" },
];

function ContactForm() {
  const [sent, setSent] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(_values: FormValues) {
    // EDIT: Connect to a real inbox or backend
    setSent(true);
    form.reset();
  }

  return (
    <div className="glass relative rounded-[2rem] p-8 sm:p-12">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center py-16 text-center"
          >
            <motion.span
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold"
              initial={{ rotate: -30, scale: 0.6 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Check className="h-6 w-6" />
            </motion.span>
            <h3 className="display mt-8 text-4xl">Your letter is on its way</h3>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Thank you for writing. A reply usually arrives {contact.responseTime.toLowerCase()}.
            </p>
            <Button variant="outline" className="mt-10 rounded-full border-border bg-transparent px-8" onClick={() => setSent(false)}>
              Write another
            </Button>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="eyebrow">Name</FormLabel>
                        <FormControl>
                          <Input {...field} maxLength={100} className="rounded-xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="eyebrow">Email</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" maxLength={255} className="rounded-xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="eyebrow">Subject</FormLabel>
                      <FormControl>
                        <Input {...field} maxLength={150} className="rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="eyebrow">Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={6} maxLength={2000} className="rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Magnetic className="block">
                  <Button type="submit" size="lg" className="w-full rounded-full text-[0.7rem] uppercase tracking-[0.26em]">
                    Send Message
                  </Button>
                </Magnetic>
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Contact() {
  return (
    <>
      <section className="surface-midnight grain relative overflow-hidden px-6 pb-20 pt-44 text-center">
        <img
          src="/sky.png"
          alt=""
          aria-hidden
          width={1920}
          height={1280}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-aurora)" }} />
        <Particles />
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="eyebrow">Correspondence</p>
          <h1 className="display mt-8 text-5xl sm:text-7xl">
            <WordReveal text="Let's Connect" />
          </h1>
          <GoldDivider className="mt-10" />
          {/* EDIT: Replace contact intro */}
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Whether you are a reader, a bookshop, a faith community, or someone who simply needs to share what this book has meant   Denise welcomes your message.
          </p>
        </div>
      </section>

      <Section className="bg-background">
        <Orbs className="opacity-60" />
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Stagger className="flex flex-col gap-5">
            {details.map((d) => (
              <StaggerItem key={d.label}>
                <div className="flex items-start gap-5 rounded-2xl border border-border p-7 transition-colors duration-700 hover:border-gold/50">
                  <d.icon className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <div>
                    <p className="eyebrow">{d.label}</p>
                    {/* EDIT: Replace contact details */}
                    <p className="mt-2 text-sm text-foreground/80">{d.value}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section className="surface-ivory">
        <SectionHeading eyebrow="Elsewhere" title="Follow the journey" />
        <Stagger className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-5">
          {socialLinks.map((s) => (
            <StaggerItem key={s.label}>
              <a
                href="#"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border p-8 transition-all duration-700 hover:-translate-y-2 hover:border-gold/50"
              >
                <s.icon className="h-5 w-5 text-gold transition-transform duration-700 group-hover:scale-110" />
                <span className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.label}
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-background">
        <Botanical className="left-1/2 top-10 hidden h-[26rem] w-[26rem] -translate-x-1/2 lg:block" />
        <Reveal className="glass-blue relative mx-auto max-w-3xl rounded-[2rem] p-12 text-center">
          <MapPin className="mx-auto h-5 w-5 text-gold" />
          <h2 className="display mt-8 text-4xl">Written from a quiet corner of the world</h2>
          {/* EDIT: Replace location placeholder */}
          <p className="mt-5 text-sm uppercase tracking-[0.28em] text-muted-foreground">
            {contact.location}
          </p>
          <GoldDivider className="mt-10" />
        </Reveal>
      </Section>

      <Section className="surface-pearl">
        <SectionHeading eyebrow="Before You Write" title="A few quick answers" />
        <Reveal className="mx-auto mt-14 max-w-3xl">
          {/* EDIT: Replace mini FAQ */}
          <Accordion type="single" collapsible>
            {contactFaq.map((item, i) => (
              <AccordionItem key={i} value={`c-${i}`} className="border-border">
                <AccordionTrigger className="display py-6 text-left text-2xl hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>
    </>
  );
}
