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
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-brand-muted">
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 text-sm text-brand-muted leading-relaxed">
            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing our website at xhinessystems.com or engaging our
                services, you agree to be bound by these Terms of Service. If
                you do not agree with any part of these terms, you may not use
                our website or services. These terms constitute a legally
                binding agreement between you (&ldquo;Client&rdquo;) and Xhine
                Systems (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                &ldquo;us&rdquo;).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                2. Description of Services
              </h2>
              <p className="mb-3">
                Xhine Systems provides local presence management services for
                trades and contractors, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Custom website design and development</li>
                <li>Google Business Profile optimization</li>
                <li>Booking and appointment automation</li>
                <li>Lead follow-up sequences (SMS and email)</li>
                <li>Google review request automation</li>
                <li>Local SEO foundations</li>
                <li>Ongoing website maintenance and support</li>
              </ul>
              <p className="mt-3">
                The specific services included in your plan are determined by
                the plan you subscribe to (Growth Plan or Domination Plan) as
                outlined on our pricing page.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                3. Billing and Payment
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  All services are billed on a monthly subscription basis at the
                  rate specified at the time of enrollment.
                </li>
                <li>
                  Payment is due at the beginning of each billing cycle and will
                  be automatically charged to the payment method on file.
                </li>
                <li>
                  There are no setup fees unless specifically agreed upon in
                  writing.
                </li>
                <li>
                  If a payment fails, we will attempt to charge the payment
                  method again. If payment is not received within 7 days of the
                  due date, services may be suspended until the balance is
                  settled.
                </li>
                <li>
                  All fees are quoted in US Dollars (USD) and are
                  non-refundable except as expressly stated in these terms.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                4. Cancellation Policy
              </h2>
              <p className="mb-3">
                Either party may cancel the service agreement with{" "}
                <strong className="text-brand-white">
                  30 days written notice
                </strong>
                . Upon cancellation:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Services will remain active until the end of the current
                  billing cycle after the 30-day notice period.
                </li>
                <li>
                  The Client retains ownership of their Google Business Profile
                  and any reviews collected during the service period.
                </li>
                <li>
                  The website and automations built as part of the service are
                  owned by Xhine Systems and will be deactivated upon
                  cancellation. Custom domain ownership remains with the Client
                  if registered in their name.
                </li>
                <li>
                  We will provide reasonable transition assistance to help you
                  move to a new provider if requested.
                </li>
                <li>
                  No partial refunds will be issued for unused portions of a
                  billing cycle.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                5. Client Responsibilities
              </h2>
              <p className="mb-3">As a Client, you agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Provide accurate and complete information needed to set up and
                  maintain your services (business name, contact info, photos,
                  credentials, etc.).
                </li>
                <li>
                  Respond to requests for information or approval in a timely
                  manner. Delays in providing required information may delay
                  service delivery.
                </li>
                <li>
                  Maintain active payment methods and ensure timely payment.
                </li>
                <li>
                  Provide access to relevant accounts (Google Business Profile,
                  domain registrar, etc.) as needed for service delivery.
                </li>
                <li>
                  Not engage in any activity that violates applicable laws,
                  regulations, or third-party terms of service.
                </li>
                <li>
                  Not use our services or website to distribute spam, malware,
                  or any harmful content.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                6. Intellectual Property
              </h2>
              <p>
                All websites, designs, copy, automations, and systems created by
                Xhine Systems remain the intellectual property of Xhine Systems
                unless explicitly transferred in writing. The Client is granted
                a license to use these materials for the duration of the active
                service agreement. Upon cancellation, this license is revoked
                unless otherwise agreed upon.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                7. Limitation of Liability
              </h2>
              <p className="mb-3">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Xhine Systems shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages
                  arising from or related to your use of our services.
                </li>
                <li>
                  Our total liability for any claim arising from the services
                  shall not exceed the total amount paid by the Client in the
                  three (3) months preceding the claim.
                </li>
                <li>
                  We do not guarantee specific results, rankings, lead volumes,
                  or revenue increases. Results vary based on industry, market,
                  competition, and other factors outside our control.
                </li>
                <li>
                  We are not liable for any downtime, data loss, or service
                  interruptions caused by third-party providers (including but
                  not limited to GoHighLevel, Google, hosting providers, or
                  payment processors).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                8. Disclaimer of Warranties
              </h2>
              <p>
                Our services are provided &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; without warranties of any kind, whether express
                or implied, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement. We do not warrant that our services will be
                uninterrupted, error-free, or completely secure.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                9. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Xhine Systems, its
                owner, employees, and agents from any claims, damages, losses,
                or expenses (including reasonable legal fees) arising from your
                breach of these terms, your use of our services, or your
                violation of any applicable law or third-party rights.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                10. Communications Consent
              </h2>
              <p>
                By engaging our services or submitting a form on our website,
                you consent to receive SMS and email communications from Xhine
                Systems related to your account, services, and business. You may
                opt out of SMS at any time by replying STOP. You may opt out of
                emails by clicking the unsubscribe link. Opting out of
                communications may affect our ability to deliver certain
                services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                11. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance
                with the laws of the State of Georgia, United States, without
                regard to conflict of law principles. Any disputes arising from
                these terms shall be resolved in the courts of the State of
                Georgia.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                12. Modifications to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Service at any
                time. Changes will be posted on this page with an updated
                &ldquo;Last Updated&rdquo; date. Your continued use of our
                services after changes are posted constitutes your acceptance of
                the modified terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                13. Severability
              </h2>
              <p>
                If any provision of these terms is found to be unenforceable or
                invalid, that provision shall be limited or eliminated to the
                minimum extent necessary, and the remaining provisions shall
                remain in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                14. Contact
              </h2>
              <p>
                For any questions about these Terms of Service, please contact
                us:
              </p>
              <div className="mt-3 rounded-md border border-brand-border bg-brand-surface/30 p-4">
                <p className="text-brand-white font-medium">Xhine Systems</p>
                <p>Atlanta, GA</p>
                <p>Email: hello@xhinessystems.com</p>
                <p>Website: xhinessystems.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
