$(document).ready(function() {
    //аккордион
    $('.offers__item-bottom__elem-title').click(function() {
        $(this).toggleClass('active').next().slideToggle();
        $('.offers__item-bottom__elem-title').not($(this)).removeClass('active').next().slideUp();
    });
});