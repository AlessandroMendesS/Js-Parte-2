function Cachorro(raca,patas,cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;

    Cachorro.prototype.latir = function() {
        console.log("au au");
    },
    Cachorro.prototype.uivar = function() {
        console.log("uivando");
    }
}
let husky = new Cachorro("Husky", 4, "Cinza");
husky.latir();