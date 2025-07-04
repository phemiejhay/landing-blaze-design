
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "Full 7-layer business audits",
      description: "Deep analysis across all business touchpoints with AI-powered insights",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: "⚖️", 
      title: "Competitor comparison insights",
      description: "See how prospects stack against their competition in real-time",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: "🤖",
      title: "Personalized AI messaging",
      description: "DMs, emails, and pitches written specifically for each prospect",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: "👁️",
      title: "Visual CRM dashboard",
      description: "Not just cold email - complete relationship management system",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: "📄",
      title: "Exportable audit reports",
      description: "Professional white-labeled reports to share with prospects",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      icon: "🗺️",
      title: "Multiple lead sources",
      description: "Google Maps integration, CSV uploads, and custom data inputs",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50"
    },
    {
      icon: "🔄",
      title: "Smart follow-up system",
      description: "Automated sequences that actually convert prospects",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50"
    },
    {
      icon: "💰",
      title: "Flexible pricing tiers",
      description: "Perfect plans for solo freelancers to growing agencies",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration using base64 encoded SVG */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTMwIDMwbS0zMCAwYTMwIDMwIDAgMSAxIDYwIDBhMzAgMzAgMCAxIDEgLTYwIDAiLz48L2c+PC9nPjwvc3ZnPg==")`
        }}
      ></div>
      
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 text-sm font-medium text-indigo-700 mb-6">
            <span>✨ Unique Features</span>
          </div>
          
          <h2 className="text-5xl font-black text-gray-900 sm:text-6xl mb-6">
            What Makes OutreachOS{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Unique
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-20 rounded-full"></div>
            </span>
          </h2>
          
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            Revolutionary features that transform how you find, analyze, and convert prospects
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105 cursor-pointer">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <CardContent className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-4xl p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="filter drop-shadow-sm">{feature.icon}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight group-hover:text-gray-800">
                  ✅ {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700">
                  {feature.description}
                </p>
                
                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span>🚀 Ready to transform your outreach?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
