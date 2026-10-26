import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About"
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./styles/global.css";
import "./styles/animations.css";

export default function App() {
  const [animationKey, setAnimationKey] = useState(0);

  const resetAnimations = () => {
    setAnimationKey(prev => prev + 1);
  };

  return (
    <>
      <Hero onResetAnimations={resetAnimations} />
      <About key={`about-${animationKey}`} />
      <Experience key={`experience-${animationKey}`} />
      <Education key={`education-${animationKey}`} />
      <Projects key={`projects-${animationKey}`} />
    </>
  )
}
