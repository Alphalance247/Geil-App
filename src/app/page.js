import Header from "./components/home/header";
import Hero from "./components/home/hero";
import Highlight from "./components/home/highlight";
// import Empower from "./components/home/empower";
import WhatWeOffer from "./components/home/whatWeOffer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Highlight />
      {/* <Empower /> */}
      <WhatWeOffer />
    </>
  );
}
