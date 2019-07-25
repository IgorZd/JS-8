window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    // Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            if (seconds < 10) {
                seconds = '0' + (seconds);
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (timeRemaining <= 0) {
                seconds = '00';
            }
            if (timeRemaining <= 0) {
                minutes = '00';
            }
            if (timeRemaining <= 0) {
                hours = '00';
            }
            return { hours, minutes, seconds, timeRemaining };
        }

        function updateClock(deadline) {
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            if (timer.timeRemaining > 0) {
                setInterval(countTimer, 1000, deadline);
            }
        }
        updateClock('23 july 2019');
    }
    countTimer('23 july 2019');
    // Menu
    let toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            btnClose = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        btnClose.addEventListener('click', handlerMenu);
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', handlerMenu);
        }
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };
    toggleMenu();
    // popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content');
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    popup.style.display = 'block';
                } else {
                    popup.style.display = 'block';
                    popup.style.opacity = '1';
                    let pos = 0 - popupContent.clientHeight;
                    const setPos = () => {
                        popup.style.opacity = '1';
                        popupContent.style.top = pos + 'px';
                        if (popupContent.getBoundingClientRect().top < 100) pos += 1;
                        else clearInterval(intervalPos);
                    }
                    let intervalPos = setInterval(setPos, 1);
                }
            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        })
    };
    togglePopUp();
});