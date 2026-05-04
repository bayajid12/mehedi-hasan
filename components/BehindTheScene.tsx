"use client";

import { useEffect, useRef } from "react";

const imagesRow1 = [
  "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dd0f32d7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517048676732-dce5ef87042a?auto=format&fit=crop&w=600&q=80",
];

const imagesRow2 = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1543269865-cba6f9905663?auto=format&fit=crop&w=600&q=80",
];

export default function BehindTheScene() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupMarquee = (ref: React.RefObject<HTMLDivElement | null>, speed: number) => {
      const container = ref.current;
      if (!container) return;

      let animationId: number;
      let isPaused = false;

      const animate = () => {
        if (!isPaused) {
          container.scrollLeft += speed;
          
          // Loop logic
          const halfWidth = container.scrollWidth / 2;
          if (speed > 0 && container.scrollLeft >= halfWidth) {
            container.scrollLeft = 0;
          } else if (speed < 0 && container.scrollLeft <= 0) {
            container.scrollLeft = halfWidth;
          }
        }
        animationId = requestAnimationFrame(animate);
      };

      const onInteractionStart = () => { isPaused = true; };
      const onInteractionEnd = () => { isPaused = false; };

      container.addEventListener("mouseenter", onInteractionStart);
      container.addEventListener("mouseleave", onInteractionEnd);
      container.addEventListener("touchstart", onInteractionStart);
      container.addEventListener("touchend", onInteractionEnd);

      animationId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationId);
        container.removeEventListener("mouseenter", onInteractionStart);
        container.removeEventListener("mouseleave", onInteractionEnd);
        container.removeEventListener("touchstart", onInteractionStart);
        container.removeEventListener("touchend", onInteractionEnd);
      };
    };

    const cleanup1 = setupMarquee(row1Ref, 1.5);
    const cleanup2 = setupMarquee(row2Ref, -1.5);

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  return (
    <section className="w-full bg-[#E3E3DF] py-[180px] flex flex-col items-center overflow-hidden">
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="w-full px-8 flex justify-center mb-16">
        <h2 className="font-bebas text-5xl md:text-7xl text-[#111111] tracking-[-2px] uppercase">
          BEHIND THE SCENE
        </h2>
      </div>

      <div className="flex flex-col gap-6 w-full relative reveal">
        {/* Row 1 - Auto-scroll + Drag/Touch */}
        <div 
          ref={row1Ref}
          className="flex w-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        >
          <div className="flex gap-6 min-w-max px-6">
            {imagesRow1.concat(imagesRow1).map((src, index) => (
              <div 
                key={`r1-${index}`} 
                className="relative h-[250px] md:h-[350px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              >
                <img 
                  src={src} 
                  alt={`Behind the scene ${index}`} 
                  className="w-full h-full object-cover pointer-events-none" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse Auto-scroll + Drag/Touch */}
        <div 
          ref={row2Ref}
          className="flex w-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        >
          <div className="flex gap-6 min-w-max px-6">
            {imagesRow2.concat(imagesRow2).map((src, index) => (
              <div 
                key={`r2-${index}`} 
                className="relative h-[250px] md:h-[350px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              >
                <img 
                  src={src} 
                  alt={`Behind the scene event ${index}`} 
                  className="w-full h-full object-cover pointer-events-none" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
