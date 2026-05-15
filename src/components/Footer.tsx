import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold tracking-[3px] uppercase font-serif mb-8 text-rosegold">
            Wedding Canvaz
          </h2>
          <p className="text-beige/40 max-w-sm leading-loose text-sm mb-8 font-light">
            Luxury photography collective capturing the essence of human connection. Specializing in high-end weddings and aesthetic event storytelling worldwide.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-rosegold/20 flex items-center justify-center hover:border-rosegold hover:text-rosegold transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-rosegold/20 flex items-center justify-center hover:border-rosegold hover:text-rosegold transition-all"><Facebook size={18} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-rosegold mb-8 font-semibold">Explore</h3>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
            <li><a href="#home" className="hover:text-rosegold transition-colors">Home</a></li>
            <li><a href="#weddings" className="hover:text-rosegold transition-colors">Portfolio</a></li>
            <li><a href="#events" className="hover:text-rosegold transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-rosegold transition-colors">Journal</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-rosegold mb-8 font-semibold">Contact</h3>
          <ul className="space-y-6 text-sm text-white/50">
            <li className="flex gap-3"><MapPin size={16} className="text-rosegold shrink-0" /> 123 Artistry Lane, Creative District</li>
            <li className="flex gap-3"><Phone size={16} className="text-rosegold shrink-0" /> +1 (555) 000-1234</li>
            <li className="flex gap-3"><Mail size={16} className="text-rosegold shrink-0" /> hello@weddingcanvaz.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-white/30">
          © 2026 Wedding Canvaz — All Rights Reserved
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
          <a href="#" className="hover:text-rosegold">Privacy Policy</a>
          <a href="#" className="hover:text-rosegold">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
