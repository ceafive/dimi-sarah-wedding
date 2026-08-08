"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Saturday 21 August 2027, doors at 20:15 — Athens local time (EEST, UTC+3)
const WEDDING_DATE = new Date("2027-08-21T20:15:00+03:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference = +WEDDING_DATE - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex scroll-mt-24 flex-col items-center justify-center pt-14 pb-24 md:scroll-mt-28 md:pt-20"
    >
      {/* The save-the-date card — rebuilt in HTML with the wedding fonts. */}
      <div className="relative w-[min(86vw,27.5rem)] lg:w-[min(80vw,36rem)] xl:w-[min(72vw,42rem)]">
        <div className="relative z-10 px-10 pb-16 pt-12 text-center sm:px-12 lg:px-16">
          <p className="font-display text-xl leading-snug text-ink md:text-2xl lg:text-3xl">
            <span className="underline decoration-1 underline-offset-[6px]">
              Bookmark the Date
            </span>
          </p>

          <h1 className="mt-9 font-display font-light leading-[1.04] text-ink lg:mt-11">
            <span className="block text-[3.25rem] md:text-6xl lg:text-7xl xl:text-8xl">
              Sarah
            </span>
            <span className="block text-3xl text-cornflower md:text-4xl lg:text-5xl">
              &amp;
            </span>
            <span className="block text-[3.25rem] md:text-6xl lg:text-7xl xl:text-8xl">
              Dimitris
            </span>
          </h1>

          <div className="mt-9 font-display text-ink lg:mt-11">
            <p className="text-xl md:text-2xl lg:text-3xl">Saturday</p>
            <p className="mt-1.5 text-lg tracking-wide md:text-xl lg:text-2xl">
              AUG <span className="text-ink-soft">|</span> 21{" "}
              <span className="text-ink-soft">|</span> 2027
            </p>
            <p className="mt-1.5 text-lg md:text-xl lg:text-2xl">
              Athens, Greece
            </p>
          </div>
        </div>
      </div>

      {/* Countdown */}
      <div className="mt-14 flex flex-col items-center">
        <p className="font-sans text-5xl text-cornflower md:text-6xl text-center">
          Counting down to forever
        </p>
        {mounted && (
          <div className="mt-6 flex gap-5 md:gap-8">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <span className="font-display text-3xl font-light text-ink md:text-5xl">
                  {item.value.toString().padStart(2, "0")}
                </span>
                <span className="mt-2 text-[10px] uppercase tracking-caps text-ink-soft md:text-xs">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to action */}
      <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
        <Link
          href="#rsvp"
          className="border border-ink px-10 py-3.5 font-serif text-xs uppercase tracking-caps text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          RSVP
        </Link>
        <Link
          href="#our-story"
          className="font-serif text-base italic text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-cornflower"
        >
          Read our story
        </Link>
      </div>
    </section>
  );
}
