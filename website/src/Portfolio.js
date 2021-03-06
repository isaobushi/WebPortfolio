import React from 'react'
import Tile from './Tile'
import BackgroundImageTTT from './ttt.png'; 
import BackgroundImageEAF from './eaf.png'; 
import BackgroundImagePortfolio from './website.png';
import BackgroundImageZoneIn from './zoneIn.png';
import Particles from 'react-particles-js';







export default class Portfolio extends React.Component {
  constructor(){
    super()


      this.state = {
      projects: [
        {
          title: 'TTT', 
            image: BackgroundImageTTT, 
              text:  " What you're about to view is a rough version of my first JavaScript project. Built with HTML5, CSS3 js",
                link:'https://github.com/isaobushi/Tic-Tac-Toe'
        },
        {
          title: 'EAF',
           image: BackgroundImageEAF,
             text: "A web app to be used during natural disasters to help lost animals get reunited with their owners. Built wit Rails, eafletjs geocoder",
              link:'https://github.com/isaobushi/Emergency-Animal-Finder'},
        {
          title: 'Portfolio',
           image: BackgroundImagePortfolio,
            text: "This very website that I'm still updating and improving, built with React",
              link:'https://github.com/isaobushi/WebPortfolio'
            },
        {
          title: 'ZoneIn',
           image: BackgroundImageZoneIn,
            text: "My team and I won the a hackthon event elaborating an AI agorithm designed to help university students with their assignments, I have implemented the idea in this webapp, built on Ruby and Sinatra",
            link:'https://github.com/isaobushi/ZoneIn'}
      ]
    }
  }


  render() {
    const particlesOpt = {
      "particles": {
        "number": {
          "value": 30,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#000"
        },
        "shape": {
          "type": ["circle", "triangle", "polygon"],
          "stroke": {
            "width": 0,
            "color": "#f0f0f0"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 80,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 300,
          "color": "#ffe5a4",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 800,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 800,
            "size": 80,
            "duration": 2,
            "opacity": 0.8,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
    return (
      <div>
        <Particles params={particlesOpt} /> 
        <div className='grid'>
            {this.state.projects.map(project=>{
            return <Tile projects = {{title: project.title, image: project.image, text: project.text, link: project.link}} />
            })}
        </div>
      </div>
    )
  }
}

