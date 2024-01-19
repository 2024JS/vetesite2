function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.carousel-slick-orange').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1
            
        });
    } else {
            $('.carousel-slick-orange').slick({
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


/*console.log(document.querySelectorAll(".carousel_tr_p .carousel-slick__container").length)

let divv = document.querySelector(".carousel-slick");
const news = divv.closest("div")
console.log(news)


console.log(document.querySelector(".carousel-slick").closest("div"))
console.log(news.search([carousel]));*/



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
