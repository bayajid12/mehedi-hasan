import Image from "next/image";

export default function MediaAndTalks() {
  const basePosts = [
    {
      category: "NATIONAL CAREER CONFERENCE (NCC) 2026",
      title: "THE DISCUSSION WAS LIVELY AND BASED ON REAL INDUSTRY EXPERIEN...",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&q=80",
    },
    {
      category: "JCI DHAKA FOUNDERS",
      title: "OVER THE COURSE OF THE YEAR, THE CLOSE BOND I'VE BUILT WITH NAHID",
      image: "https://images.unsplash.com/photo-1475721025505-c310742fef06?auto=format&fit=crop&w=600&q=80",
    },
    {
      category: "AWARDS AT NATCON 2025",
      title: "THIS ACHIEVEMENT REFLECTS THE TRUE STRENGTH AND BONDING",
      image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&w=600&q=80",
    },
    {
      category: "AWARDS AT NATCON 2025",
      title: "ALL CREDIT GOES TO OUR ENERGETIC AND DEDICATED MEMBERS",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Repeat to match the 8 cards layout
  const posts = [...basePosts, ...basePosts.slice().reverse()];

  return (
    <section className="w-full bg-[#E3E3DF] py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center border-t border-gray-300/50">
      {/* Section Header */}
      <div className="flex flex-col items-center mb-16 text-center reveal">
        <span className="font-bebas text-xl md:text-2xl text-gray-500 tracking-normal mb-2">
          MEDIA & TALKS
        </span>
        <h2 className="font-bebas text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.85] text-[#2b2b2f] tracking-[-2px] uppercase">
          SPEAKING & THOUGHT LEADERSHIP
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
        {posts.map((post, index) => (
          <div 
            key={index} 
            className="flex flex-col border border-[#CDD2D8] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-[#E3E3DF]"
          >
            {/* Card Image */}
            <div className="relative w-full aspect-[4/3] bg-gray-200">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Card Content */}
            <div className="p-5 md:p-6 flex flex-col flex-grow">
              <span className="font-bebas text-[#191919]/50 text-[18px] font-normal tracking-wider uppercase mb-2 line-clamp-1">
                {post.category}
              </span>
              <h3 className="font-bebas text-[28px] leading-[1.1] text-[#111111] uppercase line-clamp-2">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
