import { IndianRupee } from 'lucide-react';

interface MenuItem {
  name: string;
  price: number;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Breakfast',
    items: [
      { name: 'Idli (2 nos)', price: 22 },
      { name: 'Vada', price: 12 },
      { name: 'Poori Kizhangu', price: 50 },
      { name: 'Pongal', price: 50 },
      { name: 'Dosa', price: 50 },
      { name: 'Kal Dosa', price: 50 },
      { name: 'Onion Dosa', price: 70 },
      { name: 'Podi Dosa', price: 70 },
      { name: 'Onion Podi Dosa', price: 90 },
      { name: 'Masala Dosa', price: 70 },
      { name: 'Ghee Dosa', price: 110 },
      { name: 'Uttapam', price: 50 },
      { name: 'Onion Uttapam', price: 85 },
      { name: 'Sambhar vada', price: 20 },
    ],
  },
  {
    title: 'Dinner',
    items: [
      { name: 'Mushroom Dosa', price: 120 },
      { name: 'Gobi Dosa', price: 120 },
      { name: 'Panner Dosa', price: 120 },
      { name: 'Rava Dosa', price: 70 },
      { name: 'Onion Rava Dosa', price: 90 },
      { name: 'Ghee Podi Roast', price: 130 },
      { name: 'Roast', price: 80 },
      { name: 'Onion Podi Uttapam', price: 105 },
      { name: 'Appam Thengapal', price: 70 },
      { name: 'Parota(2nos)', price: 40 },
      { name: 'Chappathi(2nos)', price: 40 },
      { name: 'Chola Poori', price: 80 },
    ],
  },
  {
    title: 'Lunch',
    items: [
      { name: 'Veg Biryani', price: 65 },
      { name: 'Curd Rice', price: 50 },
      { name: 'Lemon Rice', price: 50 },
      { name: 'Tomato Rice', price: 50 },
      { name: 'Tamirind Rice', price: 50 },
      { name: 'Sambar Rice', price: 50 },
      { name: 'Lunch Meals', price: 100 },
      { name: 'Coconut Rice', price: 50 },
    ],
  },
  {
    title: 'Chat Items',
    items: [
      
      { name: 'Pani Puri', price: 30 },
      { name: 'Masala Puri', price: 50 },
      { name: 'Bhel Puri', price: 50 },
      { name: 'Sev Puri', price: 50 },
      { name: 'Dahi Puri', price: 60 },
      { name: 'Papi Chat', price: 60 },
      { name: 'Aloo Tikki', price: 60 },
      { name: 'Samosa Chat', price: 70 },
      { name: 'Ragda Pattice', price: 80 },
      { name: 'Samosa', price: 15 },
      { name: 'Vada Pav', price: 25 },
      { name: 'Pav Bhaji', price: 80 },
    ],
  },
  {
    title: 'Tea,Snacks& Juices',
    items: [
      { name: 'Tea', price: 12 },
      { name: 'Coffee', price: 15 },
      { name: 'Ginger Tea', price: 15 },
      { name: 'Milk', price: 12 },
      { name: 'Biscuit', price: 5 },
      { name: 'Vazhaka Bajji', price: 10 },
      { name: 'Bread Bajji', price: 10 },
      { name: 'Masala Bonda', price: 12 },
      { name: 'Kajara', price: 12 },
       { name: 'Onion Bonda', price: 12 },
      { name: 'Masala Vada', price: 12 },
      { name: 'Pomegranate', price: 50 },
      { name: 'Apple', price: 50 },
      { name: 'Watermelon', price: 50 },
      { name: 'Sathukudi', price: 50 },
      { name: 'Sapota', price: 65 },
      { name: 'Dragon Fruit', price: 50 },
    ],
  },
];

export function MenuCategories() {
  return (
    <section id="menu" className="py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#E53935] mb-4">
            Our Menu
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
            Fresh, authentic South Indian cuisine made with love and care
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 xl:gap-10">
          {menuData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-[#E53935] mb-6 pb-4 border-b-2 border-[#FDD835]">
                {category.title}
              </h3>

              {/* Menu Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex justify-between items-start gap-2"
                  >
                    <span className="text-gray-800 flex-1">{item.name}</span>
                    <div className="flex items-center gap-0.5 text-[#E53935] font-medium whitespace-nowrap">
                      <IndianRupee className="w-4 h-4" />
                      <span>{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
