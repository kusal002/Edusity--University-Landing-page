import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          We Ensure Education for
          <Typewriter
            options={{
              strings: ["Better World"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          laudantium dolore earum sunt. Rem possimus beatae labore vitae iure
          voluptatem tenetur explicabo. Earum odio eveniet ullam quisquam alias
          velit voluptatem!
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
