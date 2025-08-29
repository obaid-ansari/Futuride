import React from "react";
import "../css/Hero.css";

const Hero = ({ isDark }) => {
  return (
    <div
      className={`hero border text-center rounded-4 ${
        isDark ? "dark-mode" : ""
      }`}
      aria-labelledby="hero-heading">
      <h1
        id="hero-heading"
        className="container display-2 fw-bold mt-5"
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-once="ture">
        Discover your future path with
        <span className="gradient-text"> confidence </span>
        and
        <span className="gradient-text"> clarity.</span>
      </h1>

      <p
        className="my-4 container fs-4 fw-semibold"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="400"
        data-aos-duration="1000"
        data-aos-once="ture">
        Discover your perfect career by aligning your interests and academic
        background. Receive tailored guidance throughout your journey.
      </p>

      <div>
        <a
          href="/quiz"
          className="btn btn-lg btn-dark rounded-5 px-3 py-2 fw-bold m-2 shadow"
          aria-label="Start your personalized career journey"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-once="ture">
          Start Your Journey
        </a>

        <a
          href="#video"
          className="btn btn-lg btn-outline-dark rounded-5 px-3 py-2 fw-bold m-2 shadow"
          aria-label="Watch an introductory video about Futuride"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="700"
          data-aos-duration="1000"
          data-aos-once="ture">
          Watch Video
        </a>
      </div>
    </div>
  );
};

export default Hero;
