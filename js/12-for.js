console.clear();

/*
FOR - loop/ciklas
kartojame operacijas tol, kol reikia arba numatyta kieki kartu

*/

const marks = [10, 2, 8, 4, 6];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

let sum = 0;
let i = 0;

// sum += marks[i];laaabai po biski

sum += marks[i++];
sum += marks[i++];
sum += marks[i++];
sum += marks[i++];
sum += marks[i++];
console.log('>>>>>>>>', sum);

console.clear();

console.log('------------------');

const pazymiai = [10, 2, 8, 4, 6];

for (let i = 0; i <= 8; i++) {
    console.log(i);
};

// kaip istraukti konkretu pazymi

for (let i = 0; i < 7; i++) {
    console.log(i, '-', pazymiai[i]);
};

for (let i = 2; i < 7; i++) {
    console.log(i, '-', pazymiai[i]);
};



console.log('START');


//const pazymiai = [10, 2, 8]

for (let i = 0; i < pazymiai.length; i++) {
    console.log(i, '-', marks[i]);
};

console.log('END');

console.log('--------------------------------------');

