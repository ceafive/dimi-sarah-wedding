import { SectionDivider } from "./FloralDecorations";

export default function WeddingDay() {
  const events = [
    {
      time: "14:00",
      title: "Ceremony",
      description: "Join us as we exchange our vows and say 'I do'",
      icon: (
        <svg className="w-8 h-8" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      time: "15:00",
      title: "Drinks Reception",
      description: "Celebrate with champagne and canapés in the garden",
      icon: (
        <svg className="w-8 h-8" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      time: "17:00",
      title: "Wedding Breakfast",
      description: "A delicious three-course meal with speeches",
      icon: (
        <svg className="w-8 h-8" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m18-4.5a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      time: "20:00",
      title: "Evening Reception",
      description: "Dance the night away with live music and entertainment",
      icon: (
        <svg className="w-8 h-8" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
        </svg>
      ),
    },
    {
      time: "00:00",
      title: "Carriages",
      description: "Time to say goodnight!",
      icon: (
        <svg className="w-8 h-8" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="wedding-day" className="py-24 px-6 bg-[#f5f8fa]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-script)] text-[#8bb5c7] text-2xl mb-2">
            The Schedule
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#231f20] mb-6">
            Wedding Day
          </h2>
          <SectionDivider />
          <p className="font-[family-name:var(--font-serif)] text-[#231f20]/60 mt-6">
            Saturday, 23rd August 2025
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#b8d2de] md:-translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.title}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#8bb5c7] border-4 border-[#f5f8fa] -translate-x-1/2 z-10 mt-6" />

                {/* Content card */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#b8d2de]/20">
                    <div className="flex items-start gap-4">
                      <div className="text-[#8bb5c7]">{event.icon}</div>
                      <div className="flex-1">
                        <p className="font-[family-name:var(--font-script)] text-[#d4a840] text-xl mb-1">
                          {event.time}
                        </p>
                        <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#231f20] mb-2">
                          {event.title}
                        </h3>
                        <p className="font-[family-name:var(--font-serif)] text-[#231f20]/60 text-sm">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Dress code */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-white rounded-xl px-12 py-8 shadow-sm border border-[#b8d2de]/30">
            <p className="font-[family-name:var(--font-script)] text-[#8bb5c7] text-xl mb-1">
              Attire
            </p>
            <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#231f20] mb-2">
              Dress Code
            </h3>
            <p className="font-[family-name:var(--font-serif)] text-[#d4a840] font-medium text-lg">
              Formal / Black Tie Optional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
