import React, { useEffect } from 'react';
import Img from './assets/pro.png';
import './header.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTypewriter , Cursor } from 'react-simple-typewriter';
import Pdf from './assets/DivakarCV.pdf'

export default function Header() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  const [text]=useTypewriter({
    words:[' Frontend Developer',' React Developer'],
    loop:{},
  });
  return (
    <div id="Home" className="header1" >
      <div className='picdiv'data-aos="fade-up">
      <img src={Img} className="profilepic"alt="Profile pic"/></div>
      <div className="profile" data-aos="fade-down">
    
      <div className='diva'> <h1><div className='divakar'>
          <span>I'm Divakar,</span></div>{text} <Cursor cursorStyle="|" />
        </h1></div>
        <p>
          Seeking a challenging position in your esteemed organization where my
          technical and coordination skills can be effectively utilized to
          improve operations and contribute to the company's growth.
        </p>
        <div className="buttons">
          <a href="mailto:divakardharma612@gmial.com">
          <button className="headerconnect">Hire Me</button></a>
          <a className="navresume" href={Pdf}>Resume</a>
        </div>
      </div>
      
    </div>
  );
}

