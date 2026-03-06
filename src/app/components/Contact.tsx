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
                    <a 
  href="tel:+919791714404"
  className="text-gray-600 hover:text-[#E53935] transition-colors"
>
  +91 97917 14404
</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#E53935] rounded-full p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hotelashwa2025@gmail.com&su=Inquiry from Hotel Ashwa&body=Hello, I would like to know more about your restaurant."
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-[#E53935] transition-colors"
>
  hotelashwa2025@gmail.com
</a>
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
                    <p className="text-gray-600">5:30 AM - 11:00 PM</p>
                    <p className="text-sm text-[#E53935] mt-2">Open all days</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Bulk Orders Highlight */}
<div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 lg:p-8 shadow-xl relative overflow-hidden">
  
  {/* Decorative circle (like combo card style) */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 opacity-30 rounded-full"></div>

  <div className="relative z-10">
    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
      Bulk Orders Available[Min 20 People]
    </h3>

    <p className="text-gray-800 text-lg mb-4">
      Planning a function, office event or family gathering?
    </p>

    <div className="bg-white rounded-xl px-6 py-4 shadow-md inline-block">
      <p className="text-gray-700 text-sm mb-1">Call for Bulk Orders</p>
      <a
        href="tel:+919791714404"
        className="text-2xl font-bold text-[#E53935] hover:underline"
      >
        +91 9941739837
      </a>
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
  href="https://www.google.com/maps/place/Hotel+Ashwa/@13.1183146,80.1466134,19.25z/data=!4m10!1m2!2m1!1shotel+Ashwa+-+Google+Maps!3m6!1s0x3a52630015690c93:0x74436b1041fdd34d!8m2!3d13.1184127!4d80.147281!15sChlob3RlbCBBc2h3YSAtIEdvb2dsZSBNYXBzIgOIAQHgAQA!16s%2Fg%2F11yz8yc8p6?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
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
