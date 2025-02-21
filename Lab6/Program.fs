open System
open System.Text.RegularExpressions

let degToRad degrees = degrees * Math.PI / 180.0

let add a b = a + b
let subtract a b = a - b
let multiply a b = a * b
let divide a b = a / b
let power a b = a ** b
let squareRoot a = Math.Sqrt(a)
let sin a = Math.Sin(degToRad a)
let cos a = Math.Cos(degToRad a)
let tan a = Math.Tan(degToRad a)

let parseExpression expression =
    let matches = Regex.Match(expression, @"^(-?[0-9.]+)\s*([\+\-\*\/\^]|v|sin|cos|tan)\s*(-?[0-9.]+)?$")
    if matches.Success then
        let a = float matches.Groups.[1].Value
        let operation = string matches.Groups.[2].Value
        let b = float matches.Groups.[3].Value
            
        (a, operation, b)
    else
        printfn "Ошибка ввода."
        (0.0, "", 0.0)

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
    | _ -> 0.0

[<EntryPoint>]
let main argv =
    let rec loop () =
        printfn "Введите выражение:"

        let expression = Console.ReadLine()
        let (a, operation, b) = parseExpression expression
        let result = calculate a operation b

        printfn "Результат: %f" result
        
        loop ()
    loop ()
