import { SprigDivider } from "./FloralDecorations";

const journey = [
  {
    date: "February 2021",
    title: "A Message on Tinder",
    description:
      "“What fantasy books do you like?” — the best opening line ever.",
  },
  {
    date: "Early 2021",
    title: "Our First Date",
    description:
      "The Watermill Tea Room, where a cup of tea turned into the one.",
  },
  {
    date: "Summer 2021",
    title: "A Trip to Greece",
    description: "The summer that quietly sealed the feeling for good.",
  },
  {
    date: "2024",
    title: "Our First Home",
    description: "Moving in together — with Ares & Hera firmly in charge.",
  },
  {
    date: "Mount Penteli",
    title: "The Proposal",
    description: "A question asked on the mountain, with all of Athens below.",
  },
  {
    date: "21 August 2027",
    title: "We Say “I Do”",
    description:
      "On the beach at Galazia Akti, Schinias — our next chapter begins.",
  },
];

export default function OurStory() {
  return (
    <section id="our-story" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="font-script text-3xl text-cornflower md:text-4xl">
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
            very important question: <em>“what fantasy books do you like?”</em>
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

          <p className="pt-2 font-script text-3xl text-cornflower md:text-4xl">
            From one message to forever.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="mb-12 text-center font-script text-3xl text-cornflower">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-line md:block" />
            <div className="space-y-10">
              {journey.map((event, index) => (
                <div
                  key={event.title}
                  className={`flex flex-col items-center gap-4 md:flex-row md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex-1 text-center ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <p className="font-script text-2xl text-cornflower">
                      {event.date}
                    </p>
                    <h4 className="mt-1 font-display text-xl text-ink">
                      {event.title}
                    </h4>
                    <p className="mt-1 font-serif text-lg text-ink-soft">
                      {event.description}
                    </p>
                  </div>
                  <div className="z-10 h-3.5 w-3.5 shrink-0 rounded-full border-4 border-white bg-cornflower shadow-sm" />
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
