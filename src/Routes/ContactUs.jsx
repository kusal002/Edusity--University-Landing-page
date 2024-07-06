import React from "react";
import "./ContactUs.css";
import Contact from "../Components/Contact/Contact";
import Title from "../Components/Title/Title";

const ContactUs = () => {
  return (
    <>
      <div className="heroo">
        <div className="hero-text">
          <h1>CONTACT US</h1>
          <h2>WE ARE HERE FOR YOU</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            molestias dolore cum fugit magnam tempora ratione delectus tenetur
            voluptas sit similique nam voluptate unde ex nisi ea beatae eum
            asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quas vero itaque sint vel libero officia est sunt
            quam reprehenderit a sapiente, deleniti veniam voluptates in. Ipsam
            illum accusantium nesciunt?
          </p>
          {/* <div class="contact-info">
            <h3>Monday – Friday: 7 a.m. – 9 p.m. Central</h3>
            <h3>Saturday: 8 a.m. – 5 p.m. Central</h3>
            <h3>Sunday: 9 a.m. – 5 p.m. Central</h3>
            <a href="tel:8002972837" class="call-button">
              Call 800.297.2837
            </a>
            <a href="#" class="chat-button">
              Live Chat
            </a>
          </div> */}
        </div>
      </div>
      <Title subTitle="Get in Touch" title="Give Us Some Feedback" />
      <Contact />
    </>
  );
};

export default ContactUs;
