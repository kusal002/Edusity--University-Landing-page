import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "05e0ede5-d9be-424b-92e6-026255c2020a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          laborum aliquid laudantium esse tenetur praesentium vero minus
          adipisci dicta facilis aliquam iste, nam veniam veritatis sit expedita
          consequatur officiis. Magni.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@KusalLaik.in
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +91-2376879823
          </li>
          <li>
            <img src={location_icon} alt="" /> 7th street Barrackpore, Kolkata{" "}
            <br /> 700021, WB, INDIA
          </li>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/kusal-laik-16742928a/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/kusal002" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/mellowophile_22?igsh=MWdpZHBwdXQ4bmhoNA=="
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            required
          />
          <label>Write Your Messages Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Give Us Some Feedbacks"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
