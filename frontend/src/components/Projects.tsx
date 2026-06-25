import { motion } from 'motion/react';
import { ExternalLink, Github, FolderCode } from 'lucide-react';

const projects = [
  {
    title: 'software-defect-prediction',
    description: 'A comprehensive authentication and registration system built using MVC architecture, featuring secure session management and database integration.',
    tech: ['python', 'django', 'MySQL'],
    github: 'https://github.com/vasudha-vasu/software-defect-prediction.git',
    demo: 'https://demo.com',
    image: 'software-defect-prediction.png',
  },
  {
    title: 'admin portal',
    description: 'A comprehensive authentication and registration system built using MVC architecture, featuring secure session management and database integration.',
    tech: ['react.js', 'node.js', 'mangodb', 'express.js'],
    github: 'https://github.com/vasudha-vasu/admin-store-application.git',
    demo: 'https://demo.com',
    image: 'adnin1.avif',
  },
  {
    title: 'Online Voting System',
    description: 'A secure and transparent digital voting platform designed for high performance and reliability, featuring real-time results and user verification.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/vasudha-vasu/smart-online-voting-system.git',
    demo: 'https://demo.com',
    image: 'voting.png',
  },
  {
    title: 'College Website',
    description: 'A dynamic and modern web application for educational institutions, providing clean navigation for students, faculty information, and department listings.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/vasudha-vasu/college-website.git',
    demo: 'https://demo.com',
    image: 'college.jpg',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-brand-accent" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-accent">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-display text-white">THE WORK</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group overflow-hidden flex flex-col hover:border-brand-primary/30 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-40 group-hover:opacity-10 transition-opacity duration-700" />

                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20 backdrop-blur-sm">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white text-slate-900 rounded-full"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-brand-primary text-white rounded-full"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 rounded-lg uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors uppercase tracking-tight italic">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-6">
                    <a href={project.demo} className="text-[10px] font-mono text-brand-primary uppercase tracking-[0.3em] hover:text-white transition-colors">
                      Live Preview
                    </a>
                  </div>
                  <a href={project.github} className="text-slate-500 hover:text-white transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
