'use strict';
const start = document.getElementById('start'),
    buttonPlus = document.querySelectorAll('button'),
    buttonAddIncome = buttonPlus[0],
    buttonAddExpenses = buttonPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    incomeItem = document.querySelectorAll('.income-items'),
    checkBoxDeposit = document.querySelector('#deposit-check'),
    inputResultBudgetMonth = document.getElementsByClassName('budget_month-value')[0],
    inputResultBudgetDay = document.getElementsByClassName('budget_day-value')[0],
    inputResultExpensesMonth = document.getElementsByClassName('expenses_month-value')[0],
    inputResultAdditionalIncome = document.getElementsByClassName('additional_income-value')[0],
    inputResultAdditionalExpenses = document.getElementsByClassName('additional_expenses-value')[0],
    inputResultIncomePeriod = document.getElementsByClassName('income_period-value')[0],
    inputResultTargetMonth = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    expensesTitle = document.querySelector('input.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    inputPeriodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    targetAmount = document.querySelector('.target-amount'),
    cancel = document.querySelector('#cancel'),
    data = document.querySelector('.data'),
    control = document.querySelector('.control'),
    calcInputs = document.querySelectorAll('.calc input'),
    titleExpenses = document.querySelectorAll('.expenses-title'),
    cashExpenses = document.querySelectorAll('.expenses-amount'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    quastion;
const AppData = function() {
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
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

};
AppData.prototype.start = function() {
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getInfoDeposit();
    this.getAddInput(inputResultAdditionalIncome.value, this.addIncome);
    this.getAddInput(inputResultAdditionalExpenses.value, this.addExpenses);
    this.getBudgetMonth();
    this.getBudgetDay();
    this.showResult();
};
AppData.prototype.reset = function() {
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
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
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
    checkBoxDeposit.checked == false;
    depositBank.style.display = 'none';
    depositAmount.style.display = 'none';
    appData.deposit = 'false';
};
AppData.prototype.showResult = function() {
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
};
AppData.prototype.getExpenses = function() {
    let titleExpenses = document.querySelectorAll('input.expenses-title'),
        cashExpenses = document.querySelectorAll('input.expenses-amount');
    for (let i = 0; i < titleExpenses.length; i++) {
        appData.expenses[titleExpenses[i].value] = +cashExpenses[i].value / 2;
    }
    for (let key in this.expenses) {
        appData.expensesMonth += +appData.expenses[key];
    }
};
AppData.prototype.addBlock = function(item, buttonAdd, classNameItem) {
    let cloneItem = item[0].cloneNode(true);
    item[0].parentNode.insertBefore(cloneItem, buttonAdd);
    item = document.querySelectorAll(classNameItem);
    if (item.length === 3) buttonAdd.style.display = 'none';
};
AppData.prototype.getIncome = function() {
    let incomeTitle = document.querySelectorAll('input.income-title'),
        incomeAmount = document.querySelectorAll('input.income-amount');
    for (let i = 0; i < incomeTitle.length; i++) {
        appData.income[incomeTitle[i].value] = +incomeAmount[i].value;
    }
    for (let key in this.income) {
        appData.incomeMonth += +appData.income[key];
    }
};
AppData.prototype.getInfoDeposit = function() {
    if (this.deposit) {
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
};
AppData.prototype.getAddInput = function(additionalInput, propertyObject) {
    let arrAdditionalInput;
    if (Array.isArray(additionalInput) == false) {
        arrAdditionalInput = additionalInput.split(',');
    }
    arrAdditionalInput.forEach((item) => {
        item = item.trim();
        if (item !== '') {
            this.propertyObject.push(item);
        }
    })
}
AppData.prototype.getExpensesMonth = function() {
    for (let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
    }
};
AppData.prototype.getBudgetMonth = function() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + Math.ceil((this.moneyDeposit * this.percentDeposit) / 12);
    if (this.budgetMonth < 0 || typeof this.budgetMonth != 'number' || this.budgetMonth == 0) {
        return this.budgetMonth = 'Что-то пошло не так.!';
    } else {
        return this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + Math.ceil((this.moneyDeposit * this.percentDeposit) / 12);
    }
};
AppData.prototype.getBudgetDay = function() {
    this.budgetDay = this.budgetMonth / 30;
    if (this.budgetMonth < 0 || typeof this.budgetMonth != 'number' || this.budgetMonth == 0) {
        return this.budgetDay = 'Что-то пошло не так.';
    } else {
        return this.budgetDay = Math.ceil(this.budgetMonth / 30);
    }
};
AppData.prototype.getTargetMonth = function() {
    if (this.budgetMonth < 0 || typeof this.budgetMonth != 'number' || this.budgetMonth == 0) {
        return 'Что-то пошло не так.';
    } else {
        return Math.ceil(targetAmount.value / this.budgetMonth);
    }
};
AppData.prototype.calcPeriod = function() {
    if (this.budgetMonth < 0 || typeof this.budgetMonth != 'number' || this.budgetMonth == 0) {
        return 'Что-то пошло не так.';
    } else {
        return this.budgetMonth * inputPeriodSelect.value;
    }
};
AppData.prototype.eventsListeners = function() {
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
    buttonAddExpenses.addEventListener('click', () => this.addBlock(expensesItems, buttonAddExpenses, '.expenses-items'));
    buttonAddIncome.addEventListener('click', () => this.addBlock(incomeItem, buttonAddIncome, '.income-items'));
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
    checkBoxDeposit.addEventListener('change', function() {
        if (checkBoxDeposit.checked === true) {
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            appData.deposit = 'true';
            depositBank.addEventListener('change', function() {
                let selectIndex = this.options[this.selectedIndex].value;
                if (selectIndex === 'other') {
                    depositPercent.style.display = 'inline-block';
                    depositPercent.disabled = false;
                    depositPercent.value = '';
                } else {
                    depositPercent.style.display = 'none';
                    depositPercent.value = selectIndex;
                }
            });
        } else {
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositAmount.value = '';
            appData.deposit = 'false';
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
};
const appData = new AppData();
AppData.prototype.eventsListeners();
console.log(appData);
appData.getTargetMonth();
const expensesAmount1 = appData.expensesMonth,
    accumulatedMonth = appData.getBudget,
    period = appData.mission / appData.budgetMonth;