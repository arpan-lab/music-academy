import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/ui/TestimonialCards";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import UpcomingWebinars from "@/components/UpcomingWebminars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] bg-black-900">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
