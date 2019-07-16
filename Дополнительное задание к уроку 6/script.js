let week = [],
    toDay = 'пт';

for (let i = 0; i < 7; i++) {
    week.push(prompt(` Введите дни недели `, ''));

    if (week[i] == 'сб' || week[i] == 'вс') {
        document.write(`<p><b>${week[i]}</b></p>`);
    } else if (week[i] == toDay) {
        document.write(`<p><i>${week[i]}</i></p>`);
    } else {
        document.write(`<p>${week[i]}</p>`);
    }
}
console.log(week);
// let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//     toDay = 'сб';

// for (let i = 0; i < 7; i++) {

//     if (week[i] == 'сб' || week[i] == 'вс') {
//         document.write(`<p><b>${week[i]}</b></p>`);
//     } else if (week[i] == toDay) {
//         document.write(`<p><i>${week[i]}</i></p>`);
//     } else {
//         document.write(`<p>${week[i]}</p>`);
//     }
// }
// console.log(week);