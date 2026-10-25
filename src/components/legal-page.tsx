export function LegalPage({
  eyebrow,
  title,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  meta?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-[860px] px-6 py-16 md:px-[60px] md:py-24">
      <p className="text-base font-semibold text-brand uppercase">{eyebrow}</p>
      <h1 className="mt-2 font-serif text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.133] text-ink">
        {title}
      </h1>
      {meta ? <p className="mt-4 text-sm leading-6 text-faint italic">{meta}</p> : null}
      <div className="legal-prose mt-10">{children}</div>
    </article>
  );
}
