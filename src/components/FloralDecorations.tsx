import Image from "next/image";

export function FlowerTop({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <Image
        src="/dimi-flowers-top.png"
        alt=""
        width={900}
        height={280}
        style={{ width: "100%", height: "auto" }}
        priority
      />
    </div>
  );
}

export function FlowerBottom({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <Image
        src="/dimi-flowers-bottom.png"
        alt=""
        width={900}
        height={280}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export function FlowerLeft({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <Image
        src="/dimi-flowers-left.png"
        alt=""
        width={260}
        height={600}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export function FlowerRight({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <Image
        src="/dimi-flowers-right.png"
        alt=""
        width={260}
        height={600}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div className="h-px flex-1 bg-[#b8d2de]" />
      <div className="w-2 h-2 rounded-full bg-[#d4a840]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#8bb5c7]" />
      <div className="w-2 h-2 rounded-full bg-[#d4a840]" />
      <div className="h-px flex-1 bg-[#b8d2de]" />
    </div>
  );
}
