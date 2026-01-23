'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Classic Icon Imports
import centerIcon from '@/assets/images/impact-icon-centers.png';
import childrenIcon from '@/assets/images/impact-icon-children.png';
import villageIcon from '@/assets/images/impact-icon-villages.png';
import stateIcon from '@/assets/images/impact-icon-states.png';

const impactItems = [
  {
    metric: 70,
    suffix: '',
    label: 'CENTERS',
    description: 'Operational across multiple locations',
    image: centerIcon,
  },
  {
    metric: 1600,
    suffix: '+',
    label: 'CHILDREN',
    description: 'Nurtured with food, education & values',
    image: childrenIcon,
  },
  {
    metric: 1000,
    suffix: '',
    label: 'VILLAGES',
    description: 'Goal to reach by the year 2030',
    image: villageIcon,
  },
  {
    metric: 3,
    suffix: '',
    label: 'STATES',
    description: 'Telangana, Andhra Pradesh & more',
    image: stateIcon,
  },
];

const Counter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
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

  return <span ref={nodeRef}>{count}</span>;
}

const Impact = () => {
  return (
    <section className="relative py-28 bg-[#ECE8E1] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#B08968]/30 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#B08968]" />
            <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
              Our Reach
            </span>
            <div className="w-8 h-px bg-[#B08968]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33] mb-6"
          >
            A <span className="italic text-[#2F3A8F]">Resonating Impact</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#5F6368] max-w-3xl mx-auto text-lg leading-relaxed"
          >
            VIDYABHYASAM is currently operational across 70 centres nurturing 1600+ children. Farther away, the program has entered the lives of Chenchu tribes of the Nallamalla forests and slums of Hyderabad and many villages in Telangana and Andhra Pradesh.
          </motion.p>
        </div>
        
        {/* Impact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              className="group text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
            >
              {/* Icon */}
              <div className="relative w-16 h-16 mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={item.image} 
                  alt={item.label}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Metric */}
              <div className="font-serif text-4xl md:text-5xl font-semibold text-[#2F3A8F] mb-2 tracking-tight">
                <Counter from={0} to={item.metric} duration={2} />{item.suffix}
              </div>
              
              {/* Label */}
              <h3 className="text-[#2E2E33] font-medium text-lg mb-2 uppercase tracking-wide">
                {item.label}
              </h3>
              
              {/* Description */}
              <p className="text-[#374151] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <Link 
            href="/impact"
            className="inline-flex items-center gap-3 text-[#2F3A8F] font-medium text-sm group"
          >
            <span className="border-b border-[#2F3A8F]/30 group-hover:border-[#2F3A8F] transition-colors pb-0.5">
              Learn More
            </span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
