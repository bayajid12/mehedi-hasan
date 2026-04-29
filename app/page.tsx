import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutMe from "@/components/AboutMe";
import ImageBanner from "@/components/ImageBanner";
import BehindTheScene from "@/components/BehindTheScene";
import MediaAndTalks from "@/components/MediaAndTalks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <Hero />
      <Stats />
      <AboutMe />
      <ImageBanner />
      <BehindTheScene />
      <MediaAndTalks />
      <Footer />
    </main>
  );
}
