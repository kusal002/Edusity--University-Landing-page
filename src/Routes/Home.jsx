import React, { useState } from "react";
import App from "../App";
import Hero from "../Components/Hero/Hero";
import Programs from "../Components/Programs/Programs";
import About from "../Components/About/About";
import Campus from "../Components/Campus/Campus";
import Testimonials from "../Components/Testimonials/Testimonials";
import Contact from "../Components/Contact/Contact";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import Title from "../Components/Title/Title";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Get in Touch" />
        <Contact />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default Home;
