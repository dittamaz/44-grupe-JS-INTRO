console.clear();


const x = 7;
const y = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${x} + ${y} = ${sum(x, y)}`);

// anonimus function
const diff = function (a, b) {
    return a - b;
}
console.log(`${x} - ${y} = ${diff(x, y)}`);

// arrow function
// jeigu yra tik 1 procedura
// tai galima nerasyti {return}
const multi = (a, b) => {
    return a * b;
}
console.log(`${x} * ${y} = ${multi(x, y)}`);