"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SprigDivider } from "./FloralDecorations";

const photos = [
  "/photos/photo-01.jpeg",
  "/photos/photo-02.jpeg",
  "/photos/photo-03.jpeg",
  "/photos/photo-04.jpeg",
  "/photos/photo-05.jpeg",
  "/photos/photo-06.jpeg",
  "/photos/photo-07.jpeg",
  "/photos/photo-08.jpeg",
];

const FLIP_MS = 550;

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d={
          direction === "left"
            ? "M15.75 19.5L8.25 12l7.5-7.5"
            : "M8.25 4.5l7.5 7.5-7.5 7.5"
        }
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

type Flip = { from: number; to: number; dir: "next" | "prev" } | null;

const SWIPE_THRESHOLD = 55;

// A page-turning "album": the visible page (`index`) sits underneath, and a
// flipping leaf carrying the outgoing photo rotates away on a 3D hinge to
// reveal it — origin on the left for "next", on the right for "prev".
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState<Flip>(null);
  const [turned, setTurned] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef(0);

  const go = useCallback(
    (dir: "next" | "prev") => {
      if (flip) return;
      const to =
        dir === "next"
          ? (index + 1) % photos.length
          : (index - 1 + photos.length) % photos.length;
      setFlip({ from: index, to, dir });
      setTurned(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setTurned(true)));
      timeoutRef.current = setTimeout(() => {
        setIndex(to);
        setFlip(null);
        setTurned(false);
      }, FLIP_MS);
    },
    [flip, index],
  );

  const goPrev = useCallback(() => go("prev"), [go]);
  const goNext = useCallback(() => go("next"), [go]);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, goPrev, goNext]);

  // Peek animation: the first time the album scrolls into view on a touch
  // device, nudge it side to side so it reads as swipeable.
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouch || !sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHint(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    if (flip) return;
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setDragX(e.touches[0].clientX - touchStartX.current);
  };
  const onTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX <= -SWIPE_THRESHOLD) go("next");
    else if (dragX >= SWIPE_THRESHOLD) go("prev");
    setDragX(0);
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative scroll-mt-24 py-24 md:scroll-mt-28 md:py-28"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <p className="font-sans text-4xl text-cornflower md:text-5xl">
            A few of our favourites
          </p>
          <h2 className="mt-1 font-display text-4xl text-ink md:text-5xl">
            Gallery
          </h2>
          <SprigDivider className="mt-6" />
        </div>

        {/* Album */}
        <div className="relative mx-auto w-full max-w-md">
          <div
            className={`relative aspect-3/4 w-full touch-pan-y rounded-sm bg-cream shadow-md ring-1 ring-line ${
              showHint ? "animate-swipe-hint" : ""
            }`}
            style={{
              perspective: "1800px",
              transform: dragX ? `translateX(${dragX}px)` : undefined,
              transition: isDragging ? "none" : "transform 300ms ease",
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Base page — always the settled photo underneath */}
            <button
              type="button"
              onClick={() => !flip && setLightboxOpen(true)}
              className="absolute inset-0 cursor-zoom-in overflow-hidden rounded-sm"
              aria-label="Open photo"
            >
              <Image
                src={photos[flip ? flip.to : index]}
                alt={`Sarah and Dimitris, photo ${(flip ? flip.to : index) + 1}`}
                fill
                sizes="(min-width: 768px) 28rem, 90vw"
                className="object-cover"
                priority
              />
            </button>

            {/* Flipping leaf — the outgoing photo, hinged at the edge and
                turning away in 3D to reveal the base page beneath it. */}
            {flip && (
              <div
                className="absolute inset-0 overflow-hidden rounded-sm shadow-lg"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: flip.dir === "next" ? "left center" : "right center",
                  transform: `rotateY(${
                    turned ? (flip.dir === "next" ? "-165deg" : "165deg") : "0deg"
                  })`,
                  transition: `transform ${FLIP_MS}ms cubic-bezier(0.45, 0, 0.55, 1)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <Image
                  src={photos[flip.from]}
                  alt={`Sarah and Dimitris, photo ${flip.from + 1}`}
                  fill
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover"
                />
                {/* Shading that darkens as the leaf turns, like a real page */}
                <div
                  className="absolute inset-0 bg-ink transition-opacity"
                  style={{
                    opacity: turned ? 0.35 : 0,
                    transitionDuration: `${FLIP_MS}ms`,
                  }}
                />
              </div>
            )}

            {/* Spine shadow for a book-like feel */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-linear-to-r from-ink/15 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-linear-to-l from-ink/15 to-transparent" />

            {/* Swipe affordance — shown once, alongside the peek nudge */}
            {showHint && (
              <div className="animate-swipe-hint-fade pointer-events-none absolute inset-x-0 bottom-5 flex justify-center">
                <span className="flex items-center gap-2 rounded-full bg-ink/70 px-4 py-1.5 font-serif text-xs uppercase tracking-caps text-white">
                  <ChevronIcon direction="left" />
                  Swipe
                  <ChevronIcon direction="right" />
                </span>
              </div>
            )}
          </div>

          {/* Prev / Next — desktop only; mobile is swipe-only (see the peek hint) */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow-sm ring-1 ring-line transition-colors hover:bg-white hover:text-cornflower sm:block"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow-sm ring-1 ring-line transition-colors hover:bg-white hover:text-cornflower sm:block"
          >
            <ChevronIcon direction="right" />
          </button>

          {/* Dots — position indicator everywhere, but only tappable to jump
              on desktop; mobile navigates by swipe alone. */}
          <div className="pointer-events-none mt-5 flex justify-center gap-2 sm:pointer-events-auto">
            {photos.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => !flip && setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  (flip ? flip.to : index) === i
                    ? "bg-cornflower"
                    : "bg-line hover:bg-ink-soft"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setLightboxOpen(false)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (dx <= -SWIPE_THRESHOLD) goNext();
            else if (dx >= SWIPE_THRESHOLD) goPrev();
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute right-5 top-5 text-white/80 transition-colors hover:text-white"
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:block sm:left-6"
          >
            <ChevronIcon direction="left" />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[flip ? flip.to : index]}
              alt={`Sarah and Dimitris, photo ${(flip ? flip.to : index) + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:block sm:right-6"
          >
            <ChevronIcon direction="right" />
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-serif text-xs uppercase tracking-caps text-white/70">
            {(flip ? flip.to : index) + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
}
