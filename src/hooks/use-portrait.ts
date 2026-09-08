import { useEffect, useState } from "react";

export const PORTRAIT_KEY = "portrait-override";

export function readPortrait(): string | null {
  try {
    return localStorage.getItem(PORTRAIT_KEY);
  } catch {
    return null;
  }
}

/** Returns the user-uploaded portrait (if any), otherwise the bundled fallback. */
export function usePortrait(fallback: string) {
  const [src, setSrc] = useState(fallback);

  useEffect(() => {
    const apply = () => setSrc(readPortrait() ?? fallback);
    apply();
    window.addEventListener("storage", apply);
    window.addEventListener("portrait-updated", apply);
    return () => {
      window.removeEventListener("storage", apply);
      window.removeEventListener("portrait-updated", apply);
    };
  }, [fallback]);

  return src;
}
