import { Header, Footer, Reveal, Impact, Centers } from "@/components";

export default function ImpactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20 bg-[#F4F1EC]">
                <Reveal><Impact /></Reveal>
                <Reveal><Centers /></Reveal>
            </main>
            <Footer />
        </>
    );
}
