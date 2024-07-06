import React from "react";
import "./Campus.css";
import { useNavigate } from "react-router-dom";
import gallery_1 from "../../assets/gallery-1.jpg";
import gallery_2 from "../../assets/gallery-2.jpg";
import gallery_5 from "../../assets/gallery-5.jpg";
import gallery_6 from "../../assets/gallery-6.jpg";
import White_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte("/campus");
  };

  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_5} alt="" />
        <img src={gallery_6} alt="" />
      </div>
      <button className="btn dark-btn" onClick={handleClick}>
        See More Here <img src={White_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
