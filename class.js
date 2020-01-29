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
