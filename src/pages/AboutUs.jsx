import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer"
import useIsMobile from "../hooks/useIsMobile";
import aboutContainerImg from "../assets/images/about/about-container-img.jpg"
import aboutUsImg from "../assets/images/about/about-us.jpg"
import aboutUsImg2 from "../assets/images/about/about-us-2.jpg"
import useSlideUp from "../hooks/useSlideUp";
import "./about.css"


export function AboutUs() {

    const isMobile = useIsMobile();
    useSlideUp();



    return (
        <>
            <NavBar />
            <main>
                <section className="section-1">
                    <div className="space-div"></div>
                    <div className="icon-div">
                        <span className="icon-content">
                            <lord-icon
                                src="https://cdn.lordicon.com/vqhlecvy.json"
                                trigger="in"
                                delay="500"
                                stroke="bold"
                                state="in-reveal"
                                colors="primary:#808080,secondary:#808080"
                                style={{ width: '2.5rem', height: '3rem' }}>
                            </lord-icon>
                            <span>About Us</span>
                        </span>
                    </div>
                    <div className="tagline-main">
                        <div className="tagline">
                            <h1>Bringing experience and passion<br />to your business.</h1>
                        </div>
                        <p>{isMobile ? "Transforming Vision into Reality." : "Turning Ambitions into Achievements."}</p>
                    </div>
                </section>


                <section className="section-2-about slide-up">
                    <img src={ aboutContainerImg } alt="Workspace" />
                </section>

                
                <section className="section-3-about slide-up">
                    <h6>Built <span>Together</span></h6>
                    <div className="content-wrapper-about">
                        <div className="content-about image-content-about about-us-img image-1">
                            <img src={ aboutUsImg } alt="Ideas" />
                        </div>
                        <div className="content-about text-content-about slide-up text-1">
                            <h2>June 2024, The Rise of a Vision.</h2>
                            <ul>
                                <li>
                                     Eight close friends from school who were passionate about technology, creative, and ambitious came together to create <span>Genkit</span>. What began as informal brainstorming sessions quickly developed into something more: a team effort to create a startup that provides significant services.
                                </li>
                                <li>
                                    <span>Our first milestone?</span> Building our own digital home the Genkit website a symbol of our unity, ambition, and the journey ahead.
                                </li>
                                <li>
                                We started our journey in June 2024 by imagining and planning our digital home, a daring first step toward the future we dared to create, with no predetermined roadmap but unbridled passion.
                                </li>
                            </ul>
                        </div>
                        <div className="content-about text-content-about slide-up text-2">
                            <h2>Our Current Chapter</h2>
                            <ul>
                                <li>
                                    From sparks of imagination to real collaboration, Genkit has transformed from an idea into a growing force.
                                </li>
                                <li>
                                    <span>our Ten member team</span> bonded by years of friendship and a shared dream is actively building our brand, shaping our digital presence, and laying the groundwork for innovative services.
                                </li>
                                <li>
                                    This chapter marks more than progress it’s a testament to our belief in learning, growing, and building — together. Every line of code, every idea shared, is a step closer to the future we envisioned.
                                </li>
                            </ul>
                        </div>
                        <div className="content-about image-content-about about-us-img image-2">
                            <img src={ aboutUsImg2 } alt="Team" />
                        </div>
                    </div>
                    <div className="line-div"></div>
                </section>


               
                {/* <section className="section-4 slide-up section-4-about">
                    <h6>What <span>make us </span>Different!</h6>
                    <div className="uni-div-main">

                        <div className="uni-content-wrapper slide-up">
                            <lord-icon
                                src="https://cdn.lordicon.com/eaegfqtv.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#808080"
                                style={{ width:'80px',height:'80px' }}>
                            </lord-icon>
                            <div className="uni-content-div">
                                <h3>Cost Effective</h3>
                                <p>We deliver affordable, high-quality digital solutions.<br />
                                    Smart solutions, real results — all within your budget.
                                </p>
                            </div>
                        </div>
                        <div className="uni-content-wrapper slide-up">
                            <lord-icon
                                src="https://cdn.lordicon.com/fjvfsqea.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#808080"
                                style={{ width:"80px",height:"80px" }}>
                            </lord-icon>
                            <div className="uni-content-div">
                                <h3>Transparency</h3>
                                <p>What you see is what you get. <br />
                                    We believe trust starts with complete transparency.
                                </p>
                            </div>
                        </div>
                        <div className="uni-content-wrapper slide-up">
                            <lord-icon
                                src="https://cdn.lordicon.com/jdgfsfzr.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#808080"
                                style={{ width:"80px",height:"80px" }}>
                            </lord-icon>
                            <div className="uni-content-div">
                                <h3>Powered by Youth</h3>
                                <p>Young minds, sharper ideas. <br />
                                    We blend curiosity with skill to build impactful solutions.
                                </p>
                            </div>
                        </div>
                        <div className="uni-content-wrapper slide-up">
                            <lord-icon
                                src="https://cdn.lordicon.com/fwkrbvja.json"
                                trigger="hover"
                                colors="primary:#121331,secondary:#808080"
                                style={{ width:'80px',height:'80px' }}>
                            </lord-icon>
                            <div className="uni-content-div">
                                <h3>Innovation & Creative</h3>
                                <p>We don’t follow trends — we set them. <br />
                                    Our ideas are original, bold, and built to make you stand out.
                                </p>
                            </div>
                        </div>

                    </div>
                </section> */}



                 {/*
                <section className="section-7 section-5-about">
                    <div className="main-content-div">
                        <div className="back-div">
                            <div className="top-div slide-up">
                                <h2>Start Your Journey <br> With Us.</h2>
                            </div>
                            <div className="bottom-div">
                                <p>Excellence isn’t optional — it’s our standard. <br>
                                    Connect with us to elevate your vision into reality.
                                </p>

                                <h6 className="typing-effect">Email us at :<a href="mailto:genkit.tech@gmail.com">genkit.tech@gmail.com</a></h6>

                                <h5>Why it Matters ?</h5>
                                <div className="btm-content-wrap">
                                    <div className="btm-content-div">
                                        <li>
                                            <img src="../Images/icons/check-circle.png" alt="tick">
                                                <!-- <lord-icon
                                                    src="https://cdn.lordicon.com/hrtsficn.json"
                                                    trigger="in"
                                                    delay="1000"
                                                    state="in-reveal"
                                                    style="width:23px;height:23px">
                                                </lord-icon> -->
                                                <p>Tailored Solutions</p>
                                        </li>
                                        <li>
                                            <img src="../Images/icons/check-circle.png" alt="tick">
                                                <!-- <lord-icon
                                                    src="https://cdn.lordicon.com/hrtsficn.json"
                                                    trigger="in"
                                                    delay="1000"
                                                    state="in-reveal"
                                                    style="width:23px;height:23px">
                                                </lord-icon> -->
                                                <p>Reliable Partnership</p>
                                        </li>
                                        <li>
                                            <img src="../Images/icons/check-circle.png" alt="tick">
                                                <!-- <lord-icon
                                                    src="https://cdn.lordicon.com/hrtsficn.json"
                                                    trigger="in"
                                                    delay="1000"
                                                    state="in-reveal"
                                                    style="width:23px;height:23px">
                                                </lord-icon> -->
                                                <p>Client-First Approach</p>
                                        </li>
                                    </div>
                                    <div className="btm-content-div">
                                        <li>
                                            <img src="../Images/icons/check-circle.png" alt="tick">
                                                <!-- <lord-icon
                                                    src="https://cdn.lordicon.com/hrtsficn.json"
                                                    trigger="in"
                                                    delay="1000"
                                                    state="in-reveal"
                                                    style="width:23px;height:23px">
                                                </lord-icon> -->
                                                <p>Trusted Support</p>
                                        </li>

                                        <li>
                                            <img src="../Images/icons/check-circle.png" alt="tick">
                                                <!-- <lord-icon
                                                    src="https://cdn.lordicon.com/hrtsficn.json"
                                                    trigger="in"
                                                    delay="1000"
                                                    state="in-reveal"
                                                    style="width:23px;height:23px">
                                                </lord-icon> -->
                                                <p>Creative Excellence</p>
                                        </li>
                                        <li>
                                            <img src="../Images/icons/check-circle.png" alt="tick">
                                                <!-- <lord-icon
                                                    src="https://cdn.lordicon.com/hrtsficn.json"
                                                    trigger="in"
                                                    delay="1000"
                                                    state="in-reveal"
                                                    style="width:23px;height:23px">
                                                </lord-icon> -->
                                                <p>Transparent Policies</p>
                                        </li>
                                    </div>
                                </div>

                                <h5>Let's Work Together</h5>

                                <div className="contact-content-wrap">
                                    <div className="contact-content">
                                        <h4>1</h4>
                                        <div>
                                            <span>Say Hello !</span>
                                            <p>We’re quick to reply and happy to help.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="../Images/icons/right-arrow (1).png" alt="Right-arrow">
                                    </div>

                                    <div className="contact-content">
                                        <h4>2</h4>
                                        <div>
                                            <span>Explore Ideas</span>
                                            <p>Share your vision, we’ll guide the path.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="../Images/icons/right-arrow (1).png" alt="Right-arrow">
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
                    <div className="over-flow-div slide-up">
                        <div className="contact-details-div">
                            <h5>Start a Coversation</h5>
                            <form action="https://api.web3forms.com/submit" method="POST">
                                <input type="hidden" name="access_key" value="28cb935b-e79f-4479-9e3a-9f87ba942747">
                                    <div className="name-div">
                                        <div>
                                            <span>First name *</span>
                                            <input type="text" name="First name" required>
                                        </div>
                                        <div>
                                            <span>Last name *</span>
                                            <input type="text" name="Last name" required>
                                        </div>
                                    </div>
                                    <div className="contact-same-layout">
                                        <span>Email *</span>
                                        <input type="text" name="Email" required>
                                    </div>
                                    <div className="contact-same-layout">
                                        <span>Phone *</span>
                                        <input type="text" name="Phone no" required>
                                    </div>
                                    <div className="contact-same-layout">
                                        <span>How Can We Support You? *</span>
                                        <select name="Service" required>
                                            <option value="" disabled selected>Select a Service</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Graphic Desiging">Graphic Desiging</option>
                                            <option value="Video Editing">Video Editing</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="text-area-div">
                                        <span>Message *</span>
                                        <textarea id="textarea" placeholder="Let us know how we can Support you...." name="Text Description" required></textarea>
                                    </div>
                                    <div className="contact-btn-div">
                                        <button className="submit-btn">Submit</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </section> */}

                <Footer />
            </main>
        </>
    )
}