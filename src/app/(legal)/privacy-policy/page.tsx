import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="text-white bg-[#1c1c1cbf] min-h-screen py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-2">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            VeredAI ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our AI development
{/* eslint-disable-next-line react/no-unescaped-entities */}
            platform and services ("Services") available at{" "}
            <strong>veredai.com</strong>.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <h3 className="text-xl font-semibold mt-4">Personal Information</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Account Information: Name, email address, company name, job title,
              and contact details
            </li>
            <li>
              Payment Information: Billing address, payment details (handled via
              third-party processors)
            </li>
            <li>
              Profile Information: Preferences, API keys, and account settings
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Technical Information</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Usage Data: API calls, feature usage, response times, error logs,
              performance metrics
            </li>
            <li>
              Device Information: IP addresses, browser type, OS, and device
              identifiers
            </li>
            <li>
              Cookies and Tracking: Session cookies, analytics, and similar
              technologies
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">AI Model Data</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Training Data: Data you provide to train or fine-tune AI models
            </li>
            <li>
              Input/Output Data: Prompts, queries, and generated outputs
            </li>
            <li>
              Performance Metrics: Feedback, accuracy data, and improvement
              suggestions
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              To provide, maintain, and improve our services and platform
            </li>
            <li>
              To personalize your experience and provide relevant content
            </li>
            <li>To analyze usage trends and optimize performance</li>
            <li>To ensure security and prevent fraud or misuse</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">Data Sharing and Disclosure</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              With service providers for payment processing, analytics, and
              infrastructure
            </li>
            <li>When required by law or government requests</li>
            <li>
              With your consent or as part of a business transaction (e.g.,
              merger or acquisition)
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">International Data Transfers</h2>
          <p>
            Your data may be processed outside your country of residence. We
            ensure appropriate safeguards are in place, including standard
            contractual clauses and compliance with international data
            protection laws.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Access and update your personal data</li>
            <li>Request data deletion (subject to limitations)</li>
            <li>Opt-out of communications and analytics tracking</li>
            <li>Request portability of your data</li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">Security</h2>
          <p>
            We implement industry-standard security measures including
            encryption, secure servers, and access controls to protect your
            data. However, no system is 100% secure.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">Children&apos;s Privacy</h2>
          <p>
            Our services are not intended for users under the age of 13. We do
            not knowingly collect data from children without parental consent.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify users
            of significant changes via email or by posting a notice on our
            website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
