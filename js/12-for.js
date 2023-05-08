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

//const pazymiai = [10, 2, 8, 4, 6];

//for (let i = 0; i <= 8; i++) {
//  console.log(i);
//};

// kaip istraukti konkretu pazymi

//for (let i = 0; i < 7; i++) {
 //   console.log(i, '-', pazymiai[i]);
//};

//for (let i = 2; i < 7; i++) {
//    console.log(i, '-', pazymiai[i]);
//};



console.log('START');

//           i ->  0   1  2  3  4  5  6  7  8  9
const pazymiai = [10, 2, 8, 4, 6, 1, 3, 5, 7, 9];
const kasKelintas = 3;

for (let i = kasKelintas - 1; i < pazymiai.length; i += kasKelintas) {
   console.log(i, '-', pazymiai[i]);
};
console.log('--------------------------------------');

for (let i = 0; i < pazymiai.length; i++) {
    console.log(i, '-', pazymiai[i]);
};


console.log('kitaip');
for (let i = 0; i < pazymiai.length; i++) {
    if (i % kasKelintas === 0 ) {
    console.log(i, '-', pazymiai[i]);
}
};

console.log('kitaip');
for (let i = 0; i < pazymiai.length; i++) {
    if (i % kasKelintas === kasKelintas - 1) {
    console.log(i, '-', pazymiai[i]);
}
};

console.log('END');

console.log('--------------------------------------');
console.clear();

// -5...6

for (let i = -5; i < 7; i++) {
    console.log(i);
};

for (let i = 0; i < 2; i+=0.1) {
    console.log(i);
}

