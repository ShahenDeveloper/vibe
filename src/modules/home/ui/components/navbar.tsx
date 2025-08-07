"use client";

import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { UserControl } from "@/components/user-control";

export const Navbar = () => {
  const isScrolled = useScroll();

  return (
    <nav
      className={cn(
        "p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gray-800/30 backdrop-blur-sm border-b border-border"
          : "bg-transparent backdrop-blur-none border-b "
      )}
    >
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="VEREDAI" width={24} height={24} />
          <span className="font-semibold text-sm sm:text-lg text-white">VERED-AI</span>
        </Link>
        <SignedOut>
          <div className="flex gap-2 text-white ">
            <SignUpButton>
              <Button variant="outline" className="sm:text-[14px] text-[12px]" size="sm">
                Sign up
              </Button>
            </SignUpButton>
            <SignInButton>
              <Button size="sm" className="sm:text-[14px] text-[12px]">Sign in</Button>
            </SignInButton>
          </div>
        </SignedOut>
          <SignedIn>
            <UserControl showName />
          </SignedIn>
      </div>
    </nav>
  );
};
