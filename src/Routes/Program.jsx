import React from "react";
import "./Program.css";
import Typewriter from "typewriter-effect";
import program_1 from "../assets/program-1.png";
import program_2 from "../assets/program-2.png";
import program_3 from "../assets/program-3.png";
import program_icon_1 from "../assets/program-icon-1.png";
import program_icon_2 from "../assets/program-icon-2.png";
import program_icon_3 from "../assets/program-icon-3.png";
import office from "../assets/office.png";
import advocate from "../assets/advocate.jpg";
import agriculture from "../assets/agriculture.jpg";
import medical from "../assets/medical.jpg";
import computer from "../assets/computer.jpg";
import engeneering from "../assets/engeneering.jpg";

const Program = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>OUR PROGRAMS</h1>
          <h3>
            {" "}
            <Typewriter
              options={{
                strings: ["What We Offer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      </div>
      <div className="course">
        <h3>OUR COURSES</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          laudantium dolore earum sunt. Rem possimus beatae labore vitae iure
          voluptatem tenetur explicabo. Earum odio eveniet ullam quisquam alias
          velit voluptatem!
        </p>
      </div>
      <div className="details">
        <div className="program1">
          <div className="right">
            <img src={program_1} alt="" />
            <div className="captions">
              <img src={program_icon_1} alt="" />
              <p>Under Graduation Degree</p>
            </div>
          </div>
          <div className="left">
            <p>
              <h3>UNDER-GRADUATION DEGREE (BSc, BA, BCom, BBA, BCA)</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem corporis sint expedita unde, ipsa aspernatur cupiditate
              dolores debitis, nemo impedit temporibus voluptate esse ratione
              maxime perspiciatis hic rerum, a vel? Facere natus animi a id
              tempora, ex beatae enim ducimus porro sed voluptatum ipsum iure
              possimus, eius praesentium! Reprehenderit animi dolorem quis
              suscipit perspiciatis aperiam, a consectetur sapiente perferendis
              unde! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eius repellendus ad incidunt, nisi natus esse repudiandae corrupti
              possimus officiis. Recusandae perspiciatis, expedita magnam dolore
              maiores sint illum veritatis amet eveniet? Dolore repellat sunt
              ducimus aliquam ut reiciendis laudantium, commodi eveniet ipsa
              tempora ab cupiditate. Corrupti nobis, dicta nemo distinctio
              magnam assumenda cupiditate neque soluta, ipsum, temporibus est
              eos dolor possimus.
            </p>
          </div>
        </div>
        <div className="program1 display">
          <div className="right">
            <img src={program_3} alt="" />
            <div className="captions">
              <img src={program_icon_3} alt="" />
              <p>Post graduate Degree</p>
            </div>
          </div>
          <div className="left">
            <p>
              <h3> POST-GRADUATION DEGREE (ME, MHS, MHA, MTech)</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem corporis sint expedita unde, ipsa aspernatur cupiditate
              dolores debitis, nemo impedit temporibus voluptate esse ratione
              maxime perspiciatis hic rerum, a vel? Facere natus animi a id
              tempora, ex beatae enim ducimus porro sed voluptatum ipsum iure
              possimus, eius praesentium! Reprehenderit animi dolorem quis
              suscipit perspiciatis aperiam, a consectetur sapiente perferendis
              unde! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eius repellendus ad incidunt, nisi natus esse repudiandae corrupti
              possimus officiis. Recusandae perspiciatis, expedita magnam dolore
              maiores sint illum veritatis amet eveniet? Dolore repellat sunt
              ducimus aliquam ut reiciendis laudantium, commodi eveniet ipsa
              tempora ab cupiditate. Corrupti nobis, dicta nemo distinctio
              magnam assumenda cupiditate neque soluta, ipsum, temporibus est
              eos dolor possimus.
            </p>
          </div>
        </div>
        <div className="program1 display1">
          <div className="right">
            <img src={program_2} alt="" />
            <div className="captions">
              <img src={program_icon_2} alt="" />
              <p>Masters & PhD Degree</p>
            </div>
          </div>
          <div className="left">
            <p>
              <h3>MASTERS & PhD DEGREE (MBA, MCA, MA, MSC, MSW, Doctorates)</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem corporis sint expedita unde, ipsa aspernatur cupiditate
              dolores debitis, nemo impedit temporibus voluptate esse ratione
              maxime perspiciatis hic rerum, a vel? Facere natus animi a id
              tempora, ex beatae enim ducimus porro sed voluptatum ipsum iure
              possimus, eius praesentium! Reprehenderit animi dolorem quis
              suscipit perspiciatis aperiam, a consectetur sapiente perferendis
              unde! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eius repellendus ad incidunt, nisi natus esse repudiandae corrupti
              possimus officiis. Recusandae perspiciatis, expedita magnam dolore
              maiores sint illum veritatis amet eveniet? Dolore repellat sunt
              ducimus aliquam ut reiciendis laudantium, commodi eveniet ipsa
              tempora ab cupiditate. Corrupti nobis, dicta nemo distinctio
              magnam assumenda cupiditate neque soluta, ipsum, temporibus est
              eos dolor possimus.
            </p>
          </div>
        </div>
      </div>
      <div className="learning">
        <h1 className="title">EXPLORE DISTANCE LEARNING PROGRAMMES</h1>
        <div className="programmes">
          <div className="programme">
            <img src={office} alt="Management" />
            <p>MANAGEMENT</p>
          </div>
          <div className="programme">
            <img src={advocate} alt="Law" />
            <p>LAW</p>
          </div>
          <div className="programme">
            <img src={medical} alt="Medicine & Health" />
            <p>MEDICINE & HEALTH</p>
          </div>
          <div className="programme">
            <img src={computer} alt="Computer Science" />
            <p>COMPUTER SCIENCE</p>
          </div>
          <div className="programme">
            <img src={engeneering} alt="Engineering" />
            <p>ENGINEERING</p>
          </div>
          <div className="programme">
            <img src={agriculture} alt="Agriculture" />
            <p>AGRICULTURE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
