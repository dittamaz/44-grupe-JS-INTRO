console.clear();

/*
ARRAY - arėjus (slang), sąrašas, listas (slang),
matrica, masyvas (tikslus vertinys);

Masyvas prasideda index = 0;

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


console.clear();

const marks1 = [10, 9, 8];
const marks2 = [6, 7, 8];
const marks3 = [5, 5, 5];

function average(marks) {
    let sum = 0;
    sum += marks[0];
    sum += marks[1];
    sum += marks[2];

    return sum / 3;
    // galima parasytine 3,o return sum / marks.length;
}

console.log('Vidurkis 1:', marks1, '=', average(marks1));
console.log('Vidurkis 2:', marks2, '=', average(marks2));
console.log('Vidurkis 3:', marks3, '=', average(marks3));

console.clear();

const dict1 = ['pirmas', 'zodis', 'Labas'];
const dict2 = ['Labas', 'rytas', 'Lietuva'];
const dict3 = ['Labas', 'rytas', 'suraitytas'];

// Zodynas : a, b, c.

function dictionary(wordList) {
    console.log(wordList);
    let result = 'Zodynas: ';

    // result += wordList[0] + ', ';
    // result += wordList[1] + ', ';
    // result += wordList[2] + '.';

    // result += wordList[0];
    // result += ', ';
    // ir t.t.

    return `Zodynas: ${wordList[0]}, ${wordList[1]}, ${wordList[2]}.`;

}
console.log(dictionary(dict1));
console.log(dictionary(dict2));
console.log(dictionary(dict3));
