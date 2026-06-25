import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 relative overflow-hidden bg-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a href="#" className="text-2xl font-bold font-display">
            GV<span className="text-brand-primary">.</span>
          </a>
          <p className="text-slate-500 text-sm mt-2 font-mono">
            Crafting code with passion and precision.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a href="https://github.com/vasudha-vasu" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-primary transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/gurram-vasudha-86535a2ba?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:gurramvasudha2005@gmail.com" className="text-slate-400 hover:text-brand-primary transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Gurram Vasudha. All Rights Reserved.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all group"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Background glow in footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-linear-to-r from-transparent via-brand-primary/50 to-transparent" />
    </footer>
  );
}
