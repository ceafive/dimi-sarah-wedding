import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import WeddingDay from "@/components/WeddingDay";
import Venue from "@/components/Venue";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <OurStory />
        <WeddingDay />
        <Venue />
        <RSVP />
      </main>
      <Footer />
    </>
  );
}
