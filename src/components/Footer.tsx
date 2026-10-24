import React from 'react'
import StyledLogo from './StyledLogo'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
        <footer className='web-footer'>
            <div className='footer-container'>
                <div className='footer-brand'>
                    <h3>
                    <StyledLogo className='footer-logo' />
                    </h3>
                    <p className='footer-tagline'>
                        Elevated basics & curated capsule wardrobe for timeless style.
                    </p>
                </div>
                <nav className="footer-nav-column">
                    <h4 className="footer-nav-column-title">Our Style</h4>
                    <ul className="footer-links">
                        <li><a href="#sweatshirt" className='footer-links'>Downtown Legacy</a></li>
                        <li><a href="#outerwear" className='footer-links'>Raw Neutral Luxe</a></li>
                        <li><a href="#cotton" className='footer-links'>Midnight Monochrome</a></li>
                    </ul>
                </nav>
                <nav className="footer-nav-column">
                    <h4 className="footer-nav-column-title">Explore</h4>
                    <ul className="footer-links">
                        <li><a href="#about" className='footer-links'>About Us</a></li>
                        <li><a href="#style-guide" className='footer-links'>Style Guide</a></li>
                        <li><a href="#rating" className='footer-links'>Customer Reviews</a></li>
                    </ul>
                </nav>
                <address className="footer-contact">
                    <h4 className="footer-column-title">Contact Us</h4>
                    <div className='footer-contact-particle'>
                        <p>Email: <a href="mailto:support@bloom.com">support@bloom.com</a></p>
                        <p>Jakarta, Indonesia</p>
                        <p>CALL US AT :</p>
                        <p>1-800-2456-3231</p>
                    </div>
            </address>
                <nav className='footer-nav-column'>
                    <h4 className='footer-nav-column-title'>Social Media</h4>
                    <ul className='footer-links'>
                        <li className='footer-links'>                        
                            <a href='https://instagram.com'>INSTAGRAM</a>
                        </li>
                        <li className='footer-links'>                        
                            <a href='https://tiktok.com'>TIKTOK</a>
                        </li>
                        <li className='footer-links'>                        
                            <a href='https://youtube.com'>YOUTUBE</a>
                        </li>
                        <li className='footer-links'>                        
                            <a href='https://x.com'>X</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='footer-bottom'>
                <small>&copy; {currentYear} bloom. All rights reserved.</small>
            </div>
        </footer>
  )
}
