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
                        <Link to="/" className='logo-div-link'><img src={genkitLogo} alt="Genkit-logo" /></Link>
                    </div>
                    <div className="menu-toggle" onClick={toggleNav}>
                        {navOpen ? '✕' :'☰' }
                    </div>
                    <div className={ `nav-links ${navOpen ? "active" : ""}`}>
                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/service">Service</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}