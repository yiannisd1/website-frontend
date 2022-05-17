import React from "react";
import "./HomeStyles.css";

import Logo from "./img/Logo.png"
import LinkedinLogo from "./img/LinkedinLogo.png"
import instagramLogo from "./img/instagramLogo.png"
import twitterLogo from "./img/twitterLogo.png"

export default function HomePageFooter(){
    return(
        <footer className="footer-container">
            <div className="footer-grid">
                <img src={Logo} alt="Redback Logo" className="footer-logo"/>

                <div className="socials-logo"><img src={LinkedinLogo} alt="Redback LinkedIn" /> <p>LinkedIn</p></div>
                <div className="socials-logo"><img src={instagramLogo} alt="Redback Instagram" /> <p>Instagram</p></div>
                <div className="socials-logo"><img src={twitterLogo} alt="Redback Twitter" /> <p>Twitter</p></div>
            </div>
            <p className="footer-msg">Join us today and enjoy a fully immersive experience where you will enjoy individual exercise routines all the time while receiving real-time feedback and tips on how to improve their performance. Share your exercise with our community and engage with other users both casually and competitively. 
               <br /><br /> Act now and be the best person you can be.
            </p>
        </footer>
    )
}