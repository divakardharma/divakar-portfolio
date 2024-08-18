
import React, { useEffect } from 'react';
import { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import Swal from 'sweetalert2';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e047pvg', 'template_joq11ol', form.current, {
        publicKey: 'oAUU78mXTMriLTD_8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  const onclicksub = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      Swal.fire("Submitted!", "Thanks for contacting me", "success");
    } else {
      Swal.fire("Error!", "Please fill in all the fields", "error");
    }
  };

  return (
    <>
      <div className="contact" id="Contact" >
        
        <div className="contact-title">
          <h1>Get in Touch</h1>
        </div>
        <div className="contact-section" data-aos="fade-down">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>
              I'm currently available to take on new projects, so feel free to send
              me a message about anything that you want me to work on. You can contact
              me anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
              <MdAttachEmail className="icons" />  
              <a href="mailto:divakardharma612@gmial.com">    
                <p>divakardhama612@gmail.com</p></a>  
              </div>
              <div className="contact-detail">
              <FaPhoneVolume className="icons" /> 
                <p>+91 7339566898</p>
              </div>
              <div className="contact-detail">
              <IoLocationSharp className="icons"  />          
                <p>Thanjavur, Tamilnadu-614205</p>
              </div>
            </div>
          </div>
          <form  ref={form} onSubmit={ sendEmail } className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="user_name" placeholder="Enter your name" required />
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="user_email" placeholder="Enter your email" required />
            <label htmlFor="message">Write Your Message Here</label>
            <textarea id="message" name="message" rows="8" placeholder="Enter your message" required></textarea>
            <button type="submit" className="contact-submit" onClick={onclicksub}>Submit Now</button>
          </form>
        </div>
      </div>
    </>
  );
}
