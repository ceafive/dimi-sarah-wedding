"use client";

import { useState } from "react";
import { SprigDivider } from "./FloralDecorations";

// The three events guests scroll through — mirrors the reference RSVP page:
// two events take an RSVP, the reception is invitation-only (no buttons).
type RsvpEvent = {
  id: "welcome" | "ceremony" | "reception";
  name: string;
  date: string;
  time: string;
  venue: string;
  address: string[];
  note: string;
  rsvp: boolean;
  inviteNote?: string;
};

const events: RsvpEvent[] = [
  {
    id: "welcome",
    name: "Welcome Drinks",
    date: "Saturday, August 21, 2027",
    time: "8:15 PM",
    venue: "Galázia Aktí Schiniás",
    address: [
      "206 Leof. Poseidonos, 190 07",
      "Schinias Beach, Marathónas, Greece",
    ],
    note: "Homemade lemonade and a glass of something cold while we get ready.",
    rsvp: true,
  },
  {
    id: "ceremony",
    name: "Wedding Ceremony",
    date: "Saturday, August 21, 2027",
    time: "8:30 PM",
    venue: "Galázia Aktí Schiniás",
    address: ["The chapel, on the beach", "Schinias Beach, Marathónas, Greece"],
    note: "A few seats are set out for those who need them — otherwise just follow the crowd.",
    rsvp: true,
  },
  {
    id: "reception",
    name: "Wedding Reception",
    date: "Saturday, August 21, 2027",
    time: "9:30 PM",
    venue: "Galázia Aktí Schiniás",
    address: ["Right on the beach", "Schinias Beach, Marathónas, Greece"],
    note: "There’s an outdoor space that can get a little chilly at night — we recommend bringing a shawl or light jacket.",
    rsvp: false,
    inviteNote:
      "You are invited to the reception — dinner, drinks and dancing to follow our ceremony. Just take note of the details if you’re attending.",
  },
];

type Answer = "attending" | "not-attending" | "";

interface SubmitResponse {
  success: boolean;
  message: string;
}

function PencilIcon() {
  return (
    <svg
      className="inline h-3.5 w-3.5 text-ink-soft"
      fill="none"
      strokeWidth="1.5"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
    </svg>
  );
}

function NextEvent() {
  return (
    <div className="my-12 flex flex-col items-center">
      <p className="font-serif text-[0.7rem] uppercase tracking-caps text-ink-soft">
        Next Event
      </p>
      <span className="mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-bg">
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </div>
  );
}

const inputClass =
  "w-full border-0 border-b border-line bg-transparent px-1 py-2 text-center font-serif text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-cornflower";

export default function RSVP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<Record<RsvpEvent["id"], Answer>>({
    welcome: "",
    ceremony: "",
    reception: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResponse | null>(null);

  const requiredEvents = events.filter((e) => e.rsvp);
  const guestLabel = name.trim() ? name.trim().toUpperCase() : "Your Name";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);

    if (!name.trim())
      return setResult({ success: false, message: "Please add your name." });
    if (!email.includes("@"))
      return setResult({
        success: false,
        message: "Please add a valid email.",
      });
    if (requiredEvents.some((ev) => !answers[ev.id]))
      return setResult({
        success: false,
        message: "Please respond to each event that needs an RSVP.",
      });

    const anyAttending = requiredEvents.some(
      (ev) => answers[ev.id] === "attending",
    );
    const summary = requiredEvents
      .map(
        (ev) =>
          `${ev.name}: ${answers[ev.id] === "attending" ? "Attending" : "Not attending"}`,
      )
      .join(" · ");

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          attendance: anyAttending ? "attending" : "not-attending",
          guests: anyAttending ? "1" : "0",
          message: summary,
        }),
      });
      const data = await response.json();
      if (!response.ok)
        setResult({
          success: false,
          message: data.error || "Something went wrong. Please try again.",
        });
      else setResult({ success: true, message: data.message });
    } catch {
      setResult({
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (result?.success) {
    return (
      <section id="rsvp" className="relative py-24 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-ink md:text-5xl">
            Thank You
          </h2>
          <SprigDivider className="mt-6" />
          <p className="mt-8 font-serif text-lg text-ink-soft">
            {result.message}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-3xl">
        {/* Heading + intro */}
        <div className="text-center">
          <h2 className="font-display text-4xl text-ink md:text-5xl lg:text-6xl">
            RSVP
          </h2>
          <p className="mx-auto mt-6 max-w-md font-serif text-lg leading-relaxed text-ink-soft">
            We have invited you to 3 wedding events, 2 of which require your
            RSVP. Be sure to scroll all the way down.
          </p>
          <SprigDivider className="mt-8" />
        </div>

        <form onSubmit={handleSubmit} className="mt-12">
          {/* Your details — needed so we know who has replied */}
          <div className="mx-auto mb-4 grid max-w-md gap-6 sm:grid-cols-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              placeholder="Full name"
              aria-label="Full name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="Email address"
              aria-label="Email address"
            />
          </div>

          {events.map((event, index) => (
            <div key={event.id}>
              {/* Event title */}
              <h3 className="mt-14 mb-8 text-center font-display text-3xl text-ink md:text-4xl">
                {event.name}
              </h3>

              <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12">
                {/* Left — when & where */}
                <div className="text-center">
                  <p className="font-serif text-sm uppercase tracking-caps text-ink">
                    {event.date}
                  </p>
                  <p className="mt-3 font-serif text-sm uppercase tracking-caps text-ink-soft">
                    {event.time}
                  </p>
                  <p className="mt-5 font-display text-lg text-ink">
                    {event.venue}
                  </p>
                  {event.address.map((line) => (
                    <p
                      key={line}
                      className="font-serif text-base text-ink-soft"
                    >
                      {line}
                    </p>
                  ))}
                  <p className="mx-auto mt-5 max-w-xs font-serif text-base leading-relaxed text-ink-soft">
                    {event.note}
                  </p>
                </div>

                {/* Right — response */}
                <div className="text-center">
                  {event.rsvp ? (
                    <>
                      <p className="font-serif text-sm uppercase tracking-caps text-ink">
                        {guestLabel} <PencilIcon />
                      </p>
                      <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                        {(
                          [
                            ["attending", "Will Attend"],
                            ["not-attending", "Will Not Attend"],
                          ] as const
                        ).map(([value, label]) => {
                          const active = answers[event.id] === value;
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() =>
                                setAnswers((p) => ({ ...p, [event.id]: value }))
                              }
                              className={`border px-6 py-3 font-serif text-xs uppercase tracking-caps transition-colors ${
                                active
                                  ? "border-cornflower bg-cornflower text-white"
                                  : "border-line text-ink hover:border-cornflower"
                              }`}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="font-serif text-sm uppercase tracking-caps text-ink">
                        You are invited to the reception
                      </p>
                      <p className="mx-auto mt-5 max-w-xs font-serif text-base leading-relaxed text-ink-soft">
                        {event.inviteNote}
                      </p>
                    </>
                  )}
                </div>
              </div>

              {index < events.length - 1 && (
                <>
                  <NextEvent />
                  <div className="rule" />
                </>
              )}
            </div>
          ))}

          {result && !result.success && (
            <p className="mt-10 text-center font-serif text-sm text-rose">
              {result.message}
            </p>
          )}

          {/* Submit */}
          <div className="mt-12 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-ink px-12 py-3.5 font-serif text-xs uppercase tracking-caps text-ink transition-colors hover:bg-ink hover:text-bg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending…" : "Submit RSVP"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
