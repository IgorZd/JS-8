let justString = prompt('Введите сообщение');
let correctSting = function(argument) {
    if (typeof argument !== 'string') {
        alert('Переданный аргумент не является строкой!');
    } else if (typeof argument == 'string' && argument.length > 30) {
        console.log(argument.length);
        argument = argument.trim();
        console.log(argument.length);
        alert(argument.substring(0, 30) + ' (...)');
    } else if (typeof argument == 'string') {
        argument = argument.trim();
        console.log(argument.length);
    }
    return argument;
}
console.log(correctSting(justString));