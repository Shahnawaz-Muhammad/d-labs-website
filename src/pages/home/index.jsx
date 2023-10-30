import React from "react";
import Hero from "../../components/hero";
import HeroFeatures from "../../components/hero-features";
import Testimonials from "../../components/testimonials";
import FrequentlyAskedQuestions from "../../components/faq";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroFeatures />

      <FrequentlyAskedQuestions />

      <Testimonials />
    </>
  );
};

export default Home;
