window.addEventListener('DOMContentLoaded', function() {

    ' use strict ';

// Slider products

    let slideIndex = 1;

    function showSlide(index) {
        let slides = document.querySelectorAll('.productsPageList');

        if (index > slides.length) {
            slideIndex = 1;
        }
        if (index < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'flex';

        document.querySelectorAll('.controlButton')[0].addEventListener('click', function() {
            showSlide(--slideIndex);
        })
    
        document.querySelectorAll('.controlButton')[1].addEventListener('click', function() {
            showSlide(++slideIndex);
        })

        let timer = setInterval(() => document.querySelectorAll('.controlButton')[1].click(), 6000);
    } 

    (function startSlider(index) {
        if (document.querySelectorAll('#products').length !== 0) {
            showSlide(index);
        }
    })(slideIndex);

// Seeds show

    function showSeeds() {
        let seedList = document.getElementsByClassName('seed'), count = 300;
        for ( let i = 0; i < seedList.length; i++) {
            function animationTime() {
                seedList[i].style.display = 'inline-block';
            }
            setTimeout(animationTime, count);
            count = count+300;
        }
    };

    (function startSeeds() {
        if (document.getElementsByClassName('seed').length !== 0) {
            showSeeds();
        }
    })();

// Leaves show

    function showLeaves() {
        let leaves = document.getElementsByClassName('leavesImg');
        leaves[0].style.display = 'inline-block';
    }

    (function startLeaves() {
        if (document.getElementsByClassName('leaves').length !== 0) {
            showLeaves();
        }
    })();

});