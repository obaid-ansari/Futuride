import React from "react";
import "../css/Progress.css";

import img1 from "../assets/memoji1.webp";
import img2 from "../assets/memoji2.webp";
import img3 from "../assets/memoji3.webp";
import img4 from "../assets/memoji4.webp";
import img5 from "../assets/memoji5.webp";
import img6 from "../assets/memoji6.webp";
import img7 from "../assets/memoji7.webp";
import img8 from "../assets/memoji8.webp";
import img9 from "../assets/memoji9.webp";
import img10 from "../assets/memoji10.webp";

const Progress = () => {
  return (
    <div className="progress-container py-5">
      <div className="progres text-center container d-flex flex-column my-5 py-5 justify-content-center align-items-center">
        <p
          className="display-2 fw-bolder my-3"
          data-aos="fade"
          data-aos-offset="0"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-once="ture">
          5000+Careers
        </p>
        <p
          className="display-2 fw-bolder my-3"
          data-aos="fade"
          data-aos-offset="0"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once="ture">
          95%Accuracy
        </p>
        <p
          className="display-2 fw-bolder my-3"
          data-aos="fade"
          data-aos-offset="0"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-once="ture">
          1000+Helped
        </p>

        <div className="logos">
          <img
            src={img1}
            className="img img1"
            alt="logo1"
            loading="lazy"
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="ture"
          />
          <img
            src={img2}
            className="img img2"
            alt="logo2"
            loading="lazy"
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="ture"
          />
          <img
            src={img3}
            className="img img3"
            alt="logo3"
            loading="lazy"
            data-aos="fade"
            data-aos-offset="50"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="ture"
          />
          <img
            src={img4}
            className="img img4"
            alt="logo4"
            loading="lazy"
            data-aos="fade"
            data-aos-offset="50"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="ture"
          />
          <img
            src={img5}
            className="img img5"
            alt="logo5"
            loading="lazy"
            data-aos="fade"
            data-aos-offset="100"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="ture"
          />
          <img
            src={img6}
            className="img img6"
            alt="logo6"
            loading="lazy"
            data-aos="fade"
            data-aos-offset="100"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="ture"
          />
          <img
            src={img7}
            className="img img7"
            alt="logo7"
            loading="lazy"
            data-aos="fade"
            data-aos-offset="150"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="ture"
          />
          <img
            src={img8}
            className="img img8"
            alt="logo8"
            loading="lazy"
            data-aos="fade"
            data-aos-offset="150"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="ture"
          />
          <img
            src={img9}
            className="img img9"
            alt="logo9"
            loading="lazy"
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="ture"
          />
          <img
            src={img10}
            className="img img10"
            alt="logo10"
            loading="lazy"
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="ture"
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
