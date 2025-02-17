/*
HOF - highere order functions
*/

const numbers = [1, 2, 3, 4];
const numbers2x = [];

for (let i = 0; i < numbers.length; i++) {
    numbers2x.push(numbers[i] * 2);
}

console.log(numbers2x);

function triple(n) {
    return n * 3;
}

const numbers3x = numbers.map(triple);
console.log(numbers3x);


const numbers5x = numbers.map(n => n * 5);
console.log(numbers5x);

const dic = ['Labas', 'rytas', 'Lietuva'];
const letters = dic.map(s => s[0]);
console.log(letters);

const gg = 'Gera gira geroj girioj gera gerti';
const ggInit = gg
    .split(' ')
    .map(s => s[0])
    .join('.') + '!';
console.log(ggInit);


const kk = ['Aa1+', 'Bb2-', 'Cc3'];

// 0 -> "pirma simboli"
// 1 -> "antra simboli"
// 2 -> "trecia simboli"
// 3 -> "ketvirta simboli"
// 4 -> 

const kkresulr = kk.map(s => s[3]);
console.log(kkresulr);

console.clear();

const luckyNumbers = [0, 1, 5, 7, 13, 28, 66, 69];
console.log(luckyNumbers);

const bigerLucky = luckyNumbers.map(n => n * 10);
console.log(bigerLucky);

// 1 - grazinti didesnius uz 20
// 2 - grazinti didesnius arba lygius 28
// 3 - grazinti mazesnius uz 50
// [0, 1, 5, 7, 13, 28, 66, 69] -> [28, 66, 69]

const bigLucky1 = luckyNumbers.filter(n => n > 20);
console.log(bigLucky1);

const bigLucky2 = luckyNumbers.filter(n => n >= 28);
console.log(bigLucky2);

const bigLucky3 = luckyNumbers.filter(n => n < 50);
console.log(bigLucky3);

