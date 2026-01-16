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
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Initiatives /></Reveal>
        <Reveal><Impact /></Reveal>
        <Reveal><Media /></Reveal>
        <Reveal><Volunteer /></Reveal>
        <Reveal><Gallery /></Reveal>
      </main>
      <Footer />
    </>
  );
}
