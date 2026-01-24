'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const centers = [
  {
    name: 'Neelankarai',
    location: 'Chennai, Tamil Nadu',
    image: '/images/centers/neelankarai-1.jpg',
    description: 'A vibrant center of learning and growth.',
    color: '#B08968'
  },
  {
    name: 'Venkatamangalam',
    location: 'Kanchipuram District',
    image: '/images/centers/venkatamangalam-1.jpg',
    description: 'Nurturing young minds in a serene environment.',
    color: '#2F3A8F'
  },
  {
    name: 'Kotivakkam',
    location: 'Chennai Region',
    image: '/images/centers/kotivakkam-1.jpg',
    description: 'Empowering children with holistic education.',
    color: '#B08968'
  },
  {
    name: 'Murugamangalam',
    location: 'Rural Community',
    image: '/images/centers/murugamangalam-1.jpg',
    description: 'Building strong foundations for the future.',
    color: '#2F3A8F'
  }
];

const Card = ({
  i,
  center,
  progress,
  range,
  targetScale,
}: {
  i: number;
  center: any;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-[50vh] flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${i * 20}px)`, // Added a small staggered gap as requested
          zIndex: (centers.length + i) * 10, // Higher specificity z-index
        }}
        className="relative h-[450px] md:h-[550px] w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] origin-top mx-4 md:mx-6 border border-white/10 bg-[#0F172A]"
      >
         {/* Original Card Design Structure: Image Background + Overlay */}
         <div className="absolute inset-0">
           <Image 
             src={center.image} 
             alt={center.name}
             fill
             className="object-cover transition-transform duration-1000 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-black/40 to-transparent opacity-95 transition-opacity duration-300" />
         </div>
         
         {/* Content Overlay */}
         <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10 text-white" >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#FFD700] text-sm font-bold uppercase tracking-[0.2em] mb-4 block drop-shadow-md"
            >
              {center.location}
            </motion.span>
            <h3 className="font-serif text-3xl md:text-5xl font-bold mb-6 !text-white leading-tight">{center.name}</h3>
            <p className="text-white/80 text-base md:text-xl leading-relaxed max-w-2xl font-light">
              {center.description}
            </p>
         </div>
      </motion.div>
    </div>
  );
};

const Centers = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section className="relative bg-[#F4F1EC] pb-6" ref={container}>
      <div className="pt-8 px-6 max-w-7xl mx-auto text-center mb-2">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#B08968]" />
            <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
              Our Locations
            </span>
            <div className="w-8 h-px bg-[#B08968]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33]">
            Our <span className="italic text-[#2F3A8F]">Centers</span>
          </h2>
      </div>

      <div className="mt-2 pb-4">
        {centers.map((center, i) => {
          const targetScale = 1 - ((centers.length - i) * 0.08);
          return (
            <Card
              key={i}
              i={i}
              center={center}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Centers;
