console.clear();


/*

Palyginimo operatoriai:
visi: >, <, >=, <=, ==, ===,
naudotini: >, <, >=, <=, ==, ===,
nenaudotini: ==, 

if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}

klausimu 'jeigu', gali buti daug

*/

if (4 > 2) {
    console.log('taip');
};

if (7 < 1) {
    console.log('7 < 1');
}  else {
    console.log('7 ne < uz 1');
};

const userAge = 10;
const ageLimit = 18;

if (userAge >= ageLimit) {
    console.log('uzeik....:)');
} else {
    console.log(`dar palauk ${ageLimit - userAge} metus..`);
};

const diena = 3;

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('treciadienis');
} else if (diena === 4) {
    console.log('ketvirtadieni');
} else if (diena === 5) {
    console.log('penktadienis');
} else if (diena === 6) {
    console.log('sestadienis');
} else if (diena === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokios dienos nera')
};

console.log('---------------------------');

// kodo nestinimas

const arSvieciaSaule = true;
const arLyja = false;

if (arSvieciaSaule) {
    kaDaryti = 'eisim i kiema';
    if (arLyja) {
        kaDaryti = 'ziurim i vaivorikste :0';
    } else {
        kaDaryti = 'deginames pleziuke B-)';
    }
} else {
    kaDaryti = 'kodinsim....;-)'
};

console.log(kaDaryti);
