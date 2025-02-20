var _a;
var input = document.getElementById('input');
var result = document.getElementById('result');
(_a = document.getElementById('calculateBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', calculate);
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
var multiply = function (a, b) { return a * b; };
var divide = function (a, b) { return a / b; };
var degree = function (a, b) { return Math.pow(a, b); };
var square = function (a, b) { return a * Math.sqrt(b); };
var operationsMap = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
    '^': degree,
    'v': square
};
function calculate() {
    var expression = input.value.replace(' ', '').replace(',', '.');
    var match = expression.match(/^(-?[0-9.]+)\s*([\+\-\*\/\^]|v)\s*(-?[0-9.]+)?$/);
    if (match) {
        var a = parseFloat(match[1]);
        var operator = match[2];
        var b = parseFloat(match[3]);
        var operation = operationsMap[operator];
        if (operation) {
            result.innerText = operation(a, b).toString();
        }
    }
    else {
        result.innerText = 'Ошибка ввода.';
    }
}
;
