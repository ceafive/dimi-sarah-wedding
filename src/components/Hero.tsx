"use client";

import { useEffect, useState } from "react";

// Set your wedding date here
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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Decorative floral elements - placeholder for custom designs */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#9CAF88]">
          <path
            fill="currentColor"
            d="M40,120 Q60,80 100,60 Q80,100 60,140 Q40,160 40,120 M100,60 Q140,40 160,80 Q120,80 100,60"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#9CAF88]">
          <path
            fill="currentColor"
            d="M40,120 Q60,80 100,60 Q80,100 60,140 Q40,160 40,120 M100,60 Q140,40 160,80 Q120,80 100,60"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="text-center z-10">
        <p className="text-[#9CAF88] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
          We&apos;re getting married
        </p>

        <h1 className="font-[family-name:var(--font-serif)] text-6xl md:text-8xl lg:text-9xl font-light text-[#3D3D3D] mb-2">
          Dimi
        </h1>
        <p className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[#C9A962] my-4">
          &
        </p>
        <h1 className="font-[family-name:var(--font-serif)] text-6xl md:text-8xl lg:text-9xl font-light text-[#3D3D3D] mb-8">
          Sarah
        </h1>

        <div className="w-24 h-px bg-[#C9A962] mx-auto mb-8" />

        <p className="font-[family-name:var(--font-serif)] text-xl md:text-2xl text-[#5A5A5A] mb-12">
          23rd August 2025 • London, UK
        </p>

        {/* Countdown Timer */}
        {mounted && (
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center bg-white/50 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[70px] md:min-w-[90px] shadow-sm"
              >
                <span className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl font-semibold text-[#3D3D3D]">
                  {item.value.toString().padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm uppercase tracking-wider text-[#5A5A5A] mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#9CAF88]"
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
