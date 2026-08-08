/**
 * Fixed watercolour floral strips that line the left and right edges of the
 * page the whole way down. The strips are `fixed`, so the flowers frame the
 * viewport edges at every scroll position; the tall artwork tiles vertically
 * (`repeat-y`) to cover any viewport height. The right edge mirrors the left
 * for a symmetric border.
 */
export default function FloralFrame() {
  const strip =
    "pointer-events-none absolute inset-y-0 mix-blend-multiply bg-[url('/floral-strip-left.png')] bg-top bg-repeat-y [background-size:100%_auto] " +
    "w-[38px] sm:w-16 md:w-24 lg:w-28 xl:w-32";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 select-none"
    >
      {/* Soft fade behind the stems so they sit on the cream ground cleanly */}
      <div className={`${strip} left-0`} />
      <div className={`${strip} right-0 -scale-x-100`} />
    </div>
  );
}
