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
let quastion,
    appData = {
        budget: money,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        income: {},
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        mission: 500000,
        period: 12,
        asking: function() {
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Спортивная секция, обслуживание автомобиля, стройка');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            let sum = 0,
                answer;
            for (let i = 0; i < 2; i++) {
                if (i === 0) {
                    quastion = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Дом, машина');
                } else if (i === 1) {
                    quastion = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Стройка, семья');
                }
                answer = +prompt('Во сколько это обойдется?', 2500);
                while (isNaN(answer) || answer == '' || answer == null) {
                    answer = +prompt('Во сколько это обойдется?', 2500);
                }
                sum = sum + answer;
                appData.expenses[quastion] = answer;

            }
            console.log(sum);
            return sum;
        },
        getExpensesMonth: function() {
            for (let key in appData.expenses) {
                appData.expensesMonth += appData.expenses[key];
            }
        },
        getBudget: function() {
            appData.budgetMonth = appData.budget - appData.expensesMonth;
            appData.budgetDay = appData.budgetMonth / 30;
        },
        getTargetMonth: function(accumulatedMonth, mission) {
            let periodForMission = mission / accumulatedMonth;
            if (periodForMission > 0) {
                alert('Для достижения цели ' + Math.ceil(periodForMission) + ' месяцев.');
            } else if (periodForMission < 0) {
                alert('Цель не будет достигнута.');
            }
        },
        getStatusIncome: function(budgetDay) {
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

    };
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
let expensesAmount = appData.expensesMonth,
    accumulatedMonth = appData.getBudget,
    period = appData.mission / appData.budgetMonth,
    objectList = function() {
        for (let key in appData) {
            console.log('Наша программа включает в себя данные - ' + key + ': ' + appData[key]);
        }
    };

console.log('Расходы за месяц - ' + expensesAmount);
console.log('Цель будет достигнута через ' + Math.ceil(period) + ' месяцев.')
console.log('Уровень дохода - ' + money);
objectList();