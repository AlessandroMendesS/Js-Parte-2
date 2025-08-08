class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log('Au Au');   
    }
} // fim class Cachorro

Cachorro.prototype.raca = "Caramelo";
let patas = Symbol();
Cachorro.prototype[patas] = 4;
let labrador =  new Cachorro("Labrador", "Amarelo");
labrador.latir();
console.log(Cachorro.prototype);
console.log(labrador.raca);
console.log(Cachorro.prototype[patas]);
console.log(labrador[patas]);


