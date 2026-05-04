import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutMe from "@/components/AboutMe";
import Career from "@/components/Career";
import CareerJourney from "@/components/CareerJourney";
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
      <Career />
      <CareerJourney />
      <ImageBanner />
      <BehindTheScene />
      <MediaAndTalks />
      <Footer />
    </main>
  );
}
