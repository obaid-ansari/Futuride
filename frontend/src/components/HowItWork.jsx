import React from "react";
import Quiz from "../assets/quiz.svg";
import Result from "../assets/result.svg";
import Career from "../assets/career.svg";

const steps = [
  {
    img: Quiz,
    alt: "Take a quiz",
    text: "Answer Questions",
    delay: "100",
  },
  {
    img: Result,
    alt: "View Results",
    text: "See Your Results",
    delay: "200",
  },
  {
    img: Career,
    alt: "Explore Careers",
    text: "Explore Careers",
    delay: "300",
  },
];

const HowItWork = () => {
  return (
    <div className="container py-5 mb-5">
      <div className="row d-flex justify-content-center align-items-center">
        {/* Text Content */}
        <div
          className="col-12 col-lg-3"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-once="ture">
          <h3 className="fw-bold fs-2 mb-3">How It Works</h3>
          <ol className="ps-3">
            <li className="mb-2">
              Complete a simple quiz to understand your interests and strengths.
            </li>
            <li className="mb-2">
              View career paths that align with your personality and academics.
            </li>
            <li className="mb-2">
              Discover growth, salary, and role insights for each career option.
            </li>
          </ol>
        </div>

        {/* Step Cards */}
        <div className="col-12 col-lg-8 d-flex justify-content-center flex-wrap gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-4 p-4 text-center"
              style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 12px 0px inset, rgba(191, 191, 191, 0.3) -3px -3px 12px 1px inset",
                width: "250px",
              }}
              data-aos="zoom-out-up"
              data-aos-offset="0"
              data-aos-delay={step.delay}
              data-aos-duration="1000"
              data-aos-once="true">
              <img src={step.img} alt={step.alt} height="120" loading="lazy" />
              <p className="fw-bold fs-5 mt-3 mb-0">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
