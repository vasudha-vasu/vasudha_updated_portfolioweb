import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Typed from 'typed.js';
import { Download, ChevronDown, Github, Linkedin } from 'lucide-react';

const codeSnippets = [
  'public class Developer {',
  '  String name = "Vasudha";',
  '  void build() { }',
  '}',
  'const app = express();',
  'app.get("/api", (req, res) => {',
  '  res.status(200).json();',
  '});',
  'SELECT * FROM skills WHERE user="vasu";',
  'npm install lucide-react',
  'git push origin main',
  'import { motion } from "motion/react";',
  'System.out.println("Backend Logic");',
  'def solve_problem():',
  '  return True',
  'db.pool(connection_string);',
  'java -jar application.jar',
  'docker-compose up -d',
  '01010101111001',
  '11001101010111',
  'UUID.randomUUID()',
  'public static void main(String[] args)',
  'interface Repository { }',
];

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'B.Tech CSE Student',
        'Software Developer',
        'Java Enthusiast',
        'Full Stack Developer',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Code Background Animation */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none select-none overflow-hidden">
        {codeSnippets.map((code, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              opacity: [0.05, 0.3, 0.05],
              scale: [0.7, 1, 0.7],
              rotate: i % 2 === 0 ? [0, 5, 0] : [0, -5, 0]
            }}
            transition={{ 
              duration: 20 + Math.random() * 25, 
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3
            }}
            className="absolute whitespace-nowrap text-[6px] md:text-sm font-mono text-slate-800 pointer-events-none"
          >
            {code}
          </motion.div>
        ))}

        {/* Matrix-like binary streams behind blobs */}
        <div className="absolute inset-0 flex justify-around opacity-5">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100 }}
              animate={{ y: 1000 }}
              transition={{ 
                duration: 10 + i * 2, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 1.5
              }}
              className="text-[10px] font-mono text-brand-primary leading-none tracking-tighter"
              style={{ writingMode: 'vertical-rl' }}
            >
              {Array(20).fill('1010101111000101').join('')}
            </motion.div>
          ))}
        </div>

        {/* Scanning line for "internal system" feel */}
        <motion.div
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[1px] bg-brand-primary/10 blur-[2px] z-0"
        />
      </div>

      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card overflow-hidden border-brand-primary/10"
        >
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Side - Details */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 self-start"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">Available for Opportunities</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight leading-[0.9] mb-8">
                GURRAM<br />
                <span className="text-gradient">VASUDHA</span>
              </h1>

              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-slate-700" />
                <div className="text-xl md:text-2xl text-brand-primary font-medium font-mono">
                  <span ref={el}></span>
                </div>
              </div>

              <div className="space-y-8 mb-12">
                <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-brand-primary/30 pl-6 max-w-xl">
                  B.Tech (CSE) student focused on building efficient, scalable applications and solving complex problems with a passion for modern technology.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-brand-accent transition-colors">
                      <ChevronDown size={16} className="rotate-90" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Qualification</span>
                      <span className="text-sm font-bold text-slate-200 uppercase">B.Tech (CSE)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-brand-primary transition-colors">
                      <Download size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Email</span>
                      <a href="mailto:gurramvasudha2005@gmail.com" className="text-sm font-bold text-slate-200 hover:text-brand-primary transition-colors">gurramvasudha2005@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-brand-secondary transition-colors">
                      <ChevronDown size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Mobile</span>
                      <span className="text-sm font-bold text-slate-200">+91 6304699267</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-brand-primary rounded-2xl font-bold text-white shadow-2xl shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all text-sm uppercase tracking-[0.3em]"
                >
                  Contact Me
                </motion.a>
                
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-white hover:bg-white/10 transition-all text-sm uppercase tracking-[0.3em] flex items-center gap-3"
                >
                  <Download size={18} />
                  Download CV
                </motion.a>

                <div className="flex gap-4">
                  <a href="https://github.com/vasudha-vasu" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-primary transition-all">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/gurram-vasudha-86535a2ba?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-primary transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Image with Premium Effects */}
            <div className="lg:w-[45%] relative flex items-center justify-center p-8 lg:p-12 order-1 lg:order-1">
              <div className="relative w-full max-w-[400px] aspect-[4/5] group">
                {/* Rotating Glow Background */}
                <div className="absolute -inset-4 bg-linear-to-tr from-brand-primary via-brand-secondary to-brand-accent rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-spin-slow" />
                
                {/* Floating Particles Around Image */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -40, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 3 + i % 4, 
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{ 
                        left: Math.random() * 100 + '%', 
                        top: Math.random() * 100 + '%' 
                      }}
                    />
                  ))}
                </div>

                {/* Main Image Container */}
                <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 glass-card neon-border group-hover:scale-[1.02] transition-all duration-700 ease-out animate-float">
                  <img 
                    src="/profile.jpg" 
                    alt="Gurram Vasudha" 
                    className="w-full h-full object-cover transition-transform duration-700 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-40" />
                  
                  {/* Glass Tag Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-mono text-brand-primary uppercase tracking-[0.2em] mb-1">Portfolio 2024</span>
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">VASUDHA GURRAM</span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                        <Github size={14} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border border-brand-primary/20 rounded-full blur-[1px] animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-brand-secondary/20 rounded-full blur-[2px] animate-bounce" style={{ animationDuration: '4s' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-600 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-mono rotate-180 [writing-mode:vertical-lr]">SCROLL</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
