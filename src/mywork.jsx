
import React from 'react';
import './mywork.css';
import Login from './assets/numnerguessing.png';
import Cafe from './assets/cafe.png';
import Weather from './assets/weatherapp.png';
import Ecommerce from './assets/Ecommere.png';
import Vidtube from './assets/vidtube.png'
import Resto from './assets/resto.png'
import { FaLink } from "react-icons/fa";

export default function MyWork() {
  return (
    <div className="projects" id="project">
      <div className="container">
        <h3 className='portfolioh3'>My Works</h3>
        <h1 className="title">A Selection of Work I've Done</h1>
        <div className="projects-wrapper">

        <div className="project">
            <div className="card" data-aos="flip-left">
              <div className="overview">
                <h1>Ecommerce Website</h1>
                <div className="btns">
               
                  <a href="https://66b45096a5620f8aeb23aab5--superb-bombolone-929e76.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <FaLink className='giticons'/>
                  </a>
                </div>
              </div>
              <img src={Ecommerce} alt="Ecommerce-website" />
            </div>
          </div>



          <div className="project">
            <div className="card" data-aos="flip-left" >
              <div className="overview">
                <h1>Coffee-Company</h1>
                <div className="btns">
                 
                  <a href="https://blackcoffee-ecommerce.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <FaLink className='giticons' />
                  </a>
                </div>
              </div>
              <img src={Cafe} alt="Cafe" />
            </div>
          </div>



          <div className="project">
            <div className="card" data-aos="flip-left">
              <div className="overview">
                <h1>Vidtube</h1>
                <div className="btns">
                 
                  <a href="https://diva-vidtube.netlify.app" target="_blank" rel="noopener noreferrer">
                  <FaLink className='giticons' />
                  </a>
                </div>
              </div>
              <img src={Vidtube} alt="Vidtube" />
            </div>
          </div>
          

          <div className="project">
            <div className="card" data-aos="flip-left">
              <div className="overview">
                <h1>Restaurant E-commerce</h1>
                <div className="btns">
                 
                  <a href="https://chennai-resturant.netlify.app" target="_blank" rel="noopener noreferrer">
                  <FaLink className='giticons' />
                  </a>
                </div>
              </div>
              <img src={Resto} alt="Restaurant-ecommerce" />
            </div>
          </div>


          <div className="project">
            <div className="card" data-aos="flip-left">
              <div className="overview">
                <h1>Number Guessing Game</h1>
                <div className="btns">
                 
                  <a href="https://ben10numberguessinggame.netlify.app" target="_blank" rel="noopener noreferrer">
                  <FaLink className='giticons' />
                  </a>
                </div>
              </div>
              <img src={Login} alt="Number guess" />
            </div>
          </div>

          

          <div className="project">
            <div className="card" data-aos="flip-left">
              <div className="overview">
                <h1>Weather app</h1>
                <div className="btns">
                
                  <a href="https://diva-checkweather.netlify.app" target="_blank" rel="noopener noreferrer">
                  <FaLink className='giticons'/>
                  </a>
                </div>
              </div>
              <img src={Weather} alt="Weather app" />
            </div>
          </div>

          

      
        </div>
      </div>
    </div>
  );
}

