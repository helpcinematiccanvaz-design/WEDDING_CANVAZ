import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Wedding Canvaz didn't just take photos; they captured the soul of our day. Their team was invisible yet everywhere.",
    author: "Sophia & James",
    event: "Lake Como Wedding"
  },
  {
    text: "The most professional and artistic team we've ever worked with. The editorial style of our maternity shoot was breathtaking.",
    author: "Elena Rossi",
    event: "Maternity Session"
  },
  {
    text: "They have a way of finding beauty in the smallest moments. Our wedding album is a work of art we will cherish forever.",
    author: "Marcus Thorne",
    event: "Destination Wedding"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-deep/30 py-32 overflow-hidden border-y border-rosegold/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <Quote className="text-rosegold/40 mb-8" size={32} />
          <h2 className="heading-serif text-5xl md:text-6xl italic italic">Voices of Gratitude</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative p-10 bg-black/20 border border-rosegold/10 rounded-[2rem] hover:border-rosegold/30 transition-colors duration-500"
            >
              <p className="text-beige/70 italic leading-[1.8] mb-10 text-lg font-light tracking-wide">
                "{item.text}"
              </p>
              <div>
                <p className="font-bold text-rosegold uppercase tracking-[0.2em] text-[10px] mb-2">{item.author}</p>
                <div className="w-8 h-px bg-rosegold/30 mb-2" />
                <p className="text-[9px] text-white/20 uppercase tracking-[0.3em]">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
