console.clear();

function vidurkis() {
    return 5;
}
function sum(a, b) {
    console.log('>>>', a, b);
    return 0;
}
const s1 = sum(2, 2);
console.log(s1);

const s2 = sum(7, 5);
console.log(s2);

const s3 = sum(-16, -15);
console.log(s3);

console.log('--------------------------');

function sum(c, d) {
    console.log(c + d);
    return 0;

}
const s4 = sum(2, 2);
console.log(s4);

const s5 = sum(7, 5);
console.log(s4);

const s6 = sum(-16, -15);
console.log(s6);

function hi(name) {
    console.log(name);
    return `Hi, my name is Vardenis!`;
}


// Hi, my name is Petras!
// Hi, my name is Maryte!
// Hi, my name is Jonas!
// Hi, my name is Ona!

console.log(hi('Petras'));
console.log(hi('Maryte'));
console.log(hi('Jonas'));
console.log(hi('Ona'));

console.log('-----------------------------');

// Sveiki, as Petras ir man 16 metu.
// Sveiki, as Maryte ir man 160 metu.
// Sveiki, as Jonas ir man 36 metu.
// Sveiki, as Ona ir man 99 metu.

function prisistatymas(name, age) {
    return `Sveiki, as ${name} ir man ${age}.`
}

console.log(prisistatymas('Petras', 16));
console.log(prisistatymas('Maryte', 160));
console.log(prisistatymas('Jonas', 36));
console.log(prisistatymas('Ona', 99));
