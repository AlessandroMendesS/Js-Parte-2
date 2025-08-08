function Cachorro(raca,patas,cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    cachorro.latir = function() {
        console.log("Au Au");
    }
}
let husky = new Cachorro("Husky", 4, "Cinza");
husky.latir();