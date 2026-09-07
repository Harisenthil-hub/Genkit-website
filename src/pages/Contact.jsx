import { NavBar } from "../components/NavBar";
import laptop from "../assets/images/contact/laptop.webp";
import useSlideUp from "../hooks/useSlideUp";
import "./contact.css";
import FAQList from "../components/FaqList";
import FaqImg from "../assets/images/contact/FAQ-CONTACT.webp";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { ContactSection } from "../components/ContactSection";
import useTypingEffect from "../hooks/typingEffect";
import { Helmet } from "react-helmet-async";

export function Contact() {
  useSlideUp();
  useTypingEffect();

  return (
    <>
      <Helmet>
        <title>Contact Genkit | Start Your Project</title>

        <meta
          name="description"
          content="Contact Genkit to discuss your web development, video editing, and graphic design project."
        />

        <link rel="canonical" href="https://genkit.in/contact" />

        <meta
          property="og:title"
          content="Contact Genkit | Start Your Project"
        />

        <meta
          property="og:description"
          content="Get in touch with Genkit for web development, video editing, and graphic design services."
        />

        <meta property="og:url" content="https://genkit.in/contact" />

        <meta property="og:type" content="website" />

        <meta property="og:image" content="https://genkit.in/og-image.webp" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Contact Genkit | Start Your Project"
        />

        <meta
          name="twitter:description"
          content="Get in touch with Genkit for web development, video editing, and graphic design services."
        />

        <meta name="twitter:image" content="https://genkit.in/og-image.webp" />
      </Helmet>

      <NavBar />

      <main>
        <section className="section-1-contact">
          <div className="space-div"></div>
          <div className="icon-div">
            <span className="icon-content">
              <lord-icon
                src="https://cdn.lordicon.com/kxnplube.json"
                trigger="in"
                colors="primary:#f5f5f5,secondary:#808080"
                style={{ width: "3rem", height: "3rem" }}></lord-icon>
              <span>Contact</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>
                Turning Vision into Reality <br /> Begins Here.
              </h1>
            </div>
            <p>One Message. Endless Opportunities.</p>
          </div>
        </section>

        <section className="section-2-contact slide-up">
          <img src={laptop} alt="Workspace" />
        </section>

        <section className="section-3-contact">
          <h2>
            FA<span>Q</span>
          </h2>
          <div className="contact-content-service">
            <div className="faq-container">
              <FAQList />
              {/* <div className="faq-wrapper">
                                <div className="faq-item" data-index="0">
                                    <div className="faq-question">How do I get started with Genkit?</div>
                                    <div className="faq-answer">You can contact us via our website's contact form, email, or social media. We'll schedule a call to understand your needs and provide a custom solution.</div>
                                </div>

                                <div className="faq-item" data-index="1">
                                    <div className="faq-question">How experienced is the Genkit team?</div>
                                    <div className="faq-answer">Each of our 8 team members has hands-on experience in their respective fields, ensuring top-quality service and innovation.</div>
                                </div>

                                <div className="faq-item" data-index="2">
                                    <div className="faq-question">How long does it take to build a website?</div>
                                    <div className="faq-answer">Timelines vary depending on the project scope. A simple website may take 1–2 weeks, while complex apps could take 1–2 months.</div>
                                </div>

                                <div className="faq-item faq-4" data-index="3">
                                    <div className="faq-question">Can you work with clients outside our city/country?</div>
                                    <div className="faq-answer">Yes, Genkit proudly serves clients globally through online collaboration tools.</div>
                                </div>

                                <div className="faq-item faq-5" data-index="4">
                                    <div className="faq-question">What happens if I’m not satisfied with the final result?</div>
                                    <div className="faq-answer">If you're not satisfied, we’ll revise the work based on your feedback until it meets your expectations, within the agreed scope.</div>

                                </div>
                            </div> */}
            </div>

            <div className="contact-img">
              <img src={FaqImg} alt="fREQUENTLY ASKED QUESTIONS" />
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
