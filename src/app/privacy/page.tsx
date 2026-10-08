import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Ritu stores your journal, logs, and cycle history.",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacy" title="Your data belongs to you">
      <p>Last updated 8 October 2026.</p>
      <p>
        Ritu is a journal that stays on your phone. There is no account, no sign-in, and no cloud
        sync. Logs, journal entries, and cycle history are stored in the app’s private storage on
        that device.
      </p>
      <h2 className="font-serif text-3xl leading-tight text-ink">What stays on your phone</h2>
      <p>
        The name you enter, period history, daily logs, journal entries, and custom body signals
        stay on the device. Ritu does not upload them.
      </p>
      <h2 className="font-serif text-3xl leading-tight text-ink">Export and delete</h2>
      <p>
        Settings → Export Data writes a JSON backup when you ask for one. Import replaces the data
        already on that phone, after you confirm it. Settings → Delete Data clears the journal from
        the device.
      </p>
      <h2 className="font-serif text-3xl leading-tight text-ink">This website</h2>
      <p>
        ritu.care is a static marketing site. It does not ask you to create an account or send your
        journal to a server. Emailing {links.supportEmail} shares only what you put in that message.
      </p>
      <p>
        Questions about privacy can go to{" "}
        <a className="text-brand underline" href={`mailto:${links.supportEmail}`}>
          {links.supportEmail}
        </a>
        .
      </p>
    </LegalPage>
  );
}
