'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const centers = [
  {
    name: 'Kottivakkam',
    location: 'Chennai Region',
    image: '/images/centers/kotivakkam-1.jpg',
    description: 'Empowering children with holistic education at our primary home center.',
    color: '#B08968'
  },
  {
    name: 'Chinna Neelankarai',
    location: 'Chennai Region',
    image: '/images/centers/neelankarai-1.jpg',
    description: 'Nurturing growth and learning in the heart of Neelankarai.',
    color: '#2F3A8F'
  },
  {
    name: 'Venkatamangalam',
    location: 'Kanchipuram District',
    image: '/images/centers/venkatamangalam-1.jpg',
    description: 'Fostering academic excellence in a peaceful environment.',
    color: '#B08968'
  },
  {
    name: 'Murugamangalam',
    location: 'Rural Community',
    image: '/images/centers/murugamangalam-1.jpg',
    description: 'Building strong character and foundations for rural children.',
    color: '#2F3A8F'
  },
  {
    name: 'Morai (Avadi)',
    location: 'Chennai Region',
    image: '/images/centers/neelankarai-2.jpg',
    description: 'Expanding our reach to support the community in Morai.',
    color: '#B08968'
  },
  {
    name: 'Perungulathur',
    location: 'Chennai Region',
    image: '/images/centers/kotivakkam-2.jpg',
    description: 'Dedicated to providing quality education and values.',
    color: '#2F3A8F'
  },
  {
    name: 'Nallambakkam',
    location: 'Chennai Region',
    image: '/images/centers/venkatamangalam-1.jpg',
    description: 'Creating a brighter future for the children of Nallambakkam.',
    color: '#B08968'
  },
  {
    name: 'Palnankuppam',
    location: 'Chennai Region',
    image: '/images/centers/kotivakkam-3.jpg',
    description: 'Impacting lives through holistic development and care.',
    color: '#2F3A8F'
  }
];

const Centers = () => {
  return (
    <section className="relative bg-[#F4F1EC] pt-12 pb-24">
      <div className="px-6 max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-[#B08968]" />
          <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
            Our Locations
          </span>
          <div className="w-8 h-px bg-[#B08968]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33]"
        >
          Our <span className="italic text-[#2F3A8F]">Centers</span>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centers.map((center, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={center.image}
                  alt={center.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-[0.2em] mb-3 block" style={{ color: center.color }}>
                  {center.location}
                </span>
                <h3 className="font-serif text-2xl font-bold mb-3 text-[#2E2E33] leading-tight group-hover:text-[#2F3A8F] transition-colors">
                  {center.name}
                </h3>
                <p className="text-[#5F6368] text-sm leading-relaxed font-light mt-auto">
                  {center.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Centers;
