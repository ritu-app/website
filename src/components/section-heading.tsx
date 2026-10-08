export function SectionHeading({
  eyebrow,
  title,
  mobileTitle,
  body,
  titleWidth = "max-w-[22ch]",
  bodyWidth = "max-w-[280px]",
}: {
  eyebrow: string;
  title: string;
  mobileTitle?: string;
  body?: string;
  titleWidth?: string;
  bodyWidth?: string;
}) {
  const titleClass =
    "font-serif text-[38px] leading-[42px] whitespace-pre-line text-ink md:text-[60px] md:leading-[68px]";

  return (
    <div className="mx-auto flex max-w-[860px] flex-col items-center gap-3 text-center md:gap-4">
      <div className="flex flex-col items-center gap-px">
        <p className="text-[11px] leading-[18px] font-semibold text-brand uppercase md:text-base md:leading-normal">
          {eyebrow}
        </p>
        {mobileTitle ? (
          <h2 className="font-serif text-[38px] leading-[42px] whitespace-pre-line text-ink md:hidden">
            {mobileTitle}
          </h2>
        ) : null}
        <h2 className={`${titleClass} ${mobileTitle ? "hidden md:block" : ""} ${titleWidth}`}>
          {title}
        </h2>
      </div>
      {body ? (
        <p
          className={`${bodyWidth} text-[15px] leading-6 font-medium text-muted md:max-w-[631px] md:text-xl md:leading-[30px]`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
