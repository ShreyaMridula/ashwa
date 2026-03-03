import { Clock, IndianRupee, Sparkles } from 'lucide-react';

export function ComboHighlight() {
  return (
    <section className="py-8 lg:py-12 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#FDD835] to-[#FBC02D] rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
              {/* Special Tag */}
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-[#E53935]" />
                <span className="text-[#E53935] font-bold text-lg">Special Morning Combo</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    Tiffin Combo
                  </h2>
                  <p className="text-gray-800 text-lg mb-4">
                    Idli  + Vada  + Poori + Pongal + Kesari
                  </p>
                  <div className="flex items-center gap-2 text-gray-800">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Available: 8:00 AM – 9:30 AM</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg text-center md:min-w-[200px]">
                  <div className="text-sm text-gray-600 mb-2">Only</div>
                  <div className="flex items-center justify-center gap-1 text-[#E53935]">
                    <IndianRupee className="w-8 h-8" />
                    <span className="text-5xl font-bold">70</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">Limited Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
