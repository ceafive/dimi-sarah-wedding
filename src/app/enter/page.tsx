"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function EnterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/site-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        setError("That's not quite right — check your invite and try again.");
        return;
      }
      router.push(searchParams.get("next") || "/");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs text-center">
      <p className="font-sans text-4xl text-cornflower md:text-5xl">
        Bookmark the Date
      </p>
      <h1 className="mt-2 font-display text-3xl text-ink md:text-4xl">
        Sarah <span className="text-cornflower">&amp;</span> Dimitris
      </h1>
      <p className="mx-auto mt-6 max-w-xs font-serif text-base text-ink-soft">
        Enter the password from your invitation to view the details.
      </p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mt-8 w-full border-0 border-b border-line bg-transparent px-1 py-2 text-center font-serif text-ink outline-none placeholder:text-ink-soft/50 focus:border-cornflower"
        autoFocus
      />
      {error && <p className="mt-3 font-serif text-sm text-rose">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 border border-ink px-10 py-3.5 font-serif text-xs uppercase tracking-caps text-ink transition-colors hover:bg-ink hover:text-bg disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Checking…" : "Enter"}
      </button>
    </form>
  );
}

export default function EnterPage() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center py-24">
      <Suspense fallback={null}>
        <EnterForm />
      </Suspense>
    </section>
  );
}
