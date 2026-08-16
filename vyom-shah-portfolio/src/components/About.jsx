import meImg from "../assets/me.jpg";
import useInView from "../hooks/useInView";
import "./About.css";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="about">
      <div ref={ref} className={`about__container reveal reveal--up ${inView ? 'is-visible' : ''}`}>
        <div className="about__imageWrapper">
          <img src={meImg} alt="Vyom Shah" className="about__image" />
        </div>

        <div className="about__content">
          <h2 className="about__title">About Me</h2>

          <p className="about__text">
            I’m a Software Engineer and Computer Science graduate of UC Irvine with a strong focus
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