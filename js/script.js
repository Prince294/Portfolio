var pixel = window.innerHeight / 100;

var r = document.querySelector(':root');

$(document).ready(function () {
    $(window).scrollTop(0);
    //Navbar SVG Styling 
    let progresscircle = document.querySelector(".progress");
    let radius = progresscircle.r.baseVal.value; // Radius of the circle
    let circum = 2 * 3.14286 * radius; // Circumference of the circle
    progresscircle.style.strokeDasharray = circum;  // set strokeDashArray to total circumference
    let maxHeight = document.documentElement.scrollHeight
    maxHeight = (maxHeight - window.innerHeight) / 100; // converting of total scrollable height to percentage

    //setting the amount of strokeDashOffset of NavScrollar on windows.load 
    let initial = window.pageYOffset;
    initial = initial / maxHeight;
    progresscircle.style.strokeDashoffset = circum - (initial / 100) * circum;



    $(window).scroll(function () {
        let Y = this.pageYOffset;
        Y = Y / maxHeight;
        setProgress(Y);
        function setProgress(percent) {
            progresscircle.style.strokeDashoffset = circum - (percent / 100) * circum;
        }

        // custom button hide/show for scrolling to about
        if (this.scrollY >= ((105 * pixel) - 2)) {
            $('.aboutbtn').css('display', 'none')
        }
        else {
            $('.aboutbtn').css('display', 'block')
        }

        //Navbar color changer on scroll
        let navColor = window.getComputedStyle(document.documentElement).getPropertyValue('--navColor');
        if (this.scrollY > 20) {
            $('.navbar').addClass('navScroll');
        }
        else {
            $('.navbar').removeClass('navScroll');
        }
        if (this.scrollY > window.innerHeight && this.scrollY < 2 * window.innerHeight + (9.8 * pixel)) {//About Screen 
            $(".navbar .list_item .lis a ").css('color', navColor);
            r.style.setProperty('--navBeforeColor', navColor);
            $('.progress').css('stroke', navColor);
        }
        else if (this.scrollY > 2 * window.innerHeight + (9.8 * pixel) && this.scrollY < 2.988 * window.innerHeight) {//Projects Screen
            $(".navbar .list_item .lis a ").css('color', 'black');
            r.style.setProperty('--navBeforeColor', 'black');
            $('.progress').css('stroke', 'black');
        }
        else if (this.scrollY > 2.988 * window.innerHeight) {//Skills Screen
            $(".navbar .list_item .lis a ").css('color', navColor);
            r.style.setProperty('--navBeforeColor', navColor);
            $('.progress').css('stroke', navColor);
        }
        else {
            $('.progress').css('stroke', navColor);
            $('.navbar .list_item .lis a').css('color', navColor);
            r.style.setProperty('--navBeforeColor', navColor);
        }

    });

});

var typed = new Typed(".typing", {
    strings: ["Developer", "Student", "Designer", "Reader"],
    typeSpeed: 45,
    backSpeed: 30,
    loop: true,
    autoInsertCss: true,
    backDelay: 1000,
    startDelay: 500
});


//Scroll to About Section through Button
function scrollAbout() {
    $("html").animate(
        {
            scrollTop: $("#about").offset().top,
        },
        100
    );
    document.$(this).style.background = "blue";

}


// $(window).on("load", function () {
//     $(window).scroll(function () {
//         var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//         $(".item1").each(function () {
//             /* Check the location of each desired element */
//             var objectBottom = $(this).offset().top + $(this).outerHeight();

//             /* If the element is completely within bounds of the window, fade it in */
//             if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//                 if ($(this).css("opacity") == 0) { $(this).fadeTo(500, 1); }
//             } else { //object goes out of view (scrolling up)
//                 if ($(this).css("opacity") == 1) { $(this).fadeTo(500, 0); }
//             }
//         });
//     }).scroll(); //invoke scroll-handler on page-load
// });