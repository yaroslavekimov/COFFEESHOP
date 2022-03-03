window.addEventListener('DOMContentLoaded', function() {

    ' use strict ';

// Slider products

    let slideIndex = 1;

    let slides = document.querySelectorAll('.productsPageList');
    
    function showSlide(index) {

        if (index > slides.length) {
            slideIndex = 1;
        }
        if (index < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'flex';
    };

    function clickButton(index) {
        document.querySelectorAll('.controlButton')[0].addEventListener('click', function() {
            showSlide(--slideIndex);
        })
    
        document.querySelectorAll('.controlButton')[1].addEventListener('click', function() {
            showSlide(++slideIndex);
        })
    
        let timer = setInterval(() => document.querySelectorAll('.controlButton')[1].click(), 6000);
    };

    (function startSlider(index) {
        if (document.querySelectorAll('#products').length !== 0) {
            showSlide(index);
            clickButton()
        }
    })(slideIndex);

// Seeds show

    (function showSeeds() {
        if (document.getElementsByClassName('seed').length !== 0) {
            let seedList = document.getElementsByClassName('seed'), count = 300;
            for ( let i = 0; i < seedList.length; i++) {
                function animationTime() {
                    seedList[i].style.display = 'inline-block';
                }
                setTimeout(animationTime, count);
                count = count+300;
            }
        }
    })();

// Leaves show

    (function startLeaves() {
        if (document.getElementsByClassName('leaves').length !== 0) {
            let leaves = document.getElementsByClassName('leavesImg');
            leaves[0].style.display = 'inline-block';
        }
    })();

// Hide menu

    (function hideMenu() {
        let pageName = document.querySelectorAll('.hideMenuItem')[0],
            menu = document.querySelectorAll('.headerItem'),
            menuItem = document.getElementsByTagName('a');

        for ( let i = 0; i < menuItem.length; i++ ) {

            let linkMenuItem = menuItem[i].href.substring(29)+'Page',
                numPageName = pageName.className.indexOf(' '),
                classPageName = pageName.className.substring(0, numPageName);

            if ( linkMenuItem === classPageName ) {
                menu[i-1].style.display = 'none';
            } else if ( menu[0].style.display !== 'none' && classPageName === 'generalPage' ) {
                    menu[0].style.display = 'none';
                }
        }
    })();

// Hamburger

    (function hamburger() {
        let hamburger = document.querySelector('.hamburger'),
            menuItem = document.querySelectorAll('.headerItem'),
            menu = document.querySelector('.headerMenu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburgerActive');
            menu.classList.toggle('headerMenuActive');
        })

        menuItem.forEach(item => { item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburgerActive');
                menu.classList.toggle('headerMenuActive');
            })
        })
    })();
});