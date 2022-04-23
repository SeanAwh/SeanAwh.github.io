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
                document.getElementById('vidVac').play();
            }
            else if (destination.index == 5) {
                document.getElementById('vidXdPortfolio').play();
            }
            else if (destination.index == 6) {
                document.getElementById('vidXdWeb').play();
            }
            else if (destination.index == 10) {
                document.getElementById('vidEscaperoom').play();
            }
            else if (destination.index == 11) {
                document.getElementById('vidNamecard').play();
            }
            else {

            }
        },

        //Anchors for nav
        anchors: ['home', 'sd1', 'sd2', 'sd3','d1','d2','d3','d4','d5','d6','vr1','vr2'],

    });
    //disable mousewheel scrolling
    fullpage_api.setAllowScrolling(true);

});

$('.carousel').carousel({
    interval: false
  });

//Animate
anime({
    targets: '.bTextStagger',
    duration: 2000,
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
                items:7,
                autoplay:true
            })
});