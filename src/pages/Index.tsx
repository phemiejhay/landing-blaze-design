
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Audience from "@/components/sections/Audience";
import EarlyAccess from "@/components/sections/EarlyAccess";
import SneakPeek from "@/components/sections/SneakPeek";
import WaitlistForm from "@/components/sections/WaitlistForm";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Hero />
      <HowItWorks />
      <Features />
      <Audience />
      <EarlyAccess />
      <SneakPeek />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
