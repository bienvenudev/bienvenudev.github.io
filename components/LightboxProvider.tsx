'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

/* ── Types ──────────────────────────────────────────────────── */
export interface LBImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ActiveSlide {
  img:   LBImage;
  index: number;
  total: number;
}

interface LBContextValue {
  register: (img: LBImage) => number;
  open: (index: number) => void;
}

/* ── Context ────────────────────────────────────────────────── */
const LBContext = createContext<LBContextValue>({
  register: () => 0,
  open:     () => {},
});

export function useLightbox() {
  return useContext(LBContext);
}

/* ── SVG icons ──────────────────────────────────────────────── */
function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  );
}
function IconLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function IconRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ── Provider ───────────────────────────────────────────────── */
export default function LightboxProvider({ children }: { children: ReactNode }) {
  /*
   * imagesRef holds the gallery.
   * We NEVER read imagesRef.current during render — only in callbacks/setters.
   * All render-needed data lives in the `slide` state.
   */
  const imagesRef = useRef<LBImage[]>([]);
  const [slide, setSlide] = useState<ActiveSlide | null>(null);

  /* Registration — idempotent (Strict Mode safe) */
  const register = useCallback((img: LBImage): number => {
    const existing = imagesRef.current.findIndex((i) => i.src === img.src);
    if (existing !== -1) return existing;
    const idx = imagesRef.current.length;
    imagesRef.current.push(img);
    return idx;
  }, []);

  /* Open — reads ref only inside an event handler */
  const open = useCallback((index: number) => {
    const img = imagesRef.current[index];
    if (!img) return;
    setSlide({ img, index, total: imagesRef.current.length });
  }, []);

  const close = useCallback(() => setSlide(null), []);

  /* prev / next — ref access inside a state-setter function (not render) */
  const prev = useCallback(() => {
    setSlide((s) => {
      if (!s || s.index <= 0) return s;
      const newIdx = s.index - 1;
      const img = imagesRef.current[newIdx];
      return img ? { img, index: newIdx, total: s.total } : s;
    });
  }, []);

  const next = useCallback(() => {
    setSlide((s) => {
      if (!s || s.index >= s.total - 1) return s;
      const newIdx = s.index + 1;
      const img = imagesRef.current[newIdx];
      return img ? { img, index: newIdx, total: s.total } : s;
    });
  }, []);

  /* Keyboard navigation */
  useEffect(() => {
    if (!slide) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [slide, prev, next, close]);

  /* Lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = slide ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [slide]);

  const btnBase = 'flex items-center justify-center text-white/70 hover:text-white transition-colors';
  const btnBg: React.CSSProperties = { background: 'rgba(255,255,255,0.10)' };

  return (
    <LBContext.Provider value={{ register, open }}>
      {children}

      {/* ── Lightbox overlay ────────────────────────────────── */}
      {slide && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={close}
        >
          {/* Counter */}
          <p className="absolute top-4 left-1/2 -translate-x-1/2 text-sm
                        font-medium text-white/60 select-none pointer-events-none">
            {slide.index + 1} / {slide.total}
          </p>

          {/* Close */}
          <button
            aria-label="Close"
            className={`absolute top-4 right-4 w-10 h-10 rounded-full ${btnBase}`}
            style={btnBg}
            onClick={close}
          >
            <IconClose />
          </button>

          {/* Prev */}
          {slide.index > 0 && (
            <button
              aria-label="Previous image"
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full ${btnBase}`}
              style={btnBg}
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <IconLeft />
            </button>
          )}

          {/* Next */}
          {slide.index < slide.total - 1 && (
            <button
              aria-label="Next image"
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full ${btnBase}`}
              style={btnBg}
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <IconRight />
            </button>
          )}

          {/* Image + caption */}
          <figure
            className="flex flex-col items-center gap-3 px-16 max-[600px]:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.img.src}
              alt={slide.img.alt}
              className="rounded-xl shadow-2xl"
              style={{
                maxWidth:  'min(calc(100vw - 8rem), 1200px)',
                maxHeight: '78vh',
                objectFit: 'contain',
              }}
            />
            {slide.img.caption && (
              <figcaption className="text-center">
                <p className="text-white font-semibold text-sm">
                  {slide.img.caption}
                </p>
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </LBContext.Provider>
  );
}
