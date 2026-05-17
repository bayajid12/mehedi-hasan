"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const categories = [
  "All",
  "Events & Conferences",
  "JCI Activities",
  "Leadership Moments",
  "Team & Work",
  "Community Engagement",
  "Behind the Scenes"
];

// Mock data for gallery images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80", category: "Team & Work", aspect: "aspect-[3/4]" },
  { id: 2, src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80", category: "Leadership Moments", aspect: "aspect-[1/1]" },
  { id: 3, src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80", category: "Events & Conferences", aspect: "aspect-[4/5]" },
  { id: 4, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", category: "Community Engagement", aspect: "aspect-[16/9]" },
  { id: 5, src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80", category: "Events & Conferences", aspect: "aspect-[3/4]" },
  { id: 6, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", category: "Team & Work", aspect: "aspect-[4/3]" },
  { id: 7, src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80", category: "Behind the Scenes", aspect: "aspect-[1/1]" },
  { id: 8, src: "https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&w=800&q=80", category: "JCI Activities", aspect: "aspect-[4/5]" },
  { id: 9, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80", category: "JCI Activities", aspect: "aspect-[3/4]" },
  { id: 10, src: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=800&q=80", category: "Events & Conferences", aspect: "aspect-[1/1]" },
  { id: 11, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80", category: "Leadership Moments", aspect: "aspect-[4/3]" },
  { id: 12, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80", category: "Team & Work", aspect: "aspect-[3/4]" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="flex min-h-screen flex-col w-full bg-[#E3E3DF] text-[#2B2B2F]">
      <Navbar light={true} />

      {/* Spacer for Navbar */}
      <div className="h-24"></div>

      {/* Header Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-8 pb-10 md:pb-[120px] flex flex-col items-center">
        <div className="max-w-[1400px] w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-16">
          <h1 className="font-bebas text-6xl md:text-[80px] lg:text-[100px] leading-[0.85] text-[#111111] uppercase max-w-2xl reveal">
            MOMENTS &<br />MEMORIES
          </h1>
          <div className="lg:max-w-[450px] reveal">
            <p className="font-inter text-[15px] leading-[1.7] text-[#243752]/80">
              A visual journey through leadership, events, and meaningful connections. From boardrooms to community stages — a collection of moments that define the journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pl-6 md:px-16 lg:px-24 py-[20px] flex flex-col items-center relative md:sticky top-0 z-30 bg-[#E3E3DF]">
        <div className="max-w-[1400px] w-full flex flex-nowrap md:flex-wrap gap-[12px] overflow-x-auto scrollbar-hide pr-6 md:pr-0 reveal">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border text-[13px] md:text-[14px] font-inter whitespace-nowrap transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#111111] text-[#111111] font-medium"
                  : "border-[#111111]/30 text-[#111111]/70 hover:border-[#111111]/60 hover:text-[#111111] hover:bg-black/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-6 md:px-16 lg:px-24 pt-4 md:pt-[50px] pb-32 flex flex-col items-center min-h-[50vh]">
        <div className="max-w-[1400px] w-full">
          {filteredImages.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {filteredImages.map((img) => (
                <div 
                  key={img.id} 
                  className="break-inside-avoid w-full relative group cursor-pointer overflow-hidden rounded-[16px] shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-200"
                >
                  {/* Aspect ratio wrapper to prevent layout shift during loading */}
                  <div className={`relative w-full ${img.aspect}`}>
                    <Image
                      src={img.src}
                      alt={img.category}
                      fill
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized={true}
                    />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-bebas tracking-wider text-xl uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {img.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full py-20 flex justify-center items-center">
              <p className="font-inter text-[#243752]/60 text-lg">No moments found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
