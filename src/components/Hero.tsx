'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Simple Elegant Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EC] via-[#EDE9E3] to-[#E5E0D8]" />
      </div>
      
      {/* Decorative Rotating Spiral/Circles - Increased Visibility & Animation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] opacity-[0.15]" // Increased opacity
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#2F3A8F" strokeWidth="0.3" strokeDasharray="4 4" /> {/* Outer dashed */}
          <circle cx="100" cy="100" r="80" fill="none" stroke="#2F3A8F" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#2F3A8F" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#2F3A8F" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="20" fill="none" stroke="#2F3A8F" strokeWidth="0.5" />
          {/* Spiral-like accents */}
          <path d="M100,100 m-70,0 a70,70 0 1,0 140,0 a70,70 0 1,0 -140,0" fill="none" stroke="#B08968" strokeWidth="0.2" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Counter-rotating Element for depth */}
       <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] opacity-[0.1]"
      >
         <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="70" fill="none" stroke="#3A7F7A" strokeWidth="0.4" strokeDasharray="8 8" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#3A7F7A" strokeWidth="0.4" />
        </svg>
      </motion.div>
      
      {/* Decorative Lines - Consistent with Theme */}
      <div className="absolute left-0 top-1/3 w-32 h-px bg-gradient-to-r from-transparent via-[#2F3A8F]/30 to-transparent" />
      <div className="absolute right-0 top-2/3 w-32 h-px bg-gradient-to-r from-transparent via-[#3A7F7A]/30 to-transparent" />
      
      {/* Floating Decorative Elements - Glowing Orbs */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-20 w-3 h-3 bg-[#B08968] rounded-full blur-[2px]" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-32 w-4 h-4 bg-[#2F3A8F] rounded-full blur-[2px]" 
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Decorative Pre-title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#B08968]" />
          <span className="text-[#B08968] text-sm tracking-[0.3em] uppercase font-medium">
            An Initiative for Meaningful Education
          </span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#B08968]" />
        </motion.div>
        
        {/* Main Headline */}
        <div className="mb-8">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-[#2E2E33] leading-[1.1] tracking-tight">
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
            >
                Nurturing
            </motion.span>{' '}
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="italic text-[#2F3A8F] inline-block"
            >
                Minds
            </motion.span>,
            <br />
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block"
            >
                Cultivating
            </motion.span>{' '}
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="italic text-[#3A7F7A] inline-block"
            >
                Values
            </motion.span>
            </h1>
        </div>
        
        {/* Elegant Divider */}
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-[#2E2E33]/30" />
          <div className="w-2 h-2 rotate-45 border border-[#B08968]/60" />
          <div className="w-8 h-px bg-[#2E2E33]/30" />
        </motion.div>
        
        {/* Subtitle */}
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-[#4A4A4F] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Vidyabhyasam is a thoughtful initiative dedicated to fostering 
          <span className="text-[#2E2E33] font-medium"> holistic education </span>
          and 
          <span className="text-[#2E2E33] font-medium"> timeless values </span>
          for meaningful living.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            href="#about"
            className="group relative px-10 py-4 bg-[#2F3A8F] text-white text-sm font-medium tracking-wide rounded-full overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#2F3A8F]/25 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Vidyabhyasam
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#252d6e] to-[#2F3A8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          
          <Link 
            href="/about"
            className="group px-10 py-4 text-[#2E2E33] text-sm font-medium tracking-wide border-2 border-[#2E2E33]/25 rounded-full hover:border-[#2F3A8F] hover:text-[#2F3A8F] transition-all duration-300 hover:-translate-y-0.5"
          >
            Learn Our Story
          </Link>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#5F6368] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#5F6368] to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
