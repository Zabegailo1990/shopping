$('.lang-menu').on('click', function(){
    $('.lang-menu').toggleClass('lang-menu--click')
    $('.lang-menu').trigger('close');
});

$('.categories__item').on('click', function(){
    $('.categories__item').toggleClass('categories__item--opened')
    $('categories__item').trigger('close');
});

$('.promo__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
});


    $(".card__rating").rateYo({
        starWidth: "13px",
        ratedFill: "#ffc600",
        normalFill: "#e2e2e2"
    });
