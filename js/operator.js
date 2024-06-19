// Arithmetic operation
function oper(a, b) {
    sum = a + b;
    sub = a - b;
    div = a / b;
    mul = a * b;
    rem = a % b;
    pow = a ** b;
    inc = a++;
    dec = a--;
    return { sum, sub, div, mul, rem, pow, inc, dec };
}
console.log(oper(6, 7));

// Arithmetic operation
function op(a, b) {
    c = a + b;
    console.log("add", c);
    d = a - b;
    console.log("sub", d);
    e = a * b;
    console.log("mul", e)
    f = a / b;
    console.log("div", f)
    g = a & b;
    console.log("rem", g)
    h = a ** b;
    console.log("pow", h)
    i = a++;
    console.log("inc", i)
    j = b--;
    console.log("dec", j)
}
op(5, 3)

// comparitive op

function comp(a, b) {
    if (a > b) {
        console.log(a, "is greater than", b);
    } else if (b > a) {
        console.log(b, " is greater than", a);
    } else {
        console.log(a, "is equal to", b);
    }
}
comp(3, 5)

//logical op
function logi(a, b) {
    and = a && b;
    or = a || b;
    return { and, or };
}
console.log(logi(1, 1));