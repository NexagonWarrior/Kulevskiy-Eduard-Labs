console.log("task2");

function countNumbersInString(inputString) {
    var words = inputString.split(" ");
    var count = 0;
    
    for (var i = 0; i < words.length; i++) {
        if (/^[1-9]/.test(words[i])) {
            count++;
        }
    }
    
    return count;
}


var input = prompt("Введіть текстовий рядок:");
var numbersCount = countNumbersInString(input);
console.log("Кількість чисел у введеному рядку:", numbersCount);




console.log("End of task2");