class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
} // fim da classe Mamifero

let coitote = new Mamifero(4);
console.log(coitote.patas);
// herença
class Cachorro extends Mamifero {
    constructor(patas, raca) {
        this.raca = raca;
        super(patas, patas); 
    }
    latir() {
        console.log('au au');
    }
} // fim da classe Cachorro
let pug = new Cachorro(4, 'Pug');
console.log(pug.patas);
pug.latir();

