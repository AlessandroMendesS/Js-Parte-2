function criaCachorro(raca,patas,cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;

    cachorro.latir = function() {
        console.log("Au au!");
    }
    return cachorro;
}

let dalmata = criaCachorro("Dálmata", 4, "Branco com manchas pretas");
console.log(dalmata);
dalmata.latir();