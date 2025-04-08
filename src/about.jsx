import React, { useState } from 'react';
import Img123 from './assets/pro.png'
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
// import { TbBrandDjango } from "react-icons/tb";

import './about.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills'); 


  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div id="About">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={Img123} alt="Profile" />
          </div>
          <div className="about-col-2">   
            <h1 className="sub-title">About me</h1>
            <p>Enthusiastic recent graduate skilled in JavaScript and React.js,
               seeking an entry-level Web Developer role. 
               Eager to apply expertise in component-based architecture,
                responsive design,   and modern frontend tools to grow within a dynamic team.</p>

            <div className="tab-titles">
               
            <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} 
                onClick={() => opentab('skills')}>
                Technical-Skills
              </p>
             
              <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} 
                onClick={() => opentab('education')}>
                Education
              </p>
              


              <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} 
                onClick={() => opentab('experience')}>
                Interests
              </p>
             
            
            </div>

            {/* Tab Contents */}
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              
              <div className="about-skills"   >
                <div className='pro'>
                <p className='tab-links'>Advances:</p> 
            <div className="about-skill skill-level-html" >
              
              <p><IoLogoHtml5 style={{ color: '#eb7405' }} />  HTML5</p>
             
            </div>
            <div className="about-skill skill-level-css" >
              <p><FaCss3Alt style={{ color: '#004cff' }}/> CSS</p>
              
            </div>
            <div className="about-skill skill-level-bootstrap" >
              <p><SiTailwindcss style={{ color: '#00d0ff' }}/> TAILWIND CSS</p>
              
            </div>
            <div className="about-skill skill-level-js" >
              <p><IoLogoJavascript style={{ color: 'yellow' }}/> JAVASCRIPT</p>
              
            </div>
            <div className="about-skill skill-level-react" >
              <p><FaReact style={{ color: '#0084ff' }}/> REACTJS</p>
              
            </div>
            </div>
           
            <div className='intermitte'>
          <p className='tab-links'>Intermediate:</p> 
            <div className="about-skill skill-level-python" >
              <p ><FaJava   style={{ color: 'white' }}/> CORE JAVA</p>
             
            </div>
           
            {/* <div className="about-skill skill-level-Django" >
              <p><TbBrandDjango style={{ color: 'green' }}/> DJANGO</p>
              
            </div> */}
            <div className="about-skill skill-level-sql" >
              <p><SiMysql style={{ color: '#00aeff' }}/> MY SQL</p>
              
            </div>
                         
            </div>
          </div>




            </div>

            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li><span>Technical</span><br />Full Stack Web developer</li>
                <li><span>Non Technical</span><br />Video Editing, Photography</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li><span>B.E Computer Science Engineering</span><br />2020 - 2024</li>
                <li><span>Higher Secondary School Certificate</span><br />2019 - 2020</li>
                <li><span>Secondary School Leaving Certificate</span><br />2017-2018</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
