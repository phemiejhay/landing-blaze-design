
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "Full 7-layer business audits",
      description: "Deep analysis across all business touchpoints"
    },
    {
      icon: "⚖️", 
      title: "Competitor comparison insights",
      description: "See how prospects stack against their competition"
    },
    {
      icon: "🤖",
      title: "Personalized AI messaging",
      description: "DMs, emails, and pitches written for each prospect"
    },
    {
      icon: "👁️",
      title: "Visual CRM",
      description: "Not just cold email - full relationship management"
    },
    {
      icon: "📄",
      title: "Exportable audit reports",
      description: "White-labeled reports to share with prospects"
    },
    {
      icon: "🗺️",
      title: "Multiple lead sources",
      description: "Google Maps, CSV uploads, and custom inputs"
    },
    {
      icon: "🔄",
      title: "Smart follow-up system",
      description: "Automated sequences that actually work"
    },
    {
      icon: "💰",
      title: "Flexible pricing",
      description: "Plans for solo freelancers to growing agencies"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            What Makes OutreachOS{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Unique
            </span>
          </h2>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-200 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                  ✅ {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
