import { useEffect, useState } from "react";
import heroImg from "../assets/hero.png";
import varioImg from "../assets/vario.png";
import varioMove from "../assets/vario_move.gif";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import mailIcon from "../assets/icons/mail.png";
import "./Hero.css";

export default function Hero({ onResetAnimations }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNameClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Wait for scroll to complete at the top before resetting animations
        const checkScrollComplete = () => {
            if (window.scrollY === 0) {
                if (onResetAnimations) {
                    onResetAnimations();
                }
            } else {
                requestAnimationFrame(checkScrollComplete);
            }
        };
        
        requestAnimationFrame(checkScrollComplete);
    };

    return (
        <header className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
            <div className="hero__overlay" />

            <nav className={`topbar ${scrolled ? "topbar--fixed" : ""}`}>
                <div className="topbar__left">
                    <div className="topbar__name" onClick={handleNameClick} style={{ cursor: 'pointer' }}>
                        <img src={varioMove} alt="Vario" className="topbar__logo" />
                        Vyom Shah
                    </div>

                    <div className="topbar__nav">
                        <a href="#about">About Me</a>
                        <a href="#education">Education</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                    </div>
                </div>

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
