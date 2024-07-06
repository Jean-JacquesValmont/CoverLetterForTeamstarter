import Hero from "@/components/Hero";
import SectionIdeaToAction from "@/components/SectionIdeaToAction";
import SectionWhatarent from "@/components/SectionWhatarent";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <SectionWhatarent />
      <SectionIdeaToAction />
    </main>
  );
}
