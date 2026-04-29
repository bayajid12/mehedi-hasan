import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] md:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none select-none z-0 px-6 sm:px-10 md:px-20 lg:px-32">
        <div className="flex flex-col font-bebas text-[18vw] md:text-[12vw] leading-[0.85] text-sage opacity-80 uppercase mt-[-10vh] md:mt-0">
          <span className="tracking-wide">SM</span>
          <span className="tracking-wide">Mehedi</span>
        </div>
        <div className="self-end pb-24 md:pb-32">
          <span className="font-bebas text-[18vw] md:text-[12vw] leading-[0.85] text-sage opacity-80 uppercase tracking-wide">
            Hasan
          </span>
        </div>
      </div>

      {/* Main Portrait */}
      <div className="relative z-10 w-full max-w-3xl h-full flex items-end justify-center pt-24 md:pt-32 mx-auto pointer-events-none">
        <div className="relative w-full max-w-[700px] h-[65vh] md:h-[700px] flex items-end justify-center px-4">
          {/* Using a placeholder since we don't have the original image asset. */}
          {/* <div className="absolute bottom-0 w-full h-[80%] bg-gradient-to-t from-dark to-transparent z-20 pointer-events-none" />
          <div className="w-full h-full bg-gray-500/20 rounded-t-full border border-gray-500/30 overflow-hidden flex items-center justify-center">
            <span className="text-gray-400 font-inter p-4 text-center text-sm">Portrait Placeholder<br />(Mehedi Hasan Image)</span>
          </div> */}
          <Image src="/images/sm-mehedi-hasan.png" alt="Hero" width={500} height={700} className="w-full h-full object-contain md:object-cover object-bottom" priority />
        </div>
      </div>

      {/* Title (Mobile) */}
      <div className="absolute bottom-12 w-full z-20 flex justify-center lg:hidden px-6 text-center select-none pointer-events-none">
        <h2 className="font-bebas text-[10vw] sm:text-5xl uppercase leading-[0.9] tracking-wide text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          Entrepreneur &<br />
          Technology Leader
        </h2>
      </div>

      {/* Right Side Info / Polaroids (Desktop) */}
      <div className="absolute right-10 md:right-24 top-3/8 -translate-y-1/2 z-20 flex flex-col items-end gap-6 mt-10 hidden lg:flex">
        {/* Polaroid Stack Placeholder */}
        <div className="relative w-[250px] h-[150px]">
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

        {/* Title */}
        <div className="text-right">
          <h2 className="font-bebas text-3xl md:text-5xl uppercase leading-none tracking-wide text-white drop-shadow-md">
            Entrepreneur &<br />
            Technology Leader
          </h2>
        </div>
      </div>
    </section>
  );
}
