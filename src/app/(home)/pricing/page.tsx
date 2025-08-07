"use client";

import Image from "next/image";
import { dark } from "@clerk/themes";
import { PricingTable } from "@clerk/nextjs";
import { useCurrentTheme } from "@/hooks/use-current-theme";

const Page = () => {
  const currentTheme = useCurrentTheme();

  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-6 lg:px-8">
      <section className="flex flex-col items-center text-center pt-[12vh] sm:pt-32 gap-6 max-w-3xl mx-auto w-full">
        <Image 
          src="/logo.svg"
          alt="VEREDAI"
          width={60}
          height={60}
          className="hidden md:block"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Pricing
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white max-w-md">
          Choose the plan that fits your needs
        </p>

        <div className="w-full sm:[80%] md:w-[70%] lg:w-full">
          <PricingTable
            appearance={{
              baseTheme: currentTheme === "dark" ? dark : undefined,
              elements: {
                pricingTableCard: "border! shadow-none! rounded-lg!"
              }
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
