'use strict';
let text = document.querySelector('.text'),
    date = new Date(),
    getDayName = function() {
        let day = date.getDay();
        if (day == 0) {
            day = 'Воскресенье';
        } else if (day == 1) {
            day = 'Понедельник';
        } else if (day == 2) {
            day = 'Вторник';
        } else if (day == 3) {
            day = 'Среда';
        } else if (day == 4) {
            day = 'Четверг';
        } else if (day == 5) {
            day = 'Пятница';
        } else if (day == 6) {
            day = 'Суббота';
        }
        return day;
    },
    getTimeOfDay = function() {
        let partOfDay;
        if (hours >= 4 && hours < 12) {
            partOfDay = 'Утро';
        } else if (hours >= 12 && hours < 17) {
            partOfDay = 'День';
        } else if (hours >= 17 && hours <= 23) {
            partOfDay = 'Вечер';
        } else if (hours >= 0 && hours < 4) {
            partOfDay = 'Ночь';
        }
        return partOfDay;
    },
    getSayHi = function() {
        let sayHi;
        if (getTimeOfDay() == 'День' || getTimeOfDay() == 'Вечер') {
            sayHi = 'Добрый';
        } else if (getTimeOfDay() == 'Утро') {
            sayHi = 'Доброе';
        } else if (getTimeOfDay() == 'Ночь') {
            sayHi = 'Добрая';
        }
        return sayHi;
    },
    getCountDays = function(deadline) {
        let dateNow = date.getTime(),
            dateStop = new Date(deadline).getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60),
            days = Math.floor(hours / 24);
        return days;
    };
getCountDays('1 january 2020');
let countTime = date.toLocaleTimeString('en'),
    hours = date.getHours(),
    massage = `${getSayHi()} ${getTimeOfDay()}!
    Сегодня: ${getDayName()}.
    Текущее время: ${countTime}.
    До нового года осталось ${getCountDays('1 january 2020')} дней!`;
text.textContent = massage;