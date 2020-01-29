var Jedi = /** @class */ (function () {
    function Jedi(nombre, edad, colorSableLuz, especie) {
        this.nombre = 'Obi Wan Kenobi';
        this.nombre = nombre;
        this.edad = edad;
        this.colorSableLuz = colorSableLuz;
        this.especie = especie;
    }
    return Jedi;
}());
var ObiWanKenobi = new Jedi('', 0, '', '');
console.log(ObiWanKenobi);
//A class interacting with an interface
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
var result = greeter(user);
console.log(result);
