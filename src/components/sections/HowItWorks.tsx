
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Find real leads",
      description: "Search Google Maps or upload your list to find high-potential businesses.",
      icon: "🎯"
    },
    {
      number: "2️⃣", 
      title: "Audit with AI",
      description: "Instantly analyze websites, social media, and Google listings.",
      icon: "🔍"
    },
    {
      number: "3️⃣",
      title: "Send the perfect pitch", 
      description: "Use AI to write personalized outreach messages based on real data.",
      icon: "✉️"
    }
  ];

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Three simple steps to smarter outreach
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-3xl mb-4">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-bold text-gray-400">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToWaitlist}
            variant="outline" 
            size="lg"
            className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
          >
            Be 10x smarter than other freelancers — join the waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
