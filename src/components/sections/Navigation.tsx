
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Features", id: "features" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Pricing", id: "pricing" },
    { label: "Waitlist", id: "waitlist" },
  ];

  return (
    <nav className="relative z-50 pt-6 pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">OutreachOS</div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl">
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
