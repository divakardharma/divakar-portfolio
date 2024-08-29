import React, { useEffect } from 'react';
import Img from './assets/about.png';
import './about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
              Enthusiastic and motivated recent graduate with a strong foundation
              in JavaScript and React.js, seeking an entry-level React Developer
              position. Eager to apply my skills in component-based architecture,
              responsive design, and modern frontend technologies to contribute
              to innovative projects and grow within a dynamic development team.
            </p>
          </div>
          <div className="about-skills" data-aos="fade-down">
            <div className="about-skill skill-level-html" data-aos="fade-down">
              <p>HTML5</p>
              <hr />
            </div>
            <div className="about-skill skill-level-css" data-aos="fade-down">
              <p>CSS</p>
              <hr />
            </div>
            <div className="about-skill skill-level-bootstrap" data-aos="fade-down">
              <p>BOOTSTRAP & TAILWIND CSS</p>
              <hr />
            </div>
            <div className="about-skill skill-level-js" data-aos="fade-down">
              <p>JAVASCRIPT</p>
              <hr />
            </div>
            <div className="about-skill skill-level-react" data-aos="fade-down">
              <p>REACTJS</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
