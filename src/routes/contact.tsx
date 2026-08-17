import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Check,
  Clock,
  Facebook,
  Instagram,
  Mail,
  Phone,
  UserRound,
  Youtube,
} from "lucide-react";
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
import { contact, site } from "@/data/content";
import { withBase } from "@/lib/asset-path";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "A little more, please").max(2000),
});

type FormValues = z.infer<typeof schema>;

const details = [
  { icon: Mail, label: "Email", value: contact.email },
  { icon: UserRound, label: "Representative", value: contact.agent },
  { icon: Clock, label: "Response Time", value: contact.responseTime },
] as const;

const socialLinks = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
  { icon: Mail, label: "Email" },
] as const;

function ContactForm() {
  const [sent, setSent] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(_values: FormValues) {
    setSent(true);
    form.reset();
  }

  return (
    <div className="glass relative rounded-[2rem] p-8 sm:p-12">
      {sent ? (
        <div className="flex flex-col items-center py-16 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/50 text-primary">
            <Check className="h-6 w-6" />
          </span>
          <h3 className="display mt-8 text-4xl">Your message is ready to go</h3>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Thanks for reaching out about {site.bookTitle}. A reply usually arrives {contact.responseTime.toLowerCase()}.
          </p>
          <Button variant="outline" className="mt-10 rounded-full border-border bg-transparent px-8" onClick={() => setSent(false)}>
            Write another
          </Button>
        </div>
      ) : (
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
            <Button type="submit" size="lg" className="w-full rounded-full text-[0.7rem] uppercase tracking-[0.26em]">
              Send Message
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}

export function ContactPage() {
  return (
    <>
      <section className="surface-midnight grain relative overflow-hidden px-6 pb-20 pt-44 text-center">
        <img
          src={withBase("/sky.png")}
          alt=""
          aria-hidden
          width={1920}
          height={1280}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-midnight)", opacity: 0.82 }} />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-aurora)" }} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-8 text-5xl sm:text-7xl">
            <WordReveal text="Let's Connect" />
          </h1>
          <GoldDivider className="mt-10" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Use this page for inquiries about the author, the book, speaking requests, collaboration, or future media updates.
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
            {details.map((detail) => (
              <StaggerItem key={detail.label}>
                <div className="flex items-start gap-5 rounded-2xl border border-border p-7 transition-colors duration-700 hover:border-primary/50">
                  <detail.icon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="eyebrow">{detail.label}</p>
                    <p className="mt-2 text-sm text-foreground/80">{detail.value}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section className="surface-ivory">
        <SectionHeading eyebrow="Elsewhere" title="Follow the story world" />
        <Stagger className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {socialLinks.map((social) => (
            <StaggerItem key={social.label}>
              <a
                href="#"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border p-8 transition-all duration-700 hover:-translate-y-2 hover:border-primary/50"
              >
                <social.icon className="h-5 w-5 text-primary transition-transform duration-700 group-hover:scale-110" />
                <span className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {social.label}
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

    </>
  );
}
