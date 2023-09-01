import React from 'react';
import './Footer.css';
import linkedin_logo from "./img/linkedin_logo.png";
import instagram_logo from "./img/instagram_logo.png";
import twitter_logo from "./img/twitter_logo.png";

export default function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-title">Follow Us on Social Media</div>
      <ul className="social-media-list">
        <li className="social-media-list-item">
          <img src={linkedin_logo} alt="LinkedIn" />
          <span>LinkedIn</span>
        </li>
        <li className="social-media-list-item">
          <img src={instagram_logo} alt="Instagram" />
          <span>Instagram</span>
        </li>
        <li className="social-media-list-item">
          <img src={twitter_logo} alt="Twitter" />
          <span>Twitter</span>
        </li>
      </ul>
      <p className="footer-text">&copy; 2023, Redback Operations</p>
    </footer>
  );
}
