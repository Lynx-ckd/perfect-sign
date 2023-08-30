
$(document).ready(function () {

    $('.banner-slider').slick({
        
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.test-slider').slick({
        
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        // fade: true,
        cssEase: 'linear'
    });
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        fade: false,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        dots: false,
        speed: 1500,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });
   
    new VenoBox({
        selector: '.my-image-links',
        numeration: false,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane',
        navigation: true,
    });
});