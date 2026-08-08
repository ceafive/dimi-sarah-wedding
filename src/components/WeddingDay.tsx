import { SprigDivider } from "./FloralDecorations";

export default function WeddingDay() {
  const events = [
    {
      time: "20:15",
      title: "Welcome Drinks",
      description:
        "Grab a homemade lemonade or a glass of cold water while we get ready.",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          strokeWidth="1.4"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 3h12l-1.2 13.2A3 3 0 0113.81 19H10.2a3 3 0 01-2.99-2.8L6 3zM5.5 7h13" />
          <path d="M12 19v2m-3 0h6" />
        </svg>
      ),
    },
    {
      time: "20:30",
      title: "Wedding Ceremony",
      description:
        "In the chapel. A few seats are set out for those who need to sit. There’s a stand with rice & flower petals — if you’re not sure what to do, just follow the crowd.",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          strokeWidth="1.4"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      time: "21:00",
      title: "Cocktail Hour & Canapés",
      description:
        "A few bites to get you going, plus a signature cocktail or a glass of bubbly.",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          strokeWidth="1.4"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 4h14l-7 8-7-8zM12 12v6m-3 0h6" />
        </svg>
      ),
    },
    {
      time: "21:30",
      title: "Wedding Reception",
      description:
        "We’ll be seated outside, right on the beach — it can get chilly at night, so bring a shawl or something cosy. Dinner and drinks all around.",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          strokeWidth="1.4"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 3v8a3 3 0 003 3v7M8 3v6M5 6h3M19 3c-1.5 1-2.5 3-2.5 6 0 2 1 3 2.5 3v9" />
        </svg>
      ),
    },
    {
      time: "Later",
      title: "Open Bar",
      description:
        "As soon as the food disappears, the bar opens — with three signature cocktails to choose from.",
      icon: (
        <svg
          className="h-7 w-7"
          fill="none"
          strokeWidth="1.4"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="wedding-day" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="font-script text-3xl text-cornflower md:text-4xl">
            The order of the day
          </p>
          <h2 className="mt-1 font-display text-4xl text-ink md:text-5xl">
            Wedding Day
          </h2>
          <SprigDivider className="mt-6" />
          <p className="mt-6 font-serif text-xl italic text-ink-soft">
            Saturday · 21 August 2027
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          {events.map((event, index) => (
            <div key={event.title}>
              <div className="flex flex-col items-center text-center">
                <span className="text-cornflower">{event.icon}</span>
                <p className="mt-4 font-serif text-sm uppercase tracking-caps text-ink-soft">
                  {event.time}
                </p>
                <h3 className="mt-2 font-display text-2xl text-ink md:text-3xl">
                  {event.title}
                </h3>
                <p className="mx-auto mt-3 max-w-md font-serif text-base leading-relaxed text-ink-soft">
                  {event.description}
                </p>
              </div>
              {index < events.length - 1 && <div className="rule my-10" />}
            </div>
          ))}
        </div>

        {/* Good to know */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-xl rounded-sm border border-line bg-cream px-10 py-7">
            <p className="font-script text-2xl text-cornflower">Good to know</p>
            <p className="mt-2 font-serif text-lg leading-relaxed text-ink-soft">
              We’re right on the beach, so the evening can get cool once the sun
              is down. Bring a shawl or a light layer, and shoes you’re happy to
              wear near the sand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
