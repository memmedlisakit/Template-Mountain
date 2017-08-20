$(document).ready(function () {
    // menu fixed
    $(window).scroll(function () {
        if (window.pageYOffset > 30) {
            $(".navbar-brand").css(
                "animation", "menu-logo1 .3s forwards"
            )
            $(".navbar-nav>li>a ").css(
                "animation", "menu-li1 .3s forwards"
            );
        } else {
            $(".navbar-brand").css(
                "animation", "menu-logo2 .3s forwards"
            )
            $(".navbar-nav>li>a ").css(
                "animation", "menu-li2 .3s forwards"
            );
        }
    });

    // slider pro 
    $('#my-slider').sliderPro({
        width: '100%',
        height: 600,
        buttons: false,
        arrows: true,
        slideDistance: 0,
        imageScaleMode: 'cover',
        breakpoints: {
            768: {
                height: '500px'
            },

            480: {
                height: '450px'
            }
        }
    });

    // popup video
    $(".popup-img .fa-play-circle").click(function () {
        $(".popup-video").fadeIn();
    });
    $(".popup .fa-times").click(function () {
        $(".popup-video").fadeOut();
    });

    // what section slider
    $("#what-slider").sliderPro({
        width: "100%",
        height: 400,
        buttons: false,
        arrows: false,
        slideDistance: 0,
        imageScaleMode: 'cover',
        breakpoints: {
            768: {
                height: '500px'
            },

            480: {
                height: '450px'
            }
        }
    })

    // team hover function
    $(".team-item", this).mouseover(function () {
        $(this).children(".front-item").fadeIn(100)
    })
    $(".team-item", this).mouseleave(function () {
        $(this).children(".front-item").fadeOut(100);
    })


    // news slider
    $("#news-slider").sliderPro({
        width: "100%",
        height: 500,
        buttons: false,
        loop: false,
    });
})