import Footer from "@/modules/home/ui/components/footer";
import { Navbar } from "@/modules/home/ui/components/navbar";

const PrivacyPolicyLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>
    <Navbar/>
    {children}
    <Footer/>
    </main>;
};

export default PrivacyPolicyLayout;
