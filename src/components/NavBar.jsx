import genkitLogo from '../assets/images/genkit-logo-white.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';


export function NavBar() {

    const [navOpen,setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen)
        document.body.classList.toggle('no-scrool', !navOpen)

    }
    
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="logo-div">
                        <img src={genkitLogo} alt="Genkit-logo" />
                    </div>
                    <div className="menu-toggle" onClick={toggleNav}>
                        {navOpen ? '✕' :'☰' }
                    </div>
                    <div className={ `nav-links ${navOpen ? "active" : ""}`}>
                        <ul>
                            <li><Link href="./index.html">Home</Link></li>
                            <li><Link href="./pages/about.html">About Us</Link></li>
                            <li><Link href="./pages/service.html">Service</Link></li>
                            <li><Link href="./pages/contact.html">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}