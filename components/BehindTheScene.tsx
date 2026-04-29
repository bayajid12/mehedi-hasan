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
  return (
    <section className="w-full bg-[#E5E5E5] py-24 flex flex-col items-center overflow-hidden">
      <div className="w-full px-8 flex justify-center mb-16">
        <h2 className="font-bebas text-5xl md:text-7xl text-[#111111] tracking-wide uppercase">
          BEHIND THE SCENE
        </h2>
      </div>

      <div className="flex flex-col gap-6 w-full relative">
        {/* Row 1 - Marquee moving left */}
        <div className="flex w-[200%] md:w-[150%] lg:w-full overflow-hidden shrink-0">
          <div className="flex gap-6 min-w-full animate-marquee">
            {imagesRow1.concat(imagesRow1).map((src, index) => (
              <div 
                key={`r1-${index}`} 
                className="relative h-[250px] md:h-[350px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden shadow-lg"
              >
                <img 
                  src={src} 
                  alt={`Behind the scene ${index}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Marquee moving right */}
        <div className="flex w-[200%] md:w-[150%] lg:w-full overflow-hidden shrink-0 relative left-[-50%] md:left-[-25%] lg:left-0 select-none">
          <div className="flex gap-6 min-w-full animate-marquee-reverse">
            {imagesRow2.concat(imagesRow2).map((src, index) => (
              <div 
                key={`r2-${index}`} 
                className="relative h-[250px] md:h-[350px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden shadow-lg"
              >
                <img 
                  src={src} 
                  alt={`Behind the scene event ${index}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
