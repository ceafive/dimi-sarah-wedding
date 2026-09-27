import Image from "next/image";
import { SprigDivider } from "./FloralDecorations";

type Hotel = {
  name: string;
  href: string;
  note?: string;
  airbnb?: boolean;
  image?: string;
};

const hotels: Hotel[] = [
  {
    name: "Zeus Essence Ramada Athens",
    href: "https://www.zeusintl.com/zeus-essence-ramada-athens",
    image: "/hotels/zeus-essence.jpg",
  },
  {
    name: "Ramada Athens Club Attica Riviera",
    href: "https://www.wyndhamhotels.com/ramada/nea-makri-greece/ramada-athens-club-attica-riviera/overview?CID=LC:wmcic5n98gs1g0r:51120&iata=00093796",
    image: "/hotels/ramada-attica-riviera.jpg",
  },
  {
    name: "NLH Athens-Mati",
    href: "https://www.nlh.gr/hotels/athens-mati/",
    image: "/hotels/nlh-athens-mati.jpg",
  },
  {
    name: "Cabo Verde",
    href: "https://www.caboverde.gr/",
    image: "/hotels/cabo-verde.jpg",
  },
  {
    name: "Marathon Beach Resort",
    href: "https://www.marathonbeachresort.com/",
    image: "/hotels/marathon-beach-resort.jpg",
  },
  {
    name: "Golden Coast",
    href: "https://goldencoast.gr/",
    image: "/hotels/golden-coast.jpg",
  },
  {
    name: "Thomas Beach Hotel",
    href: "https://www.thomasbeachhotel.com.gr/",
    image: "/hotels/thomas-beach.jpg",
  },
  {
    name: "Airbnb near the venue",
    href: "https://shorturl.at/BPv7d",
    note: "Self-catering stays",
    airbnb: true,
  },
];

function AirbnbIcon() {
  return (
    <svg
      className="h-10 w-10"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
    </svg>
  );
}

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
                className="group flex flex-col justify-between overflow-hidden rounded-sm border border-line bg-cream transition-shadow hover:shadow-md"
              >
                {hotel.image && (
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                {hotel.airbnb && (
                  <div className="flex aspect-4/3 w-full items-center justify-center bg-[#FF385C]/10 text-[#FF385C]">
                    <AirbnbIcon />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <h4 className="font-display text-xl leading-snug text-ink">
                    {hotel.name}
                  </h4>
                  <p className="mt-3 inline-flex items-center gap-1.5 font-serif text-base text-cornflower transition-colors group-hover:text-cornflower-dark">
                    {hotel.note ??
                      (hotel.airbnb ? "Browse on Airbnb" : "Visit website")}
                    <ArrowIcon />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
