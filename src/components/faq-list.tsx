"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto flex w-full max-w-[754px] flex-col gap-4 md:gap-5">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div
            key={faq.question}
            className={
              isOpen
                ? "rounded-xl border border-sage p-4 md:p-5"
                : "rounded-xl border border-line p-4 md:p-5"
            }
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 text-left md:gap-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="text-[15px] leading-6 font-semibold text-ink md:text-xl md:leading-normal">
                {faq.question}
              </span>
              <img
                src={isOpen ? "/icons/chevron-up-sm.svg" : "/icons/chevron-down-sm.svg"}
                alt=""
                width={16}
                height={16}
                className="mt-1 shrink-0 md:hidden"
              />
              <img
                src={isOpen ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"}
                alt=""
                width={24}
                height={24}
                className="mt-0.5 hidden shrink-0 md:block"
              />
            </button>
            {isOpen ? (
              <p className="mt-2 max-w-[693px] text-[13px] leading-5 font-medium text-muted md:mt-3 md:text-base md:leading-[25px]">
                {faq.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
