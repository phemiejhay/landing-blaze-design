
import { Card, CardContent } from "@/components/ui/card";

const Audience = () => {
  const audiences = [
    {
      title: "Freelancers tired of ghosted DMs",
      description: "Stop wasting time on unqualified leads",
      icon: "🎨"
    },
    {
      title: "Agencies looking to scale outreach", 
      description: "Systematize your lead generation process",
      icon: "🏢"
    },
    {
      title: "Consultants & marketers who pitch online",
      description: "Build credibility with data-driven insights",
      icon: "📈"
    },
    {
      title: "Sales teams hunting local clients",
      description: "Find and connect with nearby businesses",
      icon: "🎯"
    },
    {
      title: "SaaS teams doing outbound manually",
      description: "Automate without losing the personal touch",
      icon: "💻"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Who It's For
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {audiences.map((audience, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border border-gray-100">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{audience.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                    {audience.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
            <p className="text-lg font-medium text-gray-800">
              If you sell design, SEO, ads, or digital strategy — this tool was built for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
