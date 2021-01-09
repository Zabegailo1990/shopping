$('.lang-menu').on('click', function(){
    $('.lang-menu').toggleClass('lang-menu--click')
    $('.lang-menu').trigger('close');
})