import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import About from "./About";

const Footer = ({ isDark }) => {
  return (
    <footer
      className={`container rounded-4 border p-3 pb-0 shadow mb-4 ${
        isDark ? "bg-dark" : "bg-light"
      }`}
      aria-label="Footer">
      {/* About us components */}
      <About />

      <section className="footer row">
        {/* Branding Section */}
        <div className="col-12 col-lg-6 col-md-6 d-flex flex-column justify-content-center">
          <a
            href="/"
            className={`fs-3 fw-bold d-flex align-items-center text-decoration-none ${
              isDark ? "text-light" : "text-dark"
            }`}
            aria-label="Futuride">
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
              <FaGithub size={35} color={isDark ? "#ffffff" : "#000000"} />
            </a>
            <a
              href="https://www.linkedin.com/in/obaid-ansari-a37b60278/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn">
              <FaLinkedin size={35} color={isDark ? "#00a6ffff" : "#0072b1"} />
            </a>
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
                className={`footer-link ${
                  isDark ? "text-light" : "text-dark"
                } text-decoration-none mb-2 fs-5`}>
                {link.name}
              </a>
            ))}
          </div>
          <div className="d-flex flex-column">
            <p className="fw-semibold fs-4 mb-3">Links</p>
            {[
              { name: "Quiz Page", href: "/quiz" },
              { name: "Videos", href: "#video" },
              { name: "How It Works", href: "#howitworks" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`footer-link ${
                  isDark ? "text-light" : "text-dark"
                } text-decoration-none mb-2 fs-5`}>
                {link.name}
              </a>
            ))}
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
