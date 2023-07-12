import React from 'react';
import styles from './Footer.module.css';


function Footer() {
    return (
        // Footer component
        <footer className={styles.footer}> 
            <div className={styles["footer-content"]}>
                {/* About Us section */}
                <div className="footer-section">
                    <h3>About Us</h3>
                    <ul>
                        <li>About Company</li>
                        <li>Team</li>
                        <li>Partnerships</li>
                    </ul>
                </div>
                {/* Contact Us section */}
                <div className={styles["footer-section"]}>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Contact Information</li>
                        <li>Support</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                {/* Legal section */}
                <div className={styles["footer-section"]}>
                    <h3>Legal</h3>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                {/* Connect section */}
                <div className={styles["footer-section"]}>
                    <h3>Connect</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            {/* Footer bottom */}
            <div className={styles["footer-bottom"]}>
                <p>&copy; 2023 KodiPlus. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
