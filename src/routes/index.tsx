import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  ArrowUpRight,
  Mail,
  Github,
  MessageCircle,
  Send,
  X,
  Globe,
  LineChart,
  Trophy,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";
import portrait from "@/assets/marziyeh.png.asset.json";

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
  { label: "TradeMesh", url: "https://app.trademesh.com", icon: LineChart },
  { label: "MoneyTribe21 Leaderboard", url: "https://leaderboard.moneytribe21.com", icon: Trophy },
  { label: "We Are OI", url: "https://www.weareoi.com/", icon: Globe },
  { label: "Yuzu Omakase", url: "https://www.yuzuomakase.com/", icon: UtensilsCrossed },
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

  return (
    <main
      className="min-h-screen w-full px-4 py-6 sm:py-10"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto w-full max-w-md">
        <img
          src={portrait.url}
          alt="Portrait of Marziyeh Lak"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
          loading="eager"
        />

        <div className="-mt-10 flex flex-col items-center text-center">
          <img
            src={portrait.url}
            alt=""
            aria-hidden="true"
            className="h-20 w-20 rounded-full border-4 border-primary object-cover"
          />
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary">
            Marziyeh Lak
          </h1>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            Senior AI &amp; Full-Stack Engineer
          </p>
        </div>

        <section className="mt-6">
          <h2 className="px-1 text-xs font-extrabold uppercase tracking-[0.25em] text-muted-foreground">
            My services
          </h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {services.map((s, i) => (
              <li
                key={s}
                className="flex items-center gap-2 rounded-2xl bg-card px-4 py-3 text-sm font-semibold text-primary"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-[0.65rem] font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="min-w-0">{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="px-1 text-xs font-extrabold uppercase tracking-[0.25em] text-muted-foreground">
            Some of my work
          </h2>
          <ul className="mt-3 space-y-3">
            {work.map((w, i) => (
              <li key={w.url}>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`group flex items-center gap-3 rounded-2xl px-4 py-4 transition-transform hover:scale-[1.01] ${
                    i % 2 === 0
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-foreground text-background">
                    <w.icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-base font-extrabold">
                    {w.label}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl bg-card p-5 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Write a full description of your project — I&apos;ll review it and send you a timeline
            and budget.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.01]"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <Sparkles className="h-4 w-4" />
            Get in touch
          </button>
        </section>

        <p className="mt-6 text-center text-xs font-semibold text-muted-foreground">
          © {new Date().getFullYear()} Marziyeh Lak
        </p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm rounded-3xl border-border bg-popover">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-primary">Get in touch</DialogTitle>
            <DialogDescription>Pick a channel — it opens directly.</DialogDescription>
          </DialogHeader>
          <ul className="space-y-2">
            {contacts.map((c, i) => (
              <li key={c.label}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold ${
                    i % 2 === 0
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <c.icon className="h-4 w-4 shrink-0" />
                  <span className="min-w-0 flex-1 truncate">{c.value}</span>
                  <span className="shrink-0 text-[0.65rem] uppercase tracking-widest opacity-80">
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
