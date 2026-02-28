import Link from 'next/link';
import Image from 'next/image';

const WomenEmpowerment = () => {
    return (
        <section className="relative py-28 bg-white overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B08968]/5 to-transparent rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2F3A8F]/5 to-transparent rounded-full blur-3xl opacity-50" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-px bg-[#B08968]" />
                            <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
                                Women Empowerment
                            </span>
                        </div>

                        <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2E2E33] mb-8 leading-tight">
                            Fostering <span className="italic text-[#B08968]">Health, Education</span> & <span className="italic text-[#2F3A8F]">Values</span>
                        </h2>

                        <div className="text-[#374151] leading-relaxed space-y-6 font-serif text-lg">
                            <p>
                                Empowering women is central to building stronger communities. Through our dedicated programs, we focus on health education and instilling core values that uplift entire families.
                            </p>
                            <p>
                                By providing women from rural areas the opportunity to train as educators and health advocates, Vidyabhyasam ensures that the next generation receives holistic care and guidance.
                            </p>
                        </div>
                    </div>

                    {/* Visuals - Placeholder for Women Empowerment Image */}
                    <div className="relative">
                        <div className="relative z-10 bg-[#F4F1EC] p-2 rounded-2xl shadow-xl">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200">
                                <Image
                                    src="/images/women-empowerment.png"
                                    alt="Spiritual Women Empowerment"
                                    fill
                                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1c]/60 via-transparent to-transparent opacity-80" />
                            </div>
                        </div>
                        {/* Decorative Elements behind card */}
                        <div className="absolute top-4 -right-4 w-full h-full bg-gradient-to-bl from-[#B08968]/20 to-transparent rounded-2xl -z-0 blur-sm" />
                        <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-[#2F3A8F]/20 to-transparent rounded-2xl -z-0 blur-sm" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WomenEmpowerment;
