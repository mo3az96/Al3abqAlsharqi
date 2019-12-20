$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "auto");
        $('body').animate({
            scrollTop: 0
        }, 1);
    });
});
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

    var swiper = new Swiper('.main-slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
        spaceBetween: 10,
        loop: true,
    });


    var latestswiper = new Swiper('#latest .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,

        navigation: {
            nextEl: '#latest .swiper-button-next',
            prevEl: '#latest .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                pagination: {
                    el: '#latest .swiper-pagination',
                    clickable: true,
                },
                navigation: false
            },
            500: {
                pagination: {
                    el: '#latest .swiper-pagination',
                    clickable: true,
                },
                navigation: false
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        },
    });
    var bestsellerswiper = new Swiper('#bestseller .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,

        navigation: {
            nextEl: '#bestseller .swiper-button-next',
            prevEl: '#bestseller .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                pagination: {
                    el: '#bestseller .swiper-pagination',
                    clickable: true,
                },
                navigation: false
            },
            500: {
                pagination: {
                    el: '#bestseller .swiper-pagination',
                    clickable: true,
                },
                navigation: false
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        },
    });
    var specialsswiper = new Swiper('#specials .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,

        navigation: {
            nextEl: '#specials .swiper-button-next',
            prevEl: '#specials .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                pagination: {
                    el: '#specials .swiper-pagination',
                    clickable: true,
                },
                navigation: false
            },
            500: {
                pagination: {
                    el: '#specials .swiper-pagination',
                    clickable: true,
                },
                navigation: false
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        },
    });
    var topviewdswiper = new Swiper('#topviewd .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,

        navigation: {
            nextEl: '#topviewd .swiper-button-next',
            prevEl: '#topviewd .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                pagination: {
                    el: '#topviewd .swiper-pagination',
                    clickable: true,
                },
                navigation: false
            },
            500: {
                pagination: {
                    el: '#topviewd .swiper-pagination',
                    clickable: true,
                },
                navigation: false
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        },
    });

    var brandsswiper = new Swiper('.brands-cont .brands-slider', {
        slidesPerView: 7,
        spaceBetween: 10,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.brands-cont .swiper-button-next',
            prevEl: '.brands-cont .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                navigation: false,
                pagination: {
                    el: '.brands-cont .swiper-pagination',
                    clickable: true,
                },

            },
            500: {
                slidesPerView: 4,
                pagination: {
                    el: '.brands-cont .swiper-pagination',
                    clickable: true,
                },
                navigation: false
            },
            992: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 7,
            }
        },
    });

    if ($(window).width() < 992) {
        $(".mo-menu-anchor").addClass("moaccordion");
        $(".mo-dropdown").addClass("mopanel");
    }

    // Accordion
    var acc = document.getElementsByClassName("moaccordion");
    var pan = document.getElementsByClassName("mopanel");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});