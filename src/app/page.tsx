import {
  Header,
  Hero,
  About,
  Initiatives,
  Impact,
  Gallery,
  Footer,
  Reveal,
  PurposeVision,
  Centers,
  WomenEmpowerment,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal><About /></Reveal> {/* Mission Snapshot */}
        <Reveal><Impact /></Reveal>
        <Reveal><Initiatives /></Reveal>
        <Reveal><WomenEmpowerment /></Reveal>
        <Reveal><PurposeVision /></Reveal>
        <Centers />
        <Reveal><Gallery /></Reveal>
      </main>
      <Footer />
    </>
  );
}
