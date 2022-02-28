window.addEventListener('DOMContentLoaded', function() {

    ' use strict ';

    let slideIndex = 1;

    function showSlide(index) {
        let slides = document.querySelectorAll('.goodsPageList');

        if (index > slides.length) {
            slideIndex = 1;
        }
        if (index < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'flex';
    } 

    showSlide(slideIndex);

    document.querySelectorAll('.controlButton')[0].addEventListener('click', function() {
        showSlide(--slideIndex);
    })

    document.querySelectorAll('.controlButton')[1].addEventListener('click', function() {
        showSlide(++slideIndex);
    })

    let timer = setInterval(() => document.querySelectorAll('.controlButton')[1].click(), 6000);

});