import { SprigDivider } from "./FloralDecorations";

export default function Footer() {
  return (
    <footer className="relative pb-20 pt-4">
      <div className="rule mx-auto max-w-2xl" />

      {/* Monogram + laurel, mirroring the reference's closing flourish */}
      <div className="mx-auto max-w-3xl px-2 pt-16 text-center">
        <h2 className="font-display text-3xl font-light tracking-wide text-ink md:text-4xl">
          S. <span className="text-cornflower">&amp;</span> D.
        </h2>
        <SprigDivider className="mt-6" />

        <p className="mt-9 font-script text-4xl text-cornflower md:text-5xl">
          Formal invitations to follow
        </p>
        <p className="mt-4 font-serif text-xs uppercase tracking-caps text-ink-soft">
          21 · 08 · 2027 · Galázia Aktí, Schinias Beach, Greece
        </p>
      </div>

      {/* Slim credit bar */}
      <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-2 border-t border-line px-4 pt-6 text-center sm:flex-row sm:text-left">
        <p className="font-serif text-xs uppercase tracking-caps text-ink-soft/80">
          Sarah &amp; Dimitris · 2027
        </p>
        <p className="font-serif text-xs uppercase tracking-caps text-ink-soft/80">
          Made with love for our big day
        </p>
      </div>
    </footer>
  );
}
