
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EarlyAccess = () => {
  const perks = [
    "Priority beta access",
    "Bonus audit credits", 
    "Early adopter pricing",
    "Access to our private user community"
  ];

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            🎁 Join the waitlist and get:
          </h2>
        </div>
        
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-10">
          <CardContent className="p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center text-white">
                  <div className="mr-3 h-2 w-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                  <span className="font-medium">{perk}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Button 
          onClick={scrollToWaitlist}
          size="lg"
          className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
        >
          ⚡ Get early access
        </Button>
      </div>
    </section>
  );
};

export default EarlyAccess;
