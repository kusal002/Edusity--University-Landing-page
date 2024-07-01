import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>@ 2024 Edusity, All Rights Reserved</p>
      <p>
        Credentials<span> @Kusal</span>
      </p>
      <ul>
        <li>Terms of services</li>
        <li>Privacy Policy</li>
        <li>
          Thanks to
          <a
            href="https://www.youtube.com/watch?v=WbV3zRgpw_E&list=PLjwm_8O3suyMMs7kfDD-p-yIhlmEgJkDj&index=2&t=7857s&ab_channel=GreatStack"
            target="_blank"
          >
            <span> @GreatStack</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
