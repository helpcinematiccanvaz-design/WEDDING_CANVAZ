import { motion } from 'motion/react';
import weddingMain from '../assets/wedding_main.jpeg';
import weddingStory2 from '../assets/wedding_story2.jpeg';
import serviceCinematic from '../assets/service_cinematic.jpg';
import eventMain from '../assets/event_main.jpg';
import eventStory2 from '../assets/event_story2.jpg';
import eventStory1 from '../assets/event_story1.jpg';
import eventStory3 from '../assets/event_story3.jpg';
import eventStory4 from '../assets/event_story4.jpg';
import eventStory5 from '../assets/event_story5.jpg';
import eventStory6 from '../assets/event_story6.jpg';
import eventStory7 from '../assets/event_story7.jpg';
import quoteBg from '../assets/quote_bg_v2.jpg';
import bannerTimeless from '../assets/banner_timeless_story.jpeg';
import weddingBannerNew from '../assets/wedding_banner_new.jpg';

const weddingStories = [
  { id: 1, url: weddingMain, title: "Timeless Tradition", category: "Wedding" },
  { id: 2, url: weddingStory2, title: "Royal Union", category: "Wedding" },
  { id: 3, url: serviceCinematic, title: "Cinematic Vision", category: "Wedding" },
];

const allMoments = [
  eventMain,
  eventStory1,
  eventStory4,
  eventStory5,
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1974&auto=format&fit=crop",
  eventStory7,
  eventStory2,
  eventStory3,
  eventStory6,
];

export default function Gallery() {
  return (
    <div className="bg-[#120707] py-24">
      {/* Featured Section */}
      <section id="weddings" className="max-w-7xl mx-auto px-6 mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading-serif text-5xl md:text-7xl mb-4 text-center italic"
        >
          Featured Stories
        </motion.h2>
        <p className="text-center text-beige/50 text-sm font-light mb-16 tracking-widest uppercase">Preserving raw emotions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {weddingStories.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[500px] overflow-hidden rounded-[2.5rem] border border-rosegold/10"
            >
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 backdrop-blur-[2px]">
                <h3 className="heading-serif text-3xl italic">{item.title}</h3>
                <div className="w-12 h-px bg-rosegold mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories / Moments Masonry */}
      <section id="events" className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="heading-serif text-5xl md:text-7xl mb-16 text-center"
        >
          Moments We Capture
        </motion.h2>

        <div className="masonry-grid">
          {allMoments.map((url, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="masonry-item group relative cursor-pointer"
            >
              <img 
                src={url} 
                className="w-full rounded-2xl transition-all duration-700 hover:scale-[1.02]" 
                alt={`Moment ${index}`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative h-[60vh] flex items-center justify-center my-32 overflow-hidden bg-attachment-fixed">
         <div className="absolute inset-0 bg-black/20 z-10" />
         <img 
            src={bannerTimeless}
            className="absolute inset-0 w-full h-full object-cover z-0"
            referrerPolicy="no-referrer"
         />
      </section>
    </div>
  );
}
