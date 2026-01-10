import meImg from "../assets/me.jpg";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* Left: image */}
        <div className="about__imageWrapper">
          <img src={meImg} alt="Vyom Shah" className="about__image" />
        </div>

        {/* Right: text */}
        <div className="about__content">
          <h2 className="about__title">About Me</h2>

          <p className="about__text">
            I’m a Computer Science undergraduate at UC Irvine with a strong focus
            on software engineering, machine learning, and systems. I’ve worked
            across backend development, distributed systems, and applied AI,
            building production-ready software through internships and research.
            <br /><br />
            My interests include scalable system design, ML-driven applications,
            and building tools that turn complex data into reliable, real-world
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
