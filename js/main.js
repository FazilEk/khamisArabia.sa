(function ($) {
    "use strict";


    // Get project root from about.js location
    const scriptURL = document.currentScript.src;
    const projectRoot = new URL("../", scriptURL);
    const homeButton = document.getElementById("company-logo-browser");
    // About Us Container Loading Start
    document.addEventListener("DOMContentLoaded", function () {
        try {
            homeButton.href = new URL("img/khamis/favicon_io/android-chrome-512x512.png", projectRoot).href;


            fetch(new URL("constants/aboutus.html", projectRoot))
                .then(response => {
                    if (!response.ok) {
                        throw new Error("About HTML not found");
                    }
                    return response.text();
                })
                .then(data => {
                    // Replace ROOT with actual project root
                    data = data.replaceAll("{{ROOT}}", projectRoot.href);

                    document.getElementById("about-container").innerHTML = data;

                })
                .catch(error => console.error("About loading error:", error));
        }
        catch (error) {
            alert('index{aboutus.html}loadfailed' + error);
        }

    });
    // About Us Container Loading END

    // Fact Count Container Loading Start
    document.addEventListener("DOMContentLoaded", function () {
        fetch("constants/factCount_Container.html")
            .then(response => response.text())
            .then(data => {

                document.getElementById("factCount-container").innerHTML = data;
                $('[data-toggle="counter-up"]').counterUp({
                    delay: 5,
                    time: 2000
                });

            })
            .catch(error => alert("fact count loading error:" + error));
    });
    // Fact Count Container Loading END

    // Footer Container Loading Start
    document.addEventListener("DOMContentLoaded", function () {
        fetch("constants/footer_Container.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("footer-container").innerHTML = data;
            })
            .catch(error => alert("footer loading error:" + error));
    });
    // Footer Container Loading END

    // Copyright Container Loading Start
    document.addEventListener("DOMContentLoaded", function () {
        fetch("constants/copyright_Container.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("copyRight-container").innerHTML = data;
            })
            .catch(error => alert("footer loading error:" + error));
    });
    // Copyright Container Loading END

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });


    // Facts counter



    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

