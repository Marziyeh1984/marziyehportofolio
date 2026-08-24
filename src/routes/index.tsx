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

  return (
    <main
      className="min-h-screen w-full px-5 py-10 sm:py-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto w-full max-w-xl">
        <section className="overflow-hidden rounded-lg border border-border bg-card/70 backdrop-blur-sm">
          <div className="flex items-center gap-4 border-b border-border p-5 sm:p-7">
            <img
              src={portrait.url}
              alt="Portrait of Marziyeh Lak"
              className="h-20 w-20 shrink-0 rounded-md object-cover ring-1 ring-accent/60 sm:h-24 sm:w-24"
              loading="eager"
            />
            <div>
              <h1 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
                Marziyeh Lak
              </h1>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
                Senior AI &amp; Full-Stack Engineer
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            <h2 className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
              My services
            </h2>
            <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              {services.map((s, i) => (
                <li key={s} className="flex items-baseline gap-2 text-sm">
                  <span className="font-display text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border p-5 sm:p-7">
            <h2 className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
              Some of my work
            </h2>
            <ul className="mt-3 space-y-2">
              {work.map((w) => (
                <li key={w.url}>
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between rounded-md border border-border px-4 py-3 text-sm transition-colors hover:border-accent hover:bg-secondary"
                  >
                    <span>{w.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border p-5 sm:p-7">
            <p className="text-sm text-muted-foreground">
              Write a full description of your project — I&apos;ll review it and send you a timeline
              and budget.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="mt-4 w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.01]"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Get in touch
            </button>
          </div>
        </section>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Marziyeh Lak
        </p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm border-border bg-popover">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Get in touch</DialogTitle>
            <DialogDescription>Pick a channel — it opens directly.</DialogDescription>
          </DialogHeader>
          <ul className="space-y-2">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 rounded-md border border-border px-4 py-3 text-sm transition-colors hover:border-accent hover:bg-secondary"
                >
                  <c.icon className="h-4 w-4 text-accent" />
                  <span className="flex-1">{c.value}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
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
