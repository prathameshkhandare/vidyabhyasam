'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Centers Data
const activeCenters = [
  'Kottivakkam', 'Chinna Neelankarai', 'Murugamangalam', 'Venkatamangalam',
  'Morai (Avadi)', 'Perungalathur', 'Nallambakkam', 'Palnankuppam'
];

const pipelineCommunities = [
  'Burma Colony', 'Kovalam', 'Athiyoor', 'Palavakkam',
  'Somanayakanpatti', 'Mallapalli', 'Uthandi', 'Pandrapalli',
  'Natrampalli', 'Nainarkuppam', 'Sunnambu Kuttai', 'Veerapalli'
];

const Counter = ({ from, to, duration, suffix = '' }: { from: number; to: number; duration: number, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * (to - from) + from));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

const Impact = () => {
  return (
    <section className="relative py-28 bg-[#ECE8E1] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#B08968]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#B08968]" />
            <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">Our Impact</span>
            <div className="w-8 h-px bg-[#B08968]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33] mb-6"
          >
            Transforming <span className="italic text-[#8B9B7E]">Communities</span>
          </motion.h2>
        </div>

        {/* Hero Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {[
            { value: 92, suffix: '+', label: 'Students Enrolled', sub: 'In classes 1-8', color: '#2F3A8F' },
            { value: 9, suffix: '', label: 'Trained Educators', sub: 'From local communities', color: '#B08968' },
            { value: 8, suffix: '', label: 'Active Home Centers', sub: 'Across Chennai', color: '#8B9B7E' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center border border-white shadow-xl shadow-black/5"
            >
              <div className="font-serif text-5xl md:text-6xl font-extrabold mb-3 tracking-tight" style={{ color: stat.color }}>
                <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
              </div>
              <h3 className="text-[#2E2E33] font-bold text-lg uppercase tracking-wider mb-2">{stat.label}</h3>
              <p className="text-[#5F6368] text-sm font-light">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Footprint Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="font-serif text-3xl md:text-4xl font-light text-[#2E2E33]">Current <span className="font-bold italic text-[#B08968]">Footprint</span></h3>
            <p className="text-[#5F6368] max-w-2xl mx-auto font-light leading-relaxed mt-4">Providing a safe, familiar, and trusted environment across our community home centers.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
            {activeCenters.map((center, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 md:p-8 rounded-2xl border-l-4 border-[#B08968] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-xs font-semibold text-[#8B9B7E] uppercase tracking-wider mb-3">Community Home Center</p>
                <h4 className="font-serif text-xl md:text-2xl text-[#2E2E33] font-bold leading-tight break-words">{center}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pipeline Section */}
        <div className="bg-[#2E2E33] rounded-3xl p-10 md:p-14 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B08968]/20 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-10 text-center lg:text-left">Expanding <span className="font-bold italic text-[#B08968]">Our Reach</span></h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
              {pipelineCommunities.map((community, i) => (
                <div key={i} className="flex items-center gap-3 text-[#F4F1EC]/90 hover:text-white transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#B08968] shadow-[0_0_10px_rgba(176,137,104,0.5)]" />
                  <span className="font-serif text-lg md:text-xl font-medium tracking-wide break-words">{community}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision 2026 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#8B9B7E] to-[#6A7A5D] rounded-2xl p-10 text-center text-white shadow-xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Looking Ahead
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-medium mb-4 leading-tight">
              Vision 2026
            </h3>
            <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed">
              Expanding our horizon to <span className="font-bold text-white">108 villages</span>,
              reaching <span className="font-bold text-white">1000+ children</span>,
              and empowering <span className="font-bold text-white">108 educators</span>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Impact;
