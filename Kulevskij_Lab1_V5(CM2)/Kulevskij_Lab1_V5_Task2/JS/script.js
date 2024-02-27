let count = 0;
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i >= 10 && i <= 99) {
        count++;
    }
}
console.log("Кількість двозначних чисел: " + count);
