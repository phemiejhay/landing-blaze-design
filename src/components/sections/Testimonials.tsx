
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Freelance Web Designer",
      avatar: "from-purple-400 to-pink-500",
      rating: 5,
      text: "OutreachOS completely transformed my client acquisition. I went from sending 50 cold emails with 2% response rate to 25 highly targeted messages with 40% response rate. The AI insights are incredible!",
      highlight: "40% response rate"
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Marketing Agency Owner",
      avatar: "from-blue-400 to-cyan-500",
      rating: 5,
      text: "The audit reports alone have helped me close $50K in new business. Prospects see the detailed analysis and immediately understand the value we bring. It's like having a secret weapon.",
      highlight: "$50K in new business"
    },
    {
      name: "Jennifer Park",
      role: "SEO Consultant",
      avatar: "from-green-400 to-emerald-500",
      rating: 5,
      text: "I used to spend hours researching prospects manually. Now OutreachOS does it in minutes with better insights than I could ever gather. My conversion rate tripled in the first month.",
      highlight: "3x conversion rate"
    },
    {
      name: "David Thompson",
      role: "SaaS Sales Lead",
      avatar: "from-orange-400 to-red-500",
      rating: 5,
      text: "The competitor analysis feature is a game-changer. I can walk into any sales call knowing exactly how we stack up and what pain points to address. Closing deals has never been easier.",
      highlight: "Game-changer"
    },
    {
      name: "Lisa Wang",
      role: "Brand Strategist",
      avatar: "from-indigo-400 to-purple-500",
      rating: 5,
      text: "What used to take me a full day of research now takes 10 minutes. The quality of insights is incredible, and my clients are impressed by the depth of analysis in my proposals.",
      highlight: "10 minutes vs full day"
    },
    {
      name: "Alex Johnson",
      role: "Growth Marketing Specialist",
      avatar: "from-teal-400 to-cyan-500",
      rating: 5,
      text: "I've tried every outreach tool out there, but OutreachOS is different. The AI doesn't just personalize messages – it creates genuinely valuable insights that prospects actually want to hear about.",
      highlight: "Genuinely valuable insights"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-purple-200/40 to-indigo-200/40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-pink-200/40 to-purple-200/40 blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 px-8 py-4 text-sm font-semibold text-purple-700 mb-8 shadow-lg">
            <Star className="h-5 w-5 text-purple-600 animate-pulse" />
            <span>⭐ Success Stories</span>
          </div>
          
          <h2 className="text-6xl font-black text-gray-900 sm:text-7xl mb-8">
            Real Results from{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Real Users
            </span>
          </h2>
          
          <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
            See how professionals are transforming their outreach and closing more deals with OutreachOS
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white">
              {/* Quote decoration */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-12 w-12 text-gray-400" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full text-sm font-semibold text-purple-700 mb-6">
                  <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></div>
                  {testimonial.highlight}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${testimonial.avatar} shadow-lg`}></div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Happy Users", icon: "👥" },
              { number: "95%", label: "Satisfaction Rate", icon: "⭐" },
              { number: "10x", label: "Average ROI", icon: "📈" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-black text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
