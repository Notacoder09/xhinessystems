import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Xhine Systems Privacy Policy — how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Xhine Systems",
    description:
      "Xhine Systems Privacy Policy — how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-brand-muted">
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 text-sm text-brand-muted leading-relaxed">
            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                1. Introduction
              </h2>
              <p>
                Xhine Systems (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                &ldquo;us&rdquo;) operates the website xhinessystems.com and
                provides local presence management services for trades and
                contractors. This Privacy Policy describes how we collect, use,
                disclose, and protect your personal information when you visit
                our website, use our services, or interact with us.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-brand-white">Personal Information:</strong>{" "}
                  First name, last name, email address, phone number, business
                  name, and trade/industry — collected through our contact form
                  and booking system.
                </li>
                <li>
                  <strong className="text-brand-white">Communications:</strong>{" "}
                  Messages, emails, and SMS exchanges between you and Xhine
                  Systems.
                </li>
                <li>
                  <strong className="text-brand-white">Usage Data:</strong>{" "}
                  IP address, browser type, operating system, pages visited,
                  time spent on pages, referring URL, and other analytics data
                  collected automatically when you visit our website.
                </li>
                <li>
                  <strong className="text-brand-white">Cookies & Tracking:</strong>{" "}
                  We use cookies and similar technologies to improve your
                  experience, analyze website usage, and support our marketing
                  efforts.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your inquiries and provide our services</li>
                <li>
                  To send you SMS and email communications related to your
                  inquiry, appointment confirmations, reminders, and follow-ups
                </li>
                <li>To improve our website, services, and user experience</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                4. SMS and Email Communications
              </h2>
              <p className="mb-3">
                By submitting a form on our website or booking a call, you
                consent to receive SMS and email communications from Xhine
                Systems. These communications may include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Appointment confirmations and reminders</li>
                <li>Follow-up messages regarding your inquiry</li>
                <li>Service updates and relevant information</li>
              </ul>
              <p className="mt-3">
                <strong className="text-brand-white">Opt-Out:</strong> You may
                opt out of SMS communications at any time by replying STOP to
                any message. You may opt out of email communications by clicking
                the unsubscribe link in any email or by contacting us directly.
                Standard message and data rates may apply.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                5. Third-Party Services
              </h2>
              <p className="mb-3">
                We use the following third-party tools and services to operate
                our business:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-brand-white">GoHighLevel (GHL):</strong>{" "}
                  Our CRM and automation platform used for managing contacts,
                  booking appointments, sending SMS/email communications, and
                  processing lead information. Data submitted through our forms
                  is stored and processed by GoHighLevel.
                </li>
                <li>
                  <strong className="text-brand-white">Vercel:</strong>{" "}
                  Our website hosting provider.
                </li>
                <li>
                  <strong className="text-brand-white">Google Analytics:</strong>{" "}
                  Used for website analytics and traffic analysis.
                </li>
              </ul>
              <p className="mt-3">
                These third parties have their own privacy policies, and we
                encourage you to review them. We are not responsible for the
                privacy practices of third-party services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                6. Cookies
              </h2>
              <p>
                Our website uses cookies — small text files stored on your
                device — to improve functionality and analyze usage. You can
                control cookie settings through your browser preferences. Note
                that disabling cookies may affect your experience on our
                website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                7. Data Security
              </h2>
              <p>
                We implement reasonable technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the internet or electronic storage is 100%
                secure. We cannot guarantee absolute security of your data.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                8. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to
                fulfill the purposes for which it was collected, comply with
                legal obligations, resolve disputes, and enforce our agreements.
                If you request deletion of your data, we will comply within a
                reasonable timeframe, subject to any legal requirements to
                retain certain information.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                9. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to opt out of communications</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the
                information below.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                10. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of
                18. We do not knowingly collect personal information from
                children. If we learn that we have collected information from a
                child under 18, we will take steps to delete that information
                promptly.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &ldquo;Last
                Updated&rdquo; date. Your continued use of our website and
                services after changes are posted constitutes your acceptance of
                the updated policy.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-brand-white mb-3">
                12. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
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
