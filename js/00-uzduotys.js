console.clear();


const skaiciai1 = 4;
let suma1 = 0;

for (let i = 0; i <= 4; i++) {
    suma1 = suma1 + i;
};
console.log(suma1);

console.log('------');

const skaiciai2 = 100;
let suma2 = 0;

for (let i = 0; i <= 100; i++) {
    suma2 = suma2 + i;
};
console.log(suma2);

console.log('------');

function rangeSum(from, to) {
    let sum = 0;

    if ( from < to){
        for(let i = from; i <= to; i++) {
            sum +=i;
        }
    }   

    if (from > to) {
        for( let i = to; i >= from; i ++) {
            sum +=1;
        }
    }

    if ( from === to) {
        sum  += to;
    }
    return sum;
};

console.log(rangeSum(0, 0));
console.log(rangeSum(0, 4));
console.log(rangeSum(0, 100));
console.log(rangeSum(574, 815));
console.log(rangeSum(-50, 50));
console.log(rangeSum(-70, 30));

console.log('------------');





const text = "abcdef";

for (let i = text.length - 1; i >= 0; i--) {
    console.log(text[i]);
}