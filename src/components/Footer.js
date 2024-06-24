import React from "react";
import logo from '../logo.png';

function Footer() {
    return (
        <footer style={{ padding: '20px', backgroundColor: '#FFFFFF', textAlign: 'center' }}>
            <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                <div className="footer-logo">
                    <img src={logo} alt="Little Lemon Logo" style={{ width: '200px', height:'100pxs',marginRight:'200px' }} />
                </div>
                <div className="footer-nav" style={{ margin: '10px',display:'grid' }}>
                    <nav>
                        <ul style={{ listStyleType: 'none', padding: 0 ,display:'grid'}}>
                            <li style={{ marginBottom: '5px' }}><a href="/">Home</a></li>
                            <li style={{ marginBottom: '5px' }}><a href="/menu">Menu</a></li>
                            <li style={{ marginBottom: '5px' }}><a href="/contact">Contact</a></li>
                            <li style={{ marginBottom: '5px' }}><a href="/about">About Us</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-contact" style={{ margin: '10px' }}>
                    <p>Contact Us:</p>
                    <p>Email: info@littlelemon.com</p>
                    <p>Phone: +251921456580</p>
                </div>
                <div className="footer-social" style={{ margin: '10px' }}>
                    <p>Social media link:</p>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br />
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a><br />
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="copyright" style={{ marginTop: '20px' }}>
                <p>Copy right @2024 Little Lemon</p>
            </div>
        </footer>
    );
};

export default Footer;
