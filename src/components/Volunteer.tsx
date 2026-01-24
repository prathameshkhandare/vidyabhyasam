'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Volunteer = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#F4F1EC]"> {/* Light Beige Base */}
      
      {/* --- Dynamic Background: Subtle Patterns --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EC] via-white to-[#F4F1EC]" />
        
        {/* Decorative Grid Pattern (Very Subtle) */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(#2F3A8F_1px,transparent_1px),linear-gradient(90deg,#2F3A8F_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Floating Abstract Element (Top Right) */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border-[1px] border-[#2F3A8F]/5 opacity-60"
            style={{
                backgroundImage: 'repeating-conic-gradient(from 0deg, rgba(47, 58, 143, 0.02) 0deg 10deg, transparent 10deg 20deg)'
            }}
        />

        {/* Floating Abstract Element (Bottom Left) */}
        <motion.div 
            animate={{ 
                y: [0, 40, 0],
                opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-[#B08968]/5 blur-[80px]"
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16 relative z-10">
            {/* Minimalist Symbol */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-4 inline-block"
            >
               <span className="text-5xl text-[#B08968] drop-shadow-sm opacity-80 font-serif">ॐ</span>
            </motion.div>

            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif text-[#2F3A8F] mb-6 tracking-tight font-bold"
            >
                Walk With Us
            </motion.h2>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto font-light leading-relaxed font-sans"
            >
                <p>A spiritual journey of devotion and service.</p>
                <div className="mt-4 flex justify-center items-center space-x-4 text-sm md:text-base tracking-widest uppercase font-medium">
                    <span className="text-[#2F3A8F]">Connect</span>
                    <span className="text-[#B08968]">•</span>
                    <span className="text-[#2F3A8F]">Serve</span>
                    <span className="text-[#B08968]">•</span>
                    <span className="text-[#2F3A8F]">Transcend</span>
                </div>
            </motion.div>
        </div>

        {/* --- Cards Section --- */}
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
                 { 
                    title: "Become a Mentor", 
                    desc: "Share your wisdom. Guide young minds towards the light of knowledge.",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    )
                },
                { 
                    title: "Nurture Growth", 
                    desc: "Your contribution fuels our mission. Help sustain our eco-friendly campuses.",
                    icon: (
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                         </svg>
                    )
                },
                { 
                    title: "Collaborate", 
                    desc: "Join forces with us. Seeking partnerships with spiritually aligned organizations.",
                    icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    )
                }
            ].map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + (index * 0.1) }}
                    className="group"
                >
                    <div className="h-full p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1">
                        
                        {/* Icon Container */}
                        <div className="mb-6 p-4 rounded-full bg-[#F4F1EC] group-hover:bg-[#2F3A8F]/5 transition-colors duration-300">
                             <div className="text-[#2F3A8F] group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                             </div>
                        </div>

                        <h3 className="text-xl font-bold font-serif text-[#2E2E33] mb-3 group-hover:text-[#2F3A8F] transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-[#5F6368] font-sans text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* --- Footer CTA --- */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center relative z-10"
        >
             <Link 
                href="/volunteer"
                className="inline-flex items-center justify-center px-8 py-3 font-sans text-base font-semibold text-white bg-[#2F3A8F] hover:bg-[#1e255e] rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
                <span className="flex items-center gap-2">
                    Start Your Seva
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
            </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Volunteer;