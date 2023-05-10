console.clear();

console.log('--kintamuju iniciavimas---');

const a = 707;
console.log(a);

let b = 808;
console.log(b);

const c = 4.44;
console.log(c);

console.log('-----');

const myName = 'Ditta';
console.log(myName);

const useName = "Mazeikiene";
console.log(useName);

const word = "\'Studente\'";
console.log(word);

console.log('-----');

const number1 = [11, 12, 13, 14, 15];
console.log(number1);

console.log('-----');

const word1 = ['saule', 'menulis', 'merkurijus', 'venera', 'marsas'];
console.log(word1);

console.log('--Veiksmai su kintamaisiais--');

const number2 = [11, 11, 11, 11, 11];
console.log(number2);

const word2 = 'agurkai';
const word3 = 'pomidorai';
const darzoviuAsorti2 = `'Darzoviu asorti' = ${word2} + ${word3}.`
console.log(darzoviuAsorti2);

console.log('-----');



console.log('-----');

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