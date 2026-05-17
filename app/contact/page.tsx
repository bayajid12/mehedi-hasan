"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#E3E3DF] text-[#2B2B2F]">
      <Navbar light={true} />

      {/* Spacer for Navbar */}
      <div className="h-24 md:h-32"></div>

      <section className="px-6 md:px-16 lg:px-24 pt-16 pb-[200px] flex flex-col items-center">
        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          {/* Left Side: Content */}
          <div className="flex flex-col gap-8 max-w-xl reveal">
            <h1 className="font-bebas text-7xl md:text-[90px] lg:text-[110px] leading-[0.85] text-[#111111] uppercase">
              LET&apos;S<br />CONNECT
            </h1>
            
            <p className="font-inter text-[15px] leading-[1.8] text-[#111111]/80 max-w-md pt-2">
              Have an idea, a project, or just want to start a conversation? Reach out — I&apos;d be glad to hear from you. Whether you&apos;re looking to build a product, scale your business, or discuss new opportunities, every meaningful collaboration starts with a simple message.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-[50px] h-[50px] rounded-full bg-[#111111] flex items-center justify-center text-white hover:bg-[#333] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-[50px] h-[50px] rounded-full bg-[#111111] flex items-center justify-center text-white hover:bg-[#333] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="w-[50px] h-[50px] rounded-full bg-[#111111] flex items-center justify-center text-white hover:bg-[#333] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Right Side: Form */}
          <div className="w-full flex justify-end reveal">
            <div className="bg-white rounded-[24px] p-8 md:p-12 w-full max-w-[600px] shadow-sm">
              <form className="flex flex-col gap-10">
                {/* Full Name */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-[13px] font-inter text-[#111111]/70">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Michel Jhon Marx"
                    className="w-full border-b border-[#111111]/30 pb-3 text-[20px] font-inter text-[#111111] bg-transparent outline-none focus:border-[#111111] transition-colors placeholder:text-[#111111]/40"
                  />
                </div>
                
                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-[13px] font-inter text-[#111111]/70">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="yourmail@gmail.com"
                      className="w-full border-b border-[#111111]/30 pb-3 text-[20px] font-inter text-[#111111] bg-transparent outline-none focus:border-[#111111] transition-colors placeholder:text-[#111111]/40"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="phone" className="text-[13px] font-inter text-[#111111]/70">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="1122 145411100"
                      className="w-full border-b border-[#111111]/30 pb-3 text-[20px] font-inter text-[#111111] bg-transparent outline-none focus:border-[#111111] transition-colors placeholder:text-[#111111]/40"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="text-[13px] font-inter text-[#111111]/70">Message</label>
                  <input 
                    type="text" 
                    id="message" 
                    placeholder="Tell us more about your idea..."
                    className="w-full border-b border-[#111111]/30 pb-3 text-[20px] font-inter text-[#111111] bg-transparent outline-none focus:border-[#111111] transition-colors placeholder:text-[#111111]/40"
                  />
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full mt-4 bg-[#212121] text-white font-bebas tracking-widest text-[16px] py-4 rounded-[12px] hover:bg-black transition-colors"
                >
                  LET&apos;S CONNECT
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
