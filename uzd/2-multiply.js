console.clear();

function multiply(s, b) { 
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras ne skaicius';
    }
    if (!isFinite(a)) {
        return 'ERROR: pirmas parametras turi buti'
    }
    if ('' + a === 'NaN') {
        return 'ERROR: pirmas parametras negali buti NaN';
    }

    if (typeof b !== 'number') {
        return 'ERROR: antras parametras ne skaicius';
    }
    if ('' b === 'NaN') {
        return 'ERROR: antras parametras negali buti NaN';
    }
    if ( )




    const resut = a * b;

    return result;

}







console.log(multiply('labas', 5));
console.log(multiply(5, 'labas'));
console.log(multiply('labas', 'labas'));
console.log(multiply(7, false));
console.log(multiply(true, 5));
console.log(multiply(Infinity, 5));
console.log(multiply(5, Infinity));
console.log(multiply(Infinity, Infinity));

console.log(multiply(7, 5));
console.log(multiply(-7, 5));
console.log(multiply(-7, -5));
console.log(multiply(7, -5));

console.log(multiply(Infinity, 5));
console.log(multiply(5, Infinity));
console.log(multiply(Infinity, 5));
console.log(multiply(Infinity, Infinity));
console.log(multiply(-Infinity, -Infinity));