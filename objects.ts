interface SuperHeroe {
  nombre: string;
  edad: number;
  poderes: string[];
}

type Heroe = {
  nombre: string;
  edad: number;
  poderes: string[];
  getPoder: () => string;
};

const spiderman: SuperHeroe = {
  nombre: 'Peter Parker',
  edad: 22,
  poderes: ['Sentido aracnido'],
};

const drStrange: Heroe = {
  nombre: 'Stephen Strange',
  edad: 40,
  poderes: ['Manipular artes misticas', 'Proyeccion Astral'],
  getPoder() {
    let poder = this.poderes[0];
    return poder;
  },
};

console.log(drStrange.getPoder);
console.log(spiderman);
