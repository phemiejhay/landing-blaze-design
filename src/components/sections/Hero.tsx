
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-20 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Client outreach,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              reinvented
            </span>
            .
          </h1>
          <h2 className="mt-6 text-lg font-medium text-gray-900 sm:text-xl">
            Powered by real insight.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 sm:text-xl">
            OutreachOS helps you discover better leads, audit their presence, and close them with smarter AI-powered messaging — all in one clean system.
          </p>
          
          <div className="mt-10 flex justify-center">
            <Button 
              onClick={scrollToWaitlist}
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl transition-all duration-200"
            >
              🚀 Join the waitlist for early access
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-gray-400" />
          </div>
        </div>
        
        {/* Hero Visual Placeholder */}
        <div className="mt-20">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 p-8 shadow-2xl">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🧠</span>
                </div>
                <p className="text-gray-600 font-medium">Dashboard Preview Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
