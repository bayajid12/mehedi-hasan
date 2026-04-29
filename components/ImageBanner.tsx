import Image from "next/image";

export default function ImageBanner() {
  return (
    <section className="w-full bg-black py-20 flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-[1400px] flex items-center justify-center px-4 md:px-12 h-[600px] md:h-[800px]">

        {/* Background Grey Card */}
        <div className="absolute w-[85%] md:w-[75%] h-[60%] md:h-[70%] bg-[#1c1c1c] rounded-3xl md:rounded-[40px] flex items-center justify-center overflow-hidden shadow-2xl">
          {/* Typography inside the card */}
          <div className="flex flex-col items-center justify-center w-full mt-[-5%] text-center">
            <span className="font-bebas text-[15vw] md:text-[12vw] leading-[0.8] text-[#7D7D7B] tracking-normal md:tracking-tight uppercase whitespace-nowrap z-0">
              EMPOWERING
            </span>
            <span className="font-bebas text-[15vw] md:text-[12vw] leading-[0.8] text-[#7D7D7B] tracking-normal md:tracking-tight uppercase whitespace-nowrap z-0 mt-2">
              BUSINESSES
            </span>
          </div>
        </div>

        {/* Foreground Center Image */}
        <div className="relative z-10 h-full w-full flex items-end justify-center pointer-events-none">
          <div className="relative w-[80%] max-w-[500px] h-[85%] md:h-[95%]">
            <Image
              src="/images/mehedi-hasan.png"
              alt="SM Mehedi Hasan"
              fill
              className="object-contain object-bottom grayscale grayscale-100 contrast-125 brightness-90 drop-shadow-2xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
