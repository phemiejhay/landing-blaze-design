
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Shield, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-200/40 to-purple-200/40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-cyan-200/40 to-teal-200/40 blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 h-48 w-48 rounded-full bg-gradient-to-r from-pink-200/40 to-rose-200/40 blur-xl animate-pulse delay-500"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 h-4 w-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 h-3 w-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-40 h-5 w-5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-bounce delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjM2NmYxIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+")`
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Enhanced announcement badge */}
        <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-8 py-4 text-sm font-semibold text-indigo-700 mb-12 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
          <Sparkles className="h-5 w-5 text-indigo-600 animate-pulse" />
          <span>🚀 Revolutionary AI-Powered Outreach Platform</span>
          <ArrowRight className="h-4 w-4 text-indigo-600 group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        {/* Enhanced hero headline */}
        <div className="mb-12">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-gray-900 mb-8 leading-tight">
            Turn Cold Leads Into
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Hot Customers
              </span>
              <div className="absolute -bottom-6 left-0 right-0 h-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-30 rounded-full animate-pulse"></div>
            </span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
            The world's first AI-powered outreach platform that audits, analyzes, and converts prospects automatically
          </p>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Stop wasting time on cold outreach. Let AI find, analyze, and convert your perfect customers while you focus on closing deals.
          </p>
        </div>

        {/* Enhanced CTA section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-110 group">
            Start Free Trial
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button variant="outline" className="px-8 py-6 text-lg font-semibold rounded-2xl border-2 border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 group">
            <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            Watch Demo
          </Button>
        </div>

        {/* Enhanced social proof */}
        <div className="mb-16">
          <p className="text-gray-500 mb-8 text-lg font-medium">
            Trusted by 10,000+ sales professionals and growing agencies
          </p>
          
          <div className="flex items-center justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 w-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">LOGO</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Zap, number: "300%", label: "Faster Lead Generation", color: "from-yellow-500 to-orange-500" },
            { icon: Shield, number: "95%", label: "Response Rate Increase", color: "from-green-500 to-emerald-500" },
            { icon: Star, number: "10k+", label: "Happy Customers", color: "from-blue-500 to-indigo-500" }
          ].map((stat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
