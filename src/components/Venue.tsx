export default function Venue() {
  return (
    <section id="venue" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#9CAF88] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Where to find us
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#3D3D3D] mb-4">
            The Venue
          </h2>
          <div className="w-16 h-px bg-[#C9A962] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Venue Image Placeholder */}
          <div className="aspect-[4/3] bg-[#E8DCD5] rounded-xl overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <svg
                className="w-20 h-20 text-[#9CAF88] mx-auto mb-4"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
              </svg>
              <p className="text-[#5A5A5A]">Venue Photo</p>
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[#3D3D3D] mb-4">
                The Grand Estate
              </h3>
              <p className="text-[#5A5A5A] leading-relaxed mb-6">
                A stunning Georgian manor house set within acres of beautiful
                English gardens. The perfect backdrop for our special day, with
                its elegant interiors and romantic outdoor spaces.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#9CAF88]"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3D3D3D] mb-1">Address</h4>
                  <p className="text-[#5A5A5A]">
                    The Grand Estate<br />
                    123 Manor Lane<br />
                    Richmond, London<br />
                    TW10 6AB
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#9CAF88]"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3D3D3D] mb-1">Parking</h4>
                  <p className="text-[#5A5A5A]">
                    Free parking available on site for all guests
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#9CAF88]"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3D3D3D] mb-1">Getting There</h4>
                  <p className="text-[#5A5A5A]">
                    10 minutes from Richmond station by taxi.<br />
                    20 minutes from Central London by car.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#9CAF88] text-white px-6 py-3 rounded-full font-medium hover:bg-[#7A9568] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Accommodations */}
        <div className="mt-24">
          <h3 className="font-[family-name:var(--font-serif)] text-2xl text-center text-[#3D3D3D] mb-12">
            Where to Stay
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "The Richmond Hotel",
                description: "Luxury boutique hotel, 5 min from venue",
                price: "From £150/night",
              },
              {
                name: "The Ivy Guest House",
                description: "Charming B&B with beautiful gardens",
                price: "From £95/night",
              },
              {
                name: "Premier Inn Richmond",
                description: "Modern rooms with great value",
                price: "From £75/night",
              },
            ].map((hotel) => (
              <div
                key={hotel.name}
                className="bg-[#FAF8F5] rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h4 className="font-[family-name:var(--font-serif)] text-lg text-[#3D3D3D] mb-2">
                  {hotel.name}
                </h4>
                <p className="text-[#5A5A5A] text-sm mb-3">
                  {hotel.description}
                </p>
                <p className="text-[#9CAF88] font-medium">{hotel.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
