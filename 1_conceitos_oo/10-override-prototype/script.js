class Cachorro{
    constructor(raca,cor) {
    this.raca = raca;
    this.cor = cor;
    }
    latir() {
        console.log("Au AU!");
    }
}
Cachorro.prototype.raca = "caramelo";
Cachorro.prototype.cor = "preto";    

let husky = new Cachorro("Husky", 4, "Cinza");
console.log(husky.raca);
husky.latir();
console.log(Cachorro.prototype.raca);
console.log(Cachorro.prototype.cor);
