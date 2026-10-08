export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-[720px] px-6 py-16 md:px-[60px] md:py-24">
      <p className="text-base font-semibold text-brand uppercase">{eyebrow}</p>
      <h1 className="mt-2 font-serif text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.133] text-ink">
        {title}
      </h1>
      <div className="mt-10 flex flex-col gap-6 text-lg leading-8 font-medium text-muted">
        {children}
      </div>
    </article>
  );
}
