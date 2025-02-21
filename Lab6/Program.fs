open System
open System.Text.RegularExpressions

let degToRad degrees = degrees * Math.PI / 180.0

let add a b = a + b
let subtract a b = a - b
let multiply a b = a * b
let divide a b = 
    if b = 0.0 then
        raise (DivideByZeroException("Деление на 0."))
    else
        a / b
let power a b = a ** b
let squareRoot a = 
    if a < 0.0 then 
        raise (ArgumentException("Квадратный корень из отрицательного числа."))
    else 
        Math.Sqrt(a)
let sin a = Math.Sin(degToRad a)
let cos a = Math.Cos(degToRad a)
let tan a = Math.Tan(degToRad a)

let parseExpression (expression: string) =
    let formatedExp = expression.Replace(" ", "").Replace(",", ".")
    let matches = Regex.Match(formatedExp, @"^(-?[0-9.]+)\s*([\+\-\*\/\^]|v|sin|cos|tan)\s*(-?[0-9.]+)?$")
    if matches.Success then
        let a = float matches.Groups.[1].Value
        let operation = string matches.Groups.[2].Value
        let b = float matches.Groups.[3].Value
            
        (a, operation, b)
    else
        raise (ArgumentException("Не удалось преобразовать выражение."))

let calculate a operation b =
    match operation with
    | "+" -> add a b
    | "-" -> subtract a b
    | "*" -> multiply a b
    | "/" -> divide a b
    | "^" -> power a b
    | "v" -> a * squareRoot b
    | "sin" -> a * sin b
    | "cos" -> a * cos b
    | "tan" -> a * tan b
    | _ -> raise (InvalidOperationException("Неизвестная операция."))

[<EntryPoint>]
let main argv =
    let rec loop () =
        printfn "Введите выражение:"
        let expression = Console.ReadLine()
        try
            let (a, operation, b) = parseExpression expression
            let result = calculate a operation b
            printfn "Результат: %f" result
        with
        | ex -> printfn "Ошибка: %s" ex.Message

        loop ()
    loop ()
