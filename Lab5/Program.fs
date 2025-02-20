// Функция, которая принимает два числа и возвращает их сумму.
let sum x y = x + y

// Функция, которая принимает два числа и возвращает их разность.
let subtract x y = x - y

// Функция, которая принимает два числа и возвращает их произведение.
let multiply x y = x * y

// Функция, которая принимает два числа и возвращает результат деления.
let divide x y =
    if y = 0 then failwith "Деление на 0"
    else x / y

// Рекурсивная функция для вычисления факториала числа.
let rec factorial n =
    if n < 0 then failwith "Значения ниже нуля"
    elif n = 0 then 1
    else n * factorial (n - 1)

let operation n = 
    let empty x y = 0

    if n = 1 then sum
    elif n = 2 then subtract
    elif n = 3 then multiply
    elif n = 4 then divide
    else empty

let sumCur = operation 1
let substractCur = operation 2
let multiplyCur = operation 3
let divideCur = operation 4

printfn "Сумма 1 и 2: %d" (sumCur 1 2)
printfn "Разность 10 и 5: %d" (substractCur 10 5)
printfn "Произведение 2 и 4: %d" (multiplyCur 2 4)
printfn "Деление 10 на 5: %d" (divideCur 10 5)
printfn "Факториал 5: %d" (factorial 5)
