import { motion } from 'motion/react';
import heroBg from '../assets/hero_final.jpg';
import mobileHeroBg from '../assets/mobile_hero_new.jpeg';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect simulation via motion */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        {/* Mobile specific image */}
        <img 
          src={mobileHeroBg} 
          alt="Wedding Ritual Mobile" 
          className="w-full h-full object-cover object-center md:hidden"
        />
        {/* Desktop image */}
        <img 
          src={heroBg} 
          alt="Wedding Ritual" 
          className="hidden md:block w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-[33px] md:text-6xl lg:text-[6rem] mb-8 uppercase font-bold tracking-[0.1em] text-rosegold whitespace-nowrap"
        >
          Wedding Canvaz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-beige/80 text-lg md:text-2xl tracking-[0.3em] uppercase font-serif italic mb-12 font-bold"
        >
          In Collaboration with Studio Pratichhabi 
        </motion.p>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="mt-12"
        >
          <a 
            href="#weddings"
            className="btn-primary"
          >
            Explore Stories
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
