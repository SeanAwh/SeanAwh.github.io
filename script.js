$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#e9c46a', '#e9c46a', '#e9c46a', '#e9c46a', '#e9c46a','#e9c46a','#e9c46a'],
        navigation: true,
        navigationPosition: 'right',
        verticalCentered: true,
        keyboardScrolling: false,
        autoScrolling: true,
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 0) {

            }
            else if (destination.index == 1) {
                document.getElementById('vidQuiz').play();
            }
            else if (destination.index == 2) {
                document.getElementById('vidCovid').play();
            }
            else if (destination.index == 3) {
                document.getElementById('vidAnimal').play();
            }
            else if (destination.index == 4) {
                document.getElementById('vidEscaperoom').play();
            }
            else if (destination.index == 5) {
                document.getElementById('vidNamecard').play();
            }
            else {

            }
        },

        //Anchors for nav
        anchors: ['section1', 'section2', 'section3', 'section4'],

    });
    //disable mousewheel scrolling
    fullpage_api.setAllowScrolling(true);

});

$('.carousel').carousel({
    interval: false
  });

//Animate
anime({
    targets: '#slash',
    keyframes: [
        { translateY: [-1000, 0], opacity: [0, 1], endDelay: 5000 },
        { translateY: [0, 800], opacity: [1, 0] }
    ],
    duration: 3000,
    easing: 'easeOutElastic',
    loop: true
});

anime({
    targets: '.bTextStagger',
    easing: 'easeOutElastic(1, .6)',
    translateY: [-100, 0],
    opacity: [0, 1],
    delay: anime.stagger(500, { start: 0 })
});

anime({
    targets: '#Logo-svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 10000,
    direction: 'alternate',
    loop: true
});

        $(document).ready(function(){
            $('.owl-carousel').owlCarousel({
                margin:10,
                loop:true,
                autoWidth:true,
                items:3,
                autoplay:true
            })
});