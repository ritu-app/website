import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Ritu handles cycle, journal, and log data, and the choices you have.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy policy"
      meta="Effective 25 October 2026. Last updated 25 October 2026."
    >
      <p>
        Ritu (“Ritu,” “we,” “us,” or “our”) is a cycle pattern journal designed around a simple
        idea: your health data belongs to you, and it should stay that way. This Privacy Policy
        explains what information Ritu handles, how it&apos;s used, and the choices you have.
        We&apos;ve written it to reflect how the app actually works, not as a template we hoped
        would apply.
      </p>
      <p>
        By downloading, installing, or using Ritu, you agree to the practices described in this
        Privacy Policy. If you do not agree, please do not use the app.
      </p>

      <h2>1. The short version</h2>
      <ul>
        <li>Ritu does not require an account and does not have a login.</li>
        <li>
          Your cycle, mood, sleep, and journal data is stored only on your device, inside an
          encrypted local database.
        </li>
        <li>We do not operate a server that receives, stores, or has access to your health data.</li>
        <li>Nothing you log is sold, shared with advertisers, or used to build a profile of you.</li>
        <li>Nothing you log leaves your device.</li>
        <li>
          Our pattern-recognition features only ever read structured log fields (like mood chip
          selections). Your written journal entries are never read, scanned, or analyzed.
        </li>
      </ul>

      <h2>2. Information we collect</h2>
      <p>
        Ritu is built to minimize data collection by design. The table below describes every
        category of information the app handles and whether it ever leaves your device.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Examples</th>
              <th>Leaves your device?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cycle &amp; period data</td>
              <td>Period start/end dates, cycle length history, phase calculations</td>
              <td>No - on-device only</td>
            </tr>
            <tr>
              <td>Daily log data</td>
              <td>Mood chip selections, energy level, sleep, body signals you choose to log</td>
              <td>No - on-device only</td>
            </tr>
            <tr>
              <td>Journal entries</td>
              <td>Free-text reflections you write</td>
              <td>No - never analyzed by our pattern engine, on-device only</td>
            </tr>
            <tr>
              <td>Settings &amp; preferences</td>
              <td>Reminder times, appearance, notification preferences</td>
              <td>No - on-device only</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We do not collect your name, email address, phone number, or any other account-identifying
        information, because Ritu does not use accounts. We do not access your contacts, photos,
        location, or other apps on your device.
      </p>

      <h2>3. How information is used</h2>
      <p>
        Because your health data never leaves your device, it is used exclusively to power the
        app&apos;s on-device features for you:
      </p>
      <ul>
        <li>
          Calculating cycle length, phase estimates, and classification (Regular, Variable, or
          Unpredictable) from the dates and logs you enter.
        </li>
        <li>
          Generating Insights cards that reflect patterns in your structured daily logs (mood,
          energy, sleep, body signals).
        </li>
        <li>
          Producing Summary reports (including PDF exports) that you choose to generate and share,
          for example with a doctor.
        </li>
        <li>
          Storing your journal entries for your own private reference - these are never included in
          pattern analysis or Insights.
        </li>
      </ul>

      <h2>4. How your data is stored and protected</h2>
      <h3>4.1 On-device storage</h3>
      <p>
        All health-related data you log in Ritu is stored locally on your device in an encrypted
        local database (SQLCipher). This data is not transmitted to Ritu&apos;s servers because Ritu
        does not operate a server that stores this information.
      </p>
      <h3>4.2 Security measures</h3>
      <p>
        We apply industry-standard safeguards appropriate to an on-device application, including
        local database encryption and secure storage for any sensitive configuration values. No
        method of storage is 100% secure, and while we work to protect your information, we cannot
        guarantee absolute security.
      </p>
      <h3>4.3 Open source transparency</h3>
      <p>
        Ritu&apos;s source code is open source and publicly available at{" "}
        <a href={links.github} target="_blank" rel="noreferrer">
          {links.github}
        </a>
        . This means the claims in this Privacy Policy - in particular, that health data is
        processed on-device and that no server receives it - are independently verifiable by anyone
        able to review the code, rather than something you have to take on trust alone.
      </p>

      <h2>5. Data sharing and disclosure</h2>
      <p>
        We do not sell your personal or health information. We do not share it with data brokers,
        advertisers, or other third parties for their own marketing purposes. Because Ritu does not
        collect your health data on any server, there is no centralized store of your data for us
        to share, and no data set of your cycle or health information exists for us to disclose in
        response to a third-party request.
      </p>
      <p>We may work with limited service providers for narrowly scoped functions, such as:</p>
      <ul>
        <li>
          App distribution (Apple App Store, Google Play), which receive standard install/device
          information under their own privacy terms. Ritu is currently free, with no subscription or
          in-app purchase, so no payment information is collected. Ritu does not send them your
          cycle, mood, sleep, symptom, or journal data.
        </li>
      </ul>
      <p>
        We may disclose information if required to do so by law; however, because we do not hold
        your cycle, mood, symptom, or journal data on any server, there is nothing of that nature
        for us to produce even in response to a valid legal request. Any such request would be
        scrutinized to ensure it is legally valid before any action is taken.
      </p>

      <h2>6. Your choices and rights</h2>
      <p>
        Because Ritu keeps your data on your device by default, many privacy rights that require
        contacting a company are, in practice, controls already built into the app.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Right</th>
              <th>How it works in Ritu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Access</td>
              <td>
                All of your data is already on your device, in the app, at all times - there is no
                separate copy to request.
              </td>
            </tr>
            <tr>
              <td>Export</td>
              <td>
                Use Settings → Data &amp; Privacy → Export to generate a file of your logged data
                and Summary reports.
              </td>
            </tr>
            <tr>
              <td>Deletion</td>
              <td>
                Delete individual entries at any time, or use Settings → Data &amp; Privacy → Delete
                Data to permanently erase everything from your device.
              </td>
            </tr>
            <tr>
              <td>Correction</td>
              <td>Edit any past entry directly, including manually-added period dates.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        If you are located in a jurisdiction that grants additional statutory rights (see Sections 8
        and 9), and you believe those rights require action beyond what the in-app controls provide,
        you may contact us using the information in Section 13.
      </p>

      <h2>7. Children&apos;s privacy</h2>
      <p>
        Ritu is not directed to children under the age of 13 (or the relevant minimum age in your
        jurisdiction), and we do not knowingly collect personal information from children. Because
        Ritu does not use accounts and does not collect data on a server, we have no practical means
        of knowingly collecting or maintaining data about a child through the app. If you believe a
        child has provided us with personal information, please contact us so we can address the
        matter.
      </p>

      <h2>8. Sensitive health information &amp; U.S. state privacy laws</h2>
      <p>
        We recognize that menstrual and reproductive health data is highly sensitive, and a number
        of U.S. states have enacted specific “consumer health data” laws (for example,
        Washington&apos;s My Health My Data Act and comparable laws in other states) that impose
        heightened obligations around this category of information.
      </p>
      <p>Ritu&apos;s architecture is designed to minimize these risks at the source:</p>
      <ul>
        <li>
          Your consumer health data is processed on your device and is not sold or shared with third
          parties for advertising or any other purpose.
        </li>
        <li>
          We do not use geofencing around healthcare facilities, and we do not attempt to infer or
          make decisions based on your reproductive health status.
        </li>
        <li>
          Where applicable law grants you rights specific to consumer health data (such as the right
          to withdraw consent to collection or to have data deleted), the in-app controls described
          in Section 6 - particularly “Delete Data” - are the mechanism for exercising them,
          since we hold no separate copy to act on.
        </li>
      </ul>
      <p>
        If your state&apos;s law requires a signed authorization for certain disclosures, note that
        we do not disclose consumer health data to third parties in the first place, other than the
        limited service providers described in Section 5.
      </p>

      <h2>9. California privacy rights (CCPA/CPRA)</h2>
      <p>
        If you are a California resident, the California Consumer Privacy Act, as amended by the
        California Privacy Rights Act, gives you certain rights over “personal information,” which
        includes some categories of health information collected through Ritu. Consistent with
        Sections 6 and 8, you have the right to know, delete, and correct your information, which
        you can exercise directly through the app&apos;s in-app data controls. We do not sell or
        share personal information as those terms are defined under California law. You will not be
        discriminated against for exercising any privacy right.
      </p>

      <h2>10. European users (GDPR)</h2>
      <p>
        If you are located in the European Economic Area, United Kingdom, or Switzerland, the
        General Data Protection Regulation (GDPR) or UK GDPR may apply. Because your health data (a
        “special category” of personal data under Article 9) is processed on your device and not on
        a server we control. We do not receive that data. You may exercise your GDPR rights (access,
        rectification, erasure, restriction, portability, and objection) through the in-app controls
        in Section 6, or by contacting us.
      </p>

      <h2>11. Data retention</h2>
      <p>
        Your health data (cycle, daily log, mood, and journal entries) remains on your device for as
        long as you keep the app installed, or until you delete it - individually or entirely -
        using the in-app controls.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in the app,
        applicable law, or our practices. If we make material changes, we will update the “Last
        updated” date above and, where appropriate, provide notice within the app. We encourage you
        to review this page periodically.
      </p>

      <h2>13. Contact us</h2>
      <p>
        If you have questions, concerns, or requests regarding this Privacy Policy or your data,
        please contact us at:
      </p>
      <p>
        <strong className="block text-ink">Ritu.care</strong>
        Email:{" "}
        <a href={`mailto:${links.supportEmail}`}>{links.supportEmail}</a>
      </p>
    </LegalPage>
  );
}
