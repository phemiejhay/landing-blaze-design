import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Target, Star, Rocket } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation integrated into hero background */}
      <Navigation />
      
      <div className="px-4 pb-20 sm:px-6 lg:px-8">
        {/* Animated background constellation */}
        <div className="absolute inset-0">
          {/* Dynamic gradient orbs with enhanced animations */}
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-400/40 to-pink-400/40 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-400/40 to-cyan-400/40 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-emerald-400/30 to-teal-400/30 blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/3 h-48 w-48 rounded-full bg-gradient-to-r from-yellow-400/30 to-orange-400/30 blur-xl animate-pulse delay-2000"></div>
          
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute h-2 w-2 rounded-full bg-white/20 animate-pulse`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Animated mesh pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+")`
          }}
        ></div>
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            {/* Enhanced floating badges with animations */}
            <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-6 py-3 text-sm text-white shadow-xl animate-fade-in hover:scale-105 transition-all duration-300">
                <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                <span>✨ AI-Powered Revolution</span>
              </div>
              <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md border border-emerald-400/30 px-6 py-3 text-sm text-emerald-200 shadow-xl animate-fade-in delay-200 hover:scale-105 transition-all duration-300">
                <Star className="h-5 w-5 text-emerald-400" />
                <span>🚀 500+ Early Adopters</span>
              </div>
            </div>

            <h1 className="text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl mb-8 animate-fade-in">
              Client outreach,{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  reinvented
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 blur-2xl opacity-50 animate-pulse rounded-lg"></div>
                <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              </span>
              .
            </h1>
            
            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text sm:text-4xl mb-10 animate-fade-in delay-200">
              🧠 Powered by real insight. Built for results.
            </h2>
            
            <p className="mx-auto max-w-4xl text-xl text-gray-300 sm:text-2xl leading-relaxed mb-12 animate-fade-in delay-300">
              OutreachOS helps you discover better leads, audit their digital presence, and close them with 
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold"> smarter AI-powered messaging</span> — all in one beautiful, intuitive system that actually works.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in delay-500">
              <Button 
                onClick={scrollToWaitlist}
                size="lg" 
                className="group relative bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 px-10 py-8 text-xl font-bold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-110 border-0 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Zap className="mr-3 h-7 w-7 group-hover:animate-pulse" />
                🚀 Join the waitlist for early access
                <Rocket className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`h-10 w-10 rounded-full border-3 border-white shadow-lg bg-gradient-to-r ${
                      i === 0 ? 'from-cyan-400 to-blue-500' :
                      i === 1 ? 'from-green-400 to-emerald-500' :
                      i === 2 ? 'from-purple-400 to-pink-500' :
                      i === 3 ? 'from-yellow-400 to-orange-500' :
                      'from-pink-400 to-red-500'
                    } animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold">Join 500+ early adopters</div>
                  <div className="text-gray-400">Growing daily</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 animate-fade-in delay-700">
              {[
                { number: "10x", label: "Better Response Rates", color: "from-cyan-400 to-blue-500", icon: Target },
                { number: "50%", label: "Time Saved Daily", color: "from-purple-400 to-pink-500", icon: Zap },
                { number: "3x", label: "More Qualified Leads", color: "from-emerald-400 to-teal-500", icon: Star }
              ].map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className={`text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="animate-bounce delay-1000">
              <div className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <span className="text-sm font-medium">Discover More</span>
                <ArrowDown className="h-6 w-6" />
              </div>
            </div>
          </div>
          
          <div className="mt-24 animate-fade-in delay-1000">
            <div className="mx-auto max-w-6xl relative">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full opacity-60 animate-pulse bg-gradient-to-r ${
                    i % 4 === 0 ? 'from-cyan-400 to-blue-500' :
                    i % 4 === 1 ? 'from-purple-400 to-pink-500' :
                    i % 4 === 2 ? 'from-green-400 to-emerald-500' :
                    'from-yellow-400 to-orange-500'
                  }`}
                  style={{
                    width: `${20 + Math.random() * 40}px`,
                    height: `${20 + Math.random() * 40}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
              
              <div className="relative rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl border border-white/30 p-12 shadow-2xl transform hover:scale-105 transition-all duration-700 hover:shadow-cyan-500/20">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl border border-white/20 flex items-center justify-center overflow-hidden relative shadow-2xl">
                  <div className="w-full h-full p-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg animate-pulse"></div>
                        <div className="space-y-2">
                          <div className="h-4 w-40 bg-white/30 rounded-full"></div>
                          <div className="h-3 w-24 bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-8 w-8 bg-emerald-400/70 rounded-full shadow-lg animate-pulse"></div>
                        <div className="h-8 w-8 bg-yellow-400/70 rounded-full shadow-lg animate-pulse delay-200"></div>
                        <div className="h-8 w-8 bg-red-400/70 rounded-full shadow-lg animate-pulse delay-500"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-6 mb-6">
                      {[
                        { color: 'from-cyan-500/30 to-blue-500/30', border: 'border-cyan-400/40', icon: Target },
                        { color: 'from-purple-500/30 to-pink-500/30', border: 'border-purple-400/40', icon: Zap },
                        { color: 'from-green-500/30 to-emerald-500/30', border: 'border-green-400/40', icon: Star },
                        { color: 'from-yellow-500/30 to-orange-500/30', border: 'border-yellow-400/40', icon: Sparkles }
                      ].map((item, i) => (
                        <div key={i} className={`h-20 bg-gradient-to-r ${item.color} rounded-xl border ${item.border} flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300`}>
                          <item.icon className="h-8 w-8 text-white animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                        </div>
                      ))}
                    </div>
                    
                    <div className="h-32 bg-gradient-to-r from-slate-700/40 to-slate-800/40 rounded-xl border border-white/20 mb-6 flex items-end justify-around p-4 shadow-inner">
                      {[16, 32, 12, 40, 24, 36, 20].map((height, i) => (
                        <div 
                          key={i}
                          className={`w-3 bg-gradient-to-t rounded-full shadow-lg animate-pulse`}
                          style={{ 
                            height: `${height}px`,
                            background: `linear-gradient(to top, ${
                              i % 4 === 0 ? '#06b6d4, #0891b2' :
                              i % 4 === 1 ? '#a855f7, #9333ea' :
                              i % 4 === 2 ? '#10b981, #059669' :
                              '#f59e0b, #d97706'
                            })`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 px-6 py-3 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white rounded-2xl text-sm font-bold shadow-2xl animate-pulse border border-white/20">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                      🎯 Live Preview
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
