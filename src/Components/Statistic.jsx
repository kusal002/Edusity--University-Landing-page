import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const Statistic = ({ number, label }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    const numericValue = parseInt(number.replace(/[^0-9]/g, ""), 10);
    const options = { startVal: 0, duration: 2.7 }; // Customize the animation options as needed
    const countUp = new CountUp(numberRef.current, numericValue, options);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          countUp.start();
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => observer.disconnect();
  }, [number]);

  return (
    <div className="statistic">
      <span className="number" ref={numberRef}>
        {number}
      </span>
      <span className="label">{label}</span>
    </div>
  );
};

export default Statistic;
