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

    /**
     * Form-label
     */

    $('.form-control').on('focus', function () {
        $(this).parent().addClass('in-focus');
    });

    $('.form-control').on('blur', function () {
        if ($(this).val() !== "") {
            $(this).parent().addClass('in-focus');
        } else {
            $(this).parent().removeClass('in-focus');
        }
    });

    $('.form-check-label').on('click', function() {
        $(this).parent().toggleClass('in-focus');
    })

    /**
     * Modal
     */
    $('#add-reviews-btn').on('click', function(e) {
        e.preventDefault();
        $('.modal-feedback').removeClass('is-close');
        $('.modal-feedback').addClass('is-active');
    })

    $('#close-modal-feedback').on('click', function() {
        $('.modal-feedback').addClass('is-close');

        setTimeout(function(){
            $('.modal-feedback').removeClass('is-active');
        }, 700)
    })

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

/**
 * Slider Reviews
 */

if ($('.reviews-slider')) {

    var elem2 = document.querySelector('.reviews-slider');
    if (elem2) {

        const flkty2 = new Flickity(elem2, {
            prevNextButtons: false,
            contain: true,
            draggable: false,
            cellSelector: '.reviews-slider-item'
        });


        var prevArrowHeader = document.querySelector('.header-banner-slider-nav-arrow-prev--reviews');
        prevArrowHeader.addEventListener('click', function () {
            flkty2.previous(false, false);
        });

        var nextArrowHeader = document.querySelector('.header-banner-slider-nav-arrow-next--reviews');
        nextArrowHeader.addEventListener('click', function () {
            flkty2.next(false, false);
        });
    }
}