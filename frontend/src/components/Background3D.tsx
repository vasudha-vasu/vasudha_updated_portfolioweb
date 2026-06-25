import { useEffect, useRef } from 'react';

export default function Background3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const characters = '01';
    const fontSize = 20;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(columns).fill(0).map(() => Math.random() * -100);

    const draw = () => {
      // Fading background to create trails
      ctx.fillStyle = 'rgba(3, 7, 18, 0.1)'; // Matches #030712 slate-950/slate-900
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `500 ${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Make the "head" of the drop white, and the rest the "pro" cyan brand color
        const isHead = Math.random() < 0.05;
        if (isHead) {
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#FFFFFF';
        } else {
          ctx.fillStyle = '#06B6D4'; // Brand secondary color
          ctx.shadowBlur = 5;
          ctx.shadowColor = '#06B6D4';
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        ctx.shadowBlur = 0; // Reset shadow for next drop

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    let animationId: number;
    let lastTime = 0;
    const fps = 24; // Cinematic/hacking feel
    const interval = 1000 / fps;

    const animate = (time: number) => {
      animationId = requestAnimationFrame(animate);
      const deltaTime = time - lastTime;
      if (deltaTime > interval) {
        draw();
        lastTime = time - (deltaTime % interval);
      }
    };

    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      setCanvasSize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * -100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#030712] overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-30" 
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#030712]/50 to-[#030712]" />
    </div>
  );
}
