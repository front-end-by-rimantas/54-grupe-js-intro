/*
STRING - tekstas - simboliu grandinele

iniciavimas galimas:
- ' (viengubomis kabutemis)
- " (dvigubomis kabutemis)

*/

const firstname = 'Chuck';
console.log(firstname);

const lastname = "Norris";
console.log(lastname);

const fullname = firstname + ' ' + lastname;
console.log(fullname);

const age = 84;

// Hi, my name is Chuck and I am 84 years old.
// Hi, my name is Maryte and I am 88 years old.
// Hi, my name is {NAME} and I am {AGE} years old.
const chuckIntro = 'Hi, my name is ' + firstname + ' and I am ' + age + ' years old.';
console.log(chuckIntro);

// Kabute: ' (vienguba).
const k1 = "Kabute: ' (vienguba).";
console.log(k1);

// Kabute: " (dviguba).
const k2 = 'Kabute: " (dviguba).';
console.log(k2);

// Kabutes: ' (vienguba) ir " (dviguba).
const k12 = "Kabutes: ' (vienguba)" + ' ir " (dviguba).';
console.log(k12);

/*
<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>
*/

const html1 = '<div>';
const html2 = '    <h1>Labas rytas, Lietuva!</h1>';
const html3 = '    <p>Pirmadienis.</p>';
const html4 = '    <p>Pomidoras.</p>';
const html5 = '</div>';
console.log(html1);
console.log(html2);
console.log(html3);
console.log(html4);
console.log(html5);

/*
<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>
*/
console.log('-------------------');

// \n - new line
// \r - return
// \t - tab = 4space/8space
// \r\n - "ultimate" new line (enter mygtukas)

const html = '<div>\r\n\
\t<h1>Labas rytas, Lietuva!</h1>\r\n\
\t\t<p>Pirmadienis.</p>\r\n\
\t<p>Pomidoras.</p>\r\n\
</div>';
console.log(html);

