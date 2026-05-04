import Image from "next/image";

export default function ImageBanner() {
  return (
    <section className="w-full bg-black py-[20px] flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-[1400px] flex items-center justify-center px-4 md:px-12 h-[500px] md:h-[700px] reveal">

        {/* Background Grey Card - Middle Aligned */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-[95%] md:w-[90%] h-[calc(60%+20px)] md:h-[calc(70%+20px)] bg-[#1c1c1c] rounded-3xl md:rounded-[40px] flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Typography inside the card - Gradient with 30% Opacity */}
            <div className="flex flex-col items-center justify-center w-full text-center opacity-30 select-none">
              <span className="font-bebas text-[22vw] md:text-[14vw] leading-[0.8] bg-gradient-to-b from-[#FFFFFF] to-[#7D7D7B] bg-clip-text text-transparent tracking-normal md:tracking-tight uppercase whitespace-nowrap">
                EMPOWERING
              </span>
              <span className="font-bebas text-[22vw] md:text-[14vw] leading-[0.8] bg-gradient-to-b from-[#FFFFFF] to-[#7D7D7B] bg-clip-text text-transparent tracking-normal md:tracking-tight uppercase whitespace-nowrap mt-2">
                BUSINESSES
              </span>
            </div>
          </div>
        </div>

        {/* Foreground Center Image - Starts Below */}
        <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
          <div className="relative w-full max-w-[550px] md:max-w-[750px] h-[105%] md:h-[115%] translate-y-[5%]">
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
