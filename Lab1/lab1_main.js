// Функции -------------------------------------------------------------------------------------------------------------------------------------
// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
const getEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

// Функция, которая принимает массив чисел и возвращает новый массив, содержащий квадраты этих чисел.
const getSquares = (arr) => arr.map(num => num ** 2);

// Функция, которая принимает массив объектов и возвращает новый массив, содержащий только объекты с определенным свойством.
const filterByProperty = (arr, prop) => arr.filter(obj => obj.hasOwnProperty(prop));

// Функция, которая принимает массив чисел и возвращает их сумму.
const getSum = (arr) => arr.reduce((sum, num) => sum + num, 0);

// Функция высшего порядка, которая принимает функцию и массив в качестве аргументов и применяет функцию к каждому элементу массива, возвращая новый массив с результатами.
const applyFunction = (func, arr) => arr.map(func);

// Поиск среднего арифметического в массиве объектов.
const getAverage = (arr, threshold) => {
    const numbers = applyFunction(obj => obj["num"], filterByProperty(arr, "num"));
    const filtredNumbers = numbers.filter(value => value > threshold);
    
    if (filtredNumbers.length == 0) return 0;
    return getSum(filtredNumbers) / filtredNumbers.length 
};

// Демонстрация работы --------------------------------------------------------------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const objects = [{num: 1}, {obj: null}, {num: 2}, {value: "value1"}, {value: "value2"}, {num: 3}, {num: 4}];

console.log("Исходный массив чисел: " + numbers);
console.log("Исодный массив объектов: " + JSON.stringify(objects) + "\n");

console.log("Чётные числа: " + getEvenNumbers(numbers));
console.log("Квадраты чисел: " + getSquares(numbers));
console.log("Объекты с определённым свойством (num): " + JSON.stringify(filterByProperty(objects, "num")));
console.log("Сумма чисел: " + getSum(numbers));
console.log("Удвоение каждого элемента: " + applyFunction(num => num * 2, numbers) + "\n");

console.log("Сумма квадратов чётных чисел: " + getSum(getSquares(getEvenNumbers(numbers))));
console.log("Среднее арифметическое чисел в массиве объектов больше 2: " + getAverage(objects, 2)); 