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

const posts = Array.from({ length: 16 }, (_, i) => ({
  ...blogPosts[i % 4],
  id: i
}));

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postIndex = parseInt(slug) || 0;
  const currentPost = posts[postIndex] || posts[1]; // default to Nahid post as per screenshot

  // Mock content
  const content = `
    <p>Over the past year, one of the most meaningful parts of my journey with O has been the relationship I've built with Nahid. What started as a professional connection quickly turned into something deeper a bond built on trust, shared responsibility, and a common vision.</p>
    <p>Working together in a fast-moving environment like JCI, you get to see people in different situations under pressure, during decision-making, and while managing challenges. That's where real character shows. And in those moments, Nahid has consistently stood out. There's a certain level of understanding that develops when two people are aligned not just in goals, but in values. We didn't always need long discussions to make decisions. Many times, a simple conversation was enough to move forward with clarity.</p>
    <br/>
    <p>Throughout the year, we've worked side by side on initiatives, handled responsibilities, and navigated both smooth and difficult moments. What made the experience different was the sense of reliability knowing that there's someone you can count on, no matter the situation. Beyond the work itself, it's the mutual respect that made this connection stronger. Respect for ideas, for effort, and for the bigger purpose we were working toward. In leadership roles, it's easy to focus only on outcomes. But what truly shapes the journey are the people you work with. The right partnership doesn't just make work easier it makes it meaningful. This experience reminded me that strong teams are not built only on skills. They are built on trust, communication, and shared intention.</p>
    <br/>
    <p>As the year moves forward, I carry this connection not just as a memory, but as something that continues to inspire how I approach collaboration and leadership. Because at the end of the day, it's not just about what we achieve it's about who we build those achievements with. Over the past year, one of the most meaningful parts of my journey with JCI Dhaka Founders has been the relationship I've built with Nahid. What started as a professional connection quickly turned into something deeper a bond built on trust, shared responsibility, and a common vision. Working together in a fast-moving environment like JCI, you get to see people in different situations under pressure, during decision-making, and while managing challenges. That's where real character shows. And in those moments, Nahid has consistently stood out.</p>
    <p>There's a certain level of understanding that develops when two people are aligned not just in goals, but in values. We didn't always need long discussions to make decisions. Many times, a simple conversation was enough to move forward with clarity. Throughout the year, we've worked side by side on initiatives, handled responsibilities, and navigated both smooth and difficult moments. What made the experience different was the sense of reliability knowing that there's someone you can count on, no matter the situation.</p>
    <br/>
    <p>Beyond the work itself, it's the mutual respect that made this connection stronger. Respect for ideas, for effort, and for the bigger purpose we were working toward. In leadership roles, it's easy to focus only on outcomes. But what truly shapes the journey are the people you work with. The right partnership doesn't just make work easier it makes it meaningful. This experience reminded me that strong teams are not built only on skills. They are built on trust, communication, and shared intention.</p>
    <p>As the year moves forward, I carry this connection not just as a memory, but as something that continues to inspire how I approach collaboration and leadership. Because at the end of the day, it's not just about what we achieve it's about who we build those achievements with.</p>
  `;

  // Filter out the current post from related posts
  const relatedPosts = posts.filter(p => p.id !== postIndex).slice(0, 4);

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#E3E3DF] text-[#2B2B2F]">
      <Navbar light={true} />

      {/* Spacer for Navbar */}
      <div className="h-24 md:h-28"></div>

      <section className="px-6 md:px-16 lg:px-24 pt-4 pb-16 flex flex-col items-center">
        <div className="max-w-[1400px] w-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          
          {/* Main Article Content */}
          <div className="flex-1 lg:max-w-[850px] flex flex-col gap-8">
            
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/10] rounded-[32px] overflow-hidden bg-gray-200">
              <Image 
                src={currentPost.image} 
                alt={currentPost.title}
                fill
                className="w-full h-full object-cover"
                unoptimized={true}
              />
            </div>
            
            {/* Article Header */}
            <div className="flex flex-col gap-3 mt-2">
              <span className="font-bebas text-[#191919]/50 text-[18px] font-normal tracking-wider uppercase">
                {currentPost.category}
              </span>
              <h1 className="font-bebas text-4xl md:text-5xl lg:text-[64px] leading-[1] text-[#111111] uppercase">
                {currentPost.title}
              </h1>
            </div>

            {/* Article Body */}
            <div 
              className="font-inter text-[#243752]/80 text-[16px] leading-[1.8] flex flex-col gap-4"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            
          </div>

          {/* Right Sidebar - Related Posts */}
          <div className="w-full lg:w-[350px] xl:w-[400px] flex flex-col gap-6 shrink-0 mt-8 lg:mt-0">
            {relatedPosts.map((post) => (
              <Link href={`/blogs/${post.id}`} key={post.id} className="group">
                <div className="flex flex-col border border-[#CDD2D8] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-[#E3E3DF]">
                  {/* Card Image */}
                  <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden">
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
                    <h3 className="font-bebas text-[28px] leading-[1.1] text-[#111111] uppercase line-clamp-3">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Spacer before footer */}
      <div className="h-24"></div>

      <Footer />
    </main>
  );
}
