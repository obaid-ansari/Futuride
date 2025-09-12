import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Header.css";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ toggleTheme, isDark }) => {
  const [isToggled, setIsToggled] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsToggled(false);
    }
  };

  useEffect(() => {
    if (isToggled) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isToggled]);

  // Smooth scroll handler with cross-page navigation
  const handleScroll = (id) => {
    setIsToggled(false);

    if (location.pathname !== "/") {
      // Navigate to home and pass section id
      navigate("/", { state: { section: id } });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      <nav
        id="nav"
        className="navbar navbar-expand-md rounded-5 p-2 px-0 shadow"
        ref={navRef}
        aria-label="Main Navigation"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          backgroundColor: isDark
            ? "rgba(16, 16, 17,0.3)"
            : "hsla(0, 0%, 93%, 0.3)",
        }}
        data-aos="fade"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-once="ture">
        <div className="container">
          <a
            href="/"
            className={`nav-brand text-decoration-none fs-5 fw-bold d-flex justify-content-center align-items-center ${
              isDark ? "text-light" : "text-dark"
            }`}
            aria-label="Futuride Homepage">
            <img src="/favicon.webp" alt="Futuride logo" height={45} />
            Futuride
          </a>

          <div className="d-flex justify-content-center align-items-center flex-row-reverse">
            {/* Mobile hamburger toggle */}
            <button
              className="mobile-toggler d-md-none border-0 bg-transparent p-2"
              type="button"
              aria-label={isToggled ? "Close menu" : "Open menu"}
              aria-expanded={isToggled}
              aria-controls="navbarNav"
              onClick={() => {
                setIsToggled(!isToggled);
              }}>
              <div className={`hamburger ${isToggled ? "open" : ""}`}>
                <span></span>
                <span></span>
              </div>
            </button>

            {/* Theme toggle (mobile) */}
            <button
              onClick={toggleTheme}
              className="btn d-block d-md-none border-0"
              aria-label="Toggle dark or light mode">
              {isDark ? (
                <MdOutlineLightMode style={{ color: "white" }} size={30} />
              ) : (
                <MdLightMode size={30} />
              )}
            </button>
          </div>

          <div
            className={`collapse navbar-collapse ${isToggled ? "show" : ""}`}
            id="navbarNav">
            <ul
              className="navbar-nav ms-auto"
              onClick={(e) => {
                if (!e.target.closest(".dropdown")) setIsToggled(false);
              }}>
              <li className="nav-item">
                <button
                  className={`nav-link ps-3 ps-lg-0 fw-semibold text-center bg-transparent border-0 ${
                    isDark ? "text-light" : "text-dark"
                  }`}
                  onClick={() => handleScroll("home")}>
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ps-3 ps-lg-2  fw-semibold text-center bg-transparent border-0 ${
                    isDark ? "text-light" : "text-dark"
                  }`}
                  onClick={() => handleScroll("about")}>
                  About
                </button>
              </li>

              {/* Theme toggle (desktop) */}
              <li className="nav-item d-none d-md-block">
                <button
                  onClick={toggleTheme}
                  className="btn border-0"
                  aria-label="Toggle dark or light mode">
                  {isDark ? (
                    <MdOutlineLightMode style={{ color: "white" }} size={30} />
                  ) : (
                    <MdLightMode size={30} />
                  )}
                </button>
              </li>

              {/* Call to Action */}
              <li className="nav-item">
                <a
                  href="/quiz"
                  className="btn btn-dark rounded-5 mb-lg-0 mb-1 px-3 py-2 fw-bold d-flex justify-content-center align-items-center shadow"
                  aria-label="Take the Futuride Quiz">
                  Take Quiz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
