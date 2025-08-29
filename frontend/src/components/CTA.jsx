import React from "react";
import "../css/CTA.css";

const CTA = () => {
  return (
    <div
      className="cta container border text-center rounded-4 py-5 mb-5 shadow"
      aria-labelledby="cta-heading"
      loading="lazy">
      <h4
        id="cta-heading"
        className="fw-bold fs-1 mb-5"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-once="true">
        Ready to Discover Your Dream Career?
      </h4>

      <p
        className="fs-2 fst-italic fw-semibold px-2 px-lg-5 mb-5"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-once="true">
        Take our free career quiz and unlock personalized suggestions tailored
        to your strengths and interests.
      </p>

      <a
        href="/quiz"
        className="btn btn-lg fw-bold rounded-5 btn-dark border-0 shadow gradient-btn"
        role="button"
        aria-label="Start the career quiz"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-once="true">
        Start the Quiz
      </a>
    </div>
  );
};

export default CTA;
