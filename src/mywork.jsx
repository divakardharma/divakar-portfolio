import React, { useState } from 'react';
import './mywork.css';
import Login from './assets/travel1.png';
import Cafe from './assets/cafe.png';
import Weather from './assets/weatherapp.png';
import Ecommerce from './assets/Ecommere.png';
import Vidtube from './assets/vidtube.png';
import Resto from './assets/resto.png';
import Todo from './assets/todolist.png';
import Movies from './assets/movies.png';
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: 'Ecommerce Website',
    image: Ecommerce,
    link: 'https://superb-bombolone-929e76.netlify.app/',
    Git:'https://github.com/divakardharma/ecommerce'
  },
  {
    title: 'Travel.com',
    image: Login,
    link: 'https://travel-officialwebsite.netlify.app',
    Git:'https://github.com/divakardharma/traveling-land-page'
  },
  {
    title: 'Coffee-Company',
    image: Cafe,
    link: 'https://blackcoffee-ecommerce.netlify.app/',
    Git:'https://github.com/divakardharma/coffeecompany-ecommerce'
  },
  {
    title: 'Vidtube',
    image: Vidtube,
    link: 'https://diva-vidtube.netlify.app',
    Git:'https://github.com/divakardharma/vidtube'
  },
  {
    title: 'Movie Slider',
    image: Movies,
    link: 'https://movie-sliders.netlify.app',
    Git:'https://github.com/divakardharma/movie-slider'
  },
  {
    title: 'Restaurant E-commerce',
    image: Resto,
    link: 'https://chennai-resturant.netlify.app',
    Git:'https://github.com/divakardharma/restaurant-ecommerce'
  },
  {
    title: 'Weather App',
    image: Weather,
    link: 'https://diva-checkweather.netlify.app/',
    Git:'https://github.com/divakardharma/WeatherApp'
  },
  {
    title: 'Todo list',
    image: Todo,
    link: 'https://diva-todolist.netlify.app/',
    Git:"https://github.com/divakardharma/TodoList"
  },
];

export default function MyWork() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // Show the first 4 projects initially, then show all if 'showMore' is true
  const visibleProjects = showMore ? projects : projects.slice(0, 4);

  return (
    <div className="projects" id="project">
      <div className="container">
        <h3 className='portfolioh3'>My Works</h3>
        <h1 className="title">A Selection of Work I've Done</h1>
        <div className="projects-wrapper">
          {visibleProjects.map((project, index) => (
            <div className="project" key={index}>
              <div className="card" data-aos="flip-left">
                <div className="overview">
                  <h1>{project.title}</h1>
                  <div className="btns">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaLink className='giticons' />
                    
                    </a>
                    <a href={project.Git} target="_blank" rel="noopener noreferrer">
                      <FaGithub className='giticons' />
                    
                    </a>
                    
                  </div>
                </div>
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
        <button className="show-more-btn" onClick={handleShowMore}>
          {showMore ? 'Show Less  ︽' : 'Show More  ︾'}
        </button>
      </div>
    </div>
  );
}
