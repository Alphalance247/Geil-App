import Empowering from "./components/home/empowering";
import Header from "./components/home/header";
import Hero from "./components/home/hero";
import Highlight from "./components/home/highlight";
import Innovative from "./components/home/innovative";
import Investment from "./components/home/investment";
import SmartTechnology from "./components/home/smartTechnology";
import WhatDrivesUs from "./components/home/whatDrivesUs";
// import Empower from "./components/home/empower";
import WhatWeOffer from "./components/home/whatWeOffer";
import WhoWeServe from "./components/home/whoWeServe";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Highlight />
      <Empowering />
      {/* <Empower /> */}
      <WhatWeOffer />
      <Innovative />
      <WhatDrivesUs />
      <WhoWeServe />
      <Investment />
      <SmartTechnology />
    </>
  );
}
