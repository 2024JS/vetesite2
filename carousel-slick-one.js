function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.carousel-slick').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1
        });
    } else {
            $('.carousel-slick').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
            });
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 900px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
    myFunction(x);
});

/*
let aaa = window.innerWidth;
if (aaa >= 900) {
    $('.carousel-slick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1
    });
} else {
    $('.carousel-slick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}*/
