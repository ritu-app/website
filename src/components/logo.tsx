import Link from "next/link";

const dots = [
  { src: "/icons/logo-dot-1.svg", left: 13.13, top: 22.77 },
  { src: "/icons/logo-dot-2.svg", left: 18.26, top: 8.21 },
  { src: "/icons/logo-dot-3.svg", left: 24.82, top: 15.38 },
  { src: "/icons/logo-dot-4.svg", left: 5.54, top: 17.03 },
  { src: "/icons/logo-dot-5.svg", left: 9.44, top: 8.21 },
] as const;

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <span className="relative block size-[25px] shrink-0 md:size-8">
        <span className="absolute top-0 left-0 origin-top-left scale-[0.78125] md:scale-100">
          <span className="relative block size-8 rounded-lg bg-sage">
            <img
              src="/images/logo-disc.png"
              alt=""
              width={20}
              height={20}
              className="absolute top-[6px] left-[6px] size-5"
            />
            <img
              src="/icons/logo-ring.svg"
              alt=""
              width={12}
              height={12}
              className="absolute top-[10px] left-[10px]"
            />
            <img
              src="/icons/logo-swoosh.svg"
              alt=""
              width={20.1367}
              height={15.467}
              className="absolute top-[8.82px] left-[6.36px]"
            />
            {dots.map((dot) => (
              <img
                key={dot.src}
                src={dot.src}
                alt=""
                width={1.84615}
                height={1.84615}
                className="absolute"
                style={{ left: dot.left, top: dot.top }}
              />
            ))}
          </span>
        </span>
      </span>
      <span className="font-serif text-[20px] leading-none text-brand md:text-2xl">Ritu</span>
    </Link>
  );
}
