export default function AboutMe() {
  const cards = [
    {
      title: "CUSTOM SOFTWARE DEVELOPMENT",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "DIGITAL TRANSFORMATION",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "STARTUP TECHNOLOGY CONSULTING",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "COMMUNITY LEADERSHIP",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="w-full bg-black py-[180px] px-8 md:px-16 lg:px-24 flex flex-col items-center">
      <div className="max-w-[1400px] w-full flex flex-col gap-16">
        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 reveal">
          {/* Left Title Area */}
          <div className="flex flex-col max-w-2xl">
            <span className="font-bebas text-xl md:text-2xl text-[#ABB7AA]/50 tracking-normal mb-2">
              ABOUT ME
            </span>
            <h2 className="font-bebas text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.85] text-sage tracking-wide uppercase">
              Building Technology<br />
              That Transforms<br />
              Businesses
            </h2>
          </div>

          {/* Right Description Area */}
          <div className="max-w-xl pb-2">
            <p className="font-inter text-[#ABB7AA]/90 text-sm md:text-base leading-relaxed font-light">
              With over two decades in the software industry, S M Mehedi Hasan has been at the forefront of technology innovation in Bangladesh and beyond. As Managing Director of Coder71 Ltd, he has led the delivery of 500+ software projects for clients spanning four continents. His journey from a passionate developer to a technology entrepreneur reflects a deep commitment to quality, innovation, and community. As the 2025 President of JCI Dhaka Founders, he continues to inspire the next generation of tech leaders.
            </p>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full reveal">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col gap-4 group cursor-pointer">
              {/* Image Container with Hover Effect */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative bg-gray-900 border border-gray-800">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              {/* Card Title */}
              <div className="text-center">
                <h3 className="font-bebas text-xl md:text-2xl tracking-wide text-[#ABB7AA] group-hover:text-white transition-colors duration-300">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
