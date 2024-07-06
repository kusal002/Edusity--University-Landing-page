import React, { useState } from "react";
import "./AboutUs.css";
import CountUp from "countup";
import about_img from "../assets/about.png";
import play_icon from "../assets/play-icon.png";
import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import user_3 from "../assets/user-3.png";
import user_4 from "../assets/user-4.png";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import Statistic from "../Components/Statistic";
const AboutUs = () => {
  const [playState, setPlayState] = useState(false);
  const features = [
    {
      icon: "📘",
      title: "Professional Teachers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      icon: "🌐",
      title: "Learn Anywhere Online",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      icon: "🎓",
      title: "Graduation Certificate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      icon: "🎓",
      title: "Over 1000 Scholarship",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];

  const stories = [
    {
      image: user_1,
      title: "I got a new job",
      name: "Kelly Marchisio",
      role: "Nanodegree Student",
      position: "Web Solutions Engineer, Google",
      link: "#",
      linkText: "Watch Kelly’s story",
    },
    {
      image: user_2,
      title: "I started my own business",
      name: "Christian Strobl",
      role: "Nanodegree Graduate",
      position: "Entrepreneur",
      link: "#",
      linkText: "Read Christian’s story",
    },
    {
      image: user_3,
      title: "I got the perfect job",
      name: "Rachel Green",
      role: "Software Developer",
      position: "Tech lead, Microsoft",
      link: "#",
      linkText: "Read Christian’s story",
    },
    {
      image: user_4,
      title: "I got the dream job",
      name: "Joey Tribiani",
      role: "Software Developer",
      position: "Tech lead, Microsoft",
      link: "#",
      linkText: "Read Christian’s story",
    },
  ];

  const statistics = [
    { number: "10,000", label: "Students Learning" },
    { number: "800", label: "Instructors On Campus" },
    { number: "200+", label: "Free Courses" },
    { number: "950+", label: "Active Courses" },
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>WE PROMISE</h1>
          <h2>BEST EDUCATION FOR STUDENTS</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            molestias dolore cum fugit magnam tempora ratione delectus tenetur
            voluptas sit similique nam voluptate unde ex nisi ea beatae eum
            asperiores.
          </p>
        </div>
      </div>
      <div className="features-section">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="information">
        <div className="info-left">
          <img src={about_img} alt="" className="info-img" />
          <img
            src={play_icon}
            alt=""
            className="play-img"
            onClick={() => {
              setPlayState(true);
            }}
          />
        </div>
        <div className="info-right">
          <h1>ABOUT UNIVERSITY</h1>
          <h3>Nurturing Tomorrow's Leaders Today</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quas
            sint voluptatum deserunt quasi ea nemo eius delectus reprehenderit
            rem earum obcaecati molestias, dolores autem aut labore in amet
            harum!
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            inventore natus, animi voluptatem odit quam delectus eaque
            repudiandae illo maiores quas at impedit vero possimus eius
            accusantium ab magnam incidunt? Quae repellendus voluptates dicta
            facilis beatae ipsum accusantium provident magnam nesciunt. Quis
            autem voluptatum laudantium magni praesentium quibusdam! Sapiente
            doloribus fuga eos eaque ullam nobis molestias. Illum corporis
            assumenda porro?
          </p>
        </div>
      </div>

      <div className="success-stories-section">
        <h2>Student Success Stories</h2>
        <p>
          Our students are transforming their lives through education. They are
          learning new skills, achieving objectives, and impacting the world.
          They’re being featured in The New York Times. They’re getting hired at
          Google. Their apps are in the Apple Store. They are succeeding.
        </p>
        <div className="stories">
          {stories.map((story, index) => (
            <div key={index} className="story">
              <img src={story.image} />
              <div className="story-content">
                <h3>{story.title}</h3>
                <p className="name">{story.name}</p>
                <p className="role">{story.role}</p>
                <p className="position">{story.position}</p>
                <a href={story.link}>{story.linkText}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="statistics-section">
        {statistics.map((stat, index) => (
          <Statistic key={index} number={stat.number} label={stat.label} />
        ))}
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
};

export default AboutUs;
