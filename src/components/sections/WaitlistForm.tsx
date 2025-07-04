
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Mail, User, Zap } from "lucide-react";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    service: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "First name and email are required.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitted(true);
    toast({
      title: "You're in!",
      description: "We'll send early access invites soon.",
    });
  };

  const services = [
    "SEO & Content Marketing",
    "Web Development & Design", 
    "Digital Advertising & PPC",
    "Social Media Management",
    "Marketing Consulting",
    "Graphic Design & Branding",
    "Business Consulting",
    "Other Services"
  ];

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Success animation background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-green-400/30 to-emerald-400/30 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-gradient-to-r from-teal-400/30 to-cyan-400/30 blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="text-8xl mb-8 animate-bounce">🎉</div>
          <h2 className="text-4xl font-black text-gray-900 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Welcome to the waitlist!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            You're officially in! We'll send early access invites to the most engaged users first.
          </p>
          
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
              <span>Confirmed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
              <span>Queue Position: Top 10%</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative mx-auto max-w-2xl">
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-xl relative overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-75"></div>
          <div className="absolute inset-[1px] bg-white rounded-lg"></div>
          
          <CardHeader className="relative text-center pb-8 pt-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <CardTitle className="text-4xl font-black text-gray-900 mb-4">
              Join the Waitlist
            </CardTitle>
            <p className="text-gray-600 text-lg">
              Be the first to get access to OutreachOS and transform your client acquisition
            </p>
            
            {/* Social proof */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r ${
                    i === 0 ? 'from-blue-400 to-blue-600' :
                    i === 1 ? 'from-green-400 to-green-600' :
                    i === 2 ? 'from-purple-400 to-purple-600' :
                    i === 3 ? 'from-pink-400 to-pink-600' :
                    'from-yellow-400 to-yellow-600'
                  }`}></div>
                ))}
              </div>
              <span className="text-sm text-gray-500">500+ entrepreneurs already joined</span>
            </div>
          </CardHeader>
          
          <CardContent className="relative px-12 pb-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative group">
                <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700 mb-2 block">
                  First Name *
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="pl-12 h-14 border-2 border-gray-200 focus:border-purple-500 rounded-xl text-lg transition-all duration-200"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
              </div>
              
              <div className="relative group">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Email Address *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="pl-12 h-14 border-2 border-gray-200 focus:border-purple-500 rounded-xl text-lg transition-all duration-200"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="service" className="text-sm font-semibold text-gray-700 mb-2 block">
                  What service do you offer? (Optional)
                </Label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full h-14 rounded-xl border-2 border-gray-200 focus:border-purple-500 bg-white px-4 text-lg ring-offset-background focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
                >
                  <option value="">Select your primary service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold py-6 text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] rounded-xl group"
              >
                <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                ✅ Secure My Early Access
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <div className="text-center space-y-2">
                <p className="text-xs text-gray-500">
                  🔒 We respect your privacy. Unsubscribe at any time.
                </p>
                <p className="text-xs text-gray-400">
                  No spam, just exclusive updates and early access notifications
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistForm;
