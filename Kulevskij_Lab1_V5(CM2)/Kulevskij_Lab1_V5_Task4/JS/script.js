
function lcm(a, b) {
    
    function gcd(x, y) {
        while (y !== 0) {
            var temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    return Math.abs(a * b) / gcd(a, b);
}

var numbers = [];
for (var i = 20; i <= 40; i++) {
    numbers.push(i);
}

var lcm = numbers.reduce(lcm);
console.log("Least Common Multiple for numbers from 20 to 40:", lcm);
