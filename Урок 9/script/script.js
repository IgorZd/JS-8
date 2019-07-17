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
let calcInputs = document.querySelectorAll('.calc input');
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
        reset: function() {
            for (let i = 0; i < calcInputs.length; i++) {
                calcInputs[i].value = '';
            }
            periodAmount.textContent = inputPeriodSelect.value;
            this.budget = 0;
            this.budgetDay = 0;
            this.budgetMonth = 0;
            this.expensesMonth = 0;
            this.income = {};
            this.incomeMonth = 0;
            this.addIncome = [];
            this.expenses = {};
            this.addExpenses = [];
            this.deposit = false;
            let additionalDivIncome = document.querySelectorAll('.income-items'),
                additionalDivExpenses = document.querySelectorAll('.expenses-items'),
                clearIncomeItem = function() {
                    for (let i = 1; i < additionalDivIncome.length; i++) {
                        additionalDivIncome[i].remove();
                    }
                },
                clearExpensesItem = function() {
                    for (let i = 1; i < additionalDivExpenses.length; i++) {
                        additionalDivExpenses[i].remove();
                    }
                };
            clearIncomeItem();
            clearExpensesItem();
            buttonAddIncome.style.display = 'inline-block';
            buttonAddExpenses.style.display = 'inline-block';
            if (salaryAmount.value === '') {
                start.disabled = true;
            }
            salaryAmount.addEventListener('input', function() {
                if (this.value !== '') {
                    start.disabled = false;
                }
            });
        },
        start: function() {
            this.budget = +salaryAmount.value;
            this.getExpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getAddExpenses();
            this.getAddIncome();
            this.getBudgetMonth();
            this.getBudgetDay();

            this.showResult();
        },
        showResult: function() {
            inputResultBudgetMonth.value = this.budgetMonth;
            inputResultBudgetDay.value = this.budgetDay;
            inputResultExpensesMonth.value = this.expensesMonth;
            inputResultAdditionalExpenses.value = this.addExpenses.join(', ');
            inputResultAdditionalIncome.value = this.addIncome.join(', ');
            inputResultTargetMonth.value = this.getTargetMonth();
            inputResultIncomePeriod.value = this.calcPeriod();
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
            for (let key in this.income) {
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
                    this.addIncome.push(itemValue);
                }
            })
        },
        getExpensesMonth: function() {
            for (let key in this.expenses) {
                this.expensesMonth += +this.expenses[key];
            }
        },
        getBudgetMonth: function() {
            this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
            if (this.budgetMonth < 0 || typeof this.budgetMonth != 'number' || this.budgetMonth == 0) {
                return this.budgetMonth = 'Что-то пошло не так.!';
            } else {
                return this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
            }
        },
        getBudgetDay: function() {
            this.budgetDay = this.budgetMonth / 30;
            if (this.budgetMonth < 0 || typeof this.budgetMonth != 'number' || this.budgetMonth == 0) {
                return this.budgetDay = 'Что-то пошло не так.';
            } else {
                return this.budgetDay = Math.ceil(this.budgetMonth / 30);
            }
        },
        getTargetMonth: function() {
            if (this.budgetMonth < 0 || typeof this.budgetMonth != 'number' || this.budgetMonth == 0) {
                return 'Что-то пошло не так.';
            } else {
                return Math.ceil(targetAmount.value / this.budgetMonth);
            }
        },
        calcPeriod: function() {
            if (this.budgetMonth < 0 || typeof this.budgetMonth != 'number' || this.budgetMonth == 0) {
                return 'Что-то пошло не так.';
            } else {
                return this.budgetMonth * inputPeriodSelect.value;
            }
        },
    };
cancel.addEventListener('click', appData.reset.bind(appData));
cancel.addEventListener('click', function() {
    let leftInputs = data.querySelectorAll('input');
    for (let input of leftInputs) {
        let attribute = input.getAttribute('type');
        if (attribute == 'text') {
            input.disabled = false;
        }
    };
    start.style = 'display: inline-block'
    cancel.style = 'display: none';
});
start.addEventListener('click', appData.start.bind(appData));
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
            input.disabled = true;
        }
    };
    start.style = 'display: none'
    cancel.style = 'display: inline-block';
});
appData.getTargetMonth();
let expensesAmount1 = appData.expensesMonth,
    accumulatedMonth = appData.getBudget,
    period = appData.mission / appData.budgetMonth;