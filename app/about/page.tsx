import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const introGallery = [
  {
    image: "/images/Custom Software Development.jpg",
    caption: "CUSTOM SOFTWARE DEVELOPMENT",
  },
  {
    image: "/images/Startup Technology Consulting.jpg",
    caption: "STARTUP TECHNOLOGY CONSULTING",
  },
  {
    image: "/images/Digital Transformation.png",
    caption: "DIGITAL TRANSFORMATION",
  },
  {
    image: "/images/Startup Technology Consulting.jpg",
    caption: "STARTUP TECHNOLOGY CONSULTING",
  },
];

const timelineData = [
  {
    date: "NOV 2013 - FEB 2016",
    title: "GENERAL MANAGER",
    company: "WRISTBANDS HOUSE BANGLADESH",
    logo: "/images/Wristbands House Bangladesh.png",
  },
  {
    date: "AUG 2011 - OCT 2013",
    title: "DEPUTY MANAGER (SOFTWARE)",
    company: "BOSHUNDHARA GROUP",
    logo: "/images/Boshundhara Group.png",
  },
  {
    date: "MARCH 2010 - OCTOBER 2013",
    title: "CEO & CHAIRPERSON",
    company: "BD WEB SOLUTION",
    logo: "/images/BD WEB Solution.png",
  },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#E3E3DF] text-[#2B2B2F]">
      <Navbar light={true} />

      {/* Spacer for Navbar */}
      <div className="h-32"></div>

      {/* Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 py-24 flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          <div className="flex flex-col lg:flex-row justify-between gap-12 items-start text-left">
            <h1 className="font-bebas text-6xl md:text-8xl lg:text-[6.5rem] leading-[0.85] max-w-3xl reveal">
              BUILDING TECHNOLOGY THAT TRANSFORMS BUSINESSES
            </h1>
            <div className="lg:w-[40%] reveal">
              <p className="font-inter text-[16px] leading-relaxed text-[#243752]">
                With over two decades in the software industry, S M Mehedi Hasan has been at the forefront of technology innovation in Bangladesh and beyond. As Managing Director of Coder71 Ltd, he has led the delivery of 500+ software projects for clients spanning four continents. His journey from a passionate developer to a technology entrepreneur reflects a deep commitment to quality, innovation, and community. As the 2025 President of JCI Dhaka Founders, he continues to inspire the next generation of tech leaders.
              </p>
            </div>
          </div>

          {/* Intro Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24 reveal">
            {introGallery.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-6 text-center">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 group cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized={true}
                  />
                </div>
                <p className="font-bebas text-2xl md:text-3xl tracking-tight leading-none">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="border-t border-[#ABB7AA]/30"></div>
      </div>

      {/* Professional Journey Section */}
      <section className="px-6 md:px-16 lg:px-24 py-32 flex flex-col items-center">
        <div className="max-w-[1400px] w-full flex flex-col lg:flex-row justify-between gap-12 items-start text-left">
          <h2 className="font-bebas text-6xl md:text-8xl reveal">
            PROFESSIONAL JOURNEY
          </h2>
          <div className="lg:w-[40%] reveal">
            <p className="font-inter text-[16px] leading-relaxed text-[#243752]">
              His career spans more than 20 years of hands-on experience in software development, business leadership, and community building. As the Managing Director of Coder71 Ltd, he has led teams to deliver hundreds of successful projects across multiple industries, working with clients both locally and globally. Beyond business, his leadership extends into communities — where he has played key roles in mentoring, guiding, and building networks for future entrepreneurs and developers.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="border-t border-[#ABB7AA]/30"></div>
      </div>

      {/* Leadership & Impact Section */}
      <section className="px-6 md:px-16 lg:px-24 py-32 flex flex-col items-center">
        <div className="max-w-[1400px] w-full flex flex-col lg:flex-row justify-between gap-12 items-start">
          <h2 className="font-bebas text-6xl md:text-8xl reveal">
            LEADERSHIP & IMPACT
          </h2>

          {/* Timeline */}
          <div className="lg:w-[50%] flex flex-col gap-16 relative reveal">
            {/* Vertical Line */}
            <div className="absolute left-[calc(100%-48px)] top-4 bottom-4 w-px bg-[#ABB7AA]/30 hidden md:block"></div>

            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start justify-start md:justify-end gap-6 text-left md:text-right relative w-full">
                {/* Text Content */}
                <div className="flex flex-col items-start md:items-end order-2 md:order-1 flex-grow md:flex-grow-0">
                  <span className="text-[#262628]/50 text-[16px] font-bebas tracking-wide">
                    {item.date}
                  </span>
                  <h3 className="font-bebas text-3xl md:text-5xl text-[#2B2B2F] leading-none mt-1">
                    {item.title}
                  </h3>
                  <p className="font-bebas text-[24px] text-[#262628] mt-1">
                    {item.company}
                  </p>
                </div>
                
                {/* Logo with Indicator */}
                <div className="relative flex-shrink-0 order-1 md:order-2 z-10">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl flex items-center justify-center border border-[#ABB7AA]/20 overflow-hidden">
                    <Image
                      src={item.logo}
                      alt={item.company}
                      fill
                      className="object-cover"
                      unoptimized={true}
                    />
                  </div>
                  {/* Circle indicator on the line */}
                  <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#838C83] border-4 border-[#E2E2DF] hidden md:block translate-x-[48px]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="border-t border-[#ABB7AA]/30"></div>
      </div>

      {/* Philosophy Section */}
      <section className="px-6 md:px-16 lg:px-24 py-32 flex flex-col items-center">
        <div className="max-w-[1400px] w-full flex flex-col lg:flex-row justify-between gap-12 items-start text-left">
          <h2 className="font-bebas text-6xl md:text-8xl reveal">
            PHILOSOPHY
          </h2>
          <div className="lg:w-[40%] reveal">
            <p className="font-inter text-[16px] leading-relaxed text-[#243752]">
              His approach is simple: Technology should be practical. Solutions should be scalable. And leadership should create opportunities for others. He focuses on building long-term value — not just short-term results.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
