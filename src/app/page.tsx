import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import WeddingDay from "@/components/WeddingDay";
import Venue from "@/components/Venue";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // Side padding clears the floral edge frame, just past each strip — tuned
    // per breakpoint so content isn't starved of width on big screens.
    <div className="relative z-10 px-12 sm:px-20 md:px-28 lg:px-32 xl:px-36">
      <Navigation />
      <main>
        <Hero />
        <OurStory />
        <WeddingDay />
        <Venue />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}
