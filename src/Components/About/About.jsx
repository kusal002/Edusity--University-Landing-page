import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-img"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quas
          sint voluptatum deserunt quasi ea nemo eius delectus reprehenderit rem
          earum obcaecati molestias, dolores autem aut labore in amet harum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis
          nulla, quia, iure iusto reiciendis veritatis assumenda magni, iste
          magnam debitis? Voluptate odit aperiam reiciendis, minus similique
          expedita recusandae totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa
          natus nam maxime excepturi, blanditiis corrupti recusandae nulla non
          impedit, tenetur sequi, reiciendis doloremque itaque incidunt nemo.
          Repellat, praesentium nulla.
        </p>
      </div>
    </div>
  );
};

export default About;
