// Интерфейсы.
interface User {
    name: string;
    age: number;
}

interface AnyFunc {
    (...args: any[]): any;
}

// Функции.
// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только числа, кратные заданному числу.
function filterByMultiplier(arr: number[], multiplier: number): number[] {
    return arr.filter(num => num % multiplier === 0);
}

// Функция, которая принимает массив строк и возвращает новую строку, содержащую все строки, объединенные заданным разделителем.
function joinStrings(arr: string[], separator: string): string {
    return arr.join(separator);
}

// Функция, которая принимает массив объектов и возвращает новый массив, отсортированный по значению определенного свойства.
function sortByProperty<T>(arr: T[], compareFunc: (a: T, b: T) => number): T[] {
    const newArr: T[] = arr.slice();
    return newArr.sort((a, b) => compareFunc(a, b));
}

// Сравнение пользователей по возрасту.
function compareUsersByAge(a: User, b: User): number {
    return a.age - b.age;
}

// Функция, которая принимает другую функцию в качестве аргумента и возвращает новую функцию, которая выполняет логирование перед вызовом исходной функции.
function logProxy<T extends AnyFunc>(func: T, logMessage: string): T {
    return function(...args: Parameters<T>): ReturnType<T> {
        console.log(logMessage);
        return func(...args);
    } as T;
}

// Демонстрация работы.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const strings: string[] = ['Hello,', 'my', 'name', 'Roman'];
const users: User[] = [
    { name: 'Man', age: 25},
    { name: 'Roman', age: 20 },
    { name: 'Vika', age: 17 },
    { name: 'Yarik', age: 22 }
];

console.log('Массив чисел: ' + numbers);
console.log('Массив строк: ' + strings)
console.log('Массив пользователей ' + JSON.stringify(users) + '\n');

console.log('Числа кратные 3: ' + filterByMultiplier(numbers, 3));
console.log('Объединённые строки: ' + joinStrings(strings, ' '));
console.log('Отсортированные по возрасту пользователи: ' + JSON.stringify(sortByProperty(users, compareUsersByAge)));

const loggedAdder = logProxy((a: number, b: number): number => a + b, 'INFO: Суммирование');
console.log('Сумма 1 и 2: ');
console.log(loggedAdder(1, 2));
