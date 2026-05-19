import { motion } from 'motion/react';
import { Send, MapPin, Calendar, Phone, User, Info } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    event: '',
    otherEvent: '',
    dates: [] as string[],
    location: '',
    pincode: '',
    fullAddress: ''
  });

  const [currentDateInput, setCurrentDateInput] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleAddDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    if (newDate && !formData.dates.includes(newDate)) {
      setFormData(prev => ({ ...prev, dates: [...prev.dates, newDate] }));
    }
    setCurrentDateInput('');
  };

  const removeDate = (dateToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      dates: prev.dates.filter(d => d !== dateToRemove)
    }));
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({ ...formData, fullName: value });
  };

  const handleOtherEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({ ...formData, otherEvent: value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 6) {
      setFormData({ ...formData, pincode: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation check
    if (!formData.fullName || !formData.phone || !formData.event || formData.dates.length === 0 || !formData.location || !formData.pincode || !formData.fullAddress) {
      return;
    }
    if (formData.event === 'Others' && !formData.otherEvent) {
      return;
    }
    if (formData.pincode.length !== 6) {
      return;
    }

    const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      console.error('Google Apps Script URL is not configured in environment variables.');
      // Proceeding with local success state for demo purposes if URL is missing
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      return;
    }

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors for simple POST or redirects
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Form submitted successfully');
      setIsSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        event: '',
        otherEvent: '',
        dates: [],
        location: '',
        pincode: '',
        fullAddress: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const locations = [
    "Kolkata", "Delhi", "Mumbai", "Bangalore", "Hyderabad", 
    "Chennai", "Ahmedabad", "Pune", "Surat", "Jaipur", 
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", 
    "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara"
  ].sort();

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
        <div className="bg-deep/50 border border-rosegold/10 p-8 md:p-20 rounded-[3rem] backdrop-blur-xl">
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

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-2 relative">
                <label className="text-[10px] uppercase tracking-widest text-rosegold ml-1 block">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-rosegold/40" size={18} />
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleFullNameChange}
                    className="w-full bg-black/20 border border-white/5 rounded-2xl px-12 py-4 focus:border-rosegold outline-none transition-colors placeholder:text-white/10 text-sm tracking-wide text-white"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-rosegold ml-1 block">Phone Number *</label>
                <div className="relative flex">
                  <span className="bg-black/40 border border-white/5 border-r-0 rounded-l-2xl px-4 py-4 text-rosegold text-sm flex items-center">
                    +91
                  </span>
                  <input 
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    placeholder="10 digit number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full bg-black/20 border border-white/5 rounded-r-2xl px-4 py-4 focus:border-rosegold outline-none transition-colors placeholder:text-white/10 text-sm tracking-wide text-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              {/* Events Dropdown */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-rosegold ml-1 block">Event Type *</label>
                <select 
                  required
                  value={formData.event}
                  onChange={(e) => setFormData({...formData, event: e.target.value})}
                  className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 focus:border-rosegold outline-none transition-colors text-white/60 text-sm tracking-wide"
                >
                  <option value="" disabled className="bg-deep">Select Event</option>
                  <option value="Wedding" className="bg-deep">Wedding</option>
                  <option value="Pre Wedding" className="bg-deep">Pre Wedding</option>
                  <option value="Reception" className="bg-deep">Reception</option>
                  <option value="Post Wedding" className="bg-deep">Post Wedding</option>
                  <option value="Birthday" className="bg-deep">Birthday</option>
                  <option value="Baby Shower" className="bg-deep">Baby Shower</option>
                  <option value="Maternity Shoots" className="bg-deep">Maternity Shoots</option>
                  <option value="Corporate Event" className="bg-deep">Corporate Event</option>
                  <option value="Others" className="bg-deep">Others</option>
                </select>
              </div>
            </div>

            {/* Conditional "Others" field */}
            {formData.event === 'Others' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-2"
              >
                <label className="text-[10px] uppercase tracking-widest text-rosegold ml-1 block">Specify Event (must option) *</label>
                <div className="relative">
                  <Info className="absolute left-4 top-1/2 -translate-y-1/2 text-rosegold/40" size={18} />
                  <input 
                    type="text" 
                    required
                    placeholder="must option"
                    value={formData.otherEvent}
                    onChange={handleOtherEventChange}
                    className="w-full bg-black/20 border border-white/5 rounded-2xl px-12 py-4 focus:border-rosegold outline-none transition-colors placeholder:text-white/10 text-sm tracking-wide text-white"
                  />
                </div>
              </motion.div>
            )}

            {/* Multiple Date Selection */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-rosegold ml-1 block">Event Date(s) * (Select multiple if applicable)</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-rosegold/40" size={18} />
                  <input 
                    type="date" 
                    min={today}
                    value={currentDateInput}
                    onChange={handleAddDate}
                    className="w-full bg-black/20 border border-white/5 rounded-2xl [color-scheme:dark] px-12 py-4 focus:border-rosegold outline-none transition-colors text-white/60 text-sm tracking-wide"
                  />
                </div>
              </div>
              
              {/* Selected Dates Display */}
              {formData.dates.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.dates.map(date => (
                    <span key={date} className="bg-rosegold/10 border border-rosegold/20 text-rosegold text-xs px-3 py-1.5 rounded-full flex items-center gap-2">
                      {new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      <button 
                        type="button" 
                        onClick={() => removeDate(date)}
                        className="hover:text-white transition-colors"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
              {formData.dates.length === 0 && (
                <p className="text-[10px] text-white/20 italic ml-1">Please select at least one date</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Location Dropdown */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-rosegold ml-1 block">City *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-rosegold/40" size={18} />
                  <select 
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-black/20 border border-white/5 rounded-2xl px-12 py-4 focus:border-rosegold outline-none transition-colors text-white/60 text-sm tracking-wide"
                  >
                    <option value="" disabled className="bg-deep">Select City</option>
                    {locations.map(city => (
                      <option key={city} value={city} className="bg-deep">{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Pincode */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-rosegold ml-1 block">Pin Code *</label>
                <input 
                  type="text" 
                  required
                  pattern="[0-9]{6}"
                  maxLength={6}
                  placeholder="6-digit PIN code"
                  value={formData.pincode}
                  onChange={handlePincodeChange}
                  className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 focus:border-rosegold outline-none transition-colors placeholder:text-white/10 text-sm tracking-wide text-white"
                />
              </div>
            </div>

            {/* Full Location / Address */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-rosegold ml-1 block">Full Location / Address (Google Maps Link acceptable) *</label>
              <textarea 
                required
                rows={3}
                placeholder="Write your full address or paste Google Maps location link here..."
                value={formData.fullAddress}
                onChange={(e) => setFormData({...formData, fullAddress: e.target.value})}
                className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-4 focus:border-rosegold outline-none transition-colors placeholder:text-white/10 text-sm tracking-wide text-white"
              />
            </div>

            <button 
              type="submit"
              className={`btn-primary w-full py-6 flex items-center justify-center gap-3 transition-all ${isSubmitted ? 'bg-green-600 border-green-600' : ''}`}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>Thank You!</>
              ) : (
                <>Send Inquiry <Send size={16} /></>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
