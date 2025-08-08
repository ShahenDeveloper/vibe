import React from "react";

const ContactUsPage = () => {
  return (
    <div className="text-white bg-[#1c1c1cbf] min-h-screen py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6">
          Have a question, need support, or want to discuss a business
          opportunity? We’d love to hear from you.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Email</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Support: support@veredai.com</li>
            <li>Business: business@veredai.com</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Phone</h2>
          <p>+1 (555) 123-4567</p>

          <h2 className="text-2xl font-semibold mt-6">Address</h2>
          <p>123 AI Innovation Blvd, Suite 100, San Francisco, CA, USA</p>

          <h2 className="text-2xl font-semibold mt-6">Community</h2>
          <p>Join our developer and AI community to stay updated.</p>

          <h2 className="text-2xl font-semibold mt-6">Social Media</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Twitter: @veredai</li>
            <li>LinkedIn: linkedin.com/company/veredai</li>
            <li>GitHub: github.com/veredai</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
