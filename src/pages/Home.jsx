import { NavBar } from "../components/NavBar"
import { useState, useEffect } from "react"
import slide_1 from "../assets/images/home/slider-1.jpg"
import slide_2 from "../assets/images/home/slider-2.jpg"
import slide_3 from "../assets/images/home/slider-3.jpg"
import slide_4 from "../assets/images/home/slider-4.jpg"
import webDevelopment from "../assets/images/home/computer.png"
import graphicDesign from "../assets/images/home/graphic-design.png"
import videoEditing from "../assets/images/home/video-editing.png"
import checkCircle from "../assets/images/home/check-circle.png"
import rightArrow from "../assets/images/home/right-arrow.png"
import { CounterSection } from '../components/CounterSection'
import { WhyExpandableText } from "../components/WhyExpandableText"
import { Footer } from "../components/Footer"
import { ContactForm } from "../components/ContactForm"
import useSlideUp from "../hooks/useSlideUp"
import useIsMobile from "../hooks/useIsMobile"
import useTypingEffect from "../hooks/typingEffect"
import "./home.css"



export function Home() {

    const isMobile = useIsMobile();
    useSlideUp();
    useTypingEffect();

    const images = [slide_1, slide_2, slide_3, slide_4];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(interval);
    }, []);






    return (
        <>
            <NavBar />
            <main>
                <section className="section-1">
                    <div className="space-div"></div>
                    <div className="icon-div">
                        <span className="icon-content">
                            <lord-icon
                                src="https://cdn.lordicon.com/jeuxydnh.json"
                                trigger="in"
                                delay="1000"
                                stroke="bold"
                                state="partial-role"
                                colors="primary:#808080,secondary:#808080"
                                style={{ width: "2.5rem", height: "3rem" }}>
                            </lord-icon>
                            <span>Home</span>
                        </span>
                    </div>
                    <div className="tagline-main">
                        <div className="tagline">
                            <h1>Empowering Your Business with<br />
                                Smart Solutions</h1>
                        </div>
                        <p>Delivering Value with Precision.</p>
                    </div>

                </section>

                <section className="section-2">

                    <div className="leftside-content">
                        <div>
                            <p>We are your one stop destination for everything your business needs to grow from stunning websites to strong digital presence and impactful content.
                                Our services are designed to help small and mid-sized businesses thrive in today’s digital world.
                                We provide clever, dependable, and reasonably priced solutions that are suited to your objectives, regardless of how big or small you are.
                                We take care of the tech, creative, and digital work so you can focus on running your business.
                                With us, your brand gets the attention, performance, and support it deserves.
                            </p>
                            <div className="btn-div">
                                <a href="./pages/contact.html"><button className="btn-contact">We're Here to Help</button></a>
                                <a href="./pages/service.html"><button className="btn-service">Expertise</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="rightside-content">
                        <div className="slides">
                            {images.map((img, index) => (
                                <img key={index} className={`slide ${index === currentSlide ? "active" : ""}`} src={img} alt="Image" />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-3">
                    <CounterSection />
                </section>


                <section className="section-4 slide-up">
                    <h6>What <span>make us </span> <br />Different!</h6>
                    <div className="uni-div-main">

                        <div className="uni-content-wrapper slide-up">
                            <lord-icon
                                src="https://cdn.lordicon.com/eaegfqtv.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#808080"
                                style={{
                                    width: isMobile ? "265px" : "80px",
                                    height: isMobile ? "90px" : "80px"
                                }}>
                            </lord-icon>
                            <div className="uni-content-div">
                                <h3>Cost Effective</h3>
                                <p>We deliver affordable, high quality digital solutions.{isMobile ? '' : <br />}
                                    Smart solutions, real results all within your budget.
                                </p>
                            </div>
                        </div>
                        <div className="uni-content-wrapper slide-up">
                            <lord-icon
                                src="https://cdn.lordicon.com/fjvfsqea.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#808080"
                                style={{
                                    width: isMobile ? "215px" : "80px",
                                    height: isMobile ? "100px" : "80px"
                                }}>
                            </lord-icon>
                            <div className="uni-content-div">
                                <h3>Transparency</h3>
                                <p>What you see is what you get. {isMobile ? "" : <br />}
                                    We believe trust starts with complete transparency.
                                </p>
                            </div>
                        </div>
                        <div className="uni-content-wrapper slide-up">
                            <lord-icon
                                src="https://cdn.lordicon.com/jdgfsfzr.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#808080"
                                style={{
                                    width: isMobile ? "220px" : "80px",
                                    height: isMobile ? "90px" : "80px"
                                }}>
                            </lord-icon>
                            <div className="uni-content-div">
                                <h3>Powered by Youth</h3>
                                <p>Young minds, sharper ideas. {isMobile ? '' : <br />}
                                    We blend curiosity with skill to build impactful solutions.
                                </p>
                            </div>
                        </div>
                        <div className="uni-content-wrapper slide-up">
                            <lord-icon
                                src="https://cdn.lordicon.com/fwkrbvja.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#808080"
                                style={{
                                    width: isMobile ? "253px" : "80px",
                                    height: isMobile ? "90px" : "80px"
                                }}>
                            </lord-icon>
                            <div className="uni-content-div">
                                <h3>Innovation & Creative</h3>
                                <p>We don’t follow trends we set them. {isMobile ? '' : <br />}
                                    Our ideas are original, bold, and built to make you stand out.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>


                <section className="section-5 slide-up">
                    <h6 className="title">Core <span>Services</span></h6>
                    <div className="solutions-grid slide-up">
                        <div className="solution-card">
                            <div className="icon">
                                <img src={webDevelopment} alt="Web Computer" />
                            </div>
                            <h2>Web Development</h2>
                            <p>We build user-friendly websites that boost your brand and bring your ideas to life with creativity and technology.</p>
                            <a href="./pages/service.html">Learn More</a>
                        </div>
                        <div className="solution-card">
                            <div className="icon">
                                <img src={graphicDesign} alt="Graphic Designing" />
                            </div>
                            <h2>Graphic Desgin</h2>
                            <p>We create bold, memorable designs that bring your brand alive with color and clear storytelling.</p>
                            <a href="./pages/service.html">Learn More</a>
                        </div>
                        <div className="solution-card">
                            <div className="icon">
                                <img src={videoEditing} alt="Video Editing" />
                            </div>
                            <h2>Video Editing</h2>
                            <p>We craft engaging videos that combine visuals and sound to capture attention and tell your story.</p>
                            <a href="./pages/service.html">Learn More</a>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <a href="./pages/service.html"><button className="view-all">View Solutions</button></a>
                    </div>
                </section>


                <section className="section-6">
                    <h2>Why us</h2>
                    <div className="why-div">
                        <WhyExpandableText />
                    </div>
                </section>

                <section className="section-7">
                    <div className="main-content-div">
                        <div className="back-div">
                            <div className="top-div">
                                <h2>Start Your Journey <br /> With Us.</h2>
                            </div>
                            <div className="bottom-div">
                                <p>
                                    Excellence isn’t optional — it’s our standard. {isMobile ? "" : <br />}
                                    Connect with us to elevate your vision into reality.
                                </p>

                                <h6 className="typing-effect">Email us at :<a href="mailto:genkit.tech@gmail.com">genkit.tech@gmail.com</a></h6>

                                <h5>Why it Matters ?</h5>
                                <div className="btm-content-wrap">
                                    <div className="btm-content-div">
                                        <li>
                                            <img src={checkCircle} alt="tick" />
                                            <p>Tailored Solutions</p>
                                        </li>
                                        <li>
                                            <img src={checkCircle} alt="tick" />
                                            <p>{ isMobile ? 'Client focused' : 'Client-First Approach' }</p>
                                        </li>
                                        <li>
                                            <img src={checkCircle} alt="tick" />
                                            <p>{ isMobile ? 'Steady Partner' : 'Reliable Partnership' }</p>
                                        </li>
                                    </div>
                                    <div className="btm-content-div">
                                        <li>
                                            <img src={checkCircle} alt="tick" />
                                            <p>Transparent Policies</p>
                                        </li>
                                        <li>
                                            <img src={checkCircle} alt="tick" />
                                            <p>{ isMobile ? 'Creative Edge' : 'Creative Excellence' }</p>
                                        </li>
                                        <li>
                                            <img src={checkCircle} alt="tick" />
                                            <p>Trusted Support</p>
                                        </li>
                                    </div>
                                </div>

                                <h5 className="h5-contact">Let's Work Together</h5>

                                <div className="contact-content-wrap">
                                    <div className="contact-content">
                                        <h4>1</h4>
                                        <div>
                                            <span>Say Hello !</span>
                                            <p>We’re quick to reply and happy to help.</p>
                                        </div>
                                    </div>
                                    <div className="contact-img-div">
                                        <img src={rightArrow} alt="Right-arrow" />
                                    </div>
                                    <div className="contact-content">
                                        <h4>2</h4>
                                        <div>
                                            <span>Explore Ideas</span>
                                            <p>Share your vision, we’ll guide the path.</p>
                                        </div>
                                    </div>
                                    <div className="contact-img-div">
                                        <img src={rightArrow} alt="Right-arrow" />
                                    </div>
                                    <div className="contact-content">
                                        <h4>3</h4>
                                        <div>
                                            <span>Start Building</span>
                                            <p>Your go-ahead put us in Motion.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slide-up">
                        <ContactForm />
                    </div>
                    
                </section>
            </main>
            <Footer />
          


        </>
    )
}