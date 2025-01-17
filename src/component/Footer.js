import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
