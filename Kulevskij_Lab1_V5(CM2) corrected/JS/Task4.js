console.log("Task4")

function gcd(a, b)
{
    if(b === 0)
    {
        return a;
    }

    return gcd(b, a % b);
}

function lcm()
{
    let nsc = 20;
    for(let i = 21; i <= 40; i++)
    {
        nsc = nsc * i / gcd(nsc, i);
    }

    return nsc;
}

console.log(lcm());
console.log("End of Task4")
