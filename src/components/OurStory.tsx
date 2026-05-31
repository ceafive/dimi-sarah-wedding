export default function OurStory() {
  return (
    <section id="our-story" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#9CAF88] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            How it all began
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#3D3D3D] mb-4">
            Our Story
          </h2>
          <div className="w-16 h-px bg-[#C9A962] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="aspect-[4/5] bg-[#E8DCD5] rounded-lg flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <svg
                className="w-16 h-16 text-[#9CAF88] mx-auto mb-4"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="text-[#5A5A5A] text-sm">Engagement Photo</p>
            </div>
          </div>

          {/* Story text */}
          <div className="space-y-6">
            <p className="text-[#5A5A5A] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-[#5A5A5A] leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-[#5A5A5A] leading-relaxed">
              And now, we can&apos;t wait to celebrate this next chapter with
              all of you — the people who have loved and supported us along the
              way.
            </p>

            <div className="pt-4">
              <p className="font-[family-name:var(--font-serif)] text-2xl text-[#C9A962] italic">
                &ldquo;Every love story is beautiful, but ours is our
                favourite.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="font-[family-name:var(--font-serif)] text-2xl text-center text-[#3D3D3D] mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E8DCD5] -translate-x-1/2 hidden md:block" />

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
                    <p className="text-[#9CAF88] text-sm font-medium mb-1">
                      {event.date}
                    </p>
                    <h4 className="font-[family-name:var(--font-serif)] text-xl text-[#3D3D3D] mb-1">
                      {event.title}
                    </h4>
                    <p className="text-[#5A5A5A] text-sm">
                      {event.description}
                    </p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#C9A962] border-4 border-[#FAF8F5] shadow-sm z-10" />
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
