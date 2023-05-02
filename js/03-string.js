console.clear();

/*
STRING tekstas

iniciavimo budai
- dviguba kabute (")
- vienguba kabute (')
backtick (`)
\ - ignoruoti, uz jo simboli isspausdinti
*/

const empty = "";
const space = ' A            Z  ';
const nickname = "Pavardenis";
const username = 'Vardenis';

console.log(nickname);
console.log(empty);
console.log(space);
console.log(username);

// Vienguba kabute (').
const kabute1 = "Viengubos kabutes (').";
console.log(kabute1);

// Dviguba kabute (").
const kabute2 = 'Dvigubos kabutes (").';
console.log(kabute2);

// Vienguba (') ir Dviguba (") kabutes.
const kabute12_1 = 'Vienguba kabute (\') ir dviguba (") kabutes.';
const kabute12_2 = "Vienguba kabute (') ir dviguba (\") kabutes.";
const kabute12_3 = "Vienguba kabute (\') ir dviguba (\") kabutes.";
console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);

const backslash1 = '\\';
const backslash2 = "\\\\";
console.log(backslash1);
console.log(backslash2);

const user1 = 'Petras';
const user2 = 'Maryte';
const user3 = 'Jonas';
const user4 = 'Ona';

// Sveiki, <vardas>!
const hi1 = 'Sveiki, ' + user1 + '!';
console.log(hi1);

const hi2 = 'Sveiki, ' + user2 + '!';
console.log(hi2);

const hi3 = 'Sveiki,' + user3 + '!';
console.log(hi3);

const hi4 = 'Sveiki,' + user4 + '!';
console.log(hi4);

const personName = 'Vardenis';
const personLastname = 'Pavardenis';

// Hi, I am Vardenis Pavardenis and I like you!

const personHi = 'Hi, I am ' + personName + ' ' + personLastname + ' and I like you!';
console.log(personHi);

// Vienguba (') ir dviguba (") kabutes.

const kabute777 = 'Vienguba (' + "'" + ') ir dviguba (' + '"' + ') kabutes.';
console.log(kabute777);

const kabute888 = "Vienguba (') ir " + 'dviguba (") kabutes.';
console.log(kabute888);

console.log('----------------------')

//  \r grazina i eilutes padzia
//  \n nuleidzia eilue zemyn
//  \r\n  nuleidzia ir pradeda is naujos eilutes
//  \t tarpas vieno sp


const backtickHTML = `<header>
<img class="logo" src="#" alt="Logo">
    <nav>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
    </nav>
</header>`;
console.log(backtickHTML);

const vardas = 'Jonas';
const pavarde = 'Jonaitis';

// Hi I ma Vardenis Pavardenis and I like you!
const personHi2 = `Hi, I am ${vardas} ${pavarde} and I like you!`;
console.log(personHi2);