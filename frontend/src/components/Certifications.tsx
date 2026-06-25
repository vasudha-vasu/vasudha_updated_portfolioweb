import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Award, ShieldCheck } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const certifications = [
  {
    title: 'NPTEL – Digital Image Processing',
    issuer: 'NPTEL',
    date: '2024',
    image: '/nptl.jpeg', // Placeholder for Certificate
  },
  {
    title: 'Presto 2K25 – Front End Fusion',
    issuer: 'Presto',
    date: '2025',
    image: '/alts.jpeg', // Placeholder for Tech Event
  },
  {
    title: 'Engineer’s Day Coding Event',
    issuer: 'SVIT',
    date: '2024',
    image: '/svit.jpeg', // Placeholder for Coding
  },
  {
    title: 'Java Foundations',
    issuer: 'Oracle',
    date: '2023',
    image: '/java.jpeg', // Placeholder for Java
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-brand-accent" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent">Verification</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-display text-white italic uppercase tracking-tighter">CREDENTIAL LOG</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group hover:border-brand-accent/40 transition-all cursor-pointer relative overflow-hidden flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShieldCheck size={16} />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-6">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                    <Award size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight uppercase tracking-tight italic line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 font-mono text-[9px] uppercase tracking-widest">{cert.issuer}</p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5 text-[9px] font-mono tracking-widest">
                  <span className="text-slate-600 uppercase">{cert.date}</span>
                  <span className="text-brand-accent uppercase font-bold">Verified Card</span>
                </div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-brand-accent/5 to-transparent h-20 -translate-y-full group-hover:animate-scan" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
