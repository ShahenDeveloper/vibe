import { Navbar } from "@/modules/home/ui/components/navbar";
import type { ReactNode } from "react";

import { Montserrat } from "next/font/google";
import Footer from "@/modules/home/ui/components/footer";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Choose weights as needed
  subsets: ["latin"],
});

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className={`${montserrat.className} relative flex flex-col min-h-screen`}>
      <Navbar />
      
      {/* Enhanced Blobs layer with smooth concentric blending */}
      <div className="absolute inset-0 -z-[1] overflow-hidden">
          <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.15] mix-blend-soft-light" />

        {/* Dark Gray - Largest/Outermost */}
        <div
          className="blob"
          style={{
            width: "140vmax",
            height: "140vmax",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -40%)",
            background: "radial-gradient(circle at center, rgba(24,27,30,0.8) 0%, transparent 100%)",
            filter: "blur(140px)",
            opacity: 1,
          }}
        />
        
        {/* Blue */}
        <div
          className="blob"
          style={{
            width: "100vmax",
            height: "100vmax",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -40%)",
            background: "radial-gradient(circle at center, rgba(62,89,150,0.7) 0%, transparent 70%)",
            // filter: "blur(100px)",
            opacity: 1,
          }}
        />
        
        {/* Pinkish */}
        <div
          className="blob"
          style={{
            width: "85vmax",
            height: "85vmax",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -40%)",
            background: "radial-gradient(circle at center, rgba(204,147,195,0.6) 0%, transparent 70%)",
            // filter: "blur(70px)",
            opacity: 1,
          }}
        />
        
        {/* Orange - Smallest/Innermost */}
        <div
          className="blob"
          style={{
            width: "75vmax",
            height: "75vmax",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -40%)",
            background: "radial-gradient(circle at center, RGB(241, 100, 4) 0%, transparent 60%)",
            // filter: "blur(40px)",
            opacity: 1,
          }}
        />
      </div>

      {/* Page content */}
      <div className="flex-1 flex flex-col z-10 relative">
        {children}
      </div>
      <Footer/>
    </main>
  );
};

export default Layout;