/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

//                       11
//             012345678901

const chuck = 'chuck';
const nameSize = chuck.length;

console.log(chuck, chuck.length);
console.log(chuck, nameSize);

// Chuck name is 5 letters long.
const chuckName = `${chuck} name is ${chuck.length} letters long.`;
console.log(chuckName);

for (let i = 0; i < chuck.length; i++) {
    console.log('-->', i, chuck[i]);
}

console.log('----------------');

for (let i = chuck.length - 1; i >= 0; i--) {
    console.log('#', i, chuck[i]);
}

// console.log(`Zodyje "vasara" yra 3 "a" raides.`);

// vasara -> a?
// vasara -> v?
// vasara -> r?
// vasara -> x?

// terminator x -> a?
// terminator x -> t?
// terminator x -> m?
console.clear();

const word1 = 'vasara';
const word2 = 'terminator x';

console.log(letterCount(word1, 'a'));
console.log(letterCount(word1, 'v'));
console.log(letterCount(word1, 'r'));
console.log(letterCount(word1, 'x'));

console.log(letterCount(word2, 'x'));
console.log(letterCount(word2, 't'));
console.log(letterCount(word2, 'a'));
console.log(letterCount(word2, 'r'));


function letterCount(text, searchSymbol) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '' + searchSymbol) {
            count++;
        }
    }

    return `Zodyje "${text}" yra ${count} "${searchSymbol}" raides.`;
}


console.log(letterCount('Mano tel nr yra 8612345678', '8'));

function doesTextIncludeSymbol(text, symbol) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === symbol) {
            return true;
        }
    }

    return false;
}

console.log(doesTextIncludeSymbol('vasara', 'a'));
console.log(doesTextIncludeSymbol('vasara', 'g'));
console.log(doesTextIncludeSymbol('terminator x', 'g'));
console.log(doesTextIncludeSymbol('terminator x', 'x'));
console.log(doesTextIncludeSymbol('terminator x', 'e'));
console.log(doesTextIncludeSymbol('terminator x', 'h'));
console.log(doesTextIncludeSymbol('65845254', '9'));
console.log(doesTextIncludeSymbol('65845254', '4'));

console.log('----------');

console.log('vasara'.includes('a'));
console.log('vasara'.includes('g'));
console.log('vasara'.includes('v'));
console.log('vasara'.includes('r'));
console.log('vasara'.includes('x'));
console.log('terminator x'.includes('x'));
console.log('terminator x'.includes('g'));

console.clear();

function symbolAtPosition(text, pos) {
    const index = pos >= 0 ? pos : (text.length + pos);
    return text[index];
}

const p = 'pomidoras';
console.log(p.at(0), p[0], symbolAtPosition(p, 0));
console.log(p.at(1), p[1], symbolAtPosition(p, 1));
console.log(p.at(2), p[2], symbolAtPosition(p, 2));
console.log(p.at(22), p[22], symbolAtPosition(p, 22));
console.log(p.at(-1), p[p.length - 1], symbolAtPosition(p, -1));
console.log(p.at(-2), p[p.length - 2], symbolAtPosition(p, -2));
console.log(p.at(-3), p[p.length - 3], symbolAtPosition(p, -3));
console.log(p.at(-33), p[p.length - 33], symbolAtPosition(p, -33));