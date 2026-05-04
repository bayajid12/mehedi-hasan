import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] lg:h-[992px] flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      
      {/* Hero Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 reveal">
        <Image src="/images/Hero-background-elenents.png" alt="Hero Background Elements" fill className="object-cover object-center" priority />
      </div>
      {/* --- DESKTOP VIEW --- */}
      {/* Background Typography */}
      <div className="hidden lg:flex absolute inset-0 items-center pointer-events-none select-none px-6 sm:px-10 md:px-20 lg:px-32">
        <div className="flex flex-col font-bebas text-[18vw] lg:text-[283px] leading-[0.85] text-sage opacity-80 uppercase mt-[-10vh] md:mt-0 relative z-0">
          <span className="tracking-[-7px]">SM</span>
          <span className="tracking-[-7px]">Mehedi</span>
        </div>
      </div>

      {/* Main Portrait (Unified for all screens) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[1112px] h-[50vh] md:h-[65vh] lg:h-[909px] flex items-end justify-center pointer-events-none reveal">
        <Image src="/images/sm-mehedi-hasan.png" alt="Hero" width={1112} height={909} className="w-full h-full object-contain lg:object-cover object-bottom px-4 lg:px-0" priority />
      </div>

      {/* Right Side Info / Polaroids */}
      <div className="hidden lg:flex absolute right-6 sm:right-10 md:right-20 lg:right-32 top-[60%] md:top-1/2 -translate-y-1/2 z-20 flex-col items-end pointer-events-none">
        {/* Polaroid Stack */}
        <div className="relative w-[250px] h-[150px] mb-8 pointer-events-auto">
          {/* Card 1 */}
          <div className="absolute inset-0 bg-white p-2 rounded shadow-xl rotate-12 transform origin-bottom-right transition-transform hover:rotate-0 hover:z-30 duration-300">
            <Image src="/images/Sm-group-01.jpg" alt="Hero" width={500} height={700} className="w-full h-full object-cover" />
          </div>
          {/* Card 2 */}
          <div className="absolute inset-0 bg-white p-2 rounded shadow-xl rotate-6 transform origin-bottom-right transition-transform hover:rotate-0 hover:z-30 duration-300">
            <Image src="/images/Sm-group-02.jpg" alt="Hero" width={500} height={700} className="w-full h-full object-cover" />
          </div>
          {/* Card 3 */}
          <div className="absolute inset-0 bg-white p-2 rounded shadow-xl rotate-3 transform origin-bottom-right transition-transform hover:rotate-0 hover:z-30 duration-300">
            <Image src="/images/Sm-group-03.jpg" alt="Hero" width={500} height={700} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Title & Hasan */}
        <div className="flex flex-col items-end gap-[48px] text-right mt-16 lg:mt-0">
          <h2 className="font-bebas text-[40px] uppercase leading-[0.9] tracking-wide text-white drop-shadow-md">
            Entrepreneur &<br />
            Technology Leader
          </h2>
          <span className="font-bebas text-[18vw] lg:text-[283px] leading-[0.85] text-sage opacity-80 uppercase tracking-[-7px] select-none">
            Hasan
          </span>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="flex lg:hidden flex-col items-center justify-start w-full h-full px-6 gap-6 sm:gap-8 relative z-10 pt-4 pb-[50vh]">
        
        {/* 1. First Name */}
        <div className="w-full text-center mt-2">
          <h1 className="font-bebas text-[22vw] leading-[0.85] text-sage opacity-80 uppercase tracking-[-2px]">
            SM MEHEDI<br/>HASAN
          </h1>
        </div>

        {/* 2. Group Images */}
        <div className="relative w-[180px] h-[110px] sm:w-[250px] sm:h-[150px] z-20 pointer-events-auto">
          {/* Card 1 */}
          <div className="absolute inset-0 bg-white p-1.5 sm:p-2 rounded shadow-xl rotate-12 transform origin-bottom-right">
            <Image src="/images/Sm-group-01.jpg" alt="Hero" width={500} height={700} className="w-full h-full object-cover" />
          </div>
          {/* Card 2 */}
          <div className="absolute inset-0 bg-white p-1.5 sm:p-2 rounded shadow-xl rotate-6 transform origin-bottom-right">
            <Image src="/images/Sm-group-02.jpg" alt="Hero" width={500} height={700} className="w-full h-full object-cover" />
          </div>
          {/* Card 3 */}
          <div className="absolute inset-0 bg-white p-1.5 sm:p-2 rounded shadow-xl rotate-3 transform origin-bottom-right z-10">
            <Image src="/images/Sm-group-03.jpg" alt="Hero" width={500} height={700} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 3. Title */}
        <div className="text-center z-20">
          <h2 className="font-bebas text-[32px] sm:text-[40px] uppercase leading-[0.9] tracking-wide text-white drop-shadow-md">
            Entrepreneur &<br />
            Technology Leader
          </h2>
        </div>

      </div>

    </section>
  );
}
