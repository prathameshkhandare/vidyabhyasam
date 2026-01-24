'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const centers = [
  {
    name: 'Neelankarai',
    location: 'Chennai, Tamil Nadu',
    image: '/images/centers/neelankarai-1.jpg',
    description: 'A vibrant center of learning and growth.'
  },
  {
    name: 'Venkatamangalam',
    location: 'Kanchipuram District',
    image: '/images/centers/venkatamangalam-1.jpg',
    description: 'Nurturing young minds in a serene environment.'
  },
  {
    name: 'Kotivakkam',
    location: 'Chennai Region',
    image: '/images/centers/kotivakkam-1.jpg', // Using the first distinct image
    description: 'Empowering children with holistic education.'
  },
  {
    name: 'Murugamangalam',
    location: 'Rural Community',
    image: '/images/centers/murugamangalam-1.jpg',
    description: 'Building strong foundations for the future.'
  }
];

const Centers = () => {
  return (
    <section className="relative py-28 bg-white overflow-hidden">


      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#B08968]" />
            <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
              Our Presence
            </span>
            <div className="w-8 h-px bg-[#B08968]" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33] mb-6">
            Our <span className="italic text-[#2F3A8F]">Centers</span>
          </h2>
          
          <p className="text-[#374151] max-w-2xl mx-auto text-lg">
            Spreading the light of knowledge across communities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {centers.map((center, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
             >
               {/* Image */}
               <div className="absolute inset-0">
                 <Image 
                   src={center.image} 
                   alt={center.name}
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
              </div>
               
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-10 text-white" >
                 <span className="text-[#fbbf24] text-xs font-bold uppercase tracking-wider mb-2 block drop-shadow-md">{center.location}</span>
                 <h3 className="!text-white font-serif text-2xl font-medium mb-2 drop-shadow-lg">{center.name}</h3>
                 <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                   <p className="text-white text-sm leading-relaxed mt-2 font-medium drop-shadow-md">{center.description}</p>
                 </div>
              </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Centers;
