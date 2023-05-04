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
console.log(17 % 3);

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

