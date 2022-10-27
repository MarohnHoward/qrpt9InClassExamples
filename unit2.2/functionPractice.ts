function addTwo(input: number): number {
    console.log(input)
    return input + 2
}

let firstNumber = 3;
let secondNumber = addTwo(firstNumber)
let thirdNumber = addTwo(50)

console.log(firstNumber, secondNumber)
console.log(`First Number: ${firstNumber}, Second Number: ${secondNumber}`)
console.log(thirdNumber)