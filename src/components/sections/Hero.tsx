
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Target, Star, Rocket, ChevronRight } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation at the top */}
      <Navigation />
      
      <div className="px-4 pb-20 sm:px-6 lg:px-8">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-emerald-400/15 to-teal-400/15 blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Floating grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+")`
          }}
        ></div>
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center pt-20">
            {/* Animated announcement badge */}
            <div className="mb-8 flex justify-center animate-fade-in">
              <div className="group inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 text-sm text-white shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">🎉 Now in Beta</span>
                </div>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Main heading with staggered animation */}
            <div className="space-y-6 mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white animate-fade-in">
                Client outreach,{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    reinvented
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl rounded-lg animate-glow"></div>
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 animate-fade-in delay-200">
                Powered by real insight. Built for results.
              </h2>
            </div>
            
            <p className="mx-auto max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed mb-12 animate-fade-in delay-300">
              OutreachOS helps you discover better leads, audit their digital presence, and close them with 
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold"> smarter AI-powered messaging</span> — all in one beautiful, intuitive system.
            </p>
            
            {/* CTA buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-500">
              <Button 
                onClick={scrollToWaitlist}
                size="lg" 
                className="group relative bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 px-8 py-6 text-lg font-bold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105 border-0 rounded-xl"
              >
                <Rocket className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Get Started Free
                <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline"
                className="px-8 py-6 text-lg font-semibold text-white border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats section with animated counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 animate-fade-in delay-700">
              {[
                { number: "10x", label: "Better Response Rates", color: "from-cyan-400 to-blue-500", icon: Target },
                { number: "50%", label: "Time Saved Daily", color: "from-purple-400 to-pink-500", icon: Zap },
                { number: "3x", label: "More Qualified Leads", color: "from-emerald-400 to-teal-500", icon: Star }
              ].map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10">
                  <div className="flex justify-center mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className={`text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce delay-1000">
              <div className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-medium">Discover More</span>
                <ArrowDown className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          {/* Modern dashboard preview */}
          <div className="mt-20 animate-fade-in delay-1000">
            <div className="mx-auto max-w-5xl relative">
              <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 p-8 shadow-2xl">
                <div className="aspect-video rounded-xl bg-slate-900/50 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden relative">
                  <div className="w-full h-full p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg"></div>
                        <div className="space-y-1">
                          <div className="h-3 w-32 bg-white/30 rounded-full"></div>
                          <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-6 w-6 bg-emerald-400/70 rounded-full"></div>
                        <div className="h-6 w-6 bg-yellow-400/70 rounded-full"></div>
                        <div className="h-6 w-6 bg-red-400/70 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      {[
                        'from-cyan-500/20 to-blue-500/20',
                        'from-purple-500/20 to-pink-500/20',
                        'from-green-500/20 to-emerald-500/20',
                        'from-yellow-500/20 to-orange-500/20'
                      ].map((gradient, i) => (
                        <div key={i} className={`h-16 bg-gradient-to-r ${gradient} rounded-lg border border-white/20 flex items-center justify-center`}>
                          <div className="h-6 w-6 bg-white/30 rounded animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="h-24 bg-gradient-to-r from-slate-700/30 to-slate-800/30 rounded-lg border border-white/10 mb-4 flex items-end justify-around p-3">
                      {[12, 24, 8, 32, 16, 28].map((height, i) => (
                        <div 
                          key={i}
                          className="w-2 bg-gradient-to-t from-cyan-400 to-purple-400 rounded animate-pulse"
                          style={{ 
                            height: `${height}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-sm font-bold shadow-lg animate-pulse">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                      Live Preview
                    </div>
                  </div>
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
