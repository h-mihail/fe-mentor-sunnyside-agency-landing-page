import { render } from "preact";

import "./output.css";
import { Header } from "./components/Header";
import { ClearCard, InfoCard, LinkCard } from "./components/Card";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <main>
      <Header />

      <div class="md:flex md:flex-row-reverse">
        <ClearCard bg="bg-transform-mobile md:bg-transform-desktop" />
        <LinkCard
          title="Transform your brand"
          text="We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you."
          accent="yellow"
        />
      </div>

      <div class="md:flex md:flex-row">
        <ClearCard bg="bg-stand-out-mobile md:bf-stand-out-desktop" />
        <LinkCard
          title="Stand out to the right audience"
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
          accent="red"
        />
      </div>

      <div class="md:flex md:flex-row">
        <InfoCard
          textColor="text-darkDesaturatedCyan"
          bg="bg-graphic-design-mobile md:bg-graphic-design-desktop"
          title="Graphic Design"
          text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        />
        <InfoCard
          textColor="text-darkBlue"
          bg="bg-photography-mobile md:bg-photography-desktop"
          title="Photography"
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        />
      </div>

      <Testimonials />

      <Gallery />

      <Footer />
    </main>
  );
};

render(<App />, document.getElementById("app"));
