import Image from "next/image";

const journeyData = [
  {
    logo: "/images/Wristbands House Bangladesh.png",
    date: "NOV 2013 - FEB 2016",
    title: "GENERAL MANAGER",
    company: "WRISTBANDS HOUSE BANGLADESH",
    side: "left"
  },
  {
    logo: "/images/Boshundhara Group.png",
    date: "AUG 2011 - OCT 2013",
    title: "DEPUTY MANAGER (SOFTWARE)",
    company: "BOSHUNDHARA GROUP",
    side: "right"
  },
  {
    logo: "/images/BD WEB Solution.png",
    date: "MARCH 2010 - OCTOBER 2013",
    title: "CEO & CHAIRPERSON",
    company: "BD WEB SOLUTION",
    side: "left"
  }
];

export default function CareerJourney() {
  return (
    <section className="w-full bg-black py-[180px] px-8 md:px-16 lg:px-24 flex flex-col items-center font-bebas">
      <div className="max-w-[1400px] w-full flex flex-col items-center">
        {/* Header */}
        <div className="w-full text-left md:text-center mb-32 reveal">
          <span className="text-[#ABB7AA]/50 text-xl md:text-[32px] tracking-normal uppercase">Career Journey</span>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] text-[#ABB7AA] leading-none mt-2 tracking-tight uppercase">
            TWO DECADES OF INNOVATION
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-5xl">
          <div className="flex flex-col gap-16 md:gap-0">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start justify-center md:min-h-[200px] relative reveal`}
              >
                {/* Vertical Line Segment (Desktop Only) */}
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block w-[6px] pointer-events-none">
                  {/* Top segment - Always show to ensure continuous line from top */}
                  <div className="w-full bg-[#ABB7AA]/20 h-1/2"></div>
                  {/* Bottom segment - Hide only for the last item */}
                  <div className={`w-full bg-[#ABB7AA]/20 ${index === journeyData.length - 1 ? "h-0" : "h-1/2"}`}></div>
                </div>

                {/* Logo Box (Centered on desktop) */}
                <div className="z-10 w-20 h-20 bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-800 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    unoptimized={true}
                  />
                </div>

                {/* Content Area */}
                <div className={`w-full md:w-1/2 mt-6 md:mt-0 flex flex-col ${item.side === "left"
                  ? "md:pr-24 md:items-end md:text-right md:ml-0 md:mr-auto"
                  : "md:pl-24 md:items-start md:text-left md:mr-0 md:ml-auto"
                  }`}>
                  <span className="text-[#ABB7AA]/40 text-sm md:text-base tracking-widest leading-none">
                    {item.date}
                  </span>
                  <h3 className="text-4xl md:text-4xl lg:text-[2.6rem] text-[#ABB7AA] leading-tight mt-1 tracking-wide">
                    {item.title}
                  </h3>
                  <span className="text-[#ABB7AA] text-lg md:text-[24px] tracking-wider mt-1 uppercase">
                    {item.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
