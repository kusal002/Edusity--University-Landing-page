import React, { useState } from "react";
import "./Gallery.css";
import gallery_1 from "../assets/gallery-1.jpg";
import gallery_2 from "../assets/gallery-2.jpg";
import gallery_3 from "../assets/gallery-3.jpg";
import gallery_4 from "../assets/gallery-4.jpg";
import gallery_5 from "../assets/gallery-5.jpg";
import gallery_6 from "../assets/gallery-6.jpg";
import gallery_7 from "../assets/gallery-7.jpg";
import gallery_8 from "../assets/gallery-8.jpg";
import gallery_9 from "../assets/gallery-9.jpg";
import gallery_10 from "../assets/gallery-10.jpg";
import gallery_11 from "../assets/gallery-11.jpg";
import gallery_12 from "../assets/gallery-12.jpg";
import Title from "../Components/Title/Title";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);
  return (
    <>
      <div className="herooo">
        <div className="heroo-text">
          <h1>University Gallery: Capturing Moments, Creating Memories</h1>
          <h2>Explore the Vibrant Life of Our University Through the Lens</h2>
          <p>
            Explore the vibrant life of our university through our gallery. From
            the dynamic campus life and academic excellence to cultural events
            and sports achievements, our gallery captures the essence of our
            diverse and thriving community. Witness moments of intellectual
            discovery, artistic expression, and community engagement, and
            celebrate the inspiring journeys of our alumni. Dive into the visual
            stories that make our university a unique and enriching place to
            learn and grow.
          </p>
        </div>
      </div>
      <Title subTitle="Welcome to the University Gallery" />
      <div className="campus">
        <div className="gallery">
          <img
            src={gallery_1}
            alt=""
            onClick={() => setCurrentImage(gallery_1)}
          />
          <img
            src={gallery_2}
            alt=""
            onClick={() => setCurrentImage(gallery_2)}
          />
          <img
            src={gallery_5}
            alt=""
            onClick={() => setCurrentImage(gallery_5)}
          />
          <img
            src={gallery_6}
            alt=""
            onClick={() => setCurrentImage(gallery_6)}
          />
          <img
            src={gallery_3}
            alt=""
            onClick={() => setCurrentImage(gallery_3)}
          />
          <img
            src={gallery_4}
            alt=""
            onClick={() => setCurrentImage(gallery_4)}
          />

          <img
            src={gallery_7}
            alt=""
            onClick={() => setCurrentImage(gallery_7)}
          />
          <img
            src={gallery_8}
            alt=""
            onClick={() => setCurrentImage(gallery_8)}
          />
          <img
            src={gallery_9}
            alt=""
            onClick={() => setCurrentImage(gallery_9)}
          />
          <img
            src={gallery_10}
            alt=""
            onClick={() => setCurrentImage(gallery_10)}
          />
          <img
            src={gallery_11}
            alt=""
            onClick={() => setCurrentImage(gallery_11)}
          />
          <img
            src={gallery_12}
            alt=""
            onClick={() => setCurrentImage(gallery_12)}
          />
        </div>
        {currentImage && (
          <div
            className="enlarged-image-container"
            onClick={() => setCurrentImage(null)}
          >
            <img src={currentImage} alt="" className="enlarged-image" />
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
