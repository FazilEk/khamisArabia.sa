(function ($) {
    "use strict";


    

    // About Us Container Loading Start
    document.addEventListener("DOMContentLoaded", function () {

        fetch("../about/abouts_Constants/about_Container.html")
            .then(response => response.text())
            .then(data => {

                document.getElementById("about-container").innerHTML = data;

            })
            .catch(error => alert("about us loading error:"));
    });
    // About Us Container Loading END

    // Fact Count Container Loading Start
    document.addEventListener("DOMContentLoaded", function () {
        fetch("../constants/factCount_Container.html")
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
        fetch("../constants/footer_Container.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("footer-container").innerHTML = data;
            })
            .catch(error => alert("footer loading error:" + error));
    });
    // Footer Container Loading END

    // Copyright Container Loading Start
    document.addEventListener("DOMContentLoaded", function () {
        fetch("../constants/copyright_Container.html")
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

