import Image from "next/image";

const careerData = [
  {
    logo: "/images/coder71-logo.png",
    date: "JAN 2013 - PRESENT",
    title: "MANAGING DIRECTOR",
    company: "CODER71 LIMITED",
    description: "Beyond my business ventures, I'm passionate about community impact and leadership development. I serve as the 2025 President of JCI Dhaka Founders."
  },
  {
    logo: "/images/jci-logo.png",
    date: "JAN 2025 - DEC 2025",
    title: "2025 PRESIDENT",
    company: "JCI DHAKA FOUNDERS",
    description: "Beyond my business ventures, I'm passionate about community impact and leadership development. I serve as the 2025 President of JCI Dhaka Founders, and I've worked as a Fiverr Bangladesh Community Leader. I serve as the 2025 President."
  },
  {
    logo: "/images/fiverr-logo.png",
    date: "JAN 2025 - DEC 2025",
    title: "FORMER FIVERR COMMUNITY LEADER",
    company: "FIVERR BANGLADESH",
    description: "Beyond my business ventures, I'm passionate about community impact and leadership development. I serve as the 2025 President of JCI Dhaka Founders, and I've worked as a Fiverr Bangladesh Community Leader."
  }
];

export default function Career() {
  return (
    <section className="w-full bg-[#E2E2DF] py-[180px] px-8 md:px-16 lg:px-24 flex flex-col items-center">
      <div className="max-w-[1400px] w-full flex flex-col">
        {careerData.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row justify-between items-start py-12 gap-12 reveal ${
              index !== 0 ? "border-t border-[#ABB7AA]/30" : ""
            }`}
          >
            {/* Left Content Area */}
            <div className="flex flex-col md:flex-row gap-8 items-start lg:w-[60%]">
              {/* Logo */}
              <div className="w-24 h-24 relative rounded-xl overflow-hidden bg-white shadow-sm flex-shrink-0">
                <Image
                  src={item.logo}
                  alt={item.company}
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>

              {/* Title & Company */}
              <div className="flex flex-col font-bebas">
                <span className="text-[#838C83] text-sm md:text-base tracking-normal leading-none">
                  {item.date}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#2B2B2F] leading-[0.9] mt-3 tracking-wide">
                  {item.title}
                </h3>
                <span className="text-[#838C83] text-xl md:text-[32px] tracking-normal mt-2">
                  {item.company}
                </span>
              </div>
            </div>

            {/* Right Description Area */}
            <div className="lg:w-[35%]">
              <p className="font-inter text-[#2B2B2F]/80 text-sm md:text-base leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
