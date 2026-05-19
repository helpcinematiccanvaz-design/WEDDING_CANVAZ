import { motion, AnimatePresence } from 'motion/react';
import preWeddingMain from '../assets/pre_wedding_main.jpg';
import preWeddingStory1 from '../assets/pre_wedding_story_1.jpg';
import preWeddingStory2 from '../assets/pre_wedding_story_2.jpg';
import weddingStory1 from '../assets/wedding_story1.jpg';
import weddingStory2 from '../assets/wedding_story2.jpeg';
import weddingStory3 from '../assets/wedding_story3.jpeg';
import weddingMain from '../assets/wedding_main.jpeg';
import weddingBride1 from '../assets/wedding_bride_1.jpg';
import weddingBride2 from '../assets/wedding_bride_2.jpg';
import weddingBride3 from '../assets/wedding_bride_3.jpg';
import pic2 from '../assets/pic_2.jpg';
import pic3 from '../assets/pic_3.jpg';
import wedding7652 from '../assets/wedding_7652.jpg';
import wedding7655 from '../assets/wedding_7655.jpg';
import wedding7658 from '../assets/wedding_7658.jpg';
import wedding7664 from '../assets/wedding_7664.jpg';
import weddingNew1 from '../assets/wedding_new_1.jpg';
import weddingNew2 from '../assets/wedding_new_2.jpg';
import weddingNew3 from '../assets/wedding_new_3.jpg';
import weddingNew4 from '../assets/wedding_new_4.jpg';
import weddingNew5 from '../assets/wedding_new_5.webp';
import weddingNew6 from '../assets/wedding_new_6.webp';
import weddingNew7 from '../assets/wedding_new_7.webp';
import weddingNew8 from '../assets/wedding_new_8.webp';
import serviceCinematic from '../assets/service_cinematic.jpg';
import pic5 from '../assets/pic_5.jpg';
import birthdayMain from '../assets/birthday_main.jpg';
import birthdayStory4 from '../assets/birthday_story_4.jpg';
import birthdayStory5 from '../assets/birthday_story_5.jpg';
import birthdayStory6 from '../assets/birthday_story_6.jpg';
import birthdayStory7 from '../assets/birthday_story_7.jpg';
import birthdayStory8 from '../assets/birthday_story_8.jpg';
import birthdayStory9 from '../assets/birthday_story_9.jpg';
import birthdayStory10 from '../assets/birthday_story_10.jpg';
import babyShower1 from '../assets/DSC_3969.jpg.jpeg';
import babyShower2 from '../assets/DSC_4800.jpg.jpeg';
import babyShower3 from '../assets/DSC_4808.jpg.jpeg';
import maternityCaptured from '../assets/maternity_captured.png';
import maternityNew2 from '../assets/maternity_new_2.webp';
import maternityNew3 from '../assets/maternity_new_3.jpg';
import weddingHaldi from '../assets/491893096_17848525251446460_9100946158201593795_n.webp';
import weddingBlueSaree from '../assets/491081183_17848670163446460_6635234429775706910_n..webp';
import weddingRedSaree from '../assets/491034575_17848532496446460_917975078829729893_n..webp';
import weddingHaldi2 from '../assets/491495401_17848517592446460_9052186693954355697_n.webp';
import weddingRitualNew from '../assets/wedding_story_ritual_2.webp';
import weddingBridePortrait from '../assets/wedding_bride_portrait.webp';
import weddingRitualGroom from '../assets/491550320_17848530333446460_7329263614066798403_n..webp';
import weddingMandap1 from '../assets/491465758_17848534215446460_8898498659981836517_n..webp';
import weddingSindoor from '../assets/491459772_17848526937446460_3920701813026065645_n..webp';
import weddingRitualNew2 from '../assets/491466363_17848535412446460_1896606536839300153_n..webp';
import weddingVarmala from '../assets/491463582_17848533648446460_7213010488217748050_n.webp';
import weddingPraying from '../assets/491505883_17848668072446460_7316034263890761709_n..webp';
import weddingCoupleNew from '../assets/491037729_17848517766446460_1166122902687205832_n.webp';
import preWeddingNew1 from '../assets/491509098_17848515192446460_871627722539943992_n.webp';
import preWeddingNew2 from '../assets/491510607_17848514106446460_2325798560187482530_n.webp';
import preWeddingNew3 from '../assets/491460349_17848515561446460_204352436972981869_n.webp';
import preWeddingNew4 from '../assets/491497470_17848515717446460_7709139892823616061_n.webp';
import preWeddingNew5 from '../assets/491946685_17848516113446460_1082411970794310163_n.webp';

const categoryData = {
  "Weddings": [
    weddingNew6,
    weddingHaldi,
    weddingNew2,
    weddingNew3,
    weddingNew4,
    weddingMain,
    weddingStory2,
    weddingStory3,
    serviceCinematic,
    pic2,
    pic3,
    pic5,
    weddingNew7,
    weddingNew8,
    weddingBlueSaree,
    weddingRedSaree,
    weddingHaldi2,
    weddingRitualNew,
    weddingBridePortrait,
    weddingRitualGroom,
    weddingMandap1,
    weddingSindoor,
    weddingRitualNew2,
    weddingPraying,
    weddingCoupleNew,
    wedding7655,
    weddingVarmala,
    wedding7664,
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1974&auto=format&fit=crop"
  ],
  "Baby Shower": [
    babyShower1,
    babyShower2,
    babyShower3,
  ],
  "Birthday Events": [
    birthdayMain,
    birthdayStory4,
    birthdayStory5,
    birthdayStory6,
    birthdayStory7,
    birthdayStory8,
    birthdayStory9,
    birthdayStory10,
    "https://images.unsplash.com/photo-1513279922550-250c2129b13a?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1974&auto=format&fit=crop"
  ],
  "Pre-Wedding Shoots": [
    preWeddingMain,
    preWeddingStory1,
    preWeddingStory2,
    preWeddingNew1,
    preWeddingNew2,
    preWeddingNew3,
    preWeddingNew4,
    preWeddingNew5,
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1974&auto=format&fit=crop",
    weddingStory1
  ],
  "Engagement": [
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1974&auto=format&fit=crop"
  ],
  "Maternity Shoots": [
    maternityNew3,
    maternityNew2,
    weddingNew5,
    maternityCaptured,
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559839734-2e7ea91c002c?q=80&w=1974&auto=format&fit=crop"
  ]
};

const categories = Object.keys(categoryData);

interface PhotoGalleryProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function PhotoGallery({ activeCategory, onCategoryChange }: PhotoGalleryProps) {
  return (
    <section id="portfolio" className="bg-[#120707] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-rosegold uppercase tracking-[0.4em] text-[10px] font-semibold mb-4"
          >
            Curated Collections
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="heading-serif text-6xl md:text-8xl italic"
          >
            Photo Gallery
          </motion.h2>
        </div>

        {/* Filter Navigation */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 md:gap-4 mb-16 border-b border-rosegold/5 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 md:px-6 py-2.5 rounded-full text-[9px] md:text-[10px] uppercase tracking-widest transition-all duration-300 text-center ${
                activeCategory === cat 
                ? "bg-rosegold text-maroon font-bold shadow-lg shadow-rosegold/20" 
                : "text-beige/40 hover:text-rosegold border border-rosegold/10 md:border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {categoryData[activeCategory as keyof typeof categoryData].map((url, index) => (
              <motion.div
                key={url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative h-[250px] md:h-[400px] overflow-hidden rounded-2xl md:rounded-[2rem] border border-rosegold/10 transition-all duration-500 ${
                  (activeCategory === "Pre-Wedding Shoots" && (index === 0 || index === 5)) ||
                  (activeCategory === "Weddings" && [weddingNew6, weddingRitualNew, weddingMandap1, weddingSindoor, weddingVarmala].includes(url))
                    ? "lg:col-span-2" : ""
                }`}
              >
                <img 
                  src={url} 
                  alt={`${activeCategory} ${index}`}
                  className={`w-full h-full transition-transform duration-1000 group-hover:scale-110 ${
                    [weddingNew6, weddingRitualNew, weddingMandap1, weddingSindoor, weddingVarmala, preWeddingNew3, preWeddingNew4, preWeddingNew5, preWeddingMain].includes(url) 
                    ? "object-contain bg-black/10" 
                    : "object-cover object-center"
                  }`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[1px]" />
                <div className="absolute inset-x-0 bottom-0 p-8 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-1.5 h-1.5 bg-rosegold rounded-full" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <button className="btn-secondary">
             View Full Archive
          </button>
        </motion.div>
      </div>
    </section>
  );
}
