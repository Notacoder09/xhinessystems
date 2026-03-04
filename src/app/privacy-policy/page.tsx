import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "XhinesSystems Privacy Policy — how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | XhinesSystems",
    description:
      "XhinesSystems Privacy Policy — how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section-dark pt-28 pb-8 sm:pt-36">
        <div className="container-main">
          <h1 className="font-heading text-3xl font-bold uppercase tracking-wide">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-xs-gray">Last updated: March 2026</p>
        </div>
      </section>

      <section className="section-light py-12 lg:py-16">
        <div className="container-main">
          <div className="mx-auto max-w-2xl space-y-8 text-sm text-xs-text-muted leading-relaxed">
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">1. Introduction</h2>
              <p>XhinesSystems (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates xhinessystems.com and provides local presence management services for trades and contractors. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
            </div>
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">2. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-xs-text-dark">Contact Info:</strong> First name, last name, email, phone number, business name, and trade/industry — collected through our contact form and booking system.</li>
                <li><strong className="text-xs-text-dark">Communications:</strong> Messages, emails, and SMS exchanges with us.</li>
                <li><strong className="text-xs-text-dark">Usage Data:</strong> IP address, browser type, pages visited, time on site, and referring URL — collected automatically.</li>
                <li><strong className="text-xs-text-dark">Cookies:</strong> Small text files used to improve your experience and analyze site usage.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To respond to your inquiries and provide services</li>
                <li>To send SMS and email communications related to your inquiry, appointments, reminders, and follow-ups</li>
                <li>To improve our website and services</li>
                <li>To analyze traffic and usage patterns</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">4. SMS and Email Communications</h2>
              <p>By submitting a form or booking a call, you consent to receive SMS and email communications from XhinesSystems. These may include appointment confirmations, reminders, follow-up messages, and service updates.</p>
              <p className="mt-2"><strong className="text-xs-text-dark">Opt-Out:</strong> Reply STOP to any SMS to opt out. Click unsubscribe in any email. Standard message and data rates may apply.</p>
            </div>
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">5. Third-Party Services</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-xs-text-dark">GoHighLevel (GHL):</strong> Our CRM and automation platform for managing contacts, booking, SMS/email, and lead processing. Data submitted through our forms is stored and processed by GoHighLevel.</li>
                <li><strong className="text-xs-text-dark">Vercel:</strong> Website hosting.</li>
                <li><strong className="text-xs-text-dark">Google Analytics:</strong> Website analytics and traffic analysis.</li>
              </ul>
              <p className="mt-2">These services have their own privacy policies. We encourage you to review them.</p>
            </div>
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">6. Cookies</h2>
              <p>We use cookies to improve site functionality and analyze usage. You can control cookies through your browser settings. Disabling them may affect your experience.</p>
            </div>
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">7. Data Security</h2>
              <p>We use reasonable measures to protect your information. However, no internet transmission or electronic storage is 100% secure.</p>
            </div>
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">8. Data Retention</h2>
              <p>We retain your information as long as needed to provide services, comply with legal obligations, and resolve disputes. You may request deletion by contacting us.</p>
            </div>
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">9. Your Rights</h2>
              <p>Depending on your location, you may have the right to access, correct, or delete your personal information, and to opt out of communications. Contact us to exercise these rights.</p>
            </div>
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">10. Children&apos;s Privacy</h2>
              <p>Our services are not directed to individuals under 18. We do not knowingly collect information from children.</p>
            </div>
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">11. Changes</h2>
              <p>We may update this policy. Changes will be posted here with an updated date. Continued use constitutes acceptance.</p>
            </div>
            <div>
              <h2 className="font-heading text-base font-bold uppercase tracking-wide text-xs-text-dark mb-2">12. Contact</h2>
              <p>Questions? Reach us at:</p>
              <div className="mt-2 rounded border border-xs-border-light bg-white p-4 shadow-sm">
                <p className="text-xs-text-dark font-medium">XhinesSystems</p>
                <p>Atlanta, GA</p>
                <p>hello@xhinessystems.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
