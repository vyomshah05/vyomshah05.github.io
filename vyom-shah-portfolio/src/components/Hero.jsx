import heroImg from "../assets/hero.png";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import mailIcon from "../assets/icons/mail.png";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero__overlay" />

      <nav className="topbar">
        <div className="topbar__name">Vyom Shah</div>

        <div className="topbar__links">
          <a
            className="topbar__link"
            href="https://github.com/vyomshah05"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img className="topbar__icon" src={githubIcon} alt="" />
            <span>GitHub</span>
          </a>

          <a
            className="topbar__link"
            href="https://linkedin.com/in/vyomshah1"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img className="topbar__icon" src={linkedinIcon} alt="" />
            <span>LinkedIn</span>
          </a>

          <a
            className="topbar__link"
            href="mailto:vyomshah005@gmail.com"
            aria-label="Email"
          >
            <img className="topbar__icon" src={mailIcon} alt="" />
            <span>Mail</span>
          </a>
        </div>
      </nav>

      <div className="hero__content">
        <h1 className="hero__title">Vyom Shah</h1>
        <p className="hero__subtitle">Software Engineer • ML/Systems • UC Irvine</p>
      </div>
    </header>
  );
}
