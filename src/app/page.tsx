import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { NowBuilding } from "@/components/home/NowBuilding";
import { Skills } from "@/components/home/Skills";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20">
      <Hero />
      <FeaturedProjects />
      <NowBuilding />
      <Skills />
      <ExperienceTimeline />
      <Contact />
    </div>
  );
}
