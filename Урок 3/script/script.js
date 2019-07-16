'use strict'
let money = prompt('Ваш месячный доход?'),
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000;
console.log(addExpenses.split(','));
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
let quastion01 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    quastion02 = prompt('Во сколько это обойдется?'),
    quastion03 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    quastion04 = prompt('Во сколько это обойдется?'),
    budgetMonth = money - quastion02 - quastion04,
    period = (mission / budgetMonth);
console.log(budgetMonth);
console.log(Math.ceil(period));
let budgetDay = budgetMonth / 30;
console.log(budgetDay);
console.log(Math.floor(budgetDay));
if (budgetDay > 800) {
    alert('Высокий уровень дохода!');
} else if (budgetDay <= 800 && budgetDay > 300) {
    alert('Средний уровень дохода');
} else if (budgetDay <= 300 && budgetDay > 0) {
    alert('Низкий уровень дохода.');
} else if (budgetDay <= 0) {
    alert('Что-то пошло не так...');
}