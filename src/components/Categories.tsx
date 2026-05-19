import { motion } from 'motion/react';
import preWeddingMain from '../assets/pre_wedding_main.jpg';
import birthdayMain from '../assets/birthday_main.jpg';
import weddingMain from '../assets/service_cinematic.jpg';
import newUpload1 from '../assets/DSC_4800.jpg.jpeg';
import newUpload3 from '../assets/DSC_4808.jpg.jpeg';
import maternityCaptured from '../assets/maternity_captured.png';

const categories = [
  { 
    title: "Weddings", 
    image: weddingMain,
    description: "Eternal love stories captured in timeless elegance."
  },
  { 
    title: "Pre-Wedding Shoots", 
    image: preWeddingMain,
    description: "Documenting the anticipation of your journey together."
  },
  { 
    title: "Baby Shower", 
    image: newUpload3,
    description: "Welcoming new beginnings with soft, cinematic light."
  },
  { 
    title: "Maternity Shoots", 
    image: maternityCaptured,
    description: "Honoring the beauty of life's most precious miracle."
  },
  { 
    title: "Engagement", 
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1974&auto=format&fit=crop",
    description: "The moment that changed everything, preserved forever."
  },
  { 
    title: "Couple Portraits", 
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1974&auto=format&fit=crop",
    description: "Intimate connections framed in artistic perfection."
  },
  { 
    title: "Birthday Events", 
    image: birthdayMain,
    description: "Lively celebrations filled with joy and candid moments."
  },
  { 
    title: "Family Events", 
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1974&auto=format&fit=crop",
    description: "Preserving the legacy of your family's bond."
  },
  { 
    title: "Reception Events", 
    image: "https://images.unsplash.com/photo-1510076857177-74700760be49?q=80&w=1974&auto=format&fit=crop",
    description: "The grand finale of your celebration, lived again."
  }
];

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
}

export default function Categories({ onCategorySelect }: CategoriesProps) {
  const handleCategoryClick = (title: string) => {
    onCategorySelect(title);
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-dark py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-rosegold uppercase tracking-[0.4em] text-[10px] font-semibold mb-4 text-center md:text-left">Artistic Specialties</p>
            <h2 className="heading-serif text-5xl md:text-7xl italic text-center md:text-left">Photography Categories</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-beige/40 text-sm max-w-sm font-light leading-relaxed text-center md:text-right"
          >
            From the grandest unions to the quietest milestones, we offer specialized vision across all of life's celebrations.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={category.title}
              onClick={() => handleCategoryClick(category.title)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[220px] md:h-[450px] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] border border-rosegold/5 cursor-pointer"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-4 md:p-10 flex flex-col justify-end">
                <h3 className="heading-serif text-lg md:text-3xl mb-1 md:mb-3 translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{category.title}</h3>
                <div className="w-6 md:w-8 h-px bg-rosegold mb-2 md:mb-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <p className="text-beige/40 text-[9px] md:text-xs font-light tracking-wide opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 hidden md:block">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
