console.log("Task1");

let numbers = [];
let size = 12;

for(let i = 0; i < size; i++)
{
    numbers.push(Math.floor(Math.random() * 100));
}


let multiplesOfFive = numbers.filter(function(num){
    return num % 5 === 0;
});

multiplesOfFive.sort(function(a, b){
    return a - b;
});

let result = multiplesOfFive.join(', ');

console.log(result);
console.log("End of task1");