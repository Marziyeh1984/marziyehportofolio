import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowUpRight, Mail, Github, MessageCircle, Send, X } from "lucide-react";
import portrait from "@/assets/marziyeh-portrait.png.asset.json";

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
  "Blockchain-based platforms",
];

const work = [
  { label: "TradeMesh", url: "https://app.trademesh.com" },
  { label: "MoneyTribe21 Leaderboard", url: "https://leaderboard.moneytribe21.com" },
  { label: "We Are OI", url: "https://www.weareoi.com/" },
  { label: "Yuzu Omakase", url: "https://www.yuzuomakase.com/" },
];

const contacts = [
  { icon: Send, label: "Telegram", value: "@lak_202", url: "https://t.me/lak_202" },
  { icon: Mail, label: "Email", value: "lak20ml@gmail.com", url: "mailto:lak20ml@gmail.com" },
  { icon: Github, label: "GitHub", value: "capybara003", url: "https://github.com/capybara003" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+98 910 183 6737",
    url: "https://wa.me/989101836737",
  },
  { icon: X, label: "X", value: "@lak_202", url: "https://x.com/lak_202" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

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
    <main className="min-h-screen w-full bg-background">
      <div className="mx-auto w-full max-w-3xl border-x-2 border-foreground">
        {/* Header bar */}
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b-2 border-foreground bg-primary px-5 py-4">
          <div className="min-w-0">
            <p className="truncate font-display text-lg uppercase leading-none tracking-tight text-primary-foreground sm:text-xl">
              Marziyeh Lak
            </p>
            <p className="mt-1 truncate text-xs font-semibold text-primary-foreground/70">
              Senior AI &amp; Full-Stack Engineer
            </p>
          </div>
          <img
            src={portrait.url}
            alt="Portrait of Marziyeh Lak"
            className="h-12 w-12 shrink-0 rounded-full border-2 border-primary-foreground object-cover"
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
          <div className="mt-6 border-2 border-foreground bg-muted">
            <img
              src={portrait.url}
              alt="Black and white portrait of Marziyeh Lak"
              className="aspect-square w-full object-cover object-top"
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
              <li
                key={s}
                className="flex items-center gap-4 border-t-2 border-primary-foreground py-3 text-primary-foreground first:border-t-0"
              >
                <span className="font-display text-sm font-bold opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base uppercase tracking-tight text-primary-foreground">
                  {s}
                </span>
              </li>
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
            Write full details of your project — I&apos;ll review it and send a timeline and budget.
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

        <footer className="border-t-2 border-foreground bg-primary px-5 py-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
          © {new Date().getFullYear()} Marziyeh Lak
        </footer>
      </div>

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
    </main>
  );
}
