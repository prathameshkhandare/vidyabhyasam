'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-fit lg:min-h-screen flex items-start lg:items-center overflow-hidden bg-[#F4F1EC] pt-20 lg:pt-0 pb-12 lg:py-0">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-6 xl:px-8 w-full flex flex-col justify-start xl:justify-center min-h-fit py-12 lg:py-0 lg:min-h-[calc(100vh-80px)]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:mt-0 xl:-mt-8">

          <div className="lg:col-span-7 xl:col-span-7 text-center lg:text-left relative z-20 order-2 lg:order-none flex flex-col items-center lg:items-start w-full">
            {/* Decorative Element - Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:-top-4 lg:-left-6 w-12 h-12 lg:w-16 lg:h-16 bg-[#B08968]/20 rounded-full blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6 md:mb-8 relative z-10"
            >
              <div className="font-serif text-sm md:text-base lg:text-lg tracking-[0.2em] font-bold uppercase text-[#2F3A8F]">
                Vidyabhyasam
              </div>
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2E2E33] leading-tight mb-8 tracking-tight relative z-10 w-full max-w-2xl mx-auto lg:mx-0 lg:pr-8 xl:pr-12">
              Enriching communities with{' '}
              <span className="text-[#2F3A8F] relative inline-flex whitespace-nowrap mt-2 items-center text-[0.85em]">
                <span className="relative z-10 font-bold inline">
                  Food
                </span>

                <span className="text-[#B08968] font-light mx-1.5 sm:mx-2">,</span>

                <span className="relative z-10 font-bold inline">
                  Education
                </span>

                <span className="text-[#B08968] font-light mx-1.5 sm:mx-2">&</span>

                <span className="relative z-10 font-bold inline">
                  Values
                </span>

                {/* Underline Decoration */}
                <div className="absolute bottom-0 left-0 w-full h-2 lg:h-3 bg-[#B08968]/20 -z-0 skew-x-12" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-base sm:text-lg text-[#5F6368] mb-8 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0 relative z-10"
            >
              Vidyabhyasam is empowering underprivileged children from rural areas by providing them with post-school free education, nutritious food, and enduring values.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto mt-2 relative z-10"
            >
              <a
                href="https://rzp.io/rzp/elVh3Icr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base lg:text-lg px-8 py-3.5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto text-center"
              >
                Donate Now
              </a>
              <Link href="/about" className="group flex items-center justify-center gap-2 text-[#2F3A8F] font-bold uppercase tracking-wider text-sm h-12 px-4 w-full sm:w-auto hover:text-[#B08968] transition-colors">
                <span className="border-b-2 border-transparent group-hover:border-[#B08968] transition-colors pb-1">Learn More</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:col-span-5 relative h-full flex items-center justify-center lg:justify-end order-1 lg:order-none mt-8 lg:mt-0 px-4 sm:px-8 md:px-12 lg:px-0 w-full perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-md lg:max-w-[400px] xl:max-w-[450px] aspect-[4/5] z-10 mx-auto lg:mr-0 lg:ml-auto"
            >
              {/* Decorative Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-gradient-to-tr from-[#B08968]/20 to-[#2F3A8F]/20 rounded-[3rem] rotate-3 blur-2xl z-0 hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative h-full w-full bg-white/50 backdrop-blur-sm p-2 sm:p-3 xl:p-4 shadow-xl lg:shadow-2xl rounded-[1.5rem] lg:rounded-[2rem] z-10 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                <div className="relative h-full w-full rounded-[1.2rem] lg:rounded-[1.5rem] overflow-hidden shadow-inner">
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Children learning"
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-110"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1c]/90 via-black/20 to-transparent" />

                  {/* Elegant Quote */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 xl:p-10 text-white">
                    <div className="w-12 h-1 bg-[#B08968] mb-4 rounded-full" />
                    <p className="font-serif text-2xl md:text-3xl xl:text-4xl italic leading-tight mb-2 drop-shadow-lg">"Nurturing Minds"</p>
                    <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold text-white/90">Building Futures</p>
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
