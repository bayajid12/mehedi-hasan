import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    category: "NATIONAL CAREER CONFERENCE (NCC) 2026",
    title: "THE DISCUSSION WAS LIVELY AND BASED ON REAL INDUSTRY EXPERIEN...",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "JCI DHAKA FOUNDERS",
    title: "OVER THE COURSE OF THE YEAR, THE CLOSE BOND I'VE BUILT WITH NAHID",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
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

// Replicating to match the 16 cards layout from the screenshot
const posts = Array.from({ length: 16 }, (_, i) => ({
  ...blogPosts[i % 4],
  id: i
}));

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#E3E3DF] text-[#2B2B2F]">
      <Navbar light={true} />

      {/* Spacer for Navbar */}
      <div className="h-32"></div>

      {/* Blog Header Section */}
      <section className="px-6 md:px-16 lg:px-24 py-16 flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 reveal">
            <h1 className="font-bebas text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.85] max-w-4xl uppercase">
              INSIGHTS ON TECHNOLOGY, BUSINESS & GROWTH
            </h1>
            <div className="lg:max-w-md pb-2">
              <p className="font-inter text-[16px] leading-relaxed text-[#243752]/80">
                Thoughts, lessons, and real-world experiences from over 20 years in software development, leadership, and building businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="border-t border-[#ABB7AA]/30"></div>
      </div>

      {/* Blog Grid Section */}
      <section className="px-6 md:px-16 lg:px-24 py-24 flex flex-col items-center">
        <div className="max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {posts.map((post, index) => (
            <Link href={`/blogs/${post.id}`} key={index}>
              <div 
                className="flex flex-col border border-[#CDD2D8] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-[#E3E3DF] group h-full"
              >
                {/* Card Image */}
                <div className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized={true}
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
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
