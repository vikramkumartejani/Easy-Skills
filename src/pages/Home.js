import React from "react";
import Faqs from "../components/Faqs";
import ChooseSkills from "../components/ChooseSkills";
import OurCourses from "../components/OurCourses";
import OurRecognition from "../components/OurRecognition";
import Total from "../components/Total";
import Hero from "../components/Hero";
import SendEnquiry from "../components/SendEnquiry";

const Home = () => {
  return (
    <div>
      <Hero />
      <Total />
      <OurRecognition />
      <OurCourses />
      <ChooseSkills />
      <Faqs />
      <SendEnquiry />
    </div>
  );
};

export default Home;
