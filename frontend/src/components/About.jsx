import React from "react";
import "../css/AboutUs.css";

const About = () => {
  return (
    <section
      id="about"
      className="aboutus mb-5 py-5 rounded-4 border"
      loading="lazy"
      aria-labelledby="about-heading">
      <h6 id="about-heading" className="text-center fw-bold fs-1 mb-5">
        About <span className="gradient-text">Futuride</span>
      </h6>

      <p
        className="fs-5 text-center opacity-75 container"
        style={{ maxWidth: "900px" }}>
        <strong>Futuride</strong> is your personalized career navigator designed
        to support <strong>students</strong>, <strong>freshers</strong>, and
        <strong> professionals looking to switch careers</strong>. It helps you
        explore the most suitable professions by aligning your{" "}
        <strong>interests</strong>,<strong> strengths</strong>, and{" "}
        <strong>academic background</strong>.
        <br />
        <br />
        With the power of our <strong>smart quiz</strong> engine and
        <strong> instant career insights</strong>, you’ll make confident
        decisions and discover a fulfilling career path that truly matches your
        goals and personality.
      </p>
    </section>
  );
};

export default About;
