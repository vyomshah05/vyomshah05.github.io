import useInView from "../hooks/useInView";
import "./Experience.css";
import Aerlync from "../assets/logos/aerlync.png";
import Zepto from "../assets/logos/zepto.png";
import CARL from "../assets/logos/carl.png";
import AI from "../assets/logos/aiuci.png";
import DB from "../assets/logos/db.jpeg";
import Cactus from "../assets/logos/cactus.png";

export default function Experience() {
    const [ref0, inView0] = useInView({ threshold: 0.1 });
    const [ref1, inView1] = useInView({ threshold: 0.1 });
    const [ref2, inView2] = useInView({ threshold: 0.1 });
    const [ref3, inView3] = useInView({ threshold: 0.1 });
    const [ref4, inView4] = useInView({ threshold: 0.1 });
    const [ref5, inView5] = useInView({ threshold: 0.1 });

    return (
        <section id="experience" className="experience">
            <h2 className="section_title">Experience</h2>
            <div ref={ref0} className={`experience__container reveal reveal--right ${inView0 ? 'is-visible' : ''}`}>
                <div className="experience__company">
                    <img src={Cactus} alt="Cactus Logo" className="experience__logo" />

                    <div className="experience__details">
                        Core Contributor
                    </div>

                    <div className="experience__date">
                        January 2026 - Present
                    </div>

                </div>

                <div className="experience__divider" />

                <div className="experience__details">
                    <div className="experience__information">
                        <div ><strong>Accomplishments:</strong> </div>
                        <ul>
                            <li>Fixed FP16 NEON reduction precision bug by upcasting to FP32; added tests and validated correctness across parallel backends.</li>
                            <li>Benchmarked and optimized FP16/INT8 kernels on Apple M2, reaching &gt;450 GFLOPS matmul and validating LLM + ASR TPS and memory metrics.</li>
                            <li>Contributed to cross-platform ML infrastructure (macOS/iOS/Android), debugging SIMD, threading, builds, and CI workflows.</li>
                        </ul>
                        <div ><strong>Github:</strong> </div>
                        <ul>
                            <a href="https://github.com/cactus-compute/cactus">
                                Cactus Compute
                            </a>
                        </ul>
                        <div ><strong>Technologies:</strong> </div>
                        <ul>
                            C++, ARM NEON SIMD, FP16/FP32 mixed precision, INT8 quantization
                        </ul>
                    </div>
                </div>
            </div>

            
            <div ref={ref1} className={`experience__container reveal reveal--right ${inView1 ? 'is-visible' : ''}`}>
                <div className="experience__company">
                    <img src={Aerlync} alt="Aerlync Labs Logo" className="experience__logo" />

                    <div className="experience__details">
                        Software Engineer Intern
                    </div>

                    <div className="experience__date">
                        June 2025 - September 2025
                    </div>

                </div>

                <div className="experience__divider" />

                <div className="experience__details">
                    <div className="experience__information">
                        <div ><strong>Accomplishments:</strong> </div>
                        <ul>
                            <li>Engineered embedded IoT systems in C with multi-threading, TCP/IP networking, and memory optimization, boosting system performance by 40%</li>
                            <li>Automated deployment workflows with Python, Bash, PowerShell, and Node.js, reducing manual workload by 60%</li>
                            <li>Integrated observability dashboards (Prometheus, Grafana) into microservices, enabling real-time debugging and traffic anomaly detection across distributed systems</li>
                        </ul>
                        <div ><strong>Technologies:</strong> </div>
                        <ul>
                            C, Python, Bash, PowerShell, Node.js, Prometheus, Grafana
                        </ul>
                    </div>
                </div>
            </div>
            <div ref={ref2} className={`experience__container reveal reveal--right ${inView2 ? 'is-visible' : ''}`}>
                <div className="experience__company">
                    <img src={Zepto} alt="Zepto Digital Labs Logo" className="experience__logo" />

                    <div className="experience__details">
                        AI Software Engineer Intern
                    </div>

                    <div className="experience__date">
                        June 2024 - September 2024
                    </div>

                </div>

                <div className="experience__divider" />

                <div className="experience__details">
                    <div className="experience__information">
                        <div ><strong>Accomplishments:</strong> </div>
                        <ul>
                            <li>
                                Built AI-powered data pipelines in Python to ingest, process, and analyze large datasets used for machine learning and decision systems
                            </li>
                            <li>
                                Developed and deployed LLM-backed cloud inference services using FastAPI, Docker, and GCP, supporting real-time model and agent execution
                            </li>
                            <li>
                                Integrated A/B testing, telemetry, and analytics to validate model behavior and drive continuous optimization
                            </li>
                        </ul>

                        <div ><strong>Technologies:</strong> </div>
                        <ul>
                            Python, Docker, Google Cloud Platform (GCP), Large Language Models (LLMs), PyTorch, Hugging Face Transformers, Google T5
                        </ul>
                    </div>
                </div>
            </div>

            <h2 className="section_title">Research</h2>
            <div ref={ref3} className={`experience__container reveal reveal--right ${inView3 ? 'is-visible' : ''}`}>
                <div className="experience__company">
                    <img src={CARL} alt="CARL" className="research__logo" />

                    <div className="experience__details">
                        Neural Networks Research Assistant
                    </div>

                    <div className="experience__date">
                        January 2025 - Present
                    </div>

                </div>
                
                <div className="experience__divider" />

                <div className="experience__details">
                    <div className="experience__information">
                        <div ><strong>Accomplishments:</strong> </div>
                        <ul>
                            <li>
                                Simulated brain-inspired spiking neural networks in C++ using parallelization and memory-efficient algorithms
                            </li>
                            <li>
                                Deployed reproducible experiments with Docker on Linux, standardizing workflows across research teams
                            </li>
                            <li>
                                Contributed modular, documented C++ code used in peer-reviewed publication
                            </li>
                        </ul>

                         <div ><strong>Github:</strong> </div>
                        <ul>
                            <a href="https://github.com/UCI-CARL/CARLsim6/tree/feat/synfire">
                                CARLsim6 Synfire Chain Simulation
                            </a>
                        </ul>

                        <div ><strong>Publication:</strong> </div>
                        <ul>
                            <li>
                                <a href="https://www.researchgate.net/publication/396716486_A_Multi-Threading_Kernel_for_Enabling_Neuromorphic_Edge_Applications" target="_blank" rel="noopener noreferrer">
                                    "A Multi-Threading Kernel for Enabling Neuromorphic Edge Applications"
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 className="section_title">Leadership</h2>

            <div ref={ref4} className={`experience__container reveal reveal--right ${inView4 ? 'is-visible' : ''}`}>
                <div className="experience__company">
                    <img src={AI} alt="AI UCI Logo" className="experience__logo" />
                    <div className="experience__details">
                        Vice President
                    </div>

                    <div className="experience__date">
                        May 2025 - Present
                    </div>

                </div>
                
                <div className="experience__divider" />

                <div className="experience__details">
                    <div className="experience__information">
                        <div ><strong>Accomplishments:</strong> </div>
                        <ul>
                            <li>
                                Led and restructured a 30+ member board into specialized committees that improved project coordination, mentorship, and execution efficiency
                            </li>
                            <li>
                                Launched partnerships with startups, research labs, and venture firms, creating hands-on AI project opportunities, internships, and events such as an AI startup hackathon hosted at Sunstone Cities VC
                            </li>
                            <li>
                                Grew the club’s digital presence to 1,000+ followers and 10,000+ post views
                            </li>
                            <li>
                                Organized and delivered AI workshops with 100+ participants, providing accessible, hands-on learning experiences for students at all levels
                            </li>
                        </ul>

                         <div > <a href="https://aiclub.ics.uci.edu/" target="_blank" rel="noopener noreferrer"><strong>Club Website</strong></a> </div>
                    </div>
                </div>
            </div>

            <div ref={ref5} className={`experience__container reveal reveal--right ${inView5 ? 'is-visible' : ''}`}>
                <div className="experience__company">
                    <img src={DB} alt="UCI DB" className="experience__logo" />
                    <div className="experience__details">
                        Discrete Math Lead Learning Assistant
                    </div>

                    <div className="experience__date">
                        Dec 2025 - March 2026
                    </div>

                </div>
                
                <div className="experience__divider" />

                <div className="experience__details">
                    <div className="experience__information">
                        <div ><strong>Accomplishments:</strong> </div>
                        <ul>
                            <li>
                                Onboarded and organized the upcoming learning assistant cohort for the course
                            </li>
                            <li>
                                Guided students through challenging problem sets in-lecture, consisting of 300+ students
                            </li>
                            <li>
                                Held personal office hours, helping students one-on-one through discrete math concepts and problems
                            </li>
                            <li>
                                Proctored and helped organize examinations
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
