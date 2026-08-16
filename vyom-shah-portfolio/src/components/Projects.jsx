import useInView from "../hooks/useInView";
import "./Projects.css";
import placeholderImg from "../assets/hero.png";

import Cam from "../assets/projects/cam.png";
import TEP from "../assets/projects/tep.png";
import Measily from "../assets/projects/measily.png";
import Vroom from "../assets/projects/vroom.jpg";
import Lingo from "../assets/projects/lingo.jpg";
import Zot from "../assets/projects/zot.jpg";
import Gyro from "../assets/projects/gyro.png";
import File from "../assets/projects/file_sys.png";
import Resume from "../assets/projects/resume.png";
import Navigator from "../assets/projects/navigator.png";
import Lockstep from "../assets/projects/lockstep.png";
import Residue from "../assets/projects/residue.png";

const projects = [
    {
        name: "Lockstep",
        blurb: "An MCP to reduce syntax-based hallucinations",
        image: Lockstep,
        tech: "Python, FastAPI, FastMCP, MCP, Anthropic Claude, Supabase, PostgreSQL, PostgREST, pgvector, Redis Stack, RediSearch, RedisBloom, sentence-transformers, all-MiniLM-L6-v2, KeyBERT, YAKE, NumPy, React, TypeScript, Vite, Tailwind CSS, Sentry, GitHub Actions, Render",
        links: {
            github: "https://github.com/vyomshah05/lockstep",
            demo: "https://www.youtube.com/watch?v=YS1SB8UrKaA&time_continue=0&source_ve_path=NzY3NTg&embeds_referring_euri=https%3A%2F%2Fvyomshah05.github.io%2F",
            live: "https://vyomshah05.github.io/lockstep"
        },
    },
    {
        name: "Residue",
        blurb: "A personalized acoustic intelligence app for studying",
        image: Residue,
        tech: "Next.js, React, Tailwind CSS, Web Audio API, Screen Capture API, MongoDB, MongoDB Atlas Vector Search, Fetch.ai uAgents, ASI1-Mini, ElevenLabs, ZETIC Melange, Python",
        links: {
            github: "https://github.com/MaanPatel2005/Residue",
            demo: "https://www.youtube.com/watch?v=dgqo7zdmHD0&time_continue=0&source_ve_path=NzY3NTg&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F"
        },
    },
    {
        name: "Measily",
        blurb: "An interactive medical diagnostic platform",
        image: Measily,
        tech: "HTML, CSS, JavaScript, Three.js, Python, Flask, Groq, Google Gemini API, Local JSON storage",
        links: {
            github: "https://github.com/vyomshah05/MEasily",
            demo: "https://www.linkedin.com/feed/update/urn:li:activity:7322774971959623680/",
            devpost: "https://devpost.com/software/measily"
        },
    },
    {
        name: "VroomMates",
        blurb: "Carpool route planning webapp",
        image: Vroom,
        tech: "React, JavaScript, Google Maps API, Python, Flask, Google Datastore",
        links: {
            github: "https://github.com/jonnypan2325/VroomMates",
            devpost: "https://devpost.com/software/vroommates"
        },
    },
    {
        name: "Lingo Live",
        blurb: "An interactive Real-time translation tool",
        image: Lingo,
        tech: "AWS, firebase, google-web-speech-api, google.generativeai, React, json, python",
        links: {
            github: "https://github.com/jonnypan2325/LingoLive",
            devpost: "https://devpost.com/software/lingolive",
            demo: "https://www.youtube.com/watch?v=VgcqeA-1SGo"
        },
    },
    {
        name: "ZotNotes",
        blurb: "A comprehensive learning experience platform",
        image: Zot,
        tech: "LangChain, Firebase, HTML, JavaScript, CSS, Python, React, Zilliz",
        links: {
            github: "https://github.com/vicksey/ZotNotes",
            devpost: "https://devpost.com/software/zotnotes"
        },
    },
    {
        name: "Gyro Maze",
        blurb: "A handheld motion-controlled maze game",
        image: Gyro,
        tech: "ESP32 (TTGO), IMU sensors, IoT devices, embedded C++, Wi-Fi, Microsoft Azure",
        links: {
            github: "https://github.com/vyomshah05/Gyro_Maze",
            demo: "https://drive.google.com/file/d/1uQYdaZd8vMwwliB8UuHKXI5Kv4btVXlp/view"
        },
    },
    {
        name: "Camera Geolocation",
        blurb: "Multi-camera triangulation pipeline",
        image: Cam,
        tech: "Python, NumPy, OpenCV, SciPy, MatPlotLib",
        links: {
            github: "https://github.com/vyomshah05/Camera_Geolocation"
        },
    },
    {
        name: "ML-based Cancer Classifier",
        blurb: "Cancer Classification From Tumor Platelet RNA",
        image: TEP,
        tech: "Python, scikit-learn, Pandas",
        links: {
            github: "https://github.com/vyomshah05/184_final_project",
            // devpost omitted
            // demo omitted
        },
    },
    {
        name: "File System",
        blurb: "A custom in-memory file system implementation",
        image: File,
        tech: "Python, Object-Oriented Programming, Data Structures, Algorithms, Unit Testing, Operating Systems",
        links: {
            github: "https://github.com/vyomshah05/File-System"
        },
    },
    {
        name: "Resume Tweaker",
        blurb: "A LaTex Job Description-based Resume Tweaker Chrome Extension",
        image: Resume,
        tech: "Python, google.generativeai, React, json, web-scraping",
        links: {
            github: "https://github.com/vyomshah05/Resume-Tweaker",
            demo: "https://youtu.be/BNJn_JOKxiA"
        },
    },
    {
        name: "NaviGator",
        blurb: "Weather aware Intelligent event discovery and ranking system",
        image: Navigator,
        tech: "Python,FastAPI, google.generativeai, Firebase, React Native, Expo",
        links: {
            github: "https://github.com/vyomshah05/NaviGator"
        },
    },
];

export default function Projects() {
    const [ref1, inView1] = useInView({ threshold: 0.1 });
    const [ref2, inView2] = useInView({ threshold: 0.1 });
    const [ref3, inView3] = useInView({ threshold: 0.1 });
    const [ref4, inView4] = useInView({ threshold: 0.1 });
    const [ref5, inView5] = useInView({ threshold: 0.1 });
    const [ref6, inView6] = useInView({ threshold: 0.1 });
    const [ref7, inView7] = useInView({ threshold: 0.1 });
    const [ref8, inView8] = useInView({ threshold: 0.1 });
    const [ref9, inView9] = useInView({ threshold: 0.1 });
    const [ref10, inView10] = useInView({ threshold: 0.1 });
    const [ref11, inView11] = useInView({ threshold: 0.1 });
    const [ref12, inView12] = useInView({ threshold: 0.1 });

    return (
        <section id="projects" className="projects">
            <div className="projects__container">
                <h2 className="projects__title">Projects</h2>

                <div className="projects__grid">
                    {projects.map((p, index) => {
                        const refs = [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12];
                        const inViews = [inView1, inView2, inView3, inView4, inView5, inView6, inView7, inView8, inView9, inView10, inView11, inView12];
                        
                        return (
                            <article key={p.name} ref={refs[index]} className={`projectCard reveal ${inViews[index] ? 'is-visible' : ''}`}>
                                {/* FRONT */}
                                <div
                                    className="projectCard__front"
                                    style={{ backgroundImage: `url(${p.image || placeholderImg})` }}
                                >
                                    <div className="projectCard__fade" />
                                    <div className="projectCard__frontContent">
                                        <div className="projectCard__name">{p.name}</div>
                                        <div className="projectCard__blurb">{p.blurb}</div>
                                    </div>
                                </div>

                                {/* BACK */}
                                <div className="projectCard__back">
                                    <div className="projectCard__backTitle">Tech Stack</div>
                                    <div className="projectCard__tech">{p.tech}</div>

                                    <div className="projectCard__links">
                                        {p.links?.github && (
                                            <a href={p.links.github} target="_blank" rel="noreferrer">
                                                GitHub
                                            </a>
                                        )}
                                        {p.links?.devpost && (
                                            <a href={p.links.devpost} target="_blank" rel="noreferrer">
                                                Devpost
                                            </a>
                                        )}
                                        {p.links?.demo && (
                                            <a href={p.links.demo} target="_blank" rel="noreferrer">
                                                Demo Video
                                            </a>
                                        )}
                                        {p.links?.live && (
                                            <a href={p.links.live} target="_blank" rel="noreferrer">
                                                Live Site
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
