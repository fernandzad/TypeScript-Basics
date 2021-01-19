interface Heroe {
  nombre: string;
  edad?: number | undefined;
  poderes: string[];
}

type SuperHeroe = {
  nombre: string;
  edad: number;
  poderes: string[];
  getPoder: () => string;
};

const spiderman: Heroe = {
  nombre: 'Peter Parker',
  edad: 22,
  poderes: ['Sentido aracnido'],
};

function logLastName(lastName: string) {

}

function getMutant(hero: Heroe) {
  // if (hero.edad) // avoid the error
  logLastName(hero.edad); // ERROR because can be undefined
}

const drStrange: SuperHeroe  = {
  nombre: 'Stephen Strange',
  edad: 40,
  poderes: ['Manipular artes misticas', 'Proyeccion Astral'],
  getPoder() {
    let poder = this.poderes[0];
    return poder;
  },
};

let dareDevil: SuperHeroe & Heroe;
let batman: SuperHeroe | Heroe;

console.log(drStrange.getPoder);
console.log(spiderman);
