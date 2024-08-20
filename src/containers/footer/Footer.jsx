import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK</p>
          <p> Alknjkcb, All Rights Reserved</p>
        </div>

        <ul className="gpt3__footer-links_ul">
          <div></div>
          <li>
            <h4>Links</h4>
          </li>
          <li>
            <p>Overons</p>
          </li>
          <li>
            <p>Social Media</p>
          </li>
          <li>
            <p>Counters</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
        <ul className="gpt3__footer-links_ul">
          <div></div>
          <li>
            <h4>Get in touch</h4>
          </li>
          <li>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
          </li>
          <li>
            <p>085-132567</p>
          </li>
          <li>
            <p>info@payme.net</p>
          </li>
        </ul>
        <ul className="gpt3__footer-links_ul">
          <div></div>
          <li>
            <h4>Company</h4>
          </li>
          <li>
            <p>Terms & Conditions</p>
          </li>
          <li>
            <p>Privacy Policy</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2024 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
