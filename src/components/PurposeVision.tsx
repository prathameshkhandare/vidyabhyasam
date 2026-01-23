import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import targetIcon from '@/assets/images/vision-icon-target.png';

const PurposeVision = () => {
  return (
    <section className="relative py-28 bg-[#ECE8E1] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#2F3A8F]/5 to-transparent rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3A7F7A]/5 to-transparent rounded-full blur-3xl opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Purpose Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="w-8 h-px bg-[#B08968]" />
               <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
                 Our Purpose
               </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2E2E33] mb-8 leading-tight">
              Shaping <span className="italic text-[#2F3A8F]">Comprehensive</span> Knowledge & <span className="italic text-[#3A7F7A]">Character</span>
            </h2>
            
            <div className="text-[#374151] leading-relaxed space-y-6 font-serif text-lg">
              <p>
                The purpose of education is to develop comprehensive knowledge and a well-balanced outlook on life. 
              </p>
              <p>
                VIDYABHYASAM is an integrative post-school educational program designed to put together knowledge-based and value-based teaching to shape young impressionable minds to grow as all-rounded individuals of intellect holistically and support the system in creating well-balanced citizens of India.
              </p>
            </div>
            
            <div className="mt-10 p-6 bg-white/60 border-l-4 border-[#2F3A8F] rounded-r-lg">
               <h3 className="font-serif text-xl text-[#2F3A8F] mb-2 font-medium">Our Mission</h3>
               <p className="text-[#4A4A4F] italic">
                 "A commitment to a strong nation by ensuring Food, Education & Values to underprivileged children."
               </p>
            </div>
          </div>
          
          {/* Goal & Visuals */}
          <div className="relative">
             <div className="relative z-10 bg-white p-10 rounded-2xl shadow-xl border border-[#B08968]/20 text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <Image 
                    src={targetIcon}
                    alt="Target 2030"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2E2E33] mb-2">Our Vision 2030</h3>
                <div className="w-16 h-px bg-[#B08968] mx-auto my-6" />
                <p className="text-xl text-[#374151] mb-8 font-light">
                  To reach <strong className="text-[#2F3A8F] font-semibold">1000 villages</strong> by the year 2030.
                </p>
                
                <Link 
                   href="/donations" 
                   className="inline-block px-8 py-3 bg-[#2F3A8F] text-white rounded-full font-medium hover:bg-[#252d6e] transition-colors shadow-lg hover:shadow-xl"
                >
                  Help Us Reach This Goal
                </Link>
             </div>
             
             {/* Decorative Elements behind card */}
             <div className="absolute top-4 -right-4 w-full h-full border-2 border-[#2F3A8F]/10 rounded-2xl -z-0" />
             <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#B08968]/10 rounded-2xl -z-0" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PurposeVision;
