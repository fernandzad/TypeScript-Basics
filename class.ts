
class Jedi{
    nombre:string = 'Obi Wan Kenobi';
    edad:number;
    colorSableLuz:string;
    especie:string;

    constructor (nombre:string, edad:number, colorSableLuz:string, 
                    especie:string){
        this.nombre = nombre;
        this.edad = edad;
        this.colorSableLuz = colorSableLuz;
        this.especie = especie;
    }
}

const ObiWanKenobi: Jedi = new Jedi('', 0, '', '');
console.log(ObiWanKenobi);
