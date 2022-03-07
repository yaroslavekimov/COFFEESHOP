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
        let linkLocation = document.location.href,
            pageName = document.querySelectorAll('.hideMenuItem')[0],
            menu = document.querySelectorAll('.headerItem'),
            menuItem = document.querySelectorAll('.headerLink');

        for ( let i = 0; i < menuItem.length; i++ ) {

            let newLinkLocation = linkLocation.lastIndexOf('/'),
                linkMenuItem = menuItem[i].href.substring(++newLinkLocation)+'Page',
                numPageName = pageName.className.indexOf(' '),
                classPageName = pageName.className.substring(0, numPageName);
            if ( linkMenuItem === classPageName ) {
                menu[i].style.display = 'none';
            } else if ( linkLocation.substring(++newLinkLocation) === ('id=' + i) && classPageName === 'productsPage' ) {
                menu[i].style.display = 'none';
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

// Modal

    function actionModal() {
        let uname = document.querySelector('#uname'),
            uemail = document.querySelector('#uemail');

        let errorMsg = {
            name: '',
            email: ''
        };

        let error ={
            name: '',
            email: ''
        };

        (function startInput() {
            uname.addEventListener('blur', function(event) {
                let uNameValue = event.target.value;
            
                if(uNameValue === undefined || !isNaN(uNameValue) || uNameValue.length < 2) {
                    errorMsg.name = '';
                    errorMsg.name += 'Введите корректное имя. Не менее 2 знаков.';
                    error.name = false;
                } else {
                    errorMsg.name = '';
                    error.name = true;
                }
                document.querySelector('.error__name').textContent = errorMsg.name;
            });
        
            uemail.addEventListener('blur', function(event) {
                let uEmailValue = event.target.value;
            
                if(uEmailValue === undefined || !isNaN(uEmailValue) || !/[^@]+@[^@]+/.test(uEmailValue)) {
                    errorMsg.email = '';
                    errorMsg.email += 'Проверьте правильность адреса.';
                    error.email = false;
                } else {
                    errorMsg.email = '';
                    error.email = true;
                }
                document.querySelector('.error__email').textContent = errorMsg.email;
            });
        })();
        
        let message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся!',
            failure: 'Что-то пошло не так...'
            };
    
        let form = document.querySelector('.modalOrder'),
            statusMessage = document.querySelector('#wdh_result_form'),
            input = document.querySelectorAll('input');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if ( error.name === true && error.email === true ) {
                let request = new XMLHttpRequest();
                request.open('POST', 'https://simplewebpage.ru/php/actionMail.php');
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
            
                let formData = new FormData(form);
            
                let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                
                let json = JSON.stringify(obj);
            
                request.send(json);
            
                request.addEventListener('readystatechange', function() {
                    if (request.readyState < 4) {
                        statusMessage.textContent = message.loading;
                    } else if(request.readyState == 4 && request.status == 200) {
                        let messageServer = '';
                        messageServer = JSON.parse(request.responseText);
                        statusMessage.textContent = messageServer.result;
                    } else {
                        statusMessage.textContent = message.failure;
                    }
                });
            
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }

                error ={
                    name: false,
                    email: false
                };
            }
            
            
        })
    };

    (function startModal() {
        if ( document.querySelector('.modal') ) {
            document.querySelector('.coffeePageButton').addEventListener('click', function() {
                actionModal();
                document.querySelector('.modal').style.display = 'flex';
                document.querySelector('.modalClose').addEventListener('click', function() {
                    document.querySelector('.modal').style.display = 'none';
                    let clear = document.querySelectorAll('.error');
                    for ( let i = 0; i < clear.length; i++ ) {
                        clear[i].textContent = ''
                    }
                })
            })
        }
    })();
});