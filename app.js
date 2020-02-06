/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
    "number": {
      "value": 10,
      "density": {
        "enable": true,
        "value_area": 2004.2650760819035
      }
    },
    "color": {
      "value": "#5110ed"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 10,
        "color": "#52008c"
      },
      "polygon": {
        "nb_sides": 8
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.1122388442605866,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.48724632738080703,
        "opacity_min": 0.6090579092260088,
        "sync": false
      }
    },
    "size": {
      "value": 112.2388442605866,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 0,
      "color": "#641010",
      "opacity": 0.21646062821684559,
      "width": 8.658425128673823
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "top",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 2565.4592973848366,
        "rotateY": 320.6824121731046
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
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

);