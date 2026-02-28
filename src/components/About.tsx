import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Label with Lotus */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#B08968]" />
          <div className="text-[#B08968] opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C12 2 14 6 14 9C14 12 12 14 12 14C12 14 10 12 10 9C10 6 12 2 12 2Z" />
              <path d="M12 14C12 14 15 12 17 11C19 10 21 11 21 11C21 11 19 14 16 16C13 18 12 20 12 20C12 20 11 18 8 16C5 14 3 11 3 11C3 11 5 10 7 11C9 12 12 14 12 14Z" />
              <path d="M12 22C12 22 17 20 20 16C23 12 22 9 22 9C22 9 18 11 15 14L12 18L9 14C6 11 2 9 2 9C2 9 1 12 4 16C7 20 12 22 12 22Z" opacity="0.5" />
            </svg>
          </div>
          <span className="text-[#B08968] text-sm font-medium tracking-[0.2em] uppercase">
            Our Mission
          </span>
          <div className="text-[#B08968] opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C12 2 14 6 14 9C14 12 12 14 12 14C12 14 10 12 10 9C10 6 12 2 12 2Z" />
              <path d="M12 14C12 14 15 12 17 11C19 10 21 11 21 11C21 11 19 14 16 16C13 18 12 20 12 20C12 20 11 18 8 16C5 14 3 11 3 11C3 11 5 10 7 11C9 12 12 14 12 14Z" />
              <path d="M12 22C12 22 17 20 20 16C23 12 22 9 22 9C22 9 18 11 15 14L12 18L9 14C6 11 2 9 2 9C2 9 1 12 4 16C7 20 12 22 12 22Z" opacity="0.5" />
            </svg>
          </div>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#B08968]" />
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#2E2E33] mb-10 leading-tight">
          Empowering <span className="italic text-[#2F3A8F]">Lives</span>, Building <span className="italic text-[#3A7F7A]">Futures</span>
        </h2>

        <div className="prose prose-lg mx-auto text-[#374151] font-serif leading-loose text-xl md:text-2xl">
          <p>
            "VIDYABHYASAM is empowering underprivileged children from rural areas by providing them with post school assistance with homework, nutritious satvik sanctified food and values. It is our endeavour to provide the anchor in the lives of children. Helping them latch on to the right purpose of their lives, understand it, and receive education not as an unavoidable rote but as an essential foundation for life and thus sail the currents of life admirably and responsibly."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
