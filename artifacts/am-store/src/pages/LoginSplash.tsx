import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '@assets/709737226_18084092231149564_1279338615928384912_n_1783385307333.jpg';
import { Button } from '@/components/ui/button';

export function LoginSplash({ onEnter }: { onEnter: () => void }) {
  const [isExiting, setIsExiting] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // vw
      y: 100 + Math.random() * 20, // vh
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 4,
    }));
    setParticles(newParticles);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1000); // Wait for exit animation
  };

  const tagline = "Moda Masculina com Presença";

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'brightness(0)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ y: `${p.y}vh`, x: `${p.x}vw`, opacity: 0 }}
              animate={{ 
                y: '-10vh', 
                opacity: [0, 0.8, 0],
                x: `${p.x + (Math.random() * 10 - 5)}vw` 
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
              className="absolute rounded-full bg-primary"
              style={{ width: p.size, height: p.size, filter: 'blur(1px)' }}
            />
          ))}

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: 'drop-shadow(0 0 0px rgba(212, 175, 55, 0))' }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.4))'
              }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="mb-8"
            >
              <img src={logoImg} alt="AM Store" className="h-32 md:h-48 w-auto object-contain" />
            </motion.div>

            {/* Gold Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              className="h-[1px] bg-primary mb-6"
            />

            {/* Tagline */}
            <div className="flex space-x-[2px] mb-12 h-6 overflow-hidden">
              {tagline.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 + index * 0.05 }}
                  className={`text-white/80 font-serif text-sm md:text-base tracking-widest ${char === ' ' ? 'w-2' : ''}`}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4 }}
            >
              <Button 
                onClick={handleEnter}
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-black font-display tracking-widest text-xl px-12 py-6 rounded-none transition-all duration-500 glow-gold-hover uppercase"
              >
                Entrar
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
