import Image from "next/image";

type DecoProps = {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
  priority?: boolean;
};

function Deco({
  src,
  w,
  h,
  className = "",
  flipX = false,
  flipY = false,
  priority = false,
}: DecoProps & { src: string; w: number; h: number }) {
  const transform = [flipX ? "scaleX(-1)" : "", flipY ? "scaleY(-1)" : ""]
    .join(" ")
    .trim();
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none block ${className}`}
    >
      <Image
        src={src}
        alt=""
        width={w}
        height={h}
        priority={priority}
        className="mix-blend-multiply"
        style={{
          width: "100%",
          height: "auto",
          transform: transform || undefined,
        }}
      />
    </span>
  );
}

/** Dense top-corner bouquet (the cluster from the top-left of the card). */
export function FloralCorner(props: DecoProps) {
  return <Deco src="/floral-corner.png" w={500} h={545} {...props} />;
}

/** Lower floral cluster. */
export function FloralCornerBottom(props: DecoProps) {
  return <Deco src="/floral-corner-bottom.png" w={560} h={416} {...props} />;
}

/** Tall vertical floral strip — the left one hides a little cat (Ares & Hera). */
export function FloralStripLeft(props: DecoProps) {
  return <Deco src="/floral-strip-left.png" w={300} h={2936} {...props} />;
}

export function FloralStripRight(props: DecoProps) {
  return <Deco src="/floral-strip-right.png" w={300} h={2936} {...props} />;
}

/** Full-width band of wildflowers (use flipY for a top border). */
export function FloralBand(props: DecoProps) {
  return <Deco src="/floral-band.png" w={1200} h={263} {...props} />;
}

export function FloralSprig(props: DecoProps) {
  return <Deco src="/floral-sprig.png" w={460} h={260} {...props} />;
}

/** A small centred floral motif used to separate section headings. */
export function SprigDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-line" />
      <Image
        src="/floral-sprig.png"
        alt=""
        width={460}
        height={260}
        className="w-24 h-auto mix-blend-multiply"
      />
      <span className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-line" />
    </div>
  );
}
