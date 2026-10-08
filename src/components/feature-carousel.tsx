"use client";

import { useState } from "react";
import Image from "next/image";
import { features } from "@/lib/content";

export function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const feature = features[active];

  return (
    <div className="relative mx-auto mt-10 flex max-w-[358px] flex-col items-center md:hidden">
      <img
        src="/blobs/feature-1.svg"
        alt=""
        width={485}
        height={485}
        className="pointer-events-none absolute top-[-90px] left-1/2 -translate-x-1/2"
      />
      <div
        className={`relative w-full max-w-[248px] overflow-hidden rounded-[32px] border-8 border-inverse shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] ${feature.rotate}`}
      >
        <Image
          src={feature.src}
          alt={feature.alt}
          width={248}
          height={536}
          className="h-auto w-full"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative mt-6 max-w-[238px] text-center">
        <p className="text-[11px] leading-[18px] font-semibold text-brand uppercase">
          {feature.kicker}
        </p>
        <h3 className="mt-1 text-[15px] leading-6 font-semibold text-ink">{feature.title}</h3>
        <p className="text-[13px] leading-5 font-medium text-muted">{feature.body}</p>
      </div>
      <div className="relative mt-6 flex items-center gap-2" role="tablist" aria-label="App screens">
        {features.map((item, index) => (
          <button
            key={item.kicker}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={item.title}
            onClick={() => setActive(index)}
            className="inline-flex items-center justify-center"
          >
            {index === active ? (
              <span className="block h-1 w-8 rounded-full bg-sage" />
            ) : (
              <img src="/icons/pager-dot.svg" alt="" width={8} height={8} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
