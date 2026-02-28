import Link from 'next/link';
import Image from 'next/image';

const Media = () => {
  const testimonials = [
    {
      text: "Vidyabhyasam has given me the confidence to dream big. The educators are so supportive and the environment is perfect for learning.",
      author: "Pravalika",
      role: "Student, Class 10",
      image: "/images/centers/kotivakkam-2.jpg"
    },
    {
      text: "The values I learned here have shaped my character. It's not just about studies, it's about becoming a better person.",
      author: "Arun Nayak",
      role: "Alumni",
      image: "/images/centers/neelankarai-1.jpg"
    }
  ];

  const videos = [
    {
      title: "Classroom Interaction",
      location: "Kotivakkam",
      src: "/videos/kotivakkam_1.mp4",
      thumbnail: "/images/centers/kotivakkam-3.jpg"
    },
    {
      title: "Cultural Activities",
      location: "Venkatamangalam",
      src: "/videos/venkatamangalam_1.mp4",
      thumbnail: "/images/centers/venkatamangalam-1.jpg"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#B08968]" />
            <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
              Voices of Change
            </span>
            <div className="w-8 h-px bg-[#B08968]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2E2E33] mb-4">
            Stories of <span className="italic text-[#2F3A8F]">Impact</span>
          </h2>
        </div>

        {/* Two Column Layout: Videos & Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Video Section */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl text-[#2E2E33] mb-6">Watch Our Journey</h3>
            <div className="space-y-6">
              {videos.map((video, index) => (
                <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-video">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster={video.thumbnail}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full pointer-events-none">
                    <span className="text-white text-xs font-medium tracking-wide">{video.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div>
            <h3 className="font-serif text-2xl text-[#2E2E33] mb-8">Student Testimonials</h3>
            <div className="grid gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#ECE8E1]/30 p-8 rounded-2xl border border-[#B08968]/10 relative hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-2 text-6xl text-[#B08968]/20 font-serif leading-none">"</div>

                  <div className="relative z-10">
                    <p className="text-[#374151] text-lg leading-relaxed italic mb-6">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#2F3A8F]/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif text-[#2E2E33] font-medium">{testimonial.author}</h4>
                        <p className="text-[#B08968] text-xs uppercase tracking-wider">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* More Stories Link */}
              <div className="mt-4">
                <Link href="/stories" className="text-[#2F3A8F] font-medium hover:text-[#B08968] transition-colors text-sm flex items-center gap-2">
                  Read more inspiring stories
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Media;
