import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-xl md:text-2xl font-bold tracking-[3px] uppercase font-Room Bold text-rosegold w-fit whitespace-nowrap leading-tight">
            Wedding Canvaz
          </div>
          <div className="text-[9px] md:text-[10px] tracking-[3px] uppercase font-Room Bold text-beige/60 font-bold">
            Collaboration with Studio Pratichhabi
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {[
            { name: 'Home', href: '#home' },
            { name: 'Gallery', href: '#portfolio' },
            { name: 'About Us', href: '#about' },
            { name: 'Contact Us', href: '#contact' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[10px] uppercase tracking-[0.2em] font-medium text-beige/70 hover:text-rosegold transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
