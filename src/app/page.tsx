import Hero from "./components/sections/Hero";
import ArtistStatement from "./components/sections/ArtistStatement";
import FeaturedWorks from "./components/sections/FeaturedWorks";
import UbuntuSection from "./components/sections/UbuntuSection";
import CallToAction from "./components/sections/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <ArtistStatement />
      <FeaturedWorks />
      <UbuntuSection />
      <CallToAction />
    </main>
  );
}
