// frontend\src\sections\Hero.tsx

import { useMemo } from 'react';

type Dot = {
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
};

const generateDots = (): Dot[] => {
  return [...Array(30)].map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${15 + Math.random() * 20}s`,
    animationDelay: `${Math.random() * 5}s`,
  }));
};

const Hero = () => {
  const dots = useMemo(() => generateDots(), []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero_bg2.avif"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Purple Dots */}
      <div className="absolute w-full h-screen inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#8e51ff",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.animationDuration} ease-in-out infinite`,
              animationDelay: dot.animationDelay,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div>
        <div>
          {/* Left Column - Text Content */}
          <div>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px'>
                <span className='w-2 h-2 bg-primary rounded-full'>Sofware Engineer + NextJS Specialist</span>
              </span>
            </div>
          </div>
          {/* Right Column - Profile Image */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
