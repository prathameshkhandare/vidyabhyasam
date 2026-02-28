import { Header, Footer, Reveal } from "@/components";
import Image from "next/image";

export default function Inspiration() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 bg-[#F4F1EC] px-6">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className="w-8 h-px bg-[#B08968]" />
                                <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
                                    Our Inspiration
                                </span>
                                <div className="w-8 h-px bg-[#B08968]" />
                            </div>
                            <h1 className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33]">
                                Guiding <span className="italic text-[#2F3A8F]">Light</span>
                            </h1>
                        </div>
                    </Reveal>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        {/* Image Column */}
                        <div className="lg:col-span-4 relative">
                            <Reveal>
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200 flex items-center justify-center">
                                    <Image
                                        src="/images/prabhupada.png"
                                        alt="Srila Prabhupada"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/5" />
                                </div>
                            </Reveal>
                        </div>

                        {/* Text Column */}
                        <div className="lg:col-span-8">
                            <Reveal>
                                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#2F3A8F] font-bold mb-3 leading-snug">
                                    His Divine Grace Vishwa Guru A. C. Bhaktivedanta Swami Prabhupada
                                </h2>
                                <h3 className="text-[#B08968] font-medium tracking-wide uppercase text-sm mb-8">
                                    Founder Acharya of ISKCON
                                </h3>

                                <div className="space-y-6 text-[#374151] font-serif leading-relaxed text-lg pb-8">
                                    <p>
                                        ISKCON widely known as Hare Krishna Movement is a worldwide confederation of more than 850 temples, centres, communities, schools, and restaurants with a global following of millions.
                                    </p>
                                    <p>
                                        Established in 1966, His Divine Grace A.C. Bhaktivedanta Swami Prabhupada brought the ancient Vedic wisdom to the modern world, translating and commenting on over 80 volumes of classical Vedic literature including the Bhagavad-gita and Srimad Bhagavatam.
                                    </p>
                                    <p>
                                        His teachings continue to inspire millions globally to lead a life of devotion, compassion, and selfless service, forming the foundational inspiration for all our community enrichment programs.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
