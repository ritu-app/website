import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms that govern use of the Ritu app and its open-source software.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of service"
      meta="Effective 25 October 2026. Last updated 25 October 2026."
    >
      <p>
        These Terms of Service (“Terms”) govern your use of Ritu, a cycle pattern journal, including
        the official application distributed via the Apple App Store and Google Play (the “App”),
        and the underlying open-source software made available at{" "}
        <a href={links.github} target="_blank" rel="noreferrer">
          {links.github}
        </a>{" "}
        (the “Software”). By downloading, installing, accessing, compiling, or using Ritu in any
        form, you agree to these Terms.
      </p>
      <p>If you do not agree to these Terms, do not use the App or the Software.</p>

      <h2>1. What Ritu is</h2>
      <p>
        Ritu is a private, on-device cycle pattern journal. It helps you notice patterns between
        your logged cycle, mood, sleep, and body-signal data over time. Ritu does not predict future
        cycle events, and it does not provide medical diagnoses. See Section 6 (No medical advice)
        for important limitations.
      </p>

      <h2>2. Open source license &amp; proprietary assets</h2>
      <p>
        Ritu&apos;s source code is open source. This section explains what that does and does not
        mean, because two different kinds of intellectual property are involved: the code, and the
        brand.
      </p>
      <h3>2.1 The code</h3>
      <p>
        The Software&apos;s source code is released under the GNU General Public License v3.0
        (“GPLv3”) (the “License”). You may view, copy, modify, and redistribute the source code
        subject to the terms of that License, which include (among other obligations) that any
        distributed derivative work must also be released under the same License. The full License
        text is included in the repository at{" "}
        <a href={links.github} target="_blank" rel="noreferrer">
          {links.github}
        </a>{" "}
        and controls in the event of any conflict with this section.
      </p>
      <h3>2.2 The Ritu name, logo, and brand assets</h3>
      <p>
        The name “Ritu,” the Ritu logo (“Season&apos;s Turn”), app icon, illustrations, and other
        brand assets are trademarks and/or copyrighted works of Ritu.care and are licensed
        separately from the code. They are not covered by the open-source License described in
        Section 2.1. You may reference the Ritu name to accurately describe an unmodified copy of
        the Software (for example, “built from Ritu&apos;s source code”), but you may not:
      </p>
      <ul>
        <li>Distribute a modified build of the Software using the Ritu name, logo, or app icon.</li>
        <li>
          Publish a fork to any app store in a way that could confuse users into thinking it is the
          official Ritu app.
        </li>
        <li>
          Use Ritu&apos;s brand assets in a way that implies endorsement or affiliation without our
          written permission.
        </li>
      </ul>
      <p>
        If you fork or self-compile the Software for your own use or for redistribution, you must
        replace the name, logo, and app icon with your own before distributing it publicly.
      </p>

      <h2>3. Official app vs. self-compiled builds</h2>
      <p>Ritu is available in two forms, summarized below.</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>
                <span className="sr-only">Topic</span>
              </th>
              <th>Official build (App Store / Google Play)</th>
              <th>Self-compiled build</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Source code</th>
              <td>Same open-source code</td>
              <td>Same open-source code, compiled by you</td>
            </tr>
            <tr>
              <th scope="row">Cost</th>
              <td>Free to download and use</td>
              <td>Free - you compile and run it yourself</td>
            </tr>
            <tr>
              <th scope="row">Name, logo, icon</th>
              <td>Licensed to you as part of the app</td>
              <td>Not licensed - must be replaced before distribution</td>
            </tr>
            <tr>
              <th scope="row">Support</th>
              <td>Covered by Help &amp; Support in-app</td>
              <td>Community support only (GitHub issues)</td>
            </tr>
            <tr>
              <th scope="row">Updates</th>
              <td>Automatic via app store</td>
              <td>Manual - you pull and rebuild</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Self-compiling the Software for personal use is always permitted under the License. This
        dual model exists so that the project can remain both fully auditable and sustainably
        maintained.
      </p>

      <h2>4. Pricing</h2>
      <p>
        Ritu is currently free to download and use, with no subscription, in-app purchase, or paid
        tier. We do not process payments or collect any payment information from you at this time.
      </p>
      <p>
        We may introduce optional paid features in the future (for example, via the Apple App Store,
        Google Play, and a subscription-management provider such as RevenueCat). If we do, we will
        update these Terms and our in-app messaging before any such feature goes live, and use of
        new paid features will always be optional - the core journaling and pattern-reflection
        functionality described in Section 1 is intended to remain free.
      </p>

      <h2>5. Your content and data</h2>
      <p>
        You retain all rights to the data you log in Ritu, including journal entries, cycle dates,
        and daily logs (“Your Content”). Because Ritu stores Your Content on your device and does
        not transmit it to a server we operate, we do not access, host, or claim any license to Your
        Content. You are solely responsible for Your Content. See our{" "}
        <a href="/privacy">Privacy Policy</a> for how that data stays on your device.
      </p>

      <h2>6. No medical advice</h2>
      <p>
        Ritu is a personal journaling and pattern-reflection tool. It is not a medical device, and
        it does not provide medical advice, diagnosis, or treatment. Insights, classifications
        (Regular/Variable/Unpredictable), and Summary reports reflect patterns in the data you log -
        they are not clinical assessments and should never be treated as one.
      </p>
      <p>
        Always consult a qualified healthcare provider regarding any medical questions, symptoms, or
        concerns, including anything related to your menstrual or reproductive health. Do not
        disregard or delay seeking professional medical advice because of anything generated by
        Ritu.
      </p>

      <h2>7. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App or Software for any unlawful purpose.</li>
        <li>
          Reverse engineer, decompile, or attempt to extract source code from the official App
          binary in a manner prohibited by the applicable app store&apos;s terms (noting that the
          source code is already openly available, so this restriction concerns the compiled binary
          and distribution channel, not the code itself).
        </li>
        <li>Misrepresent a modified or forked version of the Software as the official Ritu app.</li>
      </ul>

      <h2>8. Contributions</h2>
      <p>
        If you contribute code, translations, or other materials to the open-source project, you
        agree that your contributions are licensed under the same License as the Software (Section
        2.1), unless otherwise stated in the repository&apos;s contribution guidelines. See the{" "}
        <a href={links.github} target="_blank" rel="noreferrer">
          repository
        </a>{" "}
        for the current contribution process and any additional terms, such as a Contributor License
        Agreement, if one is required.
      </p>

      <h2>9. Disclaimers</h2>
      <p className="legal-caps">
        THE APP AND SOFTWARE ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY
        KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL
        BE UNINTERRUPTED, ERROR-FREE, OR THAT ANY CLASSIFICATION, INSIGHT, OR REPORT WILL BE
        ACCURATE OR COMPLETE.
      </p>

      <h2>10. Limitation of liability</h2>
      <p className="legal-caps">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, RITU.CARE SHALL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, ARISING OUT OF
        OR RELATED TO YOUR USE OF THE APP OR SOFTWARE, INCLUDING ANY SELF-COMPILED BUILD, EVEN IF
        ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. FOR SELF-COMPILED BUILDS IN PARTICULAR, YOU
        ACKNOWLEDGE THAT YOU ARE RUNNING SOFTWARE YOU OR A THIRD PARTY COMPILED, AND WE MAKE NO
        WARRANTY REGARDING BUILDS WE DID NOT DISTRIBUTE.
      </p>

      <h2>11. Termination</h2>
      <p>
        You may stop using the App or Software at any time by deleting it. We may suspend or
        discontinue the official App or any subscription feature at our discretion, though the
        open-source Software will remain available under its License regardless of the status of the
        official App. Sections 2, 5, 6, 9, and 10 survive any termination.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These Terms are governed by applicable law, without regard to conflict-of-law principles,
        except that the License in Section 2.1 governs the source code independently of this choice
        of law.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. If we make material changes, we will update the
        “Last updated” date above and, where appropriate, provide notice within the App. Continued
        use of the App or Software after changes take effect constitutes acceptance of the revised
        Terms.
      </p>

      <h2>14. Contact us</h2>
      <p>Questions about these Terms can be directed to:</p>
      <p>
        <strong className="block text-ink">Ritu.care</strong>
        Email: <a href={`mailto:${links.supportEmail}`}>{links.supportEmail}</a>
        <br />
        Repository:{" "}
        <a href={links.github} target="_blank" rel="noreferrer">
          {links.github}
        </a>
      </p>
    </LegalPage>
  );
}
