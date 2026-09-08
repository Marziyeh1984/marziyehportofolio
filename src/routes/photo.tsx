import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PORTRAIT_KEY, readPortrait } from "@/hooks/use-portrait";
import portraitAsset from "@/assets/marziyeh-profile-balanced.jpg.asset.json";

export const Route = createFileRoute("/photo")({
  head: () => ({
    meta: [
      { title: "Photo Studio — Marziyeh Lak" },
      {
        name: "description",
        content: "Upload, crop and save the profile portrait used across the site.",
      },
      { property: "og:title", content: "Photo Studio — Marziyeh Lak" },
      {
        property: "og:description",
        content: "Upload, crop and save the profile portrait used across the site.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PhotoStudio,
});

const BOX = 320; // preview frame size in px
const OUT = 900; // exported image size in px

function PhotoStudio() {
  const [file, setFile] = useState<string | null>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [saved, setSaved] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  useEffect(() => {
    setSaved(readPortrait());
  }, []);

  useEffect(() => {
    if (!file) return;
    const i = new Image();
    i.onload = () => {
      setImg(i);
      setZoom(1);
      setOffset({ x: 0, y: 0 });
    };
    i.src = file;
  }, [file]);

  const pick = (f: File | undefined) => {
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setFile(String(r.result));
    r.readAsDataURL(f);
  };

  // base scale = cover the square frame
  const base = img ? Math.max(BOX / img.width, BOX / img.height) : 1;
  const scale = base * zoom;

  const onDown = (x: number, y: number) => {
    drag.current = { x, y, ox: offset.x, oy: offset.y };
  };
  const onMove = (x: number, y: number) => {
    const d = drag.current;
    if (!d) return;
    setOffset({ x: d.ox + (x - d.x), y: d.oy + (y - d.y) });
  };
  const onUp = () => {
    drag.current = null;
  };

  const save = () => {
    if (!img) return;
    const c = document.createElement("canvas");
    c.width = OUT;
    c.height = OUT;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const k = OUT / BOX;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, OUT, OUT);
    const w = img.width * scale * k;
    const h = img.height * scale * k;
    ctx.drawImage(img, (OUT - w) / 2 + offset.x * k, (OUT - h) / 2 + offset.y * k, w, h);
    const data = c.toDataURL("image/jpeg", 0.9);
    try {
      localStorage.setItem(PORTRAIT_KEY, data);
      setSaved(data);
      window.dispatchEvent(new Event("portrait-updated"));
      setStatus("Saved — your photo is now used across the site.");
    } catch {
      setStatus("Image too large to store. Zoom out a little and try again.");
    }
  };

  const reset = () => {
    localStorage.removeItem(PORTRAIT_KEY);
    setSaved(null);
    window.dispatchEvent(new Event("portrait-updated"));
    setStatus("Reverted to the default photo.");
  };

  return (
    <main className="min-h-screen w-full bg-background px-5 py-10">
      <div className="mx-auto w-full max-w-md">
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-display text-3xl uppercase tracking-tight text-foreground">
            Photo studio
          </h1>
          <Link
            to="/"
            className="border-2 border-foreground px-3 py-2 text-xs font-bold uppercase tracking-widest text-foreground"
          >
            Back
          </Link>
        </div>
        <p className="mt-3 text-sm font-medium text-muted-foreground">
          Upload a photo, drag to position it and zoom until it sits right inside the square.
        </p>

        <label className="mt-6 block cursor-pointer border-2 border-foreground bg-primary px-5 py-4 text-center font-display text-sm uppercase tracking-[0.15em] text-primary-foreground">
          Choose a photo
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => pick(e.target.files?.[0])}
          />
        </label>

        <div
          className="mx-auto mt-6 touch-none overflow-hidden border-2 border-foreground bg-muted"
          style={{ width: BOX, height: BOX }}
          onMouseDown={(e) => onDown(e.clientX, e.clientY)}
          onMouseMove={(e) => onMove(e.clientX, e.clientY)}
          onMouseUp={onUp}
          onMouseLeave={onUp}
          onTouchStart={(e) => {
            const t = e.touches[0];
            if (t) onDown(t.clientX, t.clientY);
          }}
          onTouchMove={(e) => {
            const t = e.touches[0];
            if (t) onMove(t.clientX, t.clientY);
          }}
          onTouchEnd={onUp}
        >
          {img ? (
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `url(${file})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${img.width * scale}px ${img.height * scale}px`,
                backgroundPosition: `calc(50% + ${offset.x}px) calc(50% + ${offset.y}px)`,
              }}
            />
          ) : (
            <img
              src={saved ?? portraitAsset.url}
              alt="Current profile portrait"
              className="h-full w-full object-cover object-top"
            />
          )}
        </div>

        {img && (
          <div className="mt-5">
            <label
              htmlFor="zoom"
              className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground"
            >
              Zoom
            </label>
            <input
              id="zoom"
              type="range"
              min={1}
              max={3}
              step={0.01}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full accent-accent"
            />
          </div>
        )}

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={save}
            disabled={!img}
            className="border-2 border-foreground bg-secondary px-4 py-3 font-display text-sm uppercase tracking-[0.15em] text-secondary-foreground disabled:opacity-40"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Save photo
          </button>
          <button
            onClick={reset}
            className="border-2 border-foreground px-4 py-3 font-display text-sm uppercase tracking-[0.15em] text-foreground"
          >
            Use default
          </button>
        </div>

        {status && (
          <p className="mt-4 border-2 border-foreground bg-accent px-4 py-3 text-sm font-bold text-accent-foreground">
            {status}
          </p>
        )}
      </div>
    </main>
  );
}
