// modules/home/ui/layout.tsx (or similar)

import { Navbar } from "@/modules/home/ui/components/navbar";
import Footer from "@/modules/home/ui/components/footer";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="relative flex flex-col min-h-screen font-sans">
      <Navbar />
      {/* Background blobs */}
      <div className="absolute inset-0 -z-[1] overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.15] mix-blend-soft-light" />
        <div
          className="blob"
          style={{
            width: "140vmax",
            height: "140vmax",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -40%)",
            background:
              "radial-gradient(circle at center, rgba(24,27,30,0.8) 0%, transparent 100%)",
            filter: "blur(140px)",
            opacity: 1,
          }}
        />
        <div
          className="blob"
          style={{
            width: "100vmax",
            height: "100vmax",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -40%)",
            background:
              "radial-gradient(circle at center, rgba(62,89,150,0.7) 0%, transparent 70%)",
            opacity: 1,
          }}
        />
        <div
          className="blob"
          style={{
            width: "85vmax",
            height: "85vmax",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -40%)",
            background:
              "radial-gradient(circle at center, rgba(204,147,195,0.6) 0%, transparent 70%)",
            opacity: 1,
          }}
        />
        <div
          className="blob"
          style={{
            width: "75vmax",
            height: "75vmax",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -40%)",
            background:
              "radial-gradient(circle at center, rgb(241, 100, 4) 0%, transparent 60%)",
            opacity: 1,
          }}
        />
      </div>
      {/* Page content */}
      <div className="flex-1 flex flex-col ">{children}</div>
       <Footer />
    </main>
  );
};

export default Layout;
