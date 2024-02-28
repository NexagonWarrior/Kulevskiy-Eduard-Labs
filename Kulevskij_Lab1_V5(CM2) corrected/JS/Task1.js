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

let x = inputNumber("Введіть значення x:");
let y = inputNumber("Введіть значення y:");

if(x == 0 && y == 0)
{
    alert("Точка x та y знаходяться на початку координат");
}
else if(x > 0 && y > 0)
{
    alert("Точка x та y знаходяться в першій чверті");
}
else if(x > 0 && y < 0)
{
    alert("Точка x та y знаходяться в другій чверті");
}
else if(x < 0 && y < 0)
{
    alert("Точка x та y знаходяться в третій чверті");
}else
{
    alert("Точка x та y знаходяться в четвертій чверті");
}
