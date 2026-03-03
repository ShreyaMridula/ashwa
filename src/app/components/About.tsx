import { Leaf, ChefHat, Heart, Shield } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Leaf,
      title: '100% Pure Veg',
      description: 'Only the finest vegetarian ingredients, sourced fresh daily',
    },
    {
      icon: ChefHat,
      title: 'Home-Style Cooking',
      description: 'Traditional recipes passed down through generations',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish prepared with care and attention to detail',
    },
    {
      icon: Shield,
      title: 'Hygienic Standards',
      description: 'Maintaining the highest standards of cleanliness and safety',
    },
  ];

  return (
    <section id="about" className="py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#E53935] mb-4">
            About Us
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto">
            Hotel Ashwa has been serving authentic South Indian cuisine to our community with pride. 
            Our commitment to quality, freshness, and taste makes us a favorite local spot for healthy, 
            delicious vegetarian meals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#FDD835] transition-all duration-300 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#E53935] to-[#EF5350] rounded-full mb-4 shadow-lg">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-br from-[#E53935] to-[#EF5350] rounded-3xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-lg lg:text-xl leading-relaxed mb-4">
              What started as a small tiffin center has grown into a beloved local establishment, 
              thanks to our commitment to serving fresh, authentic South Indian food at affordable prices.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed">
              We believe that good food brings people together, and every meal we serve is prepared 
              with the same care we'd give to our own family. Visit us and taste the difference 
              that freshness and authenticity make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
