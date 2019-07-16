'use strict';
let start = document.getElementById('start');
let buttonPlus = document.getElementsByTagName('button'),
    buttonAddIncome = buttonPlus[0];
let buttonAddExpenses = buttonPlus[1];
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let incomeItem = document.querySelectorAll('.income-items');
let checkBoxDeposit = document.querySelector('#deposit-check');
let inputResultBudgetMonth = document.getElementsByClassName('budget_month-value')[0];
let inputResultBudgetDay = document.getElementsByClassName('budget_day-value')[0];
let inputResultExpensesMonth = document.getElementsByClassName('expenses_month-value')[0];
let inputResultAdditionalIncome = document.getElementsByClassName('additional_income-value')[0];
let inputResultAdditionalExpenses = document.getElementsByClassName('additional_expenses-value')[0];
let inputResultIncomePeriod = document.getElementsByClassName('income_period-value')[0];
let inputResultTargetMonth = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('input.income-title');
let incomeAmount = document.querySelector('input.income-amount');
let expensesTitle = document.querySelector('input.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let inputPeriodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');
let targetAmount = document.querySelector('.target-amount');
let cancel = document.querySelector('#cancel');
let data = document.querySelector('.data');
let control = document.querySelector('.control');
let quastion,
    appData = {
        budget: 0,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        income: {},
        incomeMonth: 0,
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        start: function() {
            appData.budget = +salaryAmount.value;
            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth();
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.getBudgetMonth();
            appData.getBudgetDay();

            appData.showResult();
        },
        showResult: function() {
            inputResultBudgetMonth.value = appData.budgetMonth;
            inputResultBudgetDay.value = appData.budgetDay;
            inputResultExpensesMonth.value = appData.expensesMonth;
            inputResultAdditionalExpenses.value = appData.addExpenses.join(', ');
            inputResultAdditionalIncome.value = appData.addIncome.join(', ');
            inputResultTargetMonth.value = appData.getTargetMonth();
            inputResultIncomePeriod.value = appData.calcPeriod();
            inputPeriodSelect.addEventListener('input', function() {
                inputResultIncomePeriod.value = appData.calcPeriod();
            });
        },
        addExpensesBlock: function() {
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonAddExpenses);
            expensesItems = document.querySelectorAll('.expenses-items');
            if (expensesItems.length === 3) {
                buttonAddExpenses.style.display = 'none';
            }
        },
        getExpenses: function() {
            expensesItems.forEach(function(item) {
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = +item.querySelector('.expenses-amount').value;
                if (itemExpenses !== '' && cashExpenses !== '') {
                    appData.expenses[itemExpenses] = +cashExpenses;
                }
            });
        },
        addIncomeBlock: function() {
            let cloneIncomeItem = incomeItem[0].cloneNode(true);
            incomeItem[0].parentNode.insertBefore(cloneIncomeItem, buttonAddIncome);
            incomeItem = document.querySelectorAll('.income-items');
            if (incomeItem.length === 3) {
                buttonAddIncome.style.display = 'none';
            }
        },
        getIncome: function() {
            incomeItem.forEach(function(item) {
                let itemIncome = incomeTitle.value;
                let cashIncome = incomeAmount.value;
                if (itemIncome !== '' && cashIncome !== '') {
                    appData.income[itemIncome] = +cashIncome;
                }
            });
            for (let key in appData.income) {
                appData.incomeMonth += +appData.income[key];
            }
        },
        getAddExpenses: function() {
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item) {
                item = item.trim();
                if (item !== '') {
                    appData.addExpenses.push(item);
                }
            })
        },
        getAddIncome: function() {
            additionalIncomeItem.forEach(function(item) {
                let itemValue = item.value.trim();
                if (itemValue !== '') {
                    appData.addIncome.push(itemValue);
                }
            })
        },
        getExpensesMonth: function() {
            for (let key in appData.expenses) {
                appData.expensesMonth += +appData.expenses[key];
            }
        },
        getBudgetMonth: function() {
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            if (appData.budgetMonth < 0 || typeof appData.budgetMonth != 'number' || appData.budgetMonth == 0) {
                return appData.budgetMonth = 'Ваши расходы превышают доходы!';
            } else {
                return appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            }
        },
        getBudgetDay: function() {
            appData.budgetDay = appData.budgetMonth / 30;
            if (appData.budgetMonth < 0 || typeof appData.budgetMonth != 'number' || appData.budgetMonth == 0) {
                return appData.budgetDay = 'Что-то пошло не так.';
            } else {
                return appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
            }
        },
        getTargetMonth: function() {
            if (appData.budgetMonth < 0 || typeof appData.budgetMonth != 'number' || appData.budgetMonth == 0) {
                return 'Что-то пошло не так.';
            } else {
                return Math.ceil(targetAmount.value / appData.budgetMonth);
            }
        },
        calcPeriod: function() {
            if (appData.budgetMonth < 0 || typeof appData.budgetMonth != 'number' || appData.budgetMonth == 0) {
                return 'Что-то пошло не так.';
            } else {
                return appData.budgetMonth * inputPeriodSelect.value;
            }
        },
    };
start.addEventListener('click', appData.start);
buttonAddExpenses.addEventListener('click', appData.addExpensesBlock);
buttonAddIncome.addEventListener('click', appData.addIncomeBlock);
inputPeriodSelect.addEventListener('input', function() {
    periodAmount.textContent = inputPeriodSelect.value;
});
if (salaryAmount.value === '') {
    start.disabled = true;
}
salaryAmount.addEventListener('input', function() {
    if (this.value !== '') {
        start.disabled = false;
    }
});
start.addEventListener('click', function() {
    let leftInputs = data.querySelectorAll('input');
    for (let input of leftInputs) {
        let attribute = input.getAttribute('type');
        if (attribute == 'text') {
            input.setAttribute('disabled', 'disabled');
        }
    };
    start.style = 'display: none'
    cancel.style = 'display: inline-block';
});
appData.getTargetMonth();
let expensesAmount1 = appData.expensesMonth,
    accumulatedMonth = appData.getBudget,
    period = appData.mission / appData.budgetMonth;