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
                                        With a robust background in mechanical engineering, His Grace Suvyakta Narasimha Dasa brings a wealth of both technical expertise and profound spiritual leadership to his role.
                                    </p>
                                    <p>
                                        His dedicated efforts have been instrumental in leading massive developmental projects, including his extensive work with the Akshaya Patra foundation, where he played a pivotal role in implementing large-scale programmatic operations that feed millions of children daily.
                                    </p>
                                    <p>
                                        Under his guidance, Vidyabhyasam continues to expand its reach, ensuring that education, nutrition, and essential values are imparted effectively to underprivileged communities.
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
