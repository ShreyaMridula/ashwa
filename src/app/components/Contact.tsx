import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-12 lg:py-16 xl:py-20 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#E53935] mb-4">
            Visit Us
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
            Come experience authentic South Indian flavors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#E53935] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#E53935] rounded-full p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      59, Cholambedu Rd, Krishnapuram Extension,<br />
                      Tiruvenkadam Nagar, Ambattur,<br/>
                      Chennai, Tamil Nadu 600020
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#E53935] rounded-full p-3 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 97917 14404</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#E53935] rounded-full p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">hotelashwa2025@gmail.com</p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#E53935] rounded-full p-3 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Opening Hours</h4>
                    <p className="text-gray-600">Monday - Sunday</p>
                    <p className="text-gray-600">8:00 AM - 9:30 PM</p>
                    <p className="text-sm text-[#E53935] mt-2">Open all days</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px] lg:min-h-[600px]">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-[#E53935] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Location Map</h3>
                <p className="text-gray-600 mb-6">59, Cholambedu Rd, Krishnapuram Extension, Tiruvenkadam Nagar, Ambattur,Chennai, Tamil Nadu 600020</p>
                <a 
  href="https://www.google.com/maps?q=59+Cholambedu+Rd+Krishnapuram+Extension+Tiruvenkadam+Nagar+Ambattur+Chennai+Tamil+Nadu+600020"
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block bg-[#E53935] text-white px-6 py-3 rounded-full font-medium hover:bg-[#D32F2F] transition-colors"
>
  Open in Google Maps
</a>
              </div>
              
              {/* Decorative grid overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="grid grid-cols-8 grid-rows-8 h-full">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-gray-400"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
