import React from 'react';
import { motion } from 'motion/react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  duration?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}) => {
  const initialMap = {
    up: { opacity: 0, y: 26 },
    down: { opacity: 0, y: -26 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    scale: { opacity: 0, scale: 0.95, y: 16 },
  };

  const animateMap = {
    up: { opacity: 1, y: 0 },
    down: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    scale: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <motion.div
      initial={initialMap[direction]}
      whileInView={animateMap[direction]}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delayOffset = 0,
}) => {
  const words = text.split(' ');

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.045,
            delayChildren: delayOffset,
          },
        },
      }}
      className={`inline ${className}`}
    >
      {words.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          variants={{
            hidden: { opacity: 0, y: 16, filter: 'blur(3px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="inline-block mr-[0.26em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface ScrollingMarqueeProps {
  items?: string[];
  variant?: 'blue' | 'dark' | 'light';
}

export const ScrollingMarquee: React.FC<ScrollingMarqueeProps> = ({
  items = [
    'WHERE SMILE MEETS ELEGANCE',
    'DENTAL IMPLANTS',
    'ORTHODONTICS & ALIGNERS',
    'GENERAL DENTISTRY',
    'TEETH WHITENING & COSMETIC',
    'ROOT CANAL TREATMENT',
    'KIDS DENTISTRY',
    'OPEN 24 HOURS MON–SAT IN P.E.C.H.S. KARACHI',
  ],
  variant = 'blue',
}) => {
  const surfaceStyles = {
    blue: 'bg-gradient-to-r from-[#0B3A9E] via-[#1E9BF0] to-[#0B3A9E] text-white border-y border-white/15',
    dark: 'bg-[#111215] text-white border-y border-white/10',
    light: 'bg-[#F0F6FC] text-[#0B0B0C] border-y border-[#E2ECF5]',
  }[variant];

  const dotColor = variant === 'light' ? 'bg-[#1E9BF0]' : 'bg-[#6CC4FF]';

  const repeated = [...items, ...items, ...items];

  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden py-3.5 select-none ${surfaceStyles}`}
    >
      <div className="flex w-max animate-marquee-scroll items-center gap-8">
        {repeated.map((text, index) => (
          <div key={`${text}-${index}`} className="flex items-center gap-8 shrink-0">
            <span className="font-outfit font-medium text-[12px] sm:text-[13px] tracking-[0.2em] uppercase whitespace-nowrap">
              {text}
            </span>
            <span className={`w-2 h-2 rounded-full ${dotColor} shrink-0`} />
          </div>
        ))}
      </div>
    </div>
  );
};
