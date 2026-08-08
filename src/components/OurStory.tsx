import { SprigDivider } from "./FloralDecorations";

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative scroll-mt-24 py-24 md:scroll-mt-28 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="font-sans text-4xl text-cornflower md:text-5xl">
            How it all began
          </p>
          <h2 className="mt-1 font-display text-4xl text-ink md:text-5xl">
            Our Story
          </h2>
          <SprigDivider className="mt-6" />
        </div>

        <div className="space-y-6 text-center">
          <p className="font-serif text-xl leading-relaxed text-ink-soft md:text-2xl">
            It started with a simple Tinder message in February 2021 — and one
            very important question: <em>“what fantasy books do you like?”</em>{" "}
            That was all it took. Our first date at the Watermill Tea Room
            quickly turned into something more, and Dimitris quietly realised
            he’d already found the one.
          </p>
          <p className="font-serif text-xl leading-relaxed text-ink-soft md:text-2xl">
            A trip to Greece that summer sealed the feeling, and from there life
            moved beautifully fast — leading to our first home together in 2024
            (with Ares and Hera firmly in charge). Balancing Dimitris’ love of
            planning with Sarah’s spontaneous, creative spirit, we’ve built a
            life full of laughter, gaming and just the right amount of chaos.
          </p>
          <p className="font-serif text-xl leading-relaxed text-ink-soft md:text-2xl">
            It all led to a proposal on Mount Penteli — and now to this next
            chapter, one we can’t wait to begin together.
          </p>

          <p className="pt-2 font-sans text-4xl text-cornflower md:text-5xl">
            From one message to forever.
          </p>
        </div>
      </div>
    </section>
  );
}
