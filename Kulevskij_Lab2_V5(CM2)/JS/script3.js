console.log("Task3");

function isNumber(variable){
    return typeof variable === 'number' && !isNaN(variable);
}

function inputNumber(promptMsg) {
    let input;
    do {
        input = parseFloat(prompt(promptMsg));
    } while (!isNumber(input));
    return input;
}

function func(number, powerFunction) {
    let result = powerFunction(number);
    let fourthPower = Math.pow(result, 4);

    return fourthPower;
}
let squareFunction = (x) => x * x;

let inputNum = inputNumber("Введіть число, яке хочете піднести до 4-ого степеня");

let res = func(inputNum, squareFunction);

console.log(`Число ${inputNum} піднесене до 4-тої ступені: ${res}`);


console.log("End of Task3");