import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to send message.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-brand-primary" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-primary">Connect</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-display text-white">GET IN TOUCH</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Details Bento */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex items-center gap-6 group hover:border-brand-primary/30 transition-all"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:gurramvasudha2005@gmail.com" className="text-lg font-bold text-white hover:text-brand-primary transition-colors">gurramvasudha2005@gmail.com</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 flex items-center gap-6 group hover:border-brand-secondary/30 transition-all"
            >
              <div className="w-14 h-14 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Phone</div>
                <div className="text-lg font-bold text-white">+91 6304699267</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 flex items-center gap-6 group hover:border-brand-accent/30 transition-all"
            >
              <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Location</div>
                <div className="text-lg font-bold text-white">Anantapur, India</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 flex items-center gap-6 group hover:border-brand-primary/30 transition-all"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-brand-primary transition-colors">
                <Linkedin size={24} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Social</div>
                <a href="https://www.linkedin.com/in/gurram-vasudha-86535a2ba?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-lg font-bold text-white hover:text-brand-primary transition-colors">LinkedIn Profile</a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-10 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-primary transition-colors text-white"
                    placeholder="Enter your name"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-primary transition-colors text-white"
                    placeholder="Enter your email"
                    disabled={status === 'loading'}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Message Content</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 h-40 focus:outline-none focus:border-brand-primary transition-colors text-white resize-none"
                  placeholder="Tell me about your project..."
                  disabled={status === 'loading'}
                />
              </div>
              
              {status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20">
                  <CheckCircle2 size={18} />
                  <span className="text-sm">Message sent successfully!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  <AlertCircle size={18} />
                  <span className="text-sm">{errorMessage}</span>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className={`w-full py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm shadow-xl transition-all flex items-center justify-center gap-3 ${
                  status === 'loading' 
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                    : 'bg-brand-primary text-white shadow-brand-primary/20 hover:bg-brand-primary/90'
                }`}
              >
                {status === 'loading' ? 'Sending...' : 'Message'} 
                {status !== 'loading' && <Send size={18} />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

