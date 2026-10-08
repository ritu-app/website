import { links } from "@/lib/content";

export function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[19px] md:gap-[27px]">
      <span className="inline-flex h-[42px] w-[126px] md:h-14 md:w-[168px]">
        <a
          href={links.playStore}
          className="flex h-14 w-[168px] shrink-0 origin-top-left scale-75 items-center gap-[10px] overflow-hidden rounded-md border-[1.4px] border-sage bg-white px-[10px] hover:bg-mist md:scale-100"
          aria-label="Get it on Google Play"
        >
        <img src="/icons/playstore.svg" alt="" width={29.4} height={33.6} />
        <span className="flex flex-col items-start gap-[4px]">
          <span className="text-[14px] leading-none font-normal text-black uppercase">Get it on</span>
          <img
            src="/icons/google-play-wordmark.svg"
            alt=""
            width={103.6}
            height={21}
            className="-scale-y-100"
          />
        </span>
        </a>
      </span>
      <span className="inline-flex h-[42px] w-[126px] md:h-14 md:w-[168px]">
        <a
          href={links.appStore}
          className="flex h-14 w-[168px] shrink-0 origin-top-left scale-75 items-center gap-[11px] overflow-hidden rounded-md border-[1.4px] border-sage bg-white px-[10px] hover:bg-mist md:scale-100"
          aria-label="Download on the App Store"
        >
        <img src="/icons/apple.svg" alt="" width={28} height={33.6} />
        <span
          className="text-black"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Compact Display", "SF Pro Text", sans-serif',
          }}
        >
          <span className="block text-[12.6px] leading-[12.6px]">Download on the</span>
          <span className="block text-[25.2px] leading-none tracking-[-0.47px]">App Store</span>
        </span>
        </a>
      </span>
    </div>
  );
}
