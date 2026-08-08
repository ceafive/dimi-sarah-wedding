import { SprigDivider } from "./FloralDecorations";

type Hotel = { name: string; href: string; note?: string; airbnb?: boolean };

const hotels: Hotel[] = [
  { name: "Golden Coast", href: "https://goldencoast.gr/" },
  { name: "Cabo Verde", href: "https://www.caboverde.gr/" },
  {
    name: "Marathon Beach Resort",
    href: "https://www.marathonbeachresort.com/",
  },
  {
    name: "Airbnb near the venue",
    href: "https://tinyurl.com/59xshmbm",
    note: "Self-catering stays",
    airbnb: true,
  },
];

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      strokeWidth="1.5"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative scroll-mt-24 py-24 md:scroll-mt-28 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="font-sans text-4xl text-cornflower md:text-5xl">
            Where to find us
          </p>
          <h2 className="mt-1 font-display text-4xl text-ink md:text-5xl">
            The Venue
          </h2>
          {/* <SprigDivider className="mt-6" /> */}
        </div>

        {/* Venue card */}
        <div className="mx-auto max-w-2xl rounded-sm border border-line bg-cream px-8 py-10 text-center md:px-12">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-cornflower ring-1 ring-line">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </span>
          <h3 className="mt-5 font-display text-3xl text-ink md:text-4xl">
            Galázia Aktí Schiniás
          </h3>
          <p className="mt-3 font-serif text-xl leading-relaxed text-ink-soft">
            206 Leof. Poseidonos, 190 07
            <br />
            Schinias Beach, Marathónas (Nr Athens), Greece
          </p>
          <p className="mx-auto mt-4 max-w-md font-serif text-base italic text-ink-soft">
            Depending on where you stay, you may need a hired car or transport
            to reach the beach.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://maps.app.goo.gl/j8paf9Wv2gK9tDgX7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-cornflower px-5 py-3 text-xs font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-cornflower-dark sm:px-7 sm:text-sm sm:tracking-[0.14em]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              View on Google Maps
            </a>
            <a
              href="https://galaziaakti.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-cornflower px-5 py-3 text-xs font-medium uppercase tracking-[0.08em] text-cornflower transition-colors hover:bg-cornflower hover:text-white sm:px-7 sm:text-sm sm:tracking-[0.14em]"
            >
              Venue website
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Accommodation */}
        <div className="mt-20">
          <h3 className="mb-3 text-center font-sans text-4xl text-cornflower md:text-5xl">
            Where to Stay
          </h3>
          <p className="mx-auto mb-10 max-w-xl text-center font-serif text-lg text-ink-soft">
            A few places nearby on the Marathon and Nea Makri coast — book
            early, August fills up fast.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel) => (
              <a
                key={hotel.name}
                href={hotel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-sm border border-line bg-cream p-6 transition-shadow hover:shadow-md"
              >
                <h4 className="font-display text-xl leading-snug text-ink">
                  {hotel.name}
                </h4>
                <p className="mt-3 inline-flex items-center gap-1.5 font-serif text-base text-cornflower transition-colors group-hover:text-cornflower-dark">
                  {hotel.note ??
                    (hotel.airbnb ? "Browse on Airbnb" : "Visit website")}
                  <ArrowIcon />
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
