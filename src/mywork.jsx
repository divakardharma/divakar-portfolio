import React from 'react';
import './mywork.css';
import Login from './assets/travel1.png';
import Cafe from './assets/cafe.png';
import Weather from './assets/weatherapp.png';
import Ecommerce from './assets/Ecommere.png';
import Vidtube from './assets/vidtube.png';
import Resto from './assets/resto.png';
import Movies from './assets/movies.png';
import { FaLink } from "react-icons/fa";

const projects = [
  {
    title: 'Ecommerce Website',
    image: Ecommerce,
    link: 'https://66b45096a5620f8aeb23aab5--superb-bombolone-929e76.netlify.app/'
  },
  {
    title: 'Travel.com',
    image: Login,
    link: 'https://travel-officialwebsite.netlify.app'
  },
  {
    title: 'Coffee-Company',
    image: Cafe,
    link: 'https://blackcoffee-ecommerce.netlify.app/'
  },
  {
    title: 'Vidtube',
    image: Vidtube,
    link: 'https://diva-vidtube.netlify.app'
  },
  {
    title: 'Movie Slider',
    image: Movies,
    link: 'https://movie-sliders.netlify.app'
  },
  {
    title: 'Restaurant E-commerce',
    image: Resto,
    link: 'https://chennai-resturant.netlify.app'
  },
 
];

export default function MyWork() {
  return (
    <div className="projects" id="project">
      <div className="container">
        <h3 className='portfolioh3'>My Works</h3>
        <h1 className="title">A Selection of Work I've Done</h1>
        <div className="projects-wrapper">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="card" data-aos="flip-left">
                <div className="overview">
                  <h1>{project.title}</h1>
                  <div className="btns">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaLink className='giticons' />
                    </a>
                  </div>
                </div>
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
