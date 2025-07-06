
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Star, Crown, ArrowRight } from "lucide-react";

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
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
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
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      icon: Star,
      popular: true,
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
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-200/10 to-purple-200/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-green-200/10 to-teal-200/10 blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 text-sm font-semibold text-blue-700 mb-6 shadow-lg">
            <Star className="h-4 w-4 text-blue-600 animate-pulse" />
            <span>Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed mb-8">
            Choose the perfect plan for your business. Start with a 14-day free trial.
          </p>
          
          {/* Discount badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-bold shadow-lg animate-pulse">
            <Zap className="h-4 w-4" />
            <span>Limited time: 50% off first 3 months!</span>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-200 shadow-2xl scale-105' : 'hover:shadow-xl'} bg-white border-0`}>
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`px-4 py-1 bg-gradient-to-r ${plan.badgeColor} text-white rounded-full text-xs font-bold shadow-lg animate-pulse`}>
                    {plan.badge}
                  </div>
                </div>
              )}
              
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative text-center pb-6 pt-8">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <CardTitle className="text-xl font-black text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-4xl md:text-5xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 font-medium">{plan.period}</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="relative px-6 pb-8">
                <Button 
                  onClick={scrollToWaitlist}
                  className={`w-full mb-6 bg-gradient-to-r ${plan.gradient} hover:shadow-lg transition-all duration-300 transform hover:scale-105 py-3 text-base font-bold text-white`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom guarantee */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-lg">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center">
                <Check className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900 mb-1">30-Day Money-Back Guarantee</div>
              <div className="text-gray-600 text-sm">Try OutreachOS risk-free. Full refund if not satisfied.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
