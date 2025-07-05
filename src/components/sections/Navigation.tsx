
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Our work", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "About", id: "how-it-works" },
    { label: "Blog", id: "testimonials" },
    { label: "Contact us", id: "waitlist" },
  ];

  return (
    <nav className="relative z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToWaitlist}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg"
          >
            Get Started →
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
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
                <div className="pt-2">
                  <Button 
                    onClick={scrollToWaitlist}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full text-sm font-medium"
                  >
                    Get Started →
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
