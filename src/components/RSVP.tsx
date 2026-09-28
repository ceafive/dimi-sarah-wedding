"use client";

import { useState } from "react";
import { SprigDivider } from "./FloralDecorations";

type Answer = "attending" | "not-attending" | "";

interface SubmitResponse {
  success: boolean;
  message: string;
}

const inputClass =
  "w-full border-0 border-b border-line bg-transparent px-1 py-2 text-center font-serif text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-cornflower";

interface GuestRow {
  name: string;
  isChild: boolean;
}

export default function RSVP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dietary, setDietary] = useState("");
  const [songRequest, setSongRequest] = useState("");
  const [additionalGuests, setAdditionalGuests] = useState<GuestRow[]>([]);
  const [answer, setAnswer] = useState<Answer>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResponse | null>(null);
  const [answerMissing, setAnswerMissing] = useState(false);

  const addGuestRow = () =>
    setAdditionalGuests((rows) => [...rows, { name: "", isChild: false }]);
  const updateGuestRow = (index: number, patch: Partial<GuestRow>) =>
    setAdditionalGuests((rows) =>
      rows.map((row, i) => (i === index ? { ...row, ...patch } : row)),
    );
  const removeGuestRow = (index: number) =>
    setAdditionalGuests((rows) => rows.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setAnswerMissing(false);

    if (!name.trim())
      return setResult({
        success: false,
        message: "Please add your details above and submit the form.",
      });
    if (!email.includes("@"))
      return setResult({
        success: false,
        message: "Please add a valid email.",
      });

    if (!answer) {
      setAnswerMissing(true);
      document
        .getElementById("rsvp-answer")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return setResult({
        success: false,
        message: "Please let us know if you'll be joining us for the night.",
      });
    }

    const attending = answer === "attending";
    const validGuests = additionalGuests.filter((g) => g.name.trim());

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          attendance: attending ? "attending" : "not-attending",
          guests: attending ? String(1 + validGuests.length) : "0",
          dietary: dietary.trim(),
          songRequest: songRequest.trim(),
          additionalGuests: attending ? validGuests : [],
          message: attending ? "Attending the full evening" : "Not attending",
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
      <section
        id="rsvp"
        className="relative scroll-mt-24 py-24 md:scroll-mt-28 md:py-28"
      >
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
    <section
      id="rsvp"
      className="relative scroll-mt-24 py-24 md:scroll-mt-28 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-display text-4xl text-ink md:text-5xl lg:text-6xl">
            RSVP
          </h2>
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

          <div className="mx-auto mb-4 grid max-w-md gap-6 sm:grid-cols-2">
            <input
              type="text"
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
              className={inputClass}
              placeholder="Dietary requirements"
              aria-label="Dietary requirements"
            />
            <input
              type="text"
              value={songRequest}
              onChange={(e) => setSongRequest(e.target.value)}
              className={inputClass}
              placeholder="Song request (TBC by DJ)"
              aria-label="Song request"
            />
          </div>

          {/* Bringing anyone else? Each extra guest can be marked a child. */}
          <div className="mx-auto max-w-md">
            {additionalGuests.map((guest, index) => (
              <div
                key={index}
                className="mt-4 flex items-center gap-2 border-b border-line pb-2"
              >
                <input
                  type="text"
                  value={guest.name}
                  onChange={(e) =>
                    updateGuestRow(index, { name: e.target.value })
                  }
                  className="w-full min-w-0 border-0 bg-transparent px-1 py-1 font-serif text-ink outline-none placeholder:text-ink-soft/50"
                  placeholder="Guest's full name"
                  aria-label={`Additional guest ${index + 1} name`}
                />
                <label className="flex shrink-0 items-center gap-1 font-serif text-xs uppercase text-ink-soft">
                  <input
                    type="checkbox"
                    checked={guest.isChild}
                    onChange={(e) =>
                      updateGuestRow(index, { isChild: e.target.checked })
                    }
                  />
                  Child
                </label>
                <button
                  type="button"
                  onClick={() => removeGuestRow(index)}
                  aria-label="Remove guest"
                  className="shrink-0 font-serif text-ink-soft transition-colors hover:text-rose"
                >
                  &times;
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addGuestRow}
              className="mt-4 font-serif text-xs uppercase tracking-caps text-cornflower underline decoration-line underline-offset-4 transition-colors hover:text-cornflower-dark"
            >
              + Add another guest
            </button>
          </div>

          {/* One RSVP, for the whole night */}
          <div id="rsvp-answer" className="mt-14 text-center">
            <h3 className="mb-3 font-display text-3xl text-ink md:text-4xl">
              Will you join us?
            </h3>
            <p className="mx-auto mb-8 max-w-xs font-serif text-base leading-relaxed text-ink-soft">
              This RSVP covers the whole evening — drinks, ceremony and
              reception together.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              {(
                [
                  ["attending", "Will Attend"],
                  ["not-attending", "Will Not Attend"],
                ] as const
              ).map(([value, label]) => {
                const active = answer === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setAnswer(value);
                      setAnswerMissing(false);
                    }}
                    className={`border px-6 py-3 font-serif text-xs uppercase tracking-caps transition-colors ${
                      active
                        ? "border-cornflower bg-cornflower text-white"
                        : answerMissing
                          ? "border-rose text-ink hover:border-cornflower"
                          : "border-line text-ink hover:border-cornflower"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            {answerMissing && (
              <p className="mt-3 font-serif text-xs text-rose">
                Please select one
              </p>
            )}
          </div>

          {result && !result.success && (
            <p className="mt-10 text-center font-serif text-rose text-4xl">
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
