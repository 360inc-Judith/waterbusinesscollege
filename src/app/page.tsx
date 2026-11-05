import Hero from "@/components/Hero";
import Courses from "@/components/courses";
import BlogPreview from '@/components/BlogPreview';
import Qualifications from "@/components/Qualifications";
import QualificationsGrid from "@/components/QualificationsGrid";
import QualificationStructure from "@/components/QualificationStructure";
{/*This website was built by Hannes Jansen van Rensburg */}

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <Courses />
      <Qualifications />
      <QualificationsGrid />
      <QualificationStructure />
      <BlogPreview />
    </main>
  );
}