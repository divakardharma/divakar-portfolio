import React, { useEffect,useState } from 'react';
import Img from './assets/boy.png';
import Vector1 from './assets/Vector11.png';
import Vector2 from './assets/Vector22.png';
import Emoji from './assets/glassemji1.png';
import './header.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTypewriter , Cursor } from 'react-simple-typewriter';
import Pdf from './assets/cv.pdf'

export default function Header() {

  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  const [text]=useTypewriter({
    words:[' Web Developer',' Frontend Developer',' React Developer'],
    loop:{},
  });
  return (
    <div id="Home" className="header1" >
      <div className='picdiv'>
      <img src={Vector1} className="vector1"alt=""/>
      <img src={Vector2} className="vector2"alt=""/>
      <img src={Img} className="profilepic" data-aos="zoom-in" alt="Profile pic"/></div>
      <div className='blur'></div>
      <div className='devbox' ><img data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0"src={Emoji} alt="" /></div>
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