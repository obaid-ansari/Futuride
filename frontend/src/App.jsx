import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWork from "./components/HowItWork";
import Progress from "./components/Progress";
import CTA from "./components/CTA";
import Video from "./components/Video";
import Footer from "./components/Footer";
import Quiz from "./pages/Quiz";
import "./App.css";

const App = () => {
  // Initialize theme before first render to avoid flash
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      return true;
    }
    return false;
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark-mode", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <Router>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <main>
                <section id="home">
                  <Hero isDark={isDark} />
                </section>
                <section id="features">
                  <Features isDark={isDark} loading="lazy" />
                </section>
                <section id="progress">
                  <Progress isDark={isDark} loading="lazy" />
                </section>
                <section id="howitworks">
                  <HowItWork isDark={isDark} loading="lazy" />
                </section>
                <section id="cta">
                  <CTA isDark={isDark} loading="lazy" />
                </section>
                <section id="video">
                  <Video isDark={isDark} loading="lazy" />
                </section>
              </main>
              <Footer isDark={isDark} loading="lazy" />
            </>
          }
        />

        {/* Quiz Page */}
        <Route path="/quiz" element={<Quiz isDark={isDark} loading="lazy" />} />
      </Routes>
    </Router>
  );
};

export default App;
