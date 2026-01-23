import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-px bg-[#B08968]" />
          <span className="text-[#B08968] text-sm font-medium tracking-[0.2em] uppercase">
            Our Mission
          </span>
          <div className="w-12 h-px bg-[#B08968]" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#2E2E33] mb-10 leading-tight">
          Empowering <span className="italic text-[#2F3A8F]">Lives</span>, Building <span className="italic text-[#3A7F7A]">Futures</span>
        </h2>
        
        <div className="prose prose-lg mx-auto text-[#374151] font-serif leading-loose text-xl md:text-2xl">
          <p>
            "VIDYABHYASAM is empowering underprivileged children from rural areas by providing them with post-school free education, food and values. It is our endeavour to provide the anchor in the lives of children. Helping them latch on to the right purpose of their lives, understand it, and receive education not as an unavoidable rote but as an essential foundation for life and thus sail the currents of life admirably and responsibly."
          </p>
        </div>
        
        <div className="mt-12 flex justify-center">
           <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-[#2F3A8F] font-medium hover:gap-4 transition-all duration-300"
            >
              <span className="border-b border-[#2F3A8F]">Read more about our vision</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
