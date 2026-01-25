// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Explore from "@/components/Explore";
import PlacesGrid from "@/components/PlacesGrid";
import Recommend from "@/components/Recommend";
import Highlight from "@/components/Highlight";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <PlacesGrid />
      <Recommend />
      <Highlight />
      <NewsSection />
      <Footer />
      
    </>
  );
}
