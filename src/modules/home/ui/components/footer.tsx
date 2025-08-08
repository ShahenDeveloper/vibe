import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section
      className="py-12 w-full border-t border-white/10"
      style={{ backgroundColor: "#181717be", color: "#ffffff" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Build Smarter with VeredAI
            </h2>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed">
              Accelerate your development with AI tools built for modern SaaS
              teams. Deploy, fine-tune, and manage AI workflows in one place.
            </p>
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-12 text-center text-sm flex flex-wrap justify-center gap-6 text-white/80">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/contact-us" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/pricing" className="hover:underline">
            Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
