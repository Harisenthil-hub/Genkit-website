import Gmail from "../assets/images/components/gmail.svg"
import FooterLogo from "../assets/images/components/footer-logo.png"
import Instagram from "../assets/images/components/instagram.svg"
import X from "../assets/images/components/x.svg"
import Youtube from "../assets/images/components/youtube.svg"
import GitHub from "../assets/images/components/github.svg"
import Whatsapp from "../assets/images/components/whatsapp.svg"
import { Link } from "react-router-dom"




export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-div">
                <div className="footer-logo-div">
                    <img src={ FooterLogo } alt="Genkit" />
                    <p>Innovating Today. Leading Tomorrow.</p>
                    <h5 className="gmail">
                        <div className="gmail-div">
                           <img src={ Gmail } alt="gmail" />
                        </div>
                        <a href="mailto:genkit.tech@gmail.com">genkit.tech@gmail.com</a>
                    </h5>
                </div>
                <div className="footer-quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="social-div">
                    <h2>Follow On</h2>
                    <div className="social-icons">

                        <a href="https://www.instagram.com/genkit24?igsh=ZzczZm54c3RhZ2dl" target="_blank">
                            <img src={ Instagram } alt="Instagram" />
                        </a>
                        <a href="https://x.com/genkitTech?t=SB0A5JJEceCq_CCWf9Ycpw&s=09" target="_blank" className="x">
                            <img src={ X } alt="X" />
                        </a>
                        <a href="https://youtube.com/@genkit.tech24?si=PdJfS60eC2lOpyGe" target="_blank" className="youtube">
                            <img src={ Youtube } alt="Youtube" />
                        </a>
                        <a href="https://github.com/genkit25" className="github" target="_blank">
                            <img src={ GitHub } alt="Github" />

                        </a>

                        <a href="https://whatsapp.com/channel/0029VbAiUjuGehEDxc7Dqf1i" target="_blank" className="whatsapp">
                            <img src={ Whatsapp } alt="Whatsapp" />
                        </a>
                    </div>

                </div>
            </div>
            <div className="copyright-div">

                <p>&copy; 2025 Genkit.  All rights reserved.</p>

            </div>
        </footer>
    )
}