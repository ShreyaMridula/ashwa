import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // adjust for navbar height
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 lg:h-16">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo1.png"
              alt="Hotel Ashwa Logo"
              className="h-16 lg:h-20 xl:h-24 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#E53935] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-[#E53935] transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#E53935] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#E53935] transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center gap-2 text-[#E53935] font-medium">
            <Phone className="w-5 h-5" />
            <a href="tel:+919876543210">+91 97917 14404</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-[#E53935] transition-colors font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left text-gray-700 hover:text-[#E53935] transition-colors font-medium py-2"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-[#E53935] transition-colors font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-[#E53935] transition-colors font-medium py-2"
              >
                Contact
              </button>

              <div className="flex items-center gap-2 text-[#E53935] font-medium py-2 border-t border-gray-200 mt-2 pt-4">
                <Phone className="w-5 h-5" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}