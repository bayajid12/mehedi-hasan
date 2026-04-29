import { Mail, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#111111] overflow-hidden pt-32 pb-16 flex flex-col items-center">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-[0.03] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col items-center px-6 md:px-12">

        {/* Main CTA Headlines */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bebas text-6xl md:text-8xl leading-[0.85] text-sage tracking-wider uppercase mb-2">
            READY TO BUILD
          </h2>
          <h2 className="font-bebas text-6xl md:text-8xl leading-[0.85] text-gray-500 tracking-wider uppercase">
            SOMETHING GREAT?
          </h2>
        </div>

        {/* Short description */}
        <p className="font-inter text-gray-500 text-sm md:text-base font-light text-center max-w-xl mt-8">
          Whether you need a technology partner, strategic advisor, or a mentor — I'd love to hear from you.
        </p>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 w-full">
          {/* Social Icons */}
          <a href="#" className="w-12 h-12 rounded-full bg-[#9cb1a4] hover:bg-white text-[#111] flex items-center justify-center transition-colors shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-[#9cb1a4] hover:bg-white text-[#111] flex items-center justify-center transition-colors shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-[#9cb1a4] hover:bg-white text-[#111] flex items-center justify-center transition-colors shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>

          {/* Email Button */}
          <a href="mailto:mehedihasan123@gmail.com" className="flex items-center gap-3 px-6 h-12 rounded-full border border-gray-700 hover:border-sage bg-[#1a1a1a] hover:bg-[#222] transition-colors group">
            <Mail size={18} className="text-gray-400 group-hover:text-sage" />
            <span className="font-inter text-sm text-gray-400 group-hover:text-white transition-colors">
              mehedihasan123@gmail.com
            </span>
          </a>

          {/* Schedule Button */}
          <a href="#" className="flex items-center gap-3 px-8 h-12 rounded-full bg-[#9cb1a4] hover:bg-sage/80 text-[#111] transition-colors shadow-lg shadow-sage/10">
            <Calendar size={18} />
            <span className="font-bebas text-xl pt-1 tracking-widest">
              SCHEDULE A MEETING
            </span>
          </a>
        </div>
      </div>

      {/* Massive Bottom Text & Portrait */}
      <div className="relative w-full flex items-center justify-center gap-4 md:gap-10 mt-28 md:mt-40 pointer-events-none select-none z-10 px-4">
        <span className="font-bebas text-[18vw] md:text-[14vw] leading-[0.7] text-[#222222] tracking-tighter shrink-0 truncate">
          S M MEHEDI
        </span>
        <div className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px] aspect-square rounded-3xl md:rounded-[40px] overflow-hidden shrink-0 shadow-2xl bg-gray-900 border border-gray-800">
          <img
            src="/images/sm-mehedi-hasan-sitting.png"
            alt="SM Mehedi Hasan sitting at desk"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-bebas text-[18vw] md:text-[14vw] leading-[0.7] text-[#222222] tracking-tighter shrink-0 truncate">
          HASAN
        </span>
      </div>
    </footer>
  );
}
