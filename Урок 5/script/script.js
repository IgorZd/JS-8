'use strict'
let money;
let start = function() {
    do {
        money = prompt('Ваш месячный доход?', 50000);
        console.log(money);
    }
    while (isNaN(money) || money == '' || money == null)
}
start();
let income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Спортивная секция, обслуживание автомобиля, стройка'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000;
console.log(addExpenses.split(','));
let showTypeof = function(item) {
    console.log(item, typeof item);
}
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let quastion01,
    quastion02,
    getExpensesMonth = function() {
        let sum = 0,
            answer;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                quastion01 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Дом, машина');
            } else if (i === 1) {
                quastion02 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Стройка, семья');
            }
            answer = +prompt('Во сколько это обойдется?', 2500);
            while (isNaN(answer) || answer == '' || answer == null) {
                answer = +prompt('Во сколько это обойдется?', 2500);
            }
            sum = sum + answer;
        }
        console.log(sum);
        return sum;
    },
    expensesAmount = getExpensesMonth(),
    budgetMonth = money - expensesAmount,
    period = (mission / budgetMonth),
    budgetDay = budgetMonth / 30;

function getStatusIncome(budgetDay) {
    if (budgetDay > 800) {
        console.log('Высокий уровень дохода!');
    } else if (budgetDay <= 800 && budgetDay > 300) {
        console.log('Средний уровень дохода');
    } else if (budgetDay <= 300 && budgetDay > 0) {
        console.log('Низкий уровень дохода.');
    } else if (budgetDay <= 0) {
        console.log('Что-то пошло не так...');
    }
}

function getAccumulatedMonth() {
    let accumulatedMonth = money - expensesAmount;
    return accumulatedMonth;
}
let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth(accumulatedMonth, mission) {
    let periodForMission = mission / accumulatedMonth;
    if (periodForMission > 0) {
        alert('Для достижения цели ' + Math.ceil(periodForMission) + ' месяцев.');
    } else if (periodForMission < 0) {
        alert('Цель не будет достигнута.');
    }
}
console.log('Накопления за месяц - ', getAccumulatedMonth());
getTargetMonth(accumulatedMonth, mission);