import { motion } from 'motion/react';
import { Briefcase, Trophy, Award } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const internships = [
  {
    company: 'Cyber Security Internship',
    location: 'Oxford University',
    role: 'Trainee',
    details: 'Intensive program focusing on modern cybersecurity threats and mitigation strategies.',
  },
  {
    company: 'Full Stack Web Development',
    location: 'Rooman Technologies, Bangalore',
    role: 'Trainee Developer',
    details: 'Building end-to-end web applications using modern tech stacks.',
  },
  {
    company: 'Data Analysis',
    location: 'JNTUA',
    role: 'Research Intern',
    details: 'Exploring data processing and visualization techniques.',
  },
];

const achievements = [
  {
    title: '2nd Place – Smart India Hackathon',
    desc: 'National level hackathon victory for innovative solution.',
    icon: Trophy,
  },
  {
    title: '3rd Place – IISF 2024 Delhi',
    desc: 'Recognition at India International Science Festival.',
    icon: Award,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-brand-secondary" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-secondary">Path</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-display text-white italic uppercase tracking-tighter">JOURNEY & HONORS</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Internships List - Data Grid Style */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <Briefcase size={14} /> Industrial Training
            </h3>
            {internships.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card !rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 group hover:bg-white/5 transition-colors"
              >
                <div className="md:w-1/3">
                  <h4 className="text-lg font-bold text-white group-hover:text-brand-secondary transition-colors">{job.company}</h4>
                  <div className="text-[10px] font-mono text-slate-500 uppercase mt-1">{job.location}</div>
                </div>
                <div className="flex-1">
                  <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-1">{job.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{job.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements - Bento Side Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <Trophy size={14} /> Accolades
            </h3>
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col gap-4 border-l-4 border-l-brand-accent hover:translate-x-2 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <ach.icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-600">CERT_VERIFIED</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">{ach.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{ach.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 bg-linear-to-tr from-brand-accent/20 to-transparent flex items-center justify-center border-brand-accent/30"
            >
              <div className="text-center">
                <div className="text-2xl font-black text-brand-accent mb-1 tracking-tighter italic">NEVER STOP</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Growth Mindset</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
