"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    explore: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Inspiration', href: '/about/inspiration' },
      { name: 'Leadership', href: '/about/leadership' },
      // { name: 'Our Trust', href: '/about/trust' },
      // { name: 'Governance', href: '/about/governance' },
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
    <footer id="footer" className="relative bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden pt-20 pb-10 border-t-4 border-[#D4AF37] rounded-none">
      {/* Decorative Corner Flourishes - REMOVED for sharp aesthetic */}

      {/* Central Glow Spot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h1/2 bg-[#D4AF37] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>

      <motion.div
        className="relative max-w-7xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand & Contact */}
          <motion.div className="sm:col-span-2 lg:col-span-4" variants={itemVariants}>
            <div className="mb-6 group">
              <Link href="/" className="inline-block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white/5 border border-[#D4AF37]/30 rounded-none flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)] overflow-hidden p-2 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 flex-shrink-0">
                    <Image
                      src="/images/vidyabhyasam-logo.png"
                      alt="Vidyabhyasam Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-none tracking-tight italic" style={{ color: '#FACC15' }}>Vidyabhyasam</h3>
                    <p className="font-serif text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold mt-1 italic" style={{ color: 'white' }}>Educating. Culturing. Nourishing.</p>
                  </div>
                </div>
              </Link>
              <div className="h-0.5 w-20 sm:w-24 bg-gradient-to-r from-yellow-400 to-transparent opacity-60" />
            </div>

            <div className="space-y-4 sm:space-y-6 text-white font-serif font-light mb-6 sm:mb-8 text-sm leading-relaxed">
              <motion.div
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 border border-[#FACC15]/30 text-[#FACC15] group-hover:bg-yellow-400 group-hover:text-[#0F172A] transition-colors duration-300 flex-shrink-0">
                  <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <p className="group-hover:text-white transition-colors text-sm">
                  Head office: #63, 1st Seaward Road Valmiki Nagar Thiruvanmiyur Chennai
                </p>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 border border-[#FACC15]/30 text-[#FACC15] group-hover:bg-yellow-400 group-hover:text-[#0F172A] transition-colors duration-300 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <a href="mailto:connect@vidyabhyasam.org" className="hover:text-white transition-colors text-sm break-all">bkrd@hkmchennai.org</a>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 border border-[#FACC15]/30 text-[#FACC15] group-hover:bg-yellow-400 group-hover:text-[#0F172A] transition-colors duration-300 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <a href="tel:+917386898991" className="hover:text-white transition-colors text-sm">+91-9790972034</a>
              </motion.div>
            </div>

            <div className="flex gap-4 sm:gap-6 flex-wrap">
              {/* Social Icons with SVGs */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center text-[#FACC15] hover:text-[#D4AF37] hover:drop-shadow-[0_0_8px_#FACC15] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.011-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center text-[#FACC15] hover:text-[#D4AF37] hover:drop-shadow-[0_0_8px_#FACC15] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center text-[#FACC15] hover:text-[#D4AF37] hover:drop-shadow-[0_0_8px_#FACC15] transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center text-[#FACC15] hover:text-[#D4AF37] hover:drop-shadow-[0_0_8px_#FACC15] transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="lg:col-span-2 lg:col-start-6" variants={itemVariants}>
            <h4 className="font-serif font-bold text-base sm:text-lg mb-4 sm:mb-6 relative inline-block" style={{ color: '#FACC15' }}>
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-400 shadow-[0_0_10px_#FACC15]"></span>
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.explore.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link href={link.href} className="text-white hover:text-[#FACC15] transition-all duration-300 text-sm flex items-center gap-2 sm:gap-3 group">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-none opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#FACC15] transition-all flex-shrink-0" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Initiatives */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h4 className="font-serif font-bold text-base sm:text-lg mb-4 sm:mb-6 relative inline-block" style={{ color: '#FACC15' }}>
              Initiatives
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-400 shadow-[0_0_10px_#FACC15]"></span>
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.initiatives.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link href={link.href} className="text-white hover:text-[#FACC15] transition-all duration-300 text-sm flex items-center gap-2 sm:gap-3 group">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-none opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#FACC15] transition-all flex-shrink-0" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Associated Trusts */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h4 className="font-serif font-bold text-base sm:text-lg mb-4 sm:mb-6 relative inline-block" style={{ color: '#FACC15' }}>
              Our Family
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-400 shadow-[0_0_10px_#FACC15]"></span>
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {associatedTrusts.map(trust => (
                <motion.li key={trust.name} whileHover={{ x: 5 }}>
                  <a href={trust.href} className="text-white hover:text-[#FACC15] transition-all duration-300 text-sm flex items-center gap-2 sm:gap-3 group">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-none opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#FACC15] transition-all flex-shrink-0" />
                    {trust.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-700/50 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-300 font-serif"
          variants={itemVariants}
        >
          <p className="flex items-center gap-1 hover:text-white transition-colors text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-[#D4AF37] font-bold">Vidyabhyasam</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
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
