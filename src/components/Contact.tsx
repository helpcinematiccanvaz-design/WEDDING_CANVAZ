import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#120707] pb-24">
      {/* About Mini Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 mb-32 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1974&auto=format&fit=crop" 
            alt="Photographer at work" 
            className="rounded-[40px] shadow-2xl shadow-wine/20"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-rosegold text-xs uppercase tracking-widest mb-6">The Studio</p>
          <h2 className="heading-serif text-5xl mb-8">Artistry in Every Session</h2>
          <p className="text-white/60 leading-relaxed mb-8 text-lg font-light">
            Based in the heart of the city, Wedding Canvaz is a boutique collective of visionaries dedicated to the art of luxury storytelling. We don't just take pictures; we craft heirlooms. 
          </p>
          <div className="flex gap-12">
            <div>
              <p className="text-3xl heading-serif text-rosegold mb-1">150+</p>
              <p className="text-[10px] uppercase tracking-wider text-white/40">Weddings Captured</p>
            </div>
            <div>
              <p className="text-3xl heading-serif text-rosegold mb-1">12</p>
              <p className="text-[10px] uppercase tracking-wider text-white/40">Global Awards</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6">
        <div className="bg-deep/50 border border-rosegold/10 p-12 md:p-20 rounded-[3rem] backdrop-blur-xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="heading-serif text-5xl md:text-6xl mb-4 italic"
            >
              Start a Conversation
            </motion.h2>
            <div className="flex justify-center items-center gap-2">
               <div className="w-1.5 h-1.5 bg-rosegold rounded-full animate-pulse" />
               <p className="text-rosegold/60 uppercase tracking-[0.3em] text-[10px]">Booking 2026 Destinations</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 focus:border-rosegold outline-none transition-colors placeholder:text-white/20 text-sm tracking-wide"
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 focus:border-rosegold outline-none transition-colors placeholder:text-white/20 text-sm tracking-wide"
              />
            </div>
            <textarea 
              rows={5}
              placeholder="Tell us about your event..."
              className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 focus:border-rosegold outline-none transition-colors placeholder:text-white/20 text-sm tracking-wide"
            />
            <button className="btn-primary w-full py-6 flex items-center justify-center gap-3">
              Send Inquiry <Send size={16} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
