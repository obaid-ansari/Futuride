import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = ({ isDark }) => {
  return (
    <footer
      className={`container rounded-4 border p-3 pb-0 shadow mb-4 ${
        isDark ? "bg-dark" : "bg-light"
      }`}
      aria-label="Footer">
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
          <strong>Futuride</strong> is your personalized career navigator
          designed to support <strong>students</strong>,{" "}
          <strong>freshers</strong>, and
          <strong> professionals looking to switch careers</strong>. It helps
          you explore the most suitable professions by aligning your{" "}
          <strong>interests</strong>,<strong> strengths</strong>, and{" "}
          <strong>academic background</strong>.
          <br />
          <br />
          With the power of our <strong>smart quiz</strong> engine and
          <strong> instant career insights</strong>, you’ll make confident
          decisions and discover a fulfilling career path that truly matches
          your goals and personality.
        </p>
      </section>

      <section className="footer row">
        {/* Branding Section */}
        <div
          className="col-12 col-lg-6 col-md-6 d-flex flex-column justify-content-center"
          aria-label="Branding">
          <a
            href="/"
            className={`fs-3 fw-bold d-flex align-items-center text-decoration-none ${
              isDark ? "text-light" : "text-dark"
            }`}
            aria-label="Futuride Homepage">
            <img
              src="/favicon.webp"
              alt="Futuride logo"
              height={50}
              className="me-2"
            />
            Futuride
          </a>
          <p className="ps-2 my-2 lead">
            Discover your future career path with confidence.
          </p>
          <div className="ps-2 fs-3 d-flex gap-3" aria-label="Social Links">
            <a
              href="https://github.com/obaid-ansari"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub">
              <FaGithub
                size={35}
                style={{
                  color: "#555",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/obaid-ansari-a37b60278/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn">
              <FaLinkedin
                size={35}
                style={{
                  color: "#555",
                }}
              />
            </a>
            {/* <a
              href=""
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram">
              <FaInstagram
                size={35}
                style={{
                  color: "#000",
                }}
              />
            </a> */}
          </div>
        </div>

        {/* Links Section */}
        <div
          className="col-12 col-lg-6 col-md-6 d-flex justify-content-evenly align-items-start mt-lg-0 mt-5"
          aria-label="Footer Navigation">
          <div className="d-flex flex-column">
            <p className="fw-semibold fs-4 mb-3">Links</p>
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Features", href: "#features" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${
                  isDark ? "text-light" : "text-dark"
                } text-decoration-none mb-2 fs-5`}>
                {link.name}
              </a>
            ))}
          </div>
          <div className="d-flex flex-column">
            <p className="fw-semibold fs-4 mb-3">Links</p>
            <a
              href="/quiz"
              className={`${
                isDark ? "text-light" : "text-dark"
              } text-decoration-none mb-2 fs-5`}>
              Quiz Page
            </a>
            <a
              href="#video"
              className={`${
                isDark ? "text-light" : "text-dark"
              } text-decoration-none mb-2 fs-5`}>
              Videos
            </a>
            <a
              href="#howitworks"
              className={`${
                isDark ? "text-light" : "text-dark"
              } text-decoration-none mb-2 fs-5`}>
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <hr />
      <p className="text-center fs-5 lead">
        © 2025 <strong>Futuride</strong>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
