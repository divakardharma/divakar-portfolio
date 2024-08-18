import React from 'react';
import './lastfooter.css';
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container" data-aos="zoom-in">
        <div className="footer-social">
          <h3>Contact Us</h3>
          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/divakardhama612/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='footericons' />
              </a>
            </li>
            <li>
              <a href="https://github.com/divakardharma" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare className='footericons'/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_divakar_siva/" target="_blank" rel="noopener noreferrer">
                <FiInstagram className='footericons'/>
              </a>
            </li>
          </ul>
          <div className="footer-bottom">
            <p>&copy; 2024 Divakardharma. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
