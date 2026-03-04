import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Xhine Systems Terms of Service — the agreement governing use of our services and website.",
  openGraph: {
    title: "Terms of Service | Xhine Systems",
    description:
      "Xhine Systems Terms of Service — the agreement governing use of our services and website.",
  },
};

export default function TermsOfServicePage() {
  return (
    <section className="pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div className="container-main">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-heading text-3xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-sm text-xs-gray">Last updated: March 2026</p>

          <div className="mt-10 space-y-8 text-sm text-xs-gray leading-relaxed">
            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                1. Agreement
              </h2>
              <p>
                By using xhinessystems.com or engaging our services, you agree
                to these Terms of Service. If you don&apos;t agree, don&apos;t
                use the site or services. These terms form a binding agreement
                between you (&ldquo;Client&rdquo;) and Xhine Systems
                (&ldquo;we,&rdquo; &ldquo;us&rdquo;).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                2. Services
              </h2>
              <p>Xhine Systems provides:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Custom website design and development</li>
                <li>Google Business Profile optimization</li>
                <li>Booking and appointment automation</li>
                <li>Lead follow-up sequences (SMS + email)</li>
                <li>Missed call text back</li>
                <li>Google review request automation</li>
                <li>Local SEO foundations</li>
                <li>Ongoing website maintenance</li>
              </ul>
              <p className="mt-2">
                Specific services depend on your plan (Growth or Domination) as
                described on our pricing page.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                3. Billing &amp; Payment
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Services are billed monthly at the agreed rate.</li>
                <li>
                  Payment is due at the start of each billing cycle and charged
                  automatically.
                </li>
                <li>No setup fees unless agreed in writing.</li>
                <li>
                  If payment fails, we&apos;ll retry. If not received within 7
                  days, services may be suspended.
                </li>
                <li>All fees are in USD and non-refundable.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                4. Cancellation
              </h2>
              <p>
                Either party may cancel with{" "}
                <strong className="text-xs-white">30 days written notice</strong>.
                On cancellation:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>
                  Services remain active through the current billing cycle.
                </li>
                <li>
                  You keep your Google Business Profile and reviews.
                </li>
                <li>
                  Website and automations (owned by Xhine Systems) are
                  deactivated. Domain stays yours if registered in your name.
                </li>
                <li>
                  We provide reasonable transition assistance if needed.
                </li>
                <li>No partial refunds for unused billing periods.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                5. Client Responsibilities
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Provide accurate business info, photos, and credentials.
                </li>
                <li>Respond to requests for info in a timely manner.</li>
                <li>Maintain active payment methods.</li>
                <li>
                  Provide access to relevant accounts (Google, domain, etc.).
                </li>
                <li>Don&apos;t use our services for anything illegal.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                6. Intellectual Property
              </h2>
              <p>
                Websites, designs, copy, and automations created by Xhine
                Systems remain our intellectual property unless explicitly
                transferred in writing. You get a license to use them during
                your active subscription.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                7. Limitation of Liability
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  We are not liable for indirect, incidental, special, or
                  consequential damages.
                </li>
                <li>
                  Our total liability shall not exceed the total amount paid in
                  the 3 months preceding the claim.
                </li>
                <li>
                  We do not guarantee specific rankings, lead volumes, or
                  revenue.
                </li>
                <li>
                  We are not liable for downtime or issues caused by
                  third-party providers (GoHighLevel, Google, hosting, etc.).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                8. Disclaimer
              </h2>
              <p>
                Services are provided &ldquo;as is&rdquo; without warranties of
                any kind. We do not warrant uninterrupted or error-free service.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                9. Indemnification
              </h2>
              <p>
                You agree to indemnify Xhine Systems from claims arising from
                your breach of these terms, your use of our services, or
                violation of any law.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                10. Communications Consent
              </h2>
              <p>
                By engaging our services or submitting a form, you consent to
                SMS and email communications. Reply STOP to opt out of SMS.
                Unsubscribe from emails via the link in each message. Opting out
                may affect service delivery.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                11. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of the State of Georgia.
                Disputes shall be resolved in Georgia courts.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                12. Changes
              </h2>
              <p>
                We may update these terms. Changes are posted here with an
                updated date. Continued use means acceptance.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-bold text-xs-white mb-2">
                13. Contact
              </h2>
              <p>Questions about these terms?</p>
              <div className="mt-2 rounded border border-xs-border bg-xs-card p-4">
                <p className="text-xs-white font-medium">Xhine Systems</p>
                <p>Atlanta, GA</p>
                <p>hello@xhinessystems.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
