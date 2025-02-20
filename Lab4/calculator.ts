const input = document.getElementById('input') as HTMLInputElement;
const result = document.getElementById('result') as HTMLElement;

document.getElementById('calculateBtn')?.addEventListener('click', calculate);

interface Operation {
    (a: number, b: number): number
}

const add: Operation = (a, b) => a + b;
const subtract: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;
const degree: Operation = (a, b) => Math.pow(a, b);
const square: Operation = (a, b) => a * Math.sqrt(b);

const operationsMap: { [key: string]: Operation } = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
    '^': degree,
    'v': square
};

function calculate(): void {
    const expression = input.value.replace(' ', '').replace(',', '.');
    const match = expression.match(/^(-?[0-9.]+)\s*([\+\-\*\/\^]|v)\s*(-?[0-9.]+)?$/);

    if (match) {
        const a = parseFloat(match[1]);
        const operator = match[2];
        const b = parseFloat(match[3]);

        const operation = operationsMap[operator];
        if (operation) {
            result.innerText = operation(a, b).toString();
        }
    } else {
        result.innerText = 'Ошибка ввода.';
    }
};
