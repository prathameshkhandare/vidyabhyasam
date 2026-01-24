"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    explore: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Inspiration', href: '/about/inspiration' },
      { name: 'Our Trust', href: '/about/trust' },
      { name: 'Governance', href: '/about/governance' },
    ],
    initiatives: [
      { name: 'Food', href: '/initiatives/food' },
      { name: 'Education', href: '/initiatives/education' },
      { name: 'Values', href: '/initiatives/values' },
      { name: 'CSR Applicability', href: '/csr' },
      { name: 'CSR Partners', href: '/partners' },
    ],
    connect: [
      { name: 'Become a Volunteer', href: '/volunteer' },
      { name: 'Media Presence', href: '/media' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const associatedTrusts = [
    { name: 'Akshaya Patra', href: '#' },
    { name: 'Hare Krishna Charities', href: '#' },
    { name: 'Hare Krishna Movement', href: '#' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden pt-20 pb-10 border-t-4 border-[#D4AF37]">
      {/* Decorative Corner Flourishes */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
         <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#D4AF37]">
            <path d="M0 0V50C0 22.3858 22.3858 0 50 0H0Z" fill="currentColor"/>
         </svg>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none rotate-90">
         <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#D4AF37]">
            <path d="M0 0V50C0 22.3858 22.3858 0 50 0H0Z" fill="currentColor"/>
         </svg>
      </div>

      {/* Central Glow Spot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h1/2 bg-[#D4AF37] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand & Contact */}
          <motion.div className="md:col-span-4" variants={itemVariants}>
             <div className="mb-8 group">
                <Link href="/" className="inline-block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 bg-white/5 border border-[#D4AF37]/30 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)] overflow-hidden p-2 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                       <Image 
                         src="/images/vidyabhyasam-logo.png" 
                         alt="Vidyabhyasam Logo" 
                         fill
                         className="object-contain"
                       />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-serif text-3xl font-bold leading-none tracking-tight" style={{ color: '#FACC15' }}>Vidyabhyasam</h3>
                      <p className="text-[10px] tracking-[0.25em] uppercase font-bold mt-1" style={{ color: 'white' }}>Enriching Communities</p>
                    </div>
                  </div>
                </Link>
                <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-400 to-transparent rounded-full opacity-60" />
             </div>
             
             <div className="space-y-6 text-white font-sans font-light mb-8 text-sm leading-relaxed">
               <motion.div 
                 className="flex items-start gap-3 group"
                 whileHover={{ x: 5 }}
               >
                 <div className="p-2 rounded-full bg-yellow-400/10 text-[#FACC15] group-hover:bg-yellow-400 group-hover:text-[#0F172A] transition-colors duration-300">
                    <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 </div>
                 <p className="group-hover:text-white transition-colors">
                   NBT Nagar, Road No 12, Banjara Hills,<br/>
                   Near Anti Corruption Bureau office,<br/>
                   Hyderabad - 500034
                 </p>
               </motion.div>
               <motion.div 
                 className="flex items-center gap-3 group"
                 whileHover={{ x: 5 }}
               >
                  <div className="p-2 rounded-full bg-yellow-400/10 text-[#FACC15] group-hover:bg-yellow-400 group-hover:text-[#0F172A] transition-colors duration-300">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                 <a href="mailto:connect@vidyabhyasam.org" className="hover:text-white transition-colors">connect@vidyabhyasam.org</a>
               </motion.div>
               <motion.div 
                 className="flex items-center gap-3 group"
                 whileHover={{ x: 5 }}
               >
                 <div className="p-2 rounded-full bg-yellow-400/10 text-[#FACC15] group-hover:bg-yellow-400 group-hover:text-[#0F172A] transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 </div>
                 <a href="tel:+917386898991" className="hover:text-white transition-colors">+91 73868 98991</a>
               </motion.div>
             </div>
             
             <div className="flex gap-4">
                {['Instagram', 'Facebook', 'YouTube', 'Twitter'].map(social => (
                  <motion.a 
                    key={social} 
                    href="#" 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full border border-yellow-400/40 flex items-center justify-center text-[#FACC15] hover:bg-yellow-400 hover:text-[#0F172A] hover:shadow-[0_0_15px_#FACC15] transition-all duration-300" 
                    aria-label={social}
                  >
                    <span className="text-sm font-serif">{social[0]}</span>
                  </motion.a>
                ))}
             </div>
          </motion.div>
          
          <motion.div className="md:col-span-2 md:col-start-6" variants={itemVariants}>
            <h4 className="font-serif font-bold text-lg mb-8 relative inline-block" style={{ color: '#FACC15' }}>
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-400 shadow-[0_0_10px_#FACC15]"></span>
            </h4>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link href={link.href} className="text-white hover:text-[#FACC15] transition-all duration-300 text-sm flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#FACC15] transition-all" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Initiatives */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h4 className="font-serif font-bold text-lg mb-8 relative inline-block" style={{ color: '#FACC15' }}>
              Initiatives
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-400 shadow-[0_0_10px_#FACC15]"></span>
            </h4>
            <ul className="space-y-4">
              {footerLinks.initiatives.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link href={link.href} className="text-white hover:text-[#FACC15] transition-all duration-300 text-sm flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#FACC15] transition-all" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Associated Trusts */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h4 className="font-serif font-bold text-lg mb-8 relative inline-block" style={{ color: '#FACC15' }}>
              Our Family
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-400 shadow-[0_0_10px_#FACC15]"></span>
            </h4>
            <ul className="space-y-4">
               {associatedTrusts.map(trust => (
                 <motion.li key={trust.name} whileHover={{ x: 5 }}>
                   <a href={trust.href} className="text-white hover:text-[#FACC15] transition-all duration-300 text-sm flex items-center gap-3 group">
                     <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#FACC15] transition-all" />
                     {trust.name}
                   </a>
                 </motion.li>
               ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-300 font-sans"
          variants={itemVariants}
        >
          <p className="flex items-center gap-1 hover:text-white transition-colors">
            © {new Date().getFullYear()} <span className="text-[#D4AF37] font-bold">Vidyabhyasam</span>. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#D4AF37] transition-colors relative group">
              Terms & Conditions
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors relative group">
              Refund Policy
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
