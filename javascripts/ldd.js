$(document).ready(function() {
  if ( $( "#particles" ).length ) {
    initiateParticlesBlaster();
  }

  smoothScrolling();

  if ( $( "#main-hero" ).length ) {
    var distanceToTop = $( "#news" ).offset().top;
    var navbar = $( "#main-navbar" );
    var $window = $( window );
    var heroItems = $( "#hero-items" );
    var scrollHandling = {
      allow: true,
      reallow: function() {
        scrollHandling.allow = true;
      },
      delay: 100
    }

    navbar.addClass('transparent');

    $window.scroll( function() {
      var wScroll = $window.scrollTop();

      if ( wScroll <= distanceToTop ) {
        heroItems.css({
          "transform": "translate(0px, " + wScroll / 3 + "%)"
        });
      }

      if ( scrollHandling.allow ) {
        if ( wScroll > 450 ) {
          navbar.removeClass( "transparent" );
        } else {
          navbar.addClass( "transparent" );
        }

        scrollHandling.allow = false;
        setTimeout( scrollHandling.reallow, scrollHandling.delay );
      }
    });
  }
});

function smoothScrolling() {
  // Select all links with hashes
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 74
          }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex','-1');
              $target.focus();
            };
          });
        }
      }
    });
}

function initiateParticlesBlaster() {
  particlesJS("particles", {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#447050"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "bubble.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": .2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.05,
          "sync": false
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
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
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
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
  });
}
