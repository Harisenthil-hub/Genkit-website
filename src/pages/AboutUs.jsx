import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import useIsMobile from "../hooks/useIsMobile";
import aboutContainerImg from "../assets/images/about/about-container-img.jpg";
import aboutUsImg from "../assets/images/about/about-us.webp";
import aboutUsImg2 from "../assets/images/about/group-discussion-contact.jpg";
import useSlideUp from "../hooks/useSlideUp";
import "./about.css";
import { Helmet } from "react-helmet-async";

export function AboutUs() {
  const isMobile = useIsMobile();
  useSlideUp();

  return (
    <>
      <Helmet>
        <title>About Genkit | Our Team & Story</title>

        <meta
          name="description"
          content="Learn about Genkit, our team, our journey, and our passion for web development, creative design, and digital solutions."
        />

        <link rel="canonical" href="https://genkit.in/about-us" />

        <meta property="og:title" content="About Genkit | Our Team & Story" />

        <meta
          property="og:description"
          content="Discover the story, team, and vision behind Genkit."
        />

        <meta property="og:url" content="https://genkit.in/about-us" />

        <meta property="og:type" content="website" />

        <meta property="og:image" content="https://genkit.in/og-image.webp" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="About Genkit | Our Team & Story" />

        <meta
          name="twitter:description"
          content="Discover the story, team, and vision behind Genkit."
        />

        <meta name="twitter:image" content="https://genkit.in/og-image.webp" />
      </Helmet>

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
                style={{ width: "2.5rem", height: "3rem" }}></lord-icon>
              <span>About Us</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>
                Bringing experience and passion
                <br />
                to your business.
              </h1>
            </div>
            <p>
              {isMobile
                ? "Transforming Vision into Reality."
                : "Turning Ambitions into Achievements."}
            </p>
          </div>
        </section>

        <section className="section-2-about slide-up">
          <img src={aboutContainerImg} alt="Workspace" />
        </section>

        <section className="section-3-about slide-up">
          <h6>
            Built <span>Together</span>
          </h6>
          <div className="content-wrapper-about">
            <div className="content-about image-content-about about-us-img image-1">
              <img src={aboutUsImg} alt="Ideas" />
            </div>
            <div className="content-about text-content-about slide-up text-1">
              <h2>June 2024, The Rise of a Vision.</h2>
              <ul>
                <li>
                  Eight close friends from school who were passionate about
                  technology, creative, and ambitious came together to create{" "}
                  <span>Genkit</span>. What began as informal brainstorming
                  sessions quickly developed into something more: a team effort
                  to create a startup that provides significant services.
                </li>
                <li>
                  <span>Our first milestone?</span> Building our own digital
                  home the Genkit website a symbol of our unity, ambition, and
                  the journey ahead.
                </li>

                {isMobile ? (
                  ""
                ) : (
                  <li>
                    We started our journey in June 2024 by imagining and
                    planning our digital home, a daring first step toward the
                    future we dared to create, with no predetermined roadmap but
                    unbridled passion.
                  </li>
                )}
              </ul>
            </div>
            <div className="content-about text-content-about slide-up text-2">
              <h2>Our Current Chapter</h2>
              <ul>
                <li>
                  From sparks of imagination to real collaboration, Genkit has
                  transformed from an idea into a growing force.
                </li>
                <li>
                  <span>our Ten member team</span> bonded by years of friendship
                  and a shared dream is actively building our brand, shaping our
                  digital presence, and laying the groundwork for innovative
                  services.
                </li>
                <li>
                  This chapter marks more than progress it’s a testament to our
                  belief in learning, growing, and building — together. Every
                  line of code, every idea shared, is a step closer to the
                  future we envisioned.
                </li>
              </ul>
            </div>
            <div className="content-about image-content-about about-us-img image-2">
              <img src={aboutUsImg2} alt="Team" />
            </div>
          </div>
          <div className="line-div"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
