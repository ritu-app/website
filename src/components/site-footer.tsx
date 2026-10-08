import Link from "next/link";
import { links } from "@/lib/content";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto flex max-w-[1512px] flex-col items-center gap-6 bg-gradient-to-r from-cream/0 from-[15%] via-cream via-[56%] to-cream px-4 py-7 text-center md:flex-row md:items-center md:justify-between md:px-[60px] md:py-[57px] md:text-left">
        <Logo />
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-x-16">
          <a
            href={`mailto:${links.supportEmail}`}
            className="inline-flex items-center gap-1 text-[11px] leading-[18px] text-ink hover:text-brand md:text-[15px] md:leading-6"
          >
            <img src="/icons/mail-sm.svg" alt="" width={14} height={14} className="md:hidden" />
            <img
              src="/icons/mail.svg"
              alt=""
              width={16}
              height={16}
              className="hidden md:block"
            />
            {links.supportEmail}
          </a>
          <Link
            href="/privacy"
            className="text-[11px] leading-[18px] text-black hover:text-brand md:text-[15px] md:leading-6"
          >
            Privacy policy
          </Link>
          <Link
            href="/terms"
            className="text-[11px] leading-[18px] text-black hover:text-brand md:text-[15px] md:leading-6"
          >
            Terms of service
          </Link>
        </div>
        <p className="text-[11px] leading-[18px] text-ink md:text-[15px] md:leading-6">
          © 2026 Ritu.care
        </p>
      </div>
    </footer>
  );
}
