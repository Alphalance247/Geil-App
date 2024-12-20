import Empowering from "./components/home/empowering";
import Header from "./components/home/header";
import Hero from "./components/home/hero";
import Highlight from "./components/home/highlight";
import Innovative from "./components/home/innovative";
import Investment from "./components/home/investment";
import SmartTechnology from "./components/home/smartTechnology";
import WhatDrivesUs from "./components/home/whatDrivesUs";
import WhatWeOffer from "./components/home/whatWeOffer";
import WhoWeServe from "./components/home/whoWeServe";
import BatteryEfficiency from "./components/home/batteryEfficiency";
import GetInTouch from "./components/home/getInTouch";
import Footer from "./components/home/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Geil App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="all" />
        <meta property="og:title" content="Social Title Geil App" />
        <meta
          property="og:description"
          content="And a social description for Geil App"
        />

        <meta
          name="description"
          content="GEIL is a forward-thinking technology and infrastructure company dedicated to building the next generation of charging solutions for electric tricycles and motorcycles."
        />
        <meta
          name="keywords"
          content="Electric vehicle charging solutions,Electric tricycle charging, Electric motorcycle charging stations, EV infrastructure development, Next-gen EV charging technology, Sustainable transportation solutions, Electric two-wheeler charging systems, EV charging company, Green energy for electric vehicles, EV charging innovations, Smart charging solutions for EVs, Charging stations for electric tricycles, Future of electric mobility, Eco-friendly transportation technology, Cutting-edge EV infrastructure, Electric bike charging systems, EV solutions for sustainable mobility, Electric vehicle charging company, Advanced EV charging systems, Affordable EV charging solutions"
        />
      </Head>
      <Header />
      <Hero />
      <Highlight />
      {/* <WhatWeOffer /> */}
      <Empowering />
      <Innovative />
      <WhatDrivesUs />
      <WhoWeServe />
      <Investment />
      <SmartTechnology />
      {/* <BatteryEfficiency /> */}
      <GetInTouch />
      <Footer />
    </>
  );
}
