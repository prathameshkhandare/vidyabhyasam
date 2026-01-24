'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F4F1EC] pt-32 pb-16 lg:py-0">
      {/* Background Pattern - Architectural Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#2E2E33 1px, transparent 1px), linear-gradient(90deg, #2E2E33 1px, transparent 1px)', 
             backgroundSize: '100px 100px' 
           }}>
      </div>
      
      {/* Decorative Gradients - Softer */}
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-gradient-to-tr from-[#B08968]/15 to-transparent rounded-full blur-[60px] lg:blur-[100px] opacity-60" />
      <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-gradient-to-bl from-[#2F3A8F]/10 to-transparent rounded-full blur-[60px] lg:blur-[80px] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col justify-center min-h-[inherit]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mt-10 lg:mt-0">
          
          {/* Left Content - Text */}
          <div className="text-left relative z-20 order-1 lg:order-none">
             {/* Decorative Element - Circle */}
            <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.8 }}
               className="absolute top-0 -left-4 lg:-top-4 lg:-left-6 w-12 h-12 lg:w-16 lg:h-16 bg-[#B08968]/20 rounded-full blur-xl" 
            />

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4 lg:mb-6 relative z-10"
            >
              <motion.div 
                className="font-serif text-sm lg:text-lg tracking-[0.2em] font-bold relative overflow-hidden"
              >
                <span className="sr-only">Vidyabhyasam</span>
                <motion.span 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {}
                  }}
                  aria-hidden
                >
                  {"Vidyabhyasam".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      className="inline-block bg-gradient-to-r from-[#2F3A8F] via-[#B08968] to-[#2F3A8F] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent transform hover:scale-110 transition-transform cursor-default"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.div>
            </motion.div>
            
            <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl xl:text-7xl font-bold text-[#2E2E33] leading-[1.1] mb-6 tracking-tight relative z-10">
              Enriching communities with<br />
              <span className="text-[#2F3A8F] relative inline-block mt-1 lg:mt-2">
                <span className="relative z-10">
                  <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="inline-block"
                  >
                      Food
                  </motion.span>,{' '}
                  <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="inline-block"
                  >
                      Education
                  </motion.span>
                </span>
                
                <span className="text-[#B08968] font-light mx-2">&</span>
                
                <span className="relative z-10">
                   <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="inline-block"
                  >
                      Values
                  </motion.span>
                </span>
                
                {/* Underline Decoration */}
                <div className="absolute bottom-1 lg:bottom-2 left-0 w-full h-2 lg:h-3 bg-[#B08968]/20 -z-0 skew-x-12" />
              </span>
            </h1>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-base md:text-lg lg:text-xl text-[#5F6368] mb-8 lg:mb-10 leading-relaxed font-sans max-w-lg relative z-10"
            >
              Vidyabhyasam is empowering underprivileged children from rural areas by providing them with post-school free education, food and values.
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-4 lg:gap-6 items-center relative z-10"
            >
              <a 
                href="https://aikyavidya.org/donations/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-sm lg:text-lg px-6 lg:px-8 py-3 lg:py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Donate Now
              </a>
              <Link href="/about" className="group flex items-center gap-2 text-[#2F3A8F] font-bold uppercase tracking-wider text-xs lg:text-sm">
                <span className="border-b-2 border-[#2F3A8F]/30 group-hover:border-[#2F3A8F] transition-colors pb-1">Learn More</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Optimized Image Positioning */}
          <div className="relative h-full flex items-center justify-center lg:justify-end order-2 lg:order-none mt-4 lg:mt-0">
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative w-full max-w-[300px] md:max-w-md lg:max-w-md xl:max-w-lg aspect-[3.5/4] z-10"
             >
                {/* Back Frame - Soft Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B08968]/20 to-[#2F3A8F]/20 rounded-2xl transform translate-x-3 lg:translate-x-4 translate-y-3 lg:translate-y-4 z-0 blur-md" />
                
                {/* Main Image Card */}
                <div className="relative h-full w-full bg-white p-2 shadow-2xl rounded-2xl z-10 overflow-hidden">
                   <div className="relative h-full w-full rounded-xl overflow-hidden">
                      <Image 
                        src="/images/hero-bg.jpg" 
                        alt="Children learning"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1c]/80 via-transparent to-transparent opacity-90" />
                      
                      {/* Quote on Image - Simplified */}
                      <div className="absolute bottom-0 left-0 w-full p-4 lg:p-8 text-white">
                         <div className="w-8 h-1 bg-[#B08968] mb-2 lg:mb-3" />
                         <p className="font-serif text-lg lg:text-3xl italic leading-tight mb-1">"Nurturing Minds"</p>
                         <p className="text-[10px] lg:text-xs uppercase tracking-widest opacity-80 font-medium">Building Futures</p>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Down Indicator - Hidden on Mobile */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5, duration: 1 }}
         className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 z-20 hidden lg:flex"
      >
         <span className="text-[9px] uppercase tracking-[0.2em] text-[#5F6368] font-bold">Scroll</span>
         <div className="w-[1px] h-8 bg-gradient-to-b from-[#2E2E33] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
