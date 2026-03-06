import { Leaf, MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-1 ">

  {/* Logo */}
  <img
    src="/logo1.png"
    alt="Hotel Ashwa Logo"
    className="w-50 h-50 object-contain"
  />
 
  {/* Text beside logo */}
  <div>
    <br/>
    <p className="text-sm text-green-400 font-semibold">
      100% Pure Veg
    </p>
  </div>

</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving authentic South Indian cuisine with fresh ingredients and traditional recipes. 
              Your trusted local vegetarian restaurant.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#FDD835] transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#FDD835] transition-colors text-sm"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#FDD835] transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#FDD835] transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-[#E53935] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">59, Cholambedu Rd, Krishnapuram Extension,<br />Tiruvenkadam Nagar, Ambattur,<br/>Chennai, Tamil Nadu 600020</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-[#E53935] flex-shrink-0" />
                <span className="text-gray-400">+91 97917 14404</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-[#E53935] flex-shrink-0" />
                <span className="text-gray-400">hotelashwa2025@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <div className="flex items-start gap-2 mb-3">
              <Clock className="w-4 h-4 text-[#E53935] flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-gray-400">Monday - Sunday</p>
                <p className="text-white font-medium">5:30 AM - 11:00 PM</p>
              </div>
            </div>
            <p className="text-[#FDD835] text-sm font-medium mb-4">Open all days</p>
            
           
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Hotel Ashwa. All rights reserved. | Made with <span className="text-[#E53935]">♥</span> for our customers
          </p>
        </div>
      </div>
    </footer>
  );
}
