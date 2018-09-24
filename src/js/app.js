import jquery from 'jquery';
import Flickity from 'flickity';

window.jQuery = window.$ = jquery;

import 'flickity/dist/flickity.css';

(function () {

    /**
     * Burger-menu
     */
    $('.burger-menu').click(function () {
        var menu = $('.menu');
        $(this).toggleClass('active');
        if (!menu.hasClass('is-active')) {
            menu.addClass('is-active');
        } else {
            menu.removeClass('is-active');
        }
    });

})(jQuery)

/**
 * Slider Header banner
 */

if ($('.header-banner-slider')) {

    var elem1 = document.querySelector('.header-banner-slider');
    if (elem1) {

        const flkty1 = new Flickity(elem1, {
            prevNextButtons: false,
            contain: true,
            draggable: false,
            groupCells: 1
        });


        var indexHeaderSlider = document.querySelector('.header-banner-slider-nav-num-dots__index');
        indexHeaderSlider.innerText = flkty1.selectedIndex + 1;

        var prevArrowHeader = document.querySelector('.header-banner-slider-nav-arrow-prev');

        prevArrowHeader.addEventListener('click', function () {
            flkty1.previous(false, false);
            indexHeaderSlider.innerText = flkty1.selectedIndex + 1;
        });

        var nextArrowHeader = document.querySelector('.header-banner-slider-nav-arrow-next');

        nextArrowHeader.addEventListener('click', function () {
            flkty1.next(false, false);
            indexHeaderSlider.innerText = flkty1.selectedIndex + 1;
        });

        var lastHeaderSlider = document.querySelector('.header-banner-slider-nav-num-dots__last');

        lastHeaderSlider.innerText = flkty1.getCellElements().length;
    }
}