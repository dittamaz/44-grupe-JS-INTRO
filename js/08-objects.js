console.clear();

/*
OBJECTS - objektas
array - supaprastintas objektas;
stringas - supaprastintas array;
    
{
    key1: value1;
    key2: value2;
    key3: value3;
}


*/
//            [vardas, amzius, vedybisStatusas]
const petras = ['Petras', 99, true];
const maryte = ['Maryte', 88, true];

// Sveiki, mano vardas Vardas ir man Kazkiek metu.
const s1 = `Sveiki, mano vardas ${petras[0]} ir man ${petras[1]} metu.`;
console.log(s1);
const s2 = `Sveiki, mano vardas ${maryte[0]} ir man ${maryte[1]} metu.`;
console.log(s2);




const jonas = {
    name: 'Jonas',
    age: 77,
    isMarried: false,
};

// nesvarbu eiliskumas
const Ona = {
    isMarried: true,
    name: 'Ona',
    age: 65,
};

console.log('-----------');

console.log(Ona);
console.log(jonas);
console.log(Ona['age']);
console.log(Ona['isMarried']);
console.log(Ona['name']);

const random = {
    tekstas: 'Tekstas',
    skaicius: 777,
    kitas_variantas: 'mhm....',
    arTiesa: true,
    'su tarpu': 'ups...',
};

console.log(random['tekstas']);
console.log(random['skaicius']);
console.log(random['kitas_variantas']);
console.log(random['arTiesa']);
console.log(random['su tarpu']);

const pazymiai = [10, 2, 8, 4, 6];

console.log(pazymiai[0]);
console.log(pazymiai[1]);
console.log(pazymiai[2]);



console.log('------------------------');

const studentas = {
    name: 'Chuck Norris',
    age: Infinity,
    movies: [
        {
            title: 'Wolker, Texas ranger',
            year: 1990,
            actors: [
                'Chuck Norris 1',
                'Chuck Norris 2',
            ]
        },
        {
            title: 'Before me',
            year: -3000,
            actors: [
                'Chuck Norris 3',
                'Chuck Norris 2',
            ]
        },
        {
            title: 'Hell bound',
            year: 1990,
            actors: [
                'Chuck Norris 4',
                'Chuck Norris 5',
            ]
        },
    ]
};

console.log(studentas['movies']);
// supaprastinta console.log(studentas.movies);

console.log(studentas.movies.length);

console.log(studentas.movies[0]);

console.log(studentas.movies[0].title);
console.log(studentas.movies[0].actors);
console.log(studentas.movies[0].actors[1]);


