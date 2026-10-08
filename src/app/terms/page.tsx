import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "What Ritu is, and what it is not.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Terms" title="A journal, not a medical device">
      <p>Last updated 8 October 2026.</p>
      <p>
        Ritu is a personal journal for noticing patterns in what you choose to log. It reflects
        your own history. It does not diagnose, treat, or predict your health, and it is not a
        substitute for care from a clinician.
      </p>
      <h2 className="font-serif text-3xl leading-tight text-ink">Your journal</h2>
      <p>
        What you log stays on your phone unless you export it. You can delete it from the app at
        any time.
      </p>
      <h2 className="font-serif text-3xl leading-tight text-ink">Open source</h2>
      <p>
        The app is developed in the open. The code is available on{" "}
        <a className="text-brand underline" href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
      <p>
        Questions can go to{" "}
        <a className="text-brand underline" href={`mailto:${links.supportEmail}`}>
          {links.supportEmail}
        </a>
        .
      </p>
    </LegalPage>
  );
}
