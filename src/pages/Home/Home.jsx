import React from "react";
import Hero from "../../containers/Hero/Hero";
import CTA from "../../containers/CTA/CTA";
import FAQ from "../../containers/FAQ/FAQ";
import HomeAbout from "../../containers/AboutSection/HomeAbout";
import SponsorSection from "../../containers/SponsorSection/SponsorSection";
import Whyjoin from "../../containers/Whyjoin/Whyjoin";
import TeamSection from "../../containers/TeamSection/TeamSection";
import Testimonial from "../../containers/Tesmonial/Testimonial";
import AbujaSection from "../../containers/Abujasection/AbujaSection";


const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <SponsorSection />
      <Whyjoin />
      <TeamSection />
      <AbujaSection/>
      <FAQ />
      <Testimonial />
      <CTA />
    </>
  );
};

export default Home;
