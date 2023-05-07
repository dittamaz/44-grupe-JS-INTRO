console.clear();

const marks = [];
console.log(marks);

marks.push(10);
marks.push(2);
marks.push(8);
console.log(marks);

marks.unshift(9);
marks.unshift(8);
marks.unshift(7);
marks.unshift(5);
marks.unshift(2);
console.log(marks);

marks.shift();
marks.shift();
console.log(marks);

marks.pop();
marks.pop();
console.log(marks);

console.log('AT--------------');

console.log(marks[0]);
console.log(marks.at(0));

console.log(marks[2]);
console.log(marks.at(2));

const paskutinePocicija = marks.length - 1;
console.log(marks[paskutinePocicija]);
console.log(marks.at(paskutinePocicija));
console.log(marks.at(-1));

console.log('INCLUDES---------------');

marks.includes(marks);
console.log(marks.includes(2));
console.log(10,marks.includes(10));
console.log(5, marks.includes(5));
console.log('Labas', marks.includes('Labas'));

const masyvasObjektu = [
    {a: 'a'},
    {b: 'b'},
    {c: 'c'},
];
console.log(masyvasObjektu.includes({ b: 'b'}));

console.log('INDEXOF---------------');

marks.push(-1);
console.log(marks);
console.log(marks.indexOf(8));
console.log(marks.indexOf(777));
console.log(marks.indexOf(-1));

console.log('JOINS---------------');
const visiPazymiai = marks.join();
console.log(visiPazymiai);
console.log(typeof visiPazymiai);

const visiPazymiai2 = marks.join('');
console.log(visiPazymiai2);

const visiPazymiai3 = marks.join(' -=- ');
console.log(visiPazymiai3);


console.log('REVERS---------------');

const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(skaiciai);

//skaiciai.reverse();
//console.log(skaiciai);


console.log('SLICE---------------');
console.log(skaiciai);
console.log(skaiciai.slice(0));
console.log(skaiciai.slice(2));
console.log(skaiciai.slice(-3));
console.log(skaiciai.slice(2, 4));
console.log(skaiciai.slice(2, -2));

console.log('SPLICE---------------');
console.log(skaiciai);
console.log(skaiciai.splice(2, 0, 'x'));
console.log(skaiciai);
console.log(skaiciai.splice(3, 1));
console.log(skaiciai);
console.log(skaiciai.splice(-2, 2));
console.log(skaiciai);
console.log(skaiciai.splice(3, 1, 15));
// is trecios pozicijos, trinam vina nari ir irasom 15;
console.log(skaiciai);
// norint vietoj jo vel atsatyti rasom
skaiciai[3] = 4;
console.log(skaiciai);

console.log('CONCAT---------------');
const skaiciai2 = [1, 2, 3];
const skaiciai3 = [113, 14, 15];
const skaiciai4 = skaiciai2.concat(skaiciai3);
console.log(skaiciai4);









