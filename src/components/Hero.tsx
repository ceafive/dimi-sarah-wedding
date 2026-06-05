"use client";

import { useEffect, useState } from "react";
import { FlowerTop, FlowerBottom, FlowerLeft, FlowerRight } from "./FloralDecorations";

const WEDDING_DATE = new Date("2025-08-23T14:00:00");

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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#eef4f8]"
    >
      {/* Top flowers */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <FlowerTop />
      </div>

      {/* Bottom flowers */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <FlowerBottom />
      </div>

      {/* Left flowers */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-24 md:w-40 lg:w-52">
        <FlowerLeft />
      </div>

      {/* Right flowers */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-24 md:w-40 lg:w-52">
        <FlowerRight />
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center text-center px-8 py-32 max-w-2xl mx-auto">
        {/* Bookmark the Date header */}
        <p
          className="font-[family-name:var(--font-script)] text-4xl md:text-5xl text-[#8bb5c7] mb-3"
          style={{ lineHeight: 1.2 }}
        >
          Bookmark the Date
        </p>

        {/* Ornamental divider */}
        <div className="flex items-center gap-3 mb-8 w-48">
          <div className="h-px flex-1 bg-[#b8d2de]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4a840]" />
          <div className="h-px flex-1 bg-[#b8d2de]" />
        </div>

        {/* Names */}
        <h1
          className="font-[family-name:var(--font-serif)] font-light text-[#231f20] leading-none"
          style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
        >
          Dimi
        </h1>

        <p
          className="font-[family-name:var(--font-script)] text-[#d4a840] my-2"
          style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: 1.2 }}
        >
          &amp;
        </p>

        <h1
          className="font-[family-name:var(--font-serif)] font-light text-[#231f20] leading-none"
          style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
        >
          Sarah
        </h1>

        {/* Ornamental divider */}
        <div className="flex items-center gap-3 mt-8 mb-8 w-64">
          <div className="h-px flex-1 bg-[#b8d2de]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4a840]" />
          <div className="w-1 h-1 rounded-full bg-[#8bb5c7]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4a840]" />
          <div className="h-px flex-1 bg-[#b8d2de]" />
        </div>

        {/* Date */}
        <p className="font-[family-name:var(--font-script)] text-[#6ea0b8] text-2xl md:text-3xl mb-2">
          AUG &nbsp;|&nbsp; 23 &nbsp;|&nbsp; 2025
        </p>

        {/* Location */}
        <p className="font-[family-name:var(--font-serif)] text-[#231f20]/70 tracking-widest uppercase text-sm md:text-base mb-10">
          London, UK
        </p>

        {/* Countdown Timer */}
        {mounted && (
          <div className="flex justify-center gap-3 md:gap-6 mb-10">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center bg-white/70 backdrop-blur-sm rounded-xl p-3 md:p-5 min-w-[64px] md:min-w-[84px] shadow-sm border border-[#b8d2de]/40"
              >
                <span className="font-[family-name:var(--font-serif)] text-2xl md:text-4xl font-semibold text-[#231f20]">
                  {item.value.toString().padStart(2, "0")}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#8bb5c7] mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Formal invitations note */}
        <p className="font-[family-name:var(--font-serif)] italic text-[#231f20]/50 text-sm tracking-wide">
          Formal invitations to follow
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg
          className="w-5 h-5 text-[#8bb5c7]"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
