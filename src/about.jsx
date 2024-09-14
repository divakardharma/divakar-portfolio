import React, { useEffect } from 'react';
import Img from './assets/about3.jpg';
import './about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });

    const skills = document.querySelectorAll('.about-skill');
    skills.forEach(skill => {
      skill.classList.add('animated');
    });
  }, []);

  return (
    <div className="about" id="About">
     
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left" data-aos="zoom-in">
          <img src={Img} className="aboutpic" alt="Profile pic" />
        </div>
       
        <div className="about-right">
       
          <div className="about-para" data-aos="fade-down">
            <p>
            Enthusiastic recent graduate skilled in JavaScript and React.js, seeking an entry-level React Developer role. Eager to apply expertise in component-based architecture, responsive design, and modern frontend tools to grow within a dynamic team.
            </p>
          </div>
          <div className="about-skills" data-aos="fade-down">
            <div className="about-skill skill-level-html" data-aos="fade-down">
              <p><IoLogoHtml5 style={{ color: '#eb7405' }} />  HTML5</p>
              <hr />
            </div>
            <div className="about-skill skill-level-css" data-aos="fade-down">
              <p><FaCss3Alt style={{ color: '#004cff' }}/> CSS</p>
              <hr />
            </div>
            <div className="about-skill skill-level-bootstrap" data-aos="fade-down">
              <p><SiTailwindcss style={{ color: '#00d0ff' }}/> TAILWIND CSS</p>
              <hr />
            </div>
            <div className="about-skill skill-level-js" data-aos="fade-down">
              <p><IoLogoJavascript style={{ color: 'yellow' }}/> JAVASCRIPT</p>
              <hr />
            </div>
            <div className="about-skill skill-level-react" data-aos="fade-down">
              <p><FaReact style={{ color: '#0084ff' }}/> REACTJS</p>
              <hr />
            </div>
            <div className="about-skill skill-level-python" data-aos="fade-down">
              <p ><FaPython  style={{ color: 'white' }}/> PYTHON</p>
              <hr />
            </div>
            <div className="about-skill skill-level-sql" data-aos="fade-down">
              <p><SiMysql style={{ color: '#00aeff' }}/> MY SQL</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
