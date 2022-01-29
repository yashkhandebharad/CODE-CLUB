$('#event-slider').owlCarousel({
    loop:true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2500,
    smartSpeed: 450, 
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$(window).scroll(function(){
    $("nav").toggleClass("scrolled", $(this).scrollTop()>100 );
});

$('#club-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    autoplayTimeout: 3000,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})