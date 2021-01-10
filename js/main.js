$('.lang-menu').on('click', function(){
    $('.lang-menu').toggleClass('lang-menu--click')
    $('.lang-menu').trigger('close');
});

$('.categories__item').on('click', function(){
    $('.categories__item').toggleClass('categories__item--opened')
    $('categories__item').trigger('close');
})