import { Header, Footer, Reveal } from "@/components";
import Image from "next/image";

export default function Leadership() {
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
                                    Leadership
                                </span>
                                <div className="w-8 h-px bg-[#B08968]" />
                            </div>
                            <h1 className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33]">
                                Our <span className="italic text-[#2F3A8F]">Leadership</span>
                            </h1>
                        </div>
                    </Reveal>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        {/* Text Column */}
                        <div className="lg:col-span-8 order-2 lg:order-1">
                            <Reveal>
                                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#2F3A8F] font-bold mb-3 leading-snug">
                                    His Grace Suvyakta Narasimha Dasa
                                </h2>
                                <h3 className="text-[#B08968] font-medium tracking-wide uppercase text-sm mb-8 leading-relaxed max-w-2xl">
                                    Governing Body Member of Worldwide Hare Krishna Movement Group, President - Srila Prabhupada's ISKCON Chennai
                                </h3>

                                <div className="space-y-6 text-[#374151] font-serif leading-relaxed text-lg pb-8">
                                    <p>
                                        His Grace Suvyakta Narasimha Dasa was born in 1973 in Moovattupuzha in Kerala. He completed B.E. (Mechanical) from M S Ramaiah Institute of Technology and secured 5th rank in Bangalore University. After graduation, he worked in Lincoln Helios India Ltd. as a Design Engineer. After becoming a full-time missionary of ISKCON Bangalore in 1999, he has been dedicating his skills and expertise for the welfare of society.
                                    </p>
                                    <p>
                                        Suvyakta Narasimha Dasa successfully designed and operationalised Akshaya Patra’s centralised kitchens in Vrindavan, Lucknow, Jaipur and other locations. He has been instrumental in the setting up of the sprawling Vrindavan Chandrodaya Mandir campus. He is currently serving as President of Srila Prabhupada's ISKCON Chennai (Hare Krishna Movement, Chennai- Affiliate of ISKCON: S-49/78-79, Bengaluru) and also overseeing the operations of Akshaya Patra in Tamil Nadu.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Image Column */}
                        <div className="lg:col-span-4 relative order-1 lg:order-2">
                            <Reveal>
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500 text-sm font-serif">Image Placeholder</span>
                                    <Image
                                        src="/images/leadershipimg.png"
                                        alt="His Grace Suvyakta Narasimha Dasa"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/5" />
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
