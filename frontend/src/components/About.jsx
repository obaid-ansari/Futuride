import React from "react";

const About = () => {
  return (
    <div className="aboutus mb-5 pb-5" aria-labelledby="about-heading">
      <h6 id="about-heading" className="text-center fw-bold fs-1 my-5">
        About <span className="gradient-text">Futuride</span>
      </h6>

      <p
        className="fs-5 text-center m-auto opacity-75"
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
    </div>
  );
};

export default About;
