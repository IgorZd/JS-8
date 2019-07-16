'use strict'
let money = +prompt('Ваш месячный доход?'),
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000;
console.log(addExpenses.split(','));
let showTypeof = function(item) {
    console.log(item, typeof item);
}
showTypeof(money);
showTypeof(income);
showTypeof(deposit);
let quastion01 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    requireExpenses01 = +prompt('Во сколько это обойдется?'),
    quastion02 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    requireExpenses02 = +prompt('Во сколько это обойдется?'),
    budgetMonth = money - requireExpenses01 - requireExpenses02,
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

function getExpensesMonth(requireExpenses01, requireExpenses02) {
    let allExpenses = requireExpenses01 + requireExpenses02;
    return allExpenses;
}

function getAccumulatedMonth(money, requireExpenses01, requireExpenses02) {
    let accumulatedMonth = money - requireExpenses01 - requireExpenses02;
    return accumulatedMonth;
}
let accumulatedMonth = getAccumulatedMonth(money, requireExpenses01, requireExpenses02);

function getTargetMonth(accumulatedMonth, mission) {
    let periodForMission = mission / accumulatedMonth;
    return periodForMission;
}
console.log('Накопления за месяц - ', getAccumulatedMonth(money, requireExpenses01, requireExpenses02));
console.log('Для достижения цели ', Math.ceil(getTargetMonth(accumulatedMonth, mission)), ' месяцев.');