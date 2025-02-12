/*
IF - sąlygos sakiniai

Pagrindiniai kodo sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ....  else if () {}
if () {} else if () {} ....  else if () {} else {}

Palyginimo operatoriai:
- viso: >, <, <=, >=, !=, !==, ==, ===
- naudotini: >, <, <=, >=, !==, ===
- nenaudotini: !=, ==

Loginiai operatoriai:
&& (ir)
|| (arba)
*/


if (4 === 4) {
    console.log('Taip');
} else {
    console.log('Ne');
}

const a = 6;

if (a === 1) {
    console.log('vienas');
} else if (a === 2) {
    console.log('du');
} else if (a === 3) {
    console.log('trys');
} else if (a === 4) {
    console.log('keturi');
} else if (a === 5) {
    console.log('penki');
} else if (a === 6) {
    console.log('sesi');
} else if (a === 7) {
    console.log('septyni');
} else {
    console.log('neatpazintas skaicius');
}

const n = 8;

if (n % 2 === 0) {
    console.log('lyginis');
} else {
    console.log('nelyginis');
}

switch (n % 2) {
    case 0:
        console.log('lyginis');
        break;

    case 1:
        console.log('nelyginis');
        break;
}
console.clear();

const d = 3;

if (d === 1) {
    console.log('pirmadienis');
} else if (d === 2) {
    console.log('antradienis');
} else if (d === 3) {
    console.log('treciadienis');
} else if (d === 4) {
    console.log('ketvirtadienis');
} else if (d === 5) {
    console.log('penktadienis');
} else if (d === 6) {
    console.log('sestadienis');
} else if (d === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokia diena savaiteje neegzistuoja');
}

const d2 = 2;

if (d2 === 1) {
    console.log('pirmadienis');
} else {
    if (d2 === 2) {
        console.log('antradienis');
    } else {
        if (d2 === 3) {
            console.log('treciadienis');
        } else {
            if (d2 === 4) {
                console.log('ketvirtadienis');
            } else {
                if (d2 === 5) {
                    console.log('penktadienis');
                } else {
                    if (d2 === 6) {
                        console.log('sestadienis');
                    } else {
                        if (d2 === 7) {
                            console.log('sekmadienis');
                        } else {
                            console.log('tokia diena savaiteje neegzistuoja');
                        }
                    }
                }
            }
        }
    }
}

const d3 = 2;

switch (d3) {
    case 1:
        console.log('pirmaidnies');
        break;
    case 2:
        console.log('antradienis');
        break;
    case 3:
        console.log('treciadienis');
        break;
    case 4:
        console.log('ketvirtadienis');
        break;
    case 5:
        console.log('penktadienis');
        break;
    case 6:
        console.log('sestadienis');
        break;
    case 7:
        console.log('sekmadienis');
        break;
    default:
        console.log('tokia diena savaiteje neegzistuoja');
        break;
}

// 1-5 - darbo diena
// 6-7 - savaitgalis

const d4 = 3.5;

if (d4 === 1 || d4 === 2 || d4 === 3 || d4 === 4 || d4 === 5) {
    console.log('-- darbo diena');
} else if (d4 === 6 || d4 === 7) {
    console.log('-- savaitgalis');
} else {
    console.log('-- tokia diena savaiteje neegzistuoja');
}

if (d4 >= 1 && d4 <= 5 && d4 % 1 === 0) {
    console.log('## darbo diena');
} else if (d4 === 6 || d4 === 7) {
    console.log('## savaitgalis');
} else {
    console.log('## tokia diena savaiteje neegzistuoja');
}

// switch...