$(window).on("load", function () { });
$(document).ready(function () {
    /////////XS/////////
    $('.mo-menu-icon').click(function () {
        $(".navbar-cont").fadeIn(200);
        $(".mo-navbar").toggleClass("nav-in");
        $("body").toggleClass("overflow");
    });
    $('.navbar-cont').click(function () {
        $(".navbar-cont").fadeOut(150);
        $(".mo-navbar").toggleClass("nav-in");
        $("body").toggleClass("overflow");
    });
    $('.mo-navbar').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(500);
        $("body").toggleClass("overflow");
        $('.search-input').focus();
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    $('.close-btn').click(function () {
        $(".navbar-cont").fadeOut(350);
        $(".mo-navbar").removeClass("nav-in");
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(300);
    });
    /////////ACC/////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
        $(".mo-menu-anchor").addClass("mo-accordion");
        $(".mo-dropdown").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
        console.log()
    })

    /////////Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: false,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            768: {
                items: 1,
                dots: true,
                nav: false
            },
        }
    });
});