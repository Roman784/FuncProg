// Функции.
// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только числа, кратные заданному числу.
function filterByMultiplier(arr, multiplier) {
    return arr.filter(function (num) { return num % multiplier === 0; });
}
// Функция, которая принимает массив строк и возвращает новую строку, содержащую все строки, объединенные заданным разделителем.
function joinStrings(arr, separator) {
    return arr.join(separator);
}
// Функция, которая принимает массив объектов и возвращает новый массив, отсортированный по значению определенного свойства.
function sortByProperty(arr, compareFunc) {
    var newArr = arr.slice();
    return newArr.sort(function (a, b) { return compareFunc(a, b); });
}
// Сравнение пользователей по возрасту.
function compareUsersByAge(a, b) {
    return a.age - b.age;
}
// Функция, которая принимает другую функцию в качестве аргумента и возвращает новую функцию, которая выполняет логирование перед вызовом исходной функции.
function logProxy(func, logMessage) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(logMessage);
        return func.apply(void 0, args);
    };
}
// Демонстрация работы.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var strings = ['Hello,', 'my', 'name', 'Roman'];
var users = [
    { name: 'Man', age: 25 },
    { name: 'Roman', age: 20 },
    { name: 'Vika', age: 17 },
    { name: 'Yarik', age: 22 }
];
console.log('Массив чисел: ' + numbers);
console.log('Массив строк: ' + strings);
console.log('Массив пользователей ' + JSON.stringify(users) + '\n');
console.log('Числа кратные 3: ' + filterByMultiplier(numbers, 3));
console.log('Объединённые строки: ' + joinStrings(strings, ' '));
console.log('Отсортированные по возрасту пользователи: ' + JSON.stringify(sortByProperty(users, compareUsersByAge)));
var loggedAdder = logProxy(function (a, b) { return a + b; }, 'INFO: Суммирование');
console.log('Сумма 1 и 2: ');
console.log(loggedAdder(1, 2));
