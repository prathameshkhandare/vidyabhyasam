import { Header, Footer, Reveal } from "@/components";
import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 bg-[#F4F1EC] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
                {/* Background Decors */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B08968]/10 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2F3A8F]/10 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

                <Reveal>
                    <div className="relative w-48 h-48 md:w-72 md:h-72 mb-12 mx-auto">
                        <Image
                            src="/images/vidyabhyasam-logo.png"
                            alt="Vidyabhyasam Logo"
                            fill
                            className="object-contain drop-shadow-lg"
                            priority
                        />
                    </div>
                </Reveal>

                <Reveal>
                    <div className="max-w-4xl bg-white/60 p-10 rounded-2xl shadow-sm border border-[#2E2E33]/5">
                        <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#2E2E33] leading-relaxed font-medium">
                            Initiative of Hare Krishna Movement Chennai,<br className="hidden md:block" />
                            <span className="text-[#B08968] italic font-light mt-4 inline-block">an affiliate of ISKCON: S-49/78-79, Bengaluru.</span>
                        </p>
                    </div>
                </Reveal>
            </main>
            <Footer />
        </>
    );
}
