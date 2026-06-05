import { SectionDivider } from "./FloralDecorations";

export default function OurStory() {
  return (
    <section id="our-story" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-script)] text-[#8bb5c7] text-2xl mb-2">
            How it all began
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#231f20] mb-6">
            Our Story
          </h2>
          <SectionDivider />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="aspect-[4/5] bg-[#b8d2de]/20 rounded-lg flex items-center justify-center overflow-hidden border border-[#b8d2de]/40">
            <div className="text-center p-8">
              <svg
                className="w-16 h-16 text-[#8bb5c7] mx-auto mb-4"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="text-[#8bb5c7] text-sm font-[family-name:var(--font-serif)]">Engagement Photo</p>
            </div>
          </div>

          {/* Story text */}
          <div className="space-y-6">
            <p className="font-[family-name:var(--font-serif)] text-[#231f20]/70 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[#231f20]/70 leading-relaxed text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="font-[family-name:var(--font-serif)] text-[#231f20]/70 leading-relaxed text-lg">
              And now, we can&apos;t wait to celebrate this next chapter with
              all of you — the people who have loved and supported us along the
              way.
            </p>

            <div className="pt-4">
              <p className="font-[family-name:var(--font-script)] text-2xl text-[#d4a840]" style={{ lineHeight: 1.4 }}>
                &ldquo;Every love story is beautiful, but ours is our
                favourite.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="font-[family-name:var(--font-script)] text-3xl text-center text-[#8bb5c7] mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#b8d2de] -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {[
                {
                  date: "June 2020",
                  title: "We First Met",
                  description: "At a mutual friend's gathering in London",
                },
                {
                  date: "December 2020",
                  title: "First Date",
                  description: "A cozy dinner at a little Italian restaurant",
                },
                {
                  date: "March 2024",
                  title: "The Proposal",
                  description: "Under the stars in Santorini, Greece",
                },
                {
                  date: "August 2025",
                  title: "The Wedding",
                  description: "Our forever begins...",
                },
              ].map((event, index) => (
                <div
                  key={event.date}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex-1 text-center ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <p className="font-[family-name:var(--font-script)] text-[#8bb5c7] text-xl mb-1">
                      {event.date}
                    </p>
                    <h4 className="font-[family-name:var(--font-serif)] text-xl text-[#231f20] mb-1">
                      {event.title}
                    </h4>
                    <p className="font-[family-name:var(--font-serif)] text-[#231f20]/60 text-sm">
                      {event.description}
                    </p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#d4a840] border-4 border-white shadow-sm z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
