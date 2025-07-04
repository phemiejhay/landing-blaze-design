
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Target } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-20 sm:px-6 lg:px-8">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-gradient-to-r from-indigo-400/20 to-purple-400/20 blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay using base64 encoded SVG */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=")`
        }}
      ></div>
      
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          {/* Floating badges */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm text-white animate-fade-in">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span>✨ AI-Powered Outreach Revolution</span>
            </div>
          </div>

          <h1 className="text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl mb-6 animate-fade-in">
            Client outreach,{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                reinvented
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 blur-lg opacity-30 animate-pulse"></div>
            </span>
            .
          </h1>
          
          <h2 className="text-2xl font-bold text-cyan-300 sm:text-3xl mb-8 animate-fade-in delay-200">
            🧠 Powered by real insight.
          </h2>
          
          <p className="mx-auto max-w-4xl text-xl text-gray-300 sm:text-2xl leading-relaxed mb-12 animate-fade-in delay-300">
            OutreachOS helps you discover better leads, audit their digital presence, and close them with 
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold"> smarter AI-powered messaging</span> — all in one clean system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-500">
            <Button 
              onClick={scrollToWaitlist}
              size="lg" 
              className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 px-8 py-6 text-xl font-bold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 border-0"
            >
              <Zap className="mr-2 h-6 w-6 group-hover:animate-pulse" />
              🚀 Join the waitlist for early access
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <div className="flex items-center gap-2 text-gray-300">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-white"></div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 border-2 border-white"></div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-2 border-white"></div>
              </div>
              <span className="text-sm">Join 500+ early adopters</span>
            </div>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 animate-fade-in delay-700">
            <div className="text-center">
              <div className="text-4xl font-black text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Better Response Rates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-400 mb-2">50%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-pink-400 mb-2">3x</div>
              <div className="text-gray-300">More Qualified Leads</div>
            </div>
          </div>
          
          <div className="animate-bounce delay-1000">
            <ArrowDown className="mx-auto h-8 w-8 text-gray-400" />
          </div>
        </div>
        
        {/* Hero Visual - More sophisticated */}
        <div className="mt-20 animate-fade-in delay-1000">
          <div className="mx-auto max-w-6xl relative">
            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 h-16 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60 animate-pulse"></div>
            <div className="absolute -top-4 -right-12 h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-60 animate-pulse delay-500"></div>
            <div className="absolute -bottom-6 -left-4 h-12 w-12 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 opacity-60 animate-pulse delay-1000"></div>
            
            <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden relative">
                {/* Dashboard mockup */}
                <div className="w-full h-full p-8">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                      <div className="h-4 w-32 bg-white/20 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-6 w-6 bg-green-400/60 rounded-full"></div>
                      <div className="h-6 w-6 bg-yellow-400/60 rounded-full"></div>
                      <div className="h-6 w-6 bg-red-400/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content grid */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/30 flex items-center justify-center">
                      <Target className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30"></div>
                    <div className="h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg border border-green-400/30"></div>
                  </div>
                  
                  {/* Chart area */}
                  <div className="h-24 bg-gradient-to-r from-slate-700/30 to-slate-800/30 rounded-lg border border-white/10 mb-4 flex items-end justify-around p-2">
                    <div className="h-8 w-2 bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-full"></div>
                    <div className="h-12 w-2 bg-gradient-to-t from-purple-400 to-purple-300 rounded-full"></div>
                    <div className="h-6 w-2 bg-gradient-to-t from-pink-400 to-pink-300 rounded-full"></div>
                    <div className="h-16 w-2 bg-gradient-to-t from-green-400 to-green-300 rounded-full"></div>
                    <div className="h-10 w-2 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-full"></div>
                  </div>
                </div>
                
                {/* Overlay badge */}
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg">
                  🎯 Live Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
