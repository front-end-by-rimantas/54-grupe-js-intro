const jonas = {
    name: 'Jonas',
    age: 99,
    isMarried: true
};
console.log(jonas);

console.log(jonas.name);
console.log(jonas.age);
console.log(jonas.isMarried);

console.log(jonas['name']);
console.log(jonas['age']);
console.log(jonas['isMarried']);

const luckyNumbers = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
};

console.log(luckyNumbers);
console.log(luckyNumbers['0'], luckyNumbers[0]);
console.log(luckyNumbers['1'], luckyNumbers[1]);
console.log(luckyNumbers['2'], luckyNumbers[2]);
console.log(luckyNumbers['3'], luckyNumbers[3]);
console.log(luckyNumbers['4'], luckyNumbers[4]);

console.clear();

const crazy = {
    title: 'pavadinimas....',
    isMarried: true,
    '7': 'septyni',
    'atskiri zodziai': 'daug atskiru zodziu'
};

console.log(crazy);
console.log(crazy['title']);
console.log(crazy['7']);
console.log(crazy['isMarried']);
console.log(crazy['atskiri zodziai']);

console.log(crazy[7]);

console.log(crazy.title);
console.log(crazy.isMarried);
