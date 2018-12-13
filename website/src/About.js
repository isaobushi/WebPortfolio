import React from 'react'
import './About.scss'
import Particles from 'react-particles-js';


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

export default function About() {

    return (
      <div className='about-text-container'>

      <Particles params={particlesOpt} />
      <section>
        <p className='about-p'>
        I'm a full-stack web developer.<br/>
        Fast load times and lag free <span class='yellow'>interaction</span>, my highest priority.<br/> 
        My layouts will work on any device, big or small.<br/> 
        Strong preference for easy to use, <span class='yellow'>intuitive</span> UX/UI.<br/>
        Websites don't have to be static,<br/> 
        I love making pages come to <span class='yellow'>Life</span>.<br />
        <span class='yellow'> \ (º • º) /</span></p>
      </section>
    </div>
    )
  
}