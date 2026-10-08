import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { FeatureCarousel } from "@/components/feature-carousel";
import { SectionHeading } from "@/components/section-heading";
import { StoreBadges } from "@/components/store-badges";
import { features, links, nameParagraphs, steps } from "@/lib/content";

const bulletDots = ["/icons/dot-sage.svg", "/icons/dot-honey.svg", "/icons/dot-lavender.svg"] as const;

function BulletRow({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 flex flex-col items-center gap-3 md:mt-10 md:flex-row md:flex-wrap md:justify-center md:gap-x-12 md:gap-y-4 lg:gap-x-[63px]">
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-2">
          <img src={bulletDots[index]} alt="" width={12} height={12} />
          <span className="text-[15px] leading-6 font-medium text-faint uppercase md:text-xl md:leading-[30px]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Pill({
  href,
  children,
  variant,
}: {
  href: string;
  children: string;
  variant: "solid" | "outline";
}) {
  const className =
    variant === "solid"
      ? "inline-flex w-full items-center justify-center rounded-full bg-sage px-16 py-3 text-[13px] leading-5 font-semibold text-inverse hover:bg-brand md:w-auto md:px-[41px] md:py-[15px] md:text-base md:leading-6"
      : "inline-flex w-full items-center justify-center rounded-full border border-line bg-cream px-16 py-3 text-[13px] leading-5 font-semibold text-ink hover:bg-white md:w-auto md:bg-transparent md:px-[41px] md:py-[15px] md:text-base md:leading-6";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function HomePage() {
  return (
    <div className="relative overflow-x-clip lg:overflow-visible">
      <div
        aria-hidden
        className="pointer-events-none absolute hidden min-[2082px]:block"
        style={{
          top: -120,
          left: "calc(756px - 50vw)",
          width: "calc(50vw - 801px)",
          height: 780,
          background: "linear-gradient(90deg, #e3e9e1 0%, rgb(227 233 225 / 0) 100%)",
          maskImage: "linear-gradient(#000 62%, transparent)",
          WebkitMaskImage: "linear-gradient(#000 62%, transparent)",
        }}
      />
      <img
        src="/blobs/hero-left-mobile.svg"
        alt=""
        width={526}
        height={526}
        className="pointer-events-none absolute -top-[158px] -left-[170px] md:hidden"
      />
      <img
        src="/blobs/hero-left.svg"
        alt=""
        width={942}
        height={942}
        className="pointer-events-none absolute -top-[281px] -left-[285px] hidden lg:block"
      />
      <img
        src="/blobs/hero-right-low.svg"
        alt=""
        width={942}
        height={942}
        className="pointer-events-none absolute top-[1117px] -right-[380px] hidden rotate-180 lg:block"
      />

      <section className="relative px-4 pt-6 pb-4 md:px-[60px] md:pt-[92px] md:pb-8">
        <img
          src="/blobs/hero-wash.svg"
          alt=""
          width={841}
          height={856}
          className="pointer-events-none absolute top-0 right-[-8%] hidden lg:block"
        />
        <img
          src="/blobs/hero-glow.svg"
          alt=""
          width={693}
          height={681}
          className="pointer-events-none absolute top-[70px] right-[-2%] hidden lg:block"
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,633px)_minmax(0,1fr)] lg:gap-8">
          <div className="mx-auto flex w-full max-w-[358px] flex-col items-center gap-6 text-center md:mx-0 md:max-w-[633px] md:items-start md:gap-9 md:text-left">
            <div className="flex flex-col gap-4">
              <h1 className="font-serif text-[52px] leading-[54px] text-ink md:text-[clamp(3rem,7vw,5.625rem)] md:leading-[1.133]">
                Find the rhythm already
                <br className="md:hidden" /> within you
              </h1>
              <p className="text-[15px] leading-6 font-medium text-muted md:text-xl md:leading-[30px]">
                Ritu helps you track your everyday experiences, reflect on them, and understand
                patterns across your mood, energy, body, and cycle.
              </p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-4 md:w-auto md:flex-row md:flex-wrap md:items-center md:gap-6">
              <Pill href="/#download" variant="solid">
                Start your journal
              </Pill>
              <Pill href={links.studio} variant="outline">
                Explore ritu studio
              </Pill>
            </div>
          </div>
          <div className="relative -mx-4 w-[calc(100%+2rem)] md:mx-auto md:w-full md:max-w-[673px]">
            <img
              src="/blobs/hero-wash-mobile.svg"
              alt=""
              width={431}
              height={440}
              className="pointer-events-none absolute -top-[73px] left-[8%] md:hidden"
            />
            <img
              src="/blobs/hero-glow-mobile.svg"
              alt=""
              width={356}
              height={350}
              className="pointer-events-none absolute -top-[26px] left-[18%] md:hidden"
            />
            <img
              src="/icons/hero-spark.svg"
              alt=""
              width={60}
              height={60}
              className="pointer-events-none absolute -top-2 right-2 hidden md:block"
            />
            <Image
              src="/images/hero.png"
              alt="Illustration of a woman looking upward, with a moon, stars, and flowing hair"
              width={673}
              height={539}
              priority
              className="h-auto w-full"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="relative mt-16 hidden flex-col items-center gap-4 md:mt-24 md:flex">
          <p className="text-[11px] leading-[18px] font-medium text-faint">SCROLL</p>
          <span className="flex h-[46px] w-[46px] items-center justify-center">
            <img
              src="/icons/scroll-line.svg"
              alt=""
              width={46}
              height={1.5}
              className="-rotate-90"
            />
          </span>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 px-4 py-16 md:px-[60px] md:py-32">
        <SectionHeading
          eyebrow="What Ritu is"
          title="A cycle pattern journal built to reflect"
          titleWidth="max-w-[619px]"
          bodyWidth="max-w-[270px]"
          body="Ritu helps you notice the relationship between your hormones and your day-to-day life energy, mood, sleep, focus, how your body feels — by surfacing patterns in what you've already logged."
        />
        <div className="mx-auto mt-8 flex w-full max-w-[622px] flex-col gap-3.5 md:mt-10 md:gap-6">
          {steps.map((step) => (
            <article
              key={step.step}
              className={
                step.highlighted
                  ? "flex flex-col gap-1 rounded-[7px] border border-sage bg-mist px-3.5 py-2 md:rounded-xl md:px-6 md:py-4"
                  : "flex flex-col gap-1 rounded-[7px] bg-white px-3.5 py-2 md:rounded-xl md:px-6 md:py-4"
              }
            >
              <p className="text-[9px] leading-4 text-ink md:text-base md:leading-6">{step.step}</p>
              <h3 className="text-[17px] leading-[26px] font-semibold text-ink md:text-[30px] md:leading-[45px]">
                {step.title}
              </h3>
              <p className="text-[10px] leading-[17px] font-medium text-muted md:text-lg md:leading-[30px]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="scroll-mt-28 px-4 py-12 md:px-[60px] md:py-24">
        <SectionHeading
          eyebrow="The app"
          title="Quiet on the surface. Attentive underneath."
          titleWidth="max-w-[619px]"
          bodyWidth="max-w-[280px]"
          body="Ritu is built around one daily habit — logging — and a handful of places to make sense of it later."
        />
        <FeatureCarousel />
        <div className="relative mx-auto mt-16 hidden max-w-[1240px] md:block">
          <img
            src="/blobs/feature-3.svg"
            alt=""
            width={485}
            height={485}
            className="pointer-events-none absolute top-[-40px] left-[18%] hidden rotate-0 lg:block"
          />
          <img
            src="/blobs/feature-4.svg"
            alt=""
            width={485}
            height={485}
            className="pointer-events-none absolute top-[-48px] right-[0%] hidden lg:block"
          />
          <img
            src="/blobs/feature-1.svg"
            alt=""
            width={485}
            height={485}
            className="pointer-events-none absolute bottom-[120px] left-[16%] hidden rotate-180 lg:block"
          />
          <img
            src="/blobs/feature-2.svg"
            alt=""
            width={485}
            height={485}
            className="pointer-events-none absolute right-[4%] bottom-[110px] hidden rotate-180 lg:block"
          />
          <ul className="relative hidden gap-y-12 md:grid md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <li key={feature.kicker} className="flex flex-col items-center gap-8 lg:items-start">
                <div
                  className={`w-full max-w-[248px] overflow-hidden rounded-[32px] border-8 border-inverse shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] ${feature.rotate}`}
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
                <div className="max-w-[219px]">
                  <p className="text-base font-semibold text-brand uppercase">{feature.kicker}</p>
                  <h3 className="mt-2.5 text-xl leading-[30px] font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-[25px] font-medium text-muted">{feature.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 md:px-[60px] md:py-32">
        <SectionHeading
          eyebrow="The name"
          title={"Ritu means season.\nA rhythm that changes."}
          mobileTitle={"Ritu means\nseason.\nA rhythm that changes."}
          titleWidth="max-w-[642px]"
        />
        <div className="mx-auto mt-8 flex max-w-[1120px] flex-col items-center gap-8 md:mt-12 md:gap-12 lg:mt-16 lg:flex-row lg:items-start lg:justify-center lg:gap-[100px]">
          <div className="w-full max-w-[320px] text-center">
            <p className="font-devanagari text-[100px] leading-none font-medium text-brand md:text-[clamp(6rem,18vw,13.625rem)]">
              ऋतु
            </p>
            <p className="mt-8 text-[15px] leading-6 font-medium text-faint uppercase md:mt-12 md:text-xl md:leading-[30px]">
              Ritu · Sanskrit for &quot;season&quot;
            </p>
          </div>
          <div className="flex max-w-[338px] flex-col gap-0 text-center text-[15px] leading-6 font-medium text-muted md:max-w-[644px] md:gap-[17px] md:text-left md:text-xl md:leading-[30px]">
            {nameParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-[60px] md:py-24">
        <SectionHeading
          eyebrow="Privacy"
          title="Your data belongs to you"
          titleWidth="max-w-[686px]"
          bodyWidth="max-w-[244px]"
          body="Ritu is designed around privacy, transparency, and giving you control over your own data."
        />
        <BulletRow items={["Stored privately", "Export anytime", "Open source"]} />
        <Image
          src="/images/privacy.png"
          alt="Line drawing of a woman in profile"
          width={406}
          height={406}
          className="mx-auto mt-8 h-auto w-full max-w-[298px] md:mt-10 md:max-w-[406px]"
          style={{ width: "100%", height: "auto" }}
        />
      </section>

      <section id="open-source" className="scroll-mt-28 px-4 py-12 md:px-[60px] md:py-24">
        <SectionHeading
          eyebrow="Open source"
          title="Built in the open"
          titleWidth="max-w-[578px]"
          bodyWidth="max-w-[276px]"
          body="Ritu is open source because tools that help us understand ourselves should be transparent and accessible."
        />
        <BulletRow
          items={["Explore the code", "Understand how it works", "Contribute to its future"]}
        />
        <div className="mt-8 hidden justify-center md:flex">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sage px-[41px] py-[15px] text-base leading-6 font-semibold text-inverse hover:bg-brand"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 px-4 py-12 md:px-[60px] md:py-24">
        <SectionHeading
          eyebrow="Frequently asked"
          title="Questions people actually ask"
          titleWidth="max-w-[798px]"
          bodyWidth="max-w-[246px]"
          body="A few things you might want to know about Ritu."
        />
        <div className="mt-10">
          <FaqList />
        </div>
      </section>

      <section id="download" className="scroll-mt-28 px-4 pt-12 pb-16 text-center md:px-[60px] md:pt-24 md:pb-28">
        <h2 className="font-serif text-[52px] leading-[54px] text-ink md:text-[clamp(3rem,7vw,5.625rem)] md:leading-[1.133]">
          Start noticing
        </h2>
        <p className="mt-3 font-serif text-[28px] leading-[34px] text-muted md:mt-4 md:text-[clamp(1.5rem,3vw,2rem)] md:leading-[30px]">
          Everything else follows.
        </p>
        <div className="mt-10">
          <StoreBadges />
        </div>
      </section>
    </div>
  );
}
