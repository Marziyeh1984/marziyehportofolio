import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  ThreadsIcon,
  TelegramIcon,
  WhatsAppIcon,
  GithubBrandIcon,
} from "@/components/brand-icons";
import { usePortrait } from "@/hooks/use-portrait";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import facePortrait from "@/assets/marziyeh-face-bw-patterned.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marziyeh Lak — Senior AI & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "AI automation, ERP systems, machine learning, SaaS, web apps and blockchain platforms. Selected work and direct contact.",
      },
      { property: "og:title", content: "Marziyeh Lak — Senior AI & Full-Stack Engineer" },
      {
        property: "og:description",
        content:
          "AI automation, ERP systems, machine learning, SaaS, web apps and blockchain platforms.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  "AI automation systems",
  "ERP systems",
  "Machine learning models",
  "SaaS development",
  "Web applications",
  "UI / UX",
  "Blockchain-based platforms",
];

const work = [
  { label: "TradeMesh", url: "https://app.trademesh.com" },
  { label: "MoneyTribe21 Leaderboard", url: "https://leaderboard.moneytribe21.com" },
  { label: "We Are OI", url: "https://www.weareoi.com/" },
  { label: "Yuzu Omakase", url: "https://www.yuzuomakase.com/" },
];

const contacts = [
  { icon: TelegramIcon, label: "Telegram", value: "@lak_202", url: "https://t.me/lak_202" },
  { icon: Mail, label: "Email", value: "lak20ml@gmail.com", url: "mailto:lak20ml@gmail.com" },
  {
    icon: GithubBrandIcon,
    label: "GitHub",
    value: "capybara003",
    url: "https://github.com/capybara003",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+98 910 183 6737",
    url: "https://wa.me/989101836737",
  },
  {
    icon: ThreadsIcon,
    label: "Threads",
    value: "@web_marzi",
    url: "https://www.threads.net/@web_marzi",
  },
];

function ServiceItem({ s, i }: { s: string; i: number }) {
  const { ref, isInView } = useInView<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={cn(
        "flex items-center gap-4 border-t-2 border-primary-foreground py-3 text-primary-foreground first:border-t-0 transition-opacity duration-500 ease-out",
        isInView ? "opacity-100" : "opacity-0",
      )}
      style={{ transitionDelay: `${i * 50}ms` }}
    >
      <span className="font-display text-sm font-bold opacity-60">
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="font-display text-base uppercase tracking-tight text-primary-foreground">
        {s}
      </span>
    </li>
  );
}

function Index() {
  const portrait = usePortrait(facePortrait);
  const [introState, setIntroState] = useState<"visible" | "leaving" | "hidden">(
    "visible",
  );
  const [open, setOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(
      () => setIntroState("leaving"),
      reduceMotion ? 250 : 2850,
    );
    const hideTimer = window.setTimeout(
      () => setIntroState("hidden"),
      reduceMotion ? 300 : 3300,
    );

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (introState === "hidden") document.body.style.overflow = "";
  }, [introState]);

  const message = () =>
    `New project request%0A%0AName: ${encodeURIComponent(name)}%0A%0AProject details:%0A${encodeURIComponent(details)}`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !details.trim()) return;
    const m = message();
    window.open(`https://wa.me/989101836737?text=${m}`, "_blank", "noopener");
    window.open(
      `mailto:lak20ml@gmail.com?subject=${encodeURIComponent("New project request from " + name)}&body=${m}`,
      "_blank",
      "noopener",
    );
    window.open("https://t.me/lak_202", "_blank", "noopener");
    setSent(true);
  };

  return (
    <main className="flex min-h-screen w-full bg-background">
      {introState !== "hidden" && (
        <div
          className={cn(
            "portfolio-intro fixed inset-0 z-[100] flex min-h-[100dvh] items-center justify-center overflow-hidden bg-primary px-6 text-primary-foreground",
            introState === "leaving" && "portfolio-intro--leaving",
          )}
          role="status"
          aria-label="Loading Marziyeh Lak portfolio"
        >
          <div className="portfolio-intro__curtain" aria-hidden="true" />
          <div className="portfolio-intro__meta portfolio-intro__meta--top">
            Senior AI &amp; Full-Stack Engineer
          </div>
          <div className="portfolio-intro__word" aria-hidden="true">
            <span>Marziyeh Lak</span>
          </div>
          <div className="portfolio-intro__monogram" aria-hidden="true">
            <span>M</span>
            <span>L</span>
          </div>
          <div className="portfolio-intro__meta portfolio-intro__meta--bottom">
            Portfolio · 2026
          </div>
        </div>
      )}
      <div className="w-full border-x-2 border-foreground lg:w-[36rem] lg:shrink-0">
        {/* Header bar */}
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b-2 border-foreground bg-primary px-5 py-4">
          <div className="min-w-0">
            <p className="truncate text-xs font-bold uppercase tracking-widest text-primary-foreground/70">
              Hi
            </p>
            <p
              className="truncate font-display text-lg uppercase leading-none tracking-tight text-primary-foreground sm:text-xl"
              style={{ wordSpacing: "0.35em" }}
            >
              Marziyeh Lak
            </p>
            <p className="mt-1 truncate text-xs font-semibold text-primary-foreground/70">
              Senior AI &amp; Full-Stack Engineer
            </p>
          </div>
          <img
            src={portrait}
            alt="Portrait of Marziyeh Lak"
            className="h-12 w-12 shrink-0 rounded-full border-2 border-primary-foreground bg-muted object-cover object-top"
          />
        </header>

        {/* CTA strip */}
        <button
          onClick={() => setOpen(true)}
          className="block w-full border-b-2 border-foreground bg-secondary px-5 py-4 text-center font-display text-xl uppercase tracking-tight text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Get in touch
        </button>

        {/* Hero */}
        <section className="px-5 py-10 sm:py-14">
          <h1 className="font-display text-[2.6rem] uppercase leading-[0.92] tracking-tight text-foreground sm:text-6xl">
            Building AI
            <br />
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-1 h-3 bg-accent/70" aria-hidden="true" />
              <span className="relative">& Software</span>
            </span>
            <br />
            That Ships
          </h1>
          <p className="mt-5 max-w-md text-base font-medium text-muted-foreground">
            Senior engineer designing and shipping AI automation, ERP and product platforms
            end-to-end.
          </p>
          <div className="mx-auto mt-6 w-full max-w-[290px] border-2 border-foreground bg-muted sm:max-w-[330px]">
            <img
              src={portrait}
              alt="Black and white portrait of Marziyeh Lak"
              className="aspect-square w-full object-contain object-bottom"
              loading="eager"
            />
          </div>
        </section>

        {/* Services */}
        <section className="border-y-2 border-foreground bg-primary px-5 py-10">
          <h2 className="font-display text-3xl uppercase tracking-tight text-primary-foreground sm:text-4xl">
            Services
          </h2>
          <ul className="mt-6">
            {services.map((s, i) => (
              <ServiceItem key={s} s={s} i={i} />
            ))}
          </ul>
        </section>

        {/* Work */}
        <section className="px-5 py-10">
          <h2 className="font-display text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
            Selected Work
          </h2>
          <ul className="mt-6">
            {work.map((w) => (
              <li key={w.url}>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t-2 border-foreground py-4 transition-colors hover:bg-primary hover:px-3 hover:text-primary-foreground"
                >
                  <span className="min-w-0 break-words font-display text-lg uppercase leading-tight tracking-tight sm:text-2xl">
                    {w.label}
                  </span>
                  <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Brief */}
        <section className="border-t-2 border-foreground bg-accent px-5 py-10 text-center">
          <p className="mx-auto max-w-md font-display text-xl uppercase leading-tight tracking-tight text-accent-foreground sm:text-2xl">
            Please share your project details. I&apos;ll review them and send you the timeline and budget.
          </p>
          <button
            onClick={() => {
              setSent(false);
              setProjectOpen(true);
            }}
            className="mt-6 inline-flex items-center gap-2 border-2 border-foreground bg-secondary px-8 py-4 font-display text-sm uppercase tracking-[0.15em] text-secondary-foreground transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Get in touch
          </button>
        </section>

        <footer
          className="border-t-2 border-foreground bg-primary px-5 py-5 text-center font-display text-lg uppercase leading-none tracking-tight text-primary-foreground sm:text-xl"
          style={{ wordSpacing: "0.35em" }}
        >
          Marziyeh Lak
        </footer>
      </div>

      {/* Right-side portrait panel — fills the desktop viewport */}
      <aside className="relative hidden min-w-0 flex-1 lg:block" aria-hidden="true">
        <div className="sticky top-0 h-screen overflow-hidden">
          <img
            src={portrait}
            alt=""
            className="h-full w-full object-contain object-bottom grayscale"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 overflow-hidden border-t-2 border-foreground bg-primary px-5 py-4">
            <span className="min-w-0 truncate font-display text-sm uppercase tracking-[0.2em] text-primary-foreground">
              Marziyeh Lak
            </span>
            <span className="shrink-0 font-display text-sm uppercase tracking-[0.2em] text-primary-foreground">
              AI × Code
            </span>
          </div>
        </div>
      </aside>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm rounded-none border-2 border-foreground bg-popover">
          <DialogHeader>
            <DialogTitle className="font-display text-xl uppercase tracking-tight text-popover-foreground">
              Get in touch
            </DialogTitle>
            <DialogDescription className="text-popover-foreground/70">
              Pick a channel — it opens directly.
            </DialogDescription>
          </DialogHeader>
          <ul>
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 border-t border-popover-foreground/25 py-3 text-sm font-bold text-popover-foreground transition-colors hover:text-accent"
                >
                  <c.icon className="h-4 w-4 shrink-0" />
                  <span className="min-w-0 flex-1 truncate">{c.value}</span>
                  <span className="shrink-0 text-[0.65rem] uppercase tracking-widest opacity-60">
                    {c.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>

      <Dialog open={projectOpen} onOpenChange={setProjectOpen}>
        <DialogContent className="max-w-sm rounded-none border-2 border-foreground bg-popover">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl uppercase tracking-tight text-accent">
              Start your project
            </DialogTitle>
            <DialogDescription className="text-popover-foreground/70">
              Please share your project details. I&apos;ll review them and send you the
              timeline and budget.
            </DialogDescription>
          </DialogHeader>
          {sent ? (
            <div className="space-y-3">
              <p className="border-2 border-secondary bg-secondary/10 px-4 py-3 text-sm font-bold text-popover-foreground">
                Almost done — WhatsApp, Email and Telegram were opened. Just press send in
                each app.
              </p>
              <a
                href={`https://wa.me/989101836737?text=${message()}`}
                target="_blank"
                rel="noreferrer noopener"
                className="block border-2 border-foreground bg-secondary px-4 py-3 text-center font-display text-sm uppercase tracking-[0.15em] text-secondary-foreground"
              >
                Resend via WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-popover-foreground/70"
                >
                  Your name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  maxLength={100}
                  required
                  className="w-full border-2 border-foreground/60 bg-transparent px-4 py-3 text-sm font-bold text-popover-foreground placeholder:text-popover-foreground/40 focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="details"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-popover-foreground/70"
                >
                  Project details
                </label>
                <textarea
                  id="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="What are you building? Goals, features, deadline…"
                  maxLength={2000}
                  required
                  rows={5}
                  className="w-full resize-none border-2 border-foreground/60 bg-transparent px-4 py-3 text-sm font-bold text-popover-foreground placeholder:text-popover-foreground/40 focus:border-secondary focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t-2 border-secondary py-4 font-display text-base uppercase tracking-[0.15em] text-popover-foreground transition-colors hover:bg-secondary hover:px-3 hover:text-secondary-foreground"
              >
                <span>Send</span>
                <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
