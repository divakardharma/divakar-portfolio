import React from 'react'
import Nav from"./navbar"
import Head from "./header"
import About from "./about"
import Contact from "./contact"
import Mywork from "./mywork"
import Testimonial from './Testimonial'
import Lastfooter from './lastfooter'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
 

  return (
    <>
   <Nav/>
   <Head/>
   <About/>
   <Mywork/>
   <Testimonial/>
   <Contact/>
   <Lastfooter/>

    </>
  )
}

export default App
