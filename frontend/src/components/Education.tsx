import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    institution: 'Sri Venkateswara Institute of Technology',
    degree: 'B.Tech – Computer Science Engineering',
    year: '2023– 2026',
    score: 'CGPA: 8.05',
    active: false,
  },
  {
    institution: 'K.G.B.V Junior College',
    degree: 'Intermediate (CSE)',
    year: '2021 – 2022',
    score: 'Percentage: 75%',
    active: false,
  },
  {
    institution: 'K.G.B.V Vidyalayam',
    degree: 'Matriculation',
    year: '2019 – 2020',
    score: 'Percentage: 89%',
    active: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-brand-primary" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-primary">Foundation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-display text-white">ACADEMIC LOG</h2>
        </div>

        <div className="relative">
          {/* Vertical line with glow */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 ml-4 md:ml-8" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 md:pl-24 group"
              >
                {/* Connector Dot */}
                <div className="absolute left-0 top-1.5 w-8 h-8 md:w-16 md:h-16 ml-0 md:ml-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800 border border-brand-primary group-hover:bg-brand-primary transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="glass-card !rounded-2xl p-8 hover:bg-white/5 transition-colors cursor-default">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">{edu.institution}</h3>
                      <div className="text-sm text-brand-secondary font-mono mt-1">{edu.degree}</div>
                    </div>
                    <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-xs font-mono text-slate-500 whitespace-nowrap self-start">
                      {edu.year}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-8 mt-4 pt-6 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Status</span>
                      <span className="text-sm font-bold text-white uppercase">{edu.active ? 'Current' : 'Completed'}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Performance</span>
                      <span className="text-lg font-black text-brand-primary tracking-tighter italic">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
