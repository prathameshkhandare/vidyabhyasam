import Link from 'next/link';
import Image from 'next/image';

// Static Imports to ensure bundling
import foodImg from '@/assets/images/initiatives-food.png';
import educationImg from '@/assets/images/initiatives-education.png';
import valuesImg from '@/assets/images/initiatives-values.png';

const initiatives = [
  {
    title: 'Nutritious satvik sanctified food',
    description: 'In a heartwarming initiative aimed at alleviating hunger and nurturing the potential of underprivileged children, Vidyabhyasam has embarked on a mission to distribute nutritious meals to those in need.',
    image: foodImg,
    color: '#B08968', // Food - Warm/Golden
    link: '/initiatives/food'
  },
  {
    title: 'Education',
    description: 'To help children keep up their academic schedules and also attain complete self-development, the VIDYABHYASAM program is introduced as a regular post-school education session in the same locality as the childrens homes.',
    image: educationImg,
    color: '#2F3A8F', // Education - Blue/Wisdom
    link: '/initiatives/education'
  },
  {
    title: 'Values',
    description: 'VIDYABHYASAM is proud to say that women from rural areas are coming forward to take the training to be educators and in turn, motivate children to achieve woman empowerment and childrens education.',
    image: valuesImg,
    color: '#3A7F7A', // Values - Teal/Growth
    link: '/initiatives/values'
  }
];

const Initiatives = () => {
  return (
    <section className="relative py-28 bg-[#F4F1EC] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #2E2E33 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#B08968]" />
            <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
              Our Pillars
            </span>
            <div className="w-8 h-px bg-[#B08968]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33] mb-6">
            Core <span className="italic text-[#2F3A8F]">Principles</span>
          </h2>

          <p className="text-[#5F6368] max-w-xl mx-auto text-lg leading-relaxed">
            Three fundamental pillars empowering communities and building a stronger nation.
          </p>
        </div>

        {/* Initiative Cards - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group relative bg-white flex flex-col h-full rounded-xl overflow-hidden border border-[#ECE8E1] hover:border-[#2F3A8F]/20 hover:shadow-2xl hover:shadow-[#2F3A8F]/5 transition-all duration-500"
            >
              {/* Top Colored Bar */}
              <div className="h-2 w-full" style={{ backgroundColor: initiative.color }} />

              <div className="p-10 flex flex-col h-full">
                {/* Image */}
                <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-[#2E2E33] mb-4 group-hover:text-[#2F3A8F] transition-colors">
                  {initiative.title}
                </h3>

                {/* Description */}
                <p className="text-[#374151] leading-relaxed mb-8 flex-grow">
                  {initiative.description}
                </p>

                {/* Learn More Link (CTA) */}
                <div>
                  <Link
                    href={initiative.link}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:gap-3"
                    style={{ color: initiative.color }}
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
