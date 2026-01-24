import {
  Header,
  Hero,
  About,
  Initiatives,
  Impact,
  Media,
  Volunteer,
  Gallery,
  Footer,
  Reveal,
  PurposeVision,
  Centers,
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
        <Reveal><PurposeVision /></Reveal>
        <Reveal><Media /></Reveal> {/* Video & Testimonials */}
        <Centers />
        <Reveal><Volunteer /></Reveal>
        <Reveal><Gallery /></Reveal>
      </main>
      <Footer />
    </>
  );
}
