
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Star, Crown } from "lucide-react";

const PricingPreview = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for freelancers and solo consultants",
      badge: "Most Popular",
      badgeColor: "from-green-500 to-emerald-500",
      gradient: "from-green-50 to-emerald-50",
      borderGradient: "from-green-400 to-emerald-400",
      icon: Zap,
      features: [
        "50 prospect audits per month",
        "AI-powered messaging",
        "Basic CRM dashboard",
        "Email & LinkedIn outreach",
        "Standard audit reports",
        "24/7 email support"
      ]
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing agencies and teams",
      badge: "Best Value",
      badgeColor: "from-purple-500 to-indigo-500",
      gradient: "from-purple-50 to-indigo-50",
      borderGradient: "from-purple-400 to-indigo-400",
      icon: Star,
      features: [
        "200 prospect audits per month",
        "Advanced AI personalization",
        "Full CRM with automation",
        "Multi-channel outreach",
        "White-labeled reports",
        "Team collaboration tools",
        "Priority support & training"
      ]
    },
    {
      name: "Enterprise", 
      price: "$199",
      period: "/month",
      description: "For large teams and agencies",
      badge: "Premium",
      badgeColor: "from-yellow-500 to-orange-500",
      gradient: "from-yellow-50 to-orange-50",
      borderGradient: "from-yellow-400 to-orange-400",
      icon: Crown,
      features: [
        "Unlimited prospect audits",
        "Custom AI model training",
        "Advanced analytics dashboard",
        "API access & integrations",
        "Custom branding & reports",
        "Dedicated account manager",
        "Custom integrations",
        "SLA & phone support"
      ]
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-green-200/30 to-teal-200/30 blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-8 py-4 text-sm font-semibold text-blue-700 mb-8 shadow-lg">
            <Star className="h-5 w-5 text-blue-600 animate-pulse" />
            <span>💰 Simple Pricing</span>
          </div>
          
          <h2 className="text-6xl font-black text-gray-900 sm:text-7xl mb-8">
            Plans That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Scale With You
            </span>
          </h2>
          
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial with full access.
          </p>
          
          {/* Early bird discount badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-bold shadow-lg animate-pulse">
            <Zap className="h-5 w-5" />
            <span>🎉 Early Bird: 50% off first 3 months!</span>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid gap-10 md:grid-cols-3 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`group relative overflow-hidden border-2 ${index === 1 ? 'border-purple-200 shadow-2xl scale-105' : 'border-gray-200'} bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105`}>
              {/* Popular badge */}
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`px-6 py-2 bg-gradient-to-r ${plan.badgeColor} text-white rounded-full font-bold text-sm shadow-lg animate-pulse`}>
                    ⭐ {plan.badge}
                  </div>
                </div>
              )}
              
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative text-center pb-6 pt-8">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${plan.borderGradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-black text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 font-medium">{plan.period}</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="relative px-8 pb-8">
                <Button 
                  onClick={scrollToWaitlist}
                  className={`w-full mb-8 bg-gradient-to-r ${plan.borderGradient} hover:shadow-lg transition-all duration-300 transform hover:scale-105 py-6 text-lg font-bold`}
                >
                  Get Early Access
                </Button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.borderGradient} flex items-center justify-center`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.borderGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom guarantee section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl shadow-lg">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center">
                <Check className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg mb-1">30-Day Money-Back Guarantee</div>
              <div className="text-gray-600 text-sm">Try OutreachOS risk-free. If you're not completely satisfied, get a full refund.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
