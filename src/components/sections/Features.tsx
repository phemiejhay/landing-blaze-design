
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Star, Rocket, Target, Brain, Sparkles, CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "AI-Powered Lead Discovery", 
      description: "Advanced algorithms identify high-quality prospects across multiple channels with 90% accuracy",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Brain,
      title: "Intelligent Audit Reports",
      description: "Comprehensive 360° business analysis that reveals hidden opportunities and pain points",
      gradient: "from-purple-500 to-pink-500", 
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Zap,
      title: "Smart Personalization",
      description: "AI crafts unique messages for each prospect based on their business profile and needs",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Shield,
      title: "Multi-Channel Outreach",
      description: "Seamlessly manage email, LinkedIn, and phone campaigns from one unified dashboard",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: Star,
      title: "Real-Time Analytics",
      description: "Track performance, optimize campaigns, and measure ROI with detailed insights",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      icon: Rocket,
      title: "Automated Follow-ups",
      description: "Smart sequences that nurture leads with perfect timing and personalized content",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-indigo-200/20 to-purple-200/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-cyan-200/20 to-teal-200/20 blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 text-sm font-semibold text-indigo-700 mb-6 shadow-lg">
            <Sparkles className="h-4 w-4 text-indigo-600 animate-pulse" />
            <span>Features</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              close more deals
            </span>
          </h2>
          
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Powerful features designed to transform your outreach and accelerate your sales process
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105 cursor-pointer">
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              <CardContent className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-4 text-xl leading-tight group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-105 cursor-pointer">
            <CheckCircle className="h-5 w-5" />
            <span>Ready to get started?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
