'use strict'
let lang = prompt('Выберите язык, "en" или "ru"?', ''),
    weekDaysRu = 'Воскресенье, Понедельник, Вторник, Среда, Четверг, Пятница, Суббота',
    weekDaysEn = 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Satarday';
if (lang == 'ru') {
    alert(weekDaysRu);
} else if (lang == 'en') {
    alert(weekDaysEn);
} else {
    alert('Проверьте корректность введенных данных');
}

switch (lang) {
    case 'ru':
        alert(weekDaysRu);
        break;
    case 'en':
        alert(weekDaysEn);
        break;
    default:
        alert('Проверьте корректность введенных данных');
}
const daysArr = [
    ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satarday']
];
let resultLang = (lang == 'ru') ? alert(daysArr[0][0] + ", " + daysArr[0][1] + ", " + daysArr[0][2] + ", " + daysArr[0][3] + ", " + daysArr[0][4] + ", " + daysArr[0][5] + ", " + daysArr[0][6] + ".") :
    (lang == 'en') ? alert(daysArr[1][0] + ", " + daysArr[1][1] + ", " + daysArr[1][2] + ", " + daysArr[1][3] + ", " + daysArr[1][4] + ", " + daysArr[1][5] + ", " + daysArr[1][6] + ".") :
    alert('Проверьте корректность введенных данных');

let namePerson = prompt('Введите свое имя');
let reultName = (namePerson == 'Артем') ? console.log('Директор') :
    (namePerson == 'Максим') ? console.log('Преподаватель') :
    console.log('Студент');