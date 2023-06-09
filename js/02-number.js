console.clear();

/*
NUMBERS


normalus:
- sveikieji
- desimtainiai

mistiniai:
- Infinity/-Infinity
- NaN (not-a-number)

MATEMETINIAI VEIKSMAI
aritmetiniai operatoriai:
    +; -, /, *, ** (laipsnis), % (liekana)

priskirimo operatoriai:
    =, +=; -=; /=, *=; **=; %=;

KINTAMUJU INICIJAVIMO BUDAI:
- const (default)
- let (jei kinta reiksme)
- var (nenaudoti, nebent zinai ka darai)

*/

// sveikasis
console.log(12551);
console.log(-12551);

// desimtainis
console.log(3.1415);
console.log(-3.1415);
console.log(3 / 4);
console.log(1 / 3);
console.log(0.1 + 0.2);
console.log(1 / 10 + 2 / 10);
console.log(3 / 10);
console.log(2 + 2 * 2);

// begalybes
console.log(Infinity);
console.log(-Infinity);

// NaN
console.log(NaN);

// VEIKSMAI
console.log(7 + 5);
console.log(7 - 5);
console.log(7 / 5);
console.log(7 * 5);

console.log(2 ** 2, '=', 2 * 2);
console.log(2 ** 3, '=', 2 * 2 * 2);
console.log(2 ** 4, '=', 2 * 2 * 2 * 2);

const a = 7;
console.log(a);

const PI = 3.14;
console.log(PI);

console.log(`-------------------`);

// pazymiai: 10, 2, 8, 4, 5.

let suma = 0;
console.log(suma);

/* 
prisimena buvusia suma ir prie jos prideda 
(priskiriama jam vis nauja reiksme, o ne lygu tam )
*/

suma = suma + 2;
console.log(suma);

suma = suma + 8;
console.log(suma);

suma = suma + 5;
console.log(suma);

suma = suma + 3;
console.log(suma);

console.log(`-----------------`);

let suma2 = 0;
console.log(suma2);

suma2 = suma2 + 10;
/*
jei kintamojo reiksme yra lygi jo buvusi reiksme + tokia pati reiksme
*/
suma2 += 10;

console.log(suma2);

console.log(`----------`);

let suma3 = 0;
console.log(suma3);

suma3 += 5;
console.log(suma3);

suma3 *= 8;
console.log(suma3);

console.log(`-------------------`);

const skaicius = 81;
const daliklis = 10;
const dalmuo = skaicius / daliklis;
console.log(skaicius, `/`, daliklis, `=`, dalmuo);

const liekana = skaicius % daliklis;
console.log(liekana);

console.log(17 / 3);
console.log(17 % 4);

let liek = 144;

liek = liek % 100;
console.log(liek);

liek = liek % 10;
console.log(liek);

liek = liek % 5;
console.log(liek);

/*
lygiai taip pat uzrasoma

liek %= 100;
console.log(liek);

liek %= 10;
console.log(liek);

liek %= 5;
console.log(liek);

*/

 

 const maryte = 98;
 const antanas = 15;
 const bendrasAmzius = maryte + antanas;
 console.log(maryte, `+`, antanas, `=`, bendrasAmzius);

const b = 10;
console.log(b);

const agurkai = 5;
const pomidorai = 11;
const darzoviuAsorti = pomidorai + agurkai;
console.log(pomidorai, `+`, agurkai, `=`, darzoviuAsorti);

console.log(1+2+3+4+5+6+7+8+9);
console.log(5**3);

// reiksmes 1, 2, 3, 4, 5.

let reiksme = 0;
console.log(reiksme);

reiksme += 1;
console.log(reiksme);

reiksme = reiksme - 2;
console.log(reiksme);

reiksme += 3;
console.log(reiksme);

reiksme -= 4;
console.log(reiksme);

reiksme += 5;
console.log(reiksme);

//console.clear();

//let i = 0;

//i = i + 1;

//letm = 0;
//console.log(m);

//m = m - 1;
//console.log(i);

console.clear();

let i = 0;
console.log(i);

i = i + 1;
console.log(i);

i+= 1;
console.log(i);

i++;
console.log(i);

++i;
console.log(i);

let m = 0;
console.log(m);

m = m - 1;
console.log(m);

m -= 1;
console.log(m);

m-- ;
console.log(m);

--m ;
console.log(m);

console.clear()

let n = 0;

console.log(n);

console.log('----------');
console.log(n++);
console.log(n);

console.log('----------');
console.log(++n);
console.log(n);



const numbers1 = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds1 = numbers1.filter( number => {
    return number % 2 !== 0;
});
console.log(odds1);

const numbers2 = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const even2 = numbers2.filter( number => {
    return number % 2 === 0;
});
console.log(even2);



// const number3 = [2, 4, 0, 100, 4, 11, 2602, 36];


// const number4 = [160, 3, 1719, 19, 11, 13, -21];

