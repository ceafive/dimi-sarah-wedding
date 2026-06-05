import { FlowerTop } from "./FloralDecorations";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#b8d2de]/40 overflow-hidden">
      {/* Floral top accent */}
      <div className="opacity-40">
        <FlowerTop />
      </div>

      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Names */}
          <h2 className="font-[family-name:var(--font-script)] text-4xl text-[#231f20] mb-2" style={{ lineHeight: 1.4 }}>
            Dimi &amp; Sarah
          </h2>
          <p className="font-[family-name:var(--font-serif)] text-[#d4a840] mb-8 tracking-widest text-sm">
            23.08.2025
          </p>

          {/* Social/Contact */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:hello@dimiandsarah.co.uk"
              className="w-12 h-12 rounded-full bg-[#eef4f8] flex items-center justify-center text-[#8bb5c7] hover:bg-[#8bb5c7] hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#eef4f8] flex items-center justify-center text-[#8bb5c7] hover:bg-[#8bb5c7] hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          {/* Hashtag */}
          <p className="font-[family-name:var(--font-script)] text-[#8bb5c7] text-2xl mb-8" style={{ lineHeight: 1.4 }}>
            #DimiAndSarah2025
          </p>

          {/* Copyright */}
          <p className="font-[family-name:var(--font-serif)] text-[#231f20]/40 text-sm">
            Made with ♥ for our special day
          </p>
        </div>
      </div>
    </footer>
  );
}
