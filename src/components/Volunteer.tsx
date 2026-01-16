'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Volunteer = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0A0F29]"> {/* Deep Cosmic Blue Base */}
      
      {/* --- Dynamic Background: Deep Space & 3D Spheres --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#0A0F29]" />
        
        {/* Deep Atmospheric Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1B4B]/50 via-[#0A0F29] to-[#000]" />

        {/* 3D Floating Sphere 1 (Large, Top Left) */}
        <motion.div 
            animate={{ 
                y: [0, -30, 0],
                rotate: [0, 10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-80"
            style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(165,180,252,0.4) 40%, rgba(79,70,229,0.1) 100%)',
                boxShadow: '0 0 60px rgba(165, 180, 252, 0.2)'
            }}
        />
        
        {/* 3D Floating Sphere 2 (Medium, Center Right) */}
        <motion.div 
            animate={{ 
                y: [0, 40, 0],
                x: [0, -20, 0]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 -right-10 w-64 h-64 rounded-full opacity-60"
            style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(216, 180, 254, 0.4) 40%, rgba(147, 51, 234, 0.1) 100%)',
                boxShadow: '0 0 50px rgba(216, 180, 254, 0.2)'
            }}
        />

        {/* 3D Floating Sphere 3 (Small, Bottom Left) */}
        <motion.div 
            animate={{ 
                y: [0, -50, 0],
                x: [0, 30, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-10 w-48 h-48 rounded-full opacity-50"
            style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(147, 197, 253, 0.4) 40%, rgba(59, 130, 246, 0.1) 100%)',
                 boxShadow: '0 0 40px rgba(147, 197, 253, 0.2)'
            }}
        />
        
        {/* 3D Floating Sphere 4 (Tiny, Floating around) */}
        <motion.div 
             animate={{ 
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-1/3 w-12 h-12 rounded-full opacity-40 blur-[2px]"
            style={{
                background: 'radial-gradient(circle at 30% 30%, #fff 0%, #cbd5e1 100%)'
            }}
        />
        
         {/* Grid Pattern Overlay for Depth */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20 relative z-10">
            {/* Glowing Sanskrit/Symbol */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-8 inline-block relative"
            >
               <div className="absolute inset-0 bg-cyan-500 blur-[60px] opacity-40 rounded-full"></div>
               <span className="relative text-7xl text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] filter brightness-125">ॐ</span>
            </motion.div>

            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl !font-sans font-extrabold !text-white mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] tracking-tight"
                style={{ color: 'white', fontFamily: 'sans-serif' }}
            >
                Walk With Us
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl !text-white max-w-3xl mx-auto font-light tracking-wide leading-relaxed drop-shadow-md"
                style={{ color: 'white' }}
            >
                A spiritual journey in the digital age. 
                <span className="mx-2 font-bold !text-cyan-200 drop-shadow-[0_0_15px_rgba(165,243,252,0.6)]" style={{ color: '#A5F3FC' }}>Connect</span> &bull; 
                <span className="mx-2 font-bold !text-cyan-200 drop-shadow-[0_0_15px_rgba(165,243,252,0.6)]" style={{ color: '#A5F3FC' }}>Serve</span> &bull; 
                <span className="mx-2 font-bold !text-cyan-200 drop-shadow-[0_0_15px_rgba(165,243,252,0.6)]" style={{ color: '#A5F3FC' }}>Transcend</span>
            </motion.p>
        </div>

        {/* --- Glass Cards Section --- */}
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
                 { 
                    title: "Become a Mentor", 
                    desc: "Share your wisdom and time. Guide young minds towards inner light and knowledge.",
                    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                },
                { 
                    title: "Nurture Our Growth", 
                    desc: "Your contribution fuels our mission. Sustain our eco-friendly campuses and resources.",
                    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                },
                { 
                    title: "Collaborate for Change", 
                    desc: "Join forces with us. We seek partnerships with aligned organizations.",
                    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                }
            ].map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="group relative h-full"
                >
                    {/* Glass Card */}
                    <div className="h-full p-8 rounded-3xl bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-2xl border border-white/20 hover:border-cyan-400/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-500 overflow-hidden text-center flex flex-col items-center group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                        
                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        
                        {/* Icon */}
                        <div className="relative mb-6 p-4 rounded-2xl bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                             <svg className="w-10 h-10 text-cyan-200 group-hover:text-cyan-50 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                            </svg>
                        </div>

                        {/* Text */}
                        <h3 className="relative text-2xl font-bold !text-white mb-3 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ color: 'white' }}>
                            {item.title}
                        </h3>
                        <p className="relative !text-blue-50/90 font-medium leading-relaxed drop-shadow-md" style={{ color: '#EFF6FF' }}>
                            {item.desc}
                        </p>

                        {/* Interactive Line */}
                        <div className="relative mt-8 w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full group-hover:w-32 group-hover:brightness-150 transition-all duration-300" />
                    </div>
                </motion.div>
            ))}
        </div>

        {/* --- Footer CTA --- */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center relative z-10"
        >
             <Link 
                href="/volunteer"
                className="relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-medium text-white transition-all duration-300 bg-white/5 rounded-full group hover:bg-white/10 backdrop-blur-sm border border-white/20"
            >
                {/* Button GlowBG */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
                
                <span className="relative flex items-center gap-3">
                    Start Your Path
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
            </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Volunteer;