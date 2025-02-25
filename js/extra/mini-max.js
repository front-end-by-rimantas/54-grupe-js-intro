function didziausiasSkaiciusSarase(list) {
    if (!Array.isArray(list)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    return 0;
}

console.assert(
    didziausiasSkaiciusSarase('pomidoras') === 'Pateikta netinkamo tipo reikšmė.',
    'Netinkamo tipas: string'
);
console.assert(
    didziausiasSkaiciusSarase(215462) === 'Pateikta netinkamo tipo reikšmė.',
    'Netinkamo tipas: number'
);
console.assert(
    didziausiasSkaiciusSarase(true) === 'Pateikta netinkamo tipo reikšmė.',
    'Netinkamo tipas: boolean'
);
console.assert(
    didziausiasSkaiciusSarase(null) === 'Pateikta netinkamo tipo reikšmė.',
    'Netinkamo tipas: null'
);
console.assert(
    didziausiasSkaiciusSarase(undefined) === 'Pateikta netinkamo tipo reikšmė.',
    'Netinkamo tipas: undefined'
);
console.assert(
    didziausiasSkaiciusSarase() === 'Pateikta netinkamo tipo reikšmė.',
    'Netinkamo tipas: undefined (nes nepateiktas parametras)'
);
console.assert(
    didziausiasSkaiciusSarase({}) === 'Pateikta netinkamo tipo reikšmė.',
    'Netinkamo tipas: object'
);

// console.assert(didziausiasSkaiciusSarase([1]) === 1, 'Grazinamas vienintelis masyve esantis skaicius: 1');
// console.assert(didziausiasSkaiciusSarase([5]) === 5, 'Grazinamas vienintelis masyve esantis skaicius: 5');
// console.assert(didziausiasSkaiciusSarase([1, 2, 3]) === 3, '!!!!!!');
// console.assert(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]) === 78, 'Err: 3');



// console.assert(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]) === 69, 'Err: 4');
// console.assert(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]) === -1, 'Err: 5');
// console.assert(didziausiasSkaiciusSarase([]) === 'Pateiktas sąrašas negali būti tuščias.', 'Err: 7');













// console.log(didziausiasSkaiciusSarase([1]), '-->', 1);
// console.log(didziausiasSkaiciusSarase([1, 2, 3]), '-->', 3);
// console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]), '-->', 78);
// console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]), '-->', 69);
// console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);
// console.log(didziausiasSkaiciusSarase('pomidoras'), '-->', 'Pateikta netinkamo tipo reikšmė.');
// console.log(didziausiasSkaiciusSarase([]), '-->', 'Pateiktas sąrašas negali būti tuščias.');
