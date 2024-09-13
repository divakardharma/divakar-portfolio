
import React from 'react';
import { useState, useRef } from 'react';
import './navbar.css';
import { Anchor } from 'react-bootstrap';
import menu_open from '../src/assets/menu.jpg';
import menu_close from '../src/assets/close.jpg';

export default function Navbar() {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = '0';
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = '-350px';
    }
  };

  return (
    <div className="navbar">
  
      <img src={menu_open} onClick={openMenu} className="nav-mob-open" alt="Open menu" />
      <ul className="navlist" ref={menuRef}>
        <img src={menu_close} onClick={closeMenu} className="nav-mob-close" alt="Close menu" />
        <li>
          <Anchor className="anchor-link" href="#Home">
            <p onClick={() => setMenu('Home')} data-aos="zoom-in">Home</p>
          </Anchor>
        </li>
        <li>
          <Anchor className="anchor-link" href="#About">
            <p onClick={() => setMenu('About')} data-aos="zoom-in">About</p>
          </Anchor>
        </li>
        <li>
          <Anchor className="anchor-link" href="#project">
            <p onClick={() => setMenu('project')} data-aos="zoom-in">My Projects</p>
          </Anchor>
        </li>
        <li>
          <Anchor className="anchor-link" href="#Testimonials">
            <p onClick={() => setMenu('Testimonial')} data-aos="zoom-in">Testimonial</p>
          </Anchor>
        </li>
        <li>
          <Anchor className="anchor-link" href="#Contact">
            <p onClick={() => setMenu('Contact')} data-aos="zoom-in">Contact</p>
          </Anchor>
        </li>
      </ul>
      <div className="navconnect" data-aos="zoom-in">
        <Anchor className="anchor-link" href="#Contact">
          <p onClick={() => setMenu('Contact')} >Connect With Me</p>
        </Anchor>
      </div>
    </div>
  );
}
