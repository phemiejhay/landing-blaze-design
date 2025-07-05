import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Star, Rocket, Target, Brain, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "Full 7-layer business audits", 
      description: "Deep analysis across all business touchpoints with AI-powered insights that reveal hidden opportunities",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      hoverGradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: "⚖️",
      title: "Competitor comparison insights",
      description: "See how prospects stack against their competition in real-time with detailed market positioning analysis",
      gradient: "from-purple-500 to-pink-500", 
      bgGradient: "from-purple-50 to-pink-50",
      hoverGradient: "from-purple-600 to-pink-600"
    },
    {
      icon: "🤖",
      title: "Personalized AI messaging",
      description: "DMs, emails, and pitches written specifically for each prospect using advanced natural language processing",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      hoverGradient: "from-green-600 to-emerald-600"
    },
    {
      icon: "👁️",
      title: "Visual CRM dashboard",
      description: "Complete relationship management system with beautiful data visualization and actionable insights",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      hoverGradient: "from-orange-600 to-red-600"
    },
    {
      icon: "📄",
      title: "Exportable audit reports",
      description: "Professional white-labeled reports to share with prospects that showcase your expertise and build trust",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      hoverGradient: "from-indigo-600 to-blue-600"
    },
    {
      icon: "🗺️",
      title: "Multiple lead sources",
      description: "Google Maps integration, CSV uploads, API connections, and custom data inputs for maximum flexibility",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
      hoverGradient: "from-teal-600 to-cyan-600"
    },
    {
      icon: "🔄",
      title: "Smart follow-up system",
      description: "Automated sequences that actually convert prospects with perfect timing and personalized content",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
      hoverGradient: "from-violet-600 to-purple-600"
    },
    {
      icon: "💰",
      title: "Flexible pricing tiers",
      description: "Perfect plans for solo freelancers to growing agencies with transparent pricing and no hidden fees",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      hoverGradient: "from-yellow-600 to-orange-600"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-200/30 to-purple-200/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-cyan-200/30 to-teal-200/30 blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 h-48 w-48 rounded-full bg-gradient-to-r from-pink-200/30 to-rose-200/30 blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjM2NmYxIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==")`
        }}
      ></div>
      
      <div className="relative mx-auto max-w-7xl">
        {/* Enhanced header section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-8 py-4 text-sm font-semibold text-indigo-700 mb-8 shadow-lg hover:scale-105 transition-transform duration-300">
            <Sparkles className="h-5 w-5 text-indigo-600 animate-pulse" />
            <span>✨ Revolutionary Features</span>
            <Star className="h-4 w-4 text-yellow-500" />
          </div>
          
          <h2 className="text-6xl font-black text-gray-900 sm:text-7xl mb-8 leading-tight">
            What Makes OutreachOS{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Unique
              </span>
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-30 rounded-full animate-pulse"></div>
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"></div>
              </div>
              <div className="absolute -bottom-6 -left-6">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse delay-500"></div>
              </div>
            </span>
          </h2>
          
          <p className="mx-auto max-w-4xl text-2xl text-gray-600 leading-relaxed font-medium">
            Revolutionary features that transform how you find, analyze, and convert prospects into loyal clients
          </p>
        </div>
        
        {/* Enhanced features grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 border-0 bg-white hover:scale-110 cursor-pointer transform-gpu">
              {/* Enhanced gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Animated border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-lg blur`}></div>
              
              {/* Content */}
              <CardContent className="relative p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className={`text-5xl p-4 rounded-3xl bg-gradient-to-r ${feature.gradient} shadow-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <span className="filter drop-shadow-lg">{feature.icon}</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600" />
                  </div>
                </div>
                
                <h3 className="font-black text-gray-900 mb-4 text-xl leading-tight group-hover:text-gray-800 transition-colors duration-300">
                  ✅ {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Enhanced hover effect line with animation */}
                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-lg`}></div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-1 w-1 bg-white rounded-full animate-pulse"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced bottom CTA section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-3xl font-bold shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-110 cursor-pointer group border border-white/20">
            <Rocket className="h-6 w-6 group-hover:animate-pulse" />
            <span className="text-xl">🚀 Ready to transform your outreach?</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`h-2 w-2 rounded-full bg-white animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
