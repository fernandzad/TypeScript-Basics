var spiderman = {
    nombre: 'Peter Parker',
    edad: 22,
    poderes: ['Sentido aracnido']
};
var drStrange = {
    nombre: 'Stephen Strange',
    edad: 40,
    poderes: ['Manipular artes misticas', 'Proyeccion Astral'],
    getPoder: function () {
        var poder = this.poderes[0];
        return poder;
    }
};
console.log(drStrange.getPoder);
console.log(spiderman);
