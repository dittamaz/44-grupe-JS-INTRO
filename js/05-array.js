console.clear();

/*
ARRAY - arėjus (slang), sąrašas, listas (slang),
matrica, masyvas (tikslus vertinys);
*/

const empty = [];
console.log(empty);

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai)

// stengtis isvengti tokio atvejo:
const random = [1, 'anrtas', 3, '4', 3,14, 'absd'];

// norint issapusdint varda esanti masyve, nurodom jo vieta
//                   0       1       2        3
const vardai = ['Petras',' Ona','Maryte', 'Jonas'];
console.log(vardai);

const vardas1 = vardai[0];

console.log('---------------------');
console.log(vardai[0]);
console.log(vardai[1]);
console.log(vardai[2]);
console.log(vardai[3]);
console.log(vardai[4]);
console.log(vardai[100000]);
console.log(vardai[-1]);
console.log(vardai[1.5]);
console.log(vardai[0, 1, 2, 3]);
/* 
spausdins paskutini varda is masyvo, nes is esmes reikalinga viena reiksme
jei nurodoma daugiau, jis eina paeiliui, ir visus pirmus atmeta, paimdamas 
paskutine reiksme
*/
console.log('---------------------');

//                 0  1  2  3  4
const marks = [10, 2, 8, 4, 6];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);

