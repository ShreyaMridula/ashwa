import { ImageWithFallback } from './figma/ImageWithFallback';

interface PopularItem {
  name: string;
  description: string;
  imageUrl: string;
}

const popularItems: PopularItem[] = [
  {
    name: 'Idli',
    description: 'Soft, fluffy steamed idli served with sambar and chutney',
    imageUrl: '/idli.png',
  },
  {
    name: 'Dosa',
    description: 'Crispy golden dosa with sambar and chutney',
    imageUrl: '/dosa.png',
  },
  {
    name: 'Pongal',
    description: 'Comforting pongal cooked with ghee and pepper',
    imageUrl: '/pongal.png',
  },
  {
    name: 'Meals',
    description: 'Complete South Indian thali with rice, curries, and accompaniments',
    imageUrl: '/meals.png',
  },
  {
    name: 'Variety Rice',
    description: 'A delicious mix of different rice varieties, bursting with flavor',
    imageUrl: '/varietyrice .png',
  },
];

export function PopularItems() {
  return (
    <section className="py-12 lg:py-16 xl:py-20 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#E53935] mb-4">
            Popular Items
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
            Our customer's favorites, made fresh daily
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {popularItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl lg:text-2xl font-bold text-[#E53935] mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
