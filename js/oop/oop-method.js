class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.isStudying = false;
        this.marks = [];
    }

    birthday() {
        this.age++;
        return 'Sveikiname su gimtadieniu!';
    }

    hi() {
        return `${this.name} sako: labas!!!`;
    }
}

const jonas = new Student('Jonas', 99);
const maryte = new Student('Maryte', 88);

jonas.birthday();
maryte.birthday();

// Maryte sake: labas!!!
console.log(maryte.hi());
console.log(jonas.hi());

