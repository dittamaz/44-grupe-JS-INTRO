console.clear();

/*
TERNERY

klausimas? teigiama reksme: neigiama reikme;
*/

const leidimas = 10 >= 18 ? 'pilnametis' : 'nepilnametis';
console.log(leidimas);

let approve = '';

if(10 >= 18) {
    approve = 'pilnametis';
} else {
    approve = 'nepilnametis';
}

console.log(approve);

/*
const a = 1 ? 2 : 3;
console.log(a);
*/

const a = 1 
            ? 2 
            : 3;
console.log(a);

const b = 1 
            ? 2 
            : 3 
            ? 4 
            : 5;
console.log(b);

const c = 1 < 2 
                ? 3 
                    ? 4 
                    : 5 
                : 6; 
console.log(c);

const d = 1 ? 2 : 3;
console.log(d);
