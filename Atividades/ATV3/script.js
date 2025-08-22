class carro{
    constructor(marcaDoCarro,cor,gasolinaRestante,consumo) {
       this.marcaDoCarro = marcaDoCarro;
       this.cor = cor;
       this.gasolinaRestante = gasolinaRestante;
       this.consumo = consumo;
       
    }

    dirigir(km) {
        let litrosGastos = km/ consumo;
        this.gasolinaRestante = gasolinaRestante - litrosGastos
    }

    abastecer(litros) {
        this.gasolinaRestante =  gasolinaRestante + litros
    }

} // fim da classe Carro

let porsche = new carro("porsche",'preto',50, 5);
porsche.abastecer(50);
console.log(porsche);








