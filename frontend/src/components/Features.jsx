import React from "react";
import {
  FaUserCheck,
  FaClipboardList,
  FaBolt,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

import "../css/Feature.css";

const featuresData = [
  {
    icon: <FaUserCheck size={40} />,
    gradient: ["#f55c57", "#fda388ff", "#f55c57"],
    delay: "100",
    title: "Personalized Career Guidance",
    desc: "Get recommendations based on your unique interests and strengths.",
  },
  {
    icon: <FaClipboardList size={40} />,
    gradient: ["#69a5ff", "#87cef8ff", "#69a5ff"],
    delay: "200",
    title: "Smart Career Quiz",
    desc: "Take a quick and effective quiz to discover your best-fit career options.",
  },
  {
    icon: <FaBolt size={40} />,
    gradient: ["#b653e7", "#e67ef6ff", "#b653e7"],
    delay: "300",
    title: "Instant Results",
    desc: "No waiting. See your suggestions immediately after the quiz.",
  },
  {
    icon: <FaChartLine size={40} />,
    gradient: ["#ff8d3c", "#f7b881ff", "#ff8d3c"],
    delay: "400",
    title: "Growth-Oriented Insights",
    desc: "Learn about trending fields, job roles, and skill paths.",
  },
  {
    icon: <FaUsers size={40} />,
    gradient: ["#ff6e82", "#fa9ea9ff", "#ff6e82"],
    delay: "500",
    title: "For Students & Switchers",
    desc: "Whether you’re just starting out or changing directions, we’re here for you.",
  },
];

const Features = ({ isDark }) => {
  return (
    <div className="feature container d-flex justify-content-center flex-column align-items-center px-lg-5 mt-4">
      <h2 id="features-heading" className="text-center fw-bold my-5 fs-1">
        Key Features
      </h2>
      <div className="features-card-container px-0 px-lg-5 pb-4">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`rounded-4 p-4 shadow text-center card-${index + 1}`}
            style={{
              backgroundImage: `linear-gradient(to right bottom, ${feature.gradient[0]}, ${feature.gradient[1]} ,${feature.gradient[2]}`,
              textShadow: isDark
                ? "0 2px 3px rgba(255, 255, 255, 0.1)"
                : "none",
            }}
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay={feature.delay}
            data-aos-duration="1000"
            data-aos-once="ture">
            <div className="my-2">{feature.icon}</div>
            <p className="fs-4 fw-bold my-2">{feature.title}</p>
            <p className="fs-5 my-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
