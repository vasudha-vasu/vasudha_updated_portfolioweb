import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { User, Target, Zap, Clock } from 'lucide-react';

const stats = [
  { label: 'CGPA', value: 8.05, suffix: '', icon: Target },
  { label: 'Tech Stack', value: 15, suffix: '+', icon: Zap },
  { label: 'Projects', value: 10, suffix: '+', icon: User },
  { label: 'Experience', value: 0, suffix: 'Entry', icon: Clock },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value === 0) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {value === 0 ? suffix : count.toFixed(value % 1 === 0 ? 0 : 2) + suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-brand-primary" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-primary">Discover</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-display text-white">THE PROFILE</h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 glass-card p-10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <User size={120} />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-wider italic">Professional Introduction</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Motivated Computer Science undergraduate (B.Tech CSE) seeking an entry-level Software Developer role where I can apply my knowledge of Java, Python, and full-stack web development.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  <span className="text-sm">Qualification: <span className="text-white font-bold">B.Tech (CSE)</span></span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                  <span className="text-sm">Email: <a href="mailto:gurramvasudha2005@gmail.com" className="text-white font-bold hover:text-brand-secondary transition-colors underline decoration-slate-700">gurramvasudha2005@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  <span className="text-sm">Mobile: <span className="text-white font-bold">+91 6304699267</span></span>
                </div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                Focused on building efficient, scalable applications while continuously enhancing my technical and problem-solving skills in collaborative environments.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-300 uppercase tracking-widest">
                Developer
              </div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-300 uppercase tracking-widest">
                Engineer
              </div>
            </div>
          </motion.div>

          {/* Stats Bento */}
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col items-center justify-center text-center hover:border-brand-primary/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="text-brand-secondary" size={24} />
              </div>
              <div className="text-4xl font-black mb-1 font-display tracking-tighter">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-mono">{stat.label}</div>
            </motion.div>
          ))}

          {/* Call to Action Small Bento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-8 bg-linear-to-br from-brand-primary/10 to-transparent flex items-center justify-between group cursor-pointer border-brand-primary/20"
          >
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Building the Future</h4>
              <p className="text-sm text-slate-400">Let's collaborate on something extraordinary.</p>
            </div>
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white group-hover:translate-x-2 transition-transform">
              <Zap size={20} fill="currentColor" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
