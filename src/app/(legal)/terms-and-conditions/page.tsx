import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="text-white bg-[#1c1c1cbf] min-h-screen py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-sm text-gray-400 mb-2">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            These Terms and Conditions govern your use of the services provided
            by VeredAI through veredai.com. By accessing or using our platform,
            you agree to comply with these terms.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">2. Eligibility & Accounts</h2>
          <p>
            You must be at least 18 years old (or have legal guardian consent)
            to use our services. You are responsible for safeguarding your
            account credentials.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">3. Service Use</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Do not use our AI models for illegal, harmful, or discriminatory
              purposes.
            </li>
            <li>
              Do not reverse-engineer, exploit, or misuse our AI technology.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
          <p>
            All AI models, platform features, and code are the exclusive
            property of VeredAI.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">5. Payment & Refunds</h2>
          <p>
            Payments are processed securely through third-party providers.
            Refund eligibility depends on your selected plan and is at our sole
            discretion.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p>
            VeredAI is not liable for indirect, incidental, or consequential
            damages arising from your use of the services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
