import { motion } from 'motion/react';
import { Code2, Globe, Database, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
    ],
    color: 'brand-primary',
  },
  {
    title: 'Frontend',
    icon: Globe,
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3/Tailwind', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 85 },
    ],
    color: 'brand-secondary',
  },
  {
    title: 'Backend & DB',
    icon: Database,
    skills: [
      { name: 'Spring Boot', level: 80 },
      { name: 'SQL/MySQL', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
    color: 'brand-accent',
  },
  {
    title: 'Tools & Methodology',
    icon: Settings,
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'SDLC/STLC', level: 80 },
    ],
    color: 'white',
  },
  {
    title: 'AI Tools',
    icon: Settings,
    skills: [
      { name: 'Antigravity', level: 85 },
      { name: 'Tray', level: 80 },
    ],
    color: 'white',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 bg-brand-accent/10 rounded-2xl mb-4"
          >
            <Code2 className="text-brand-accent" size={28} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-6">
            Technical <span className="text-brand-accent">Excellence</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 group hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-2 bg-white/5 rounded-lg text-${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full bg-${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
