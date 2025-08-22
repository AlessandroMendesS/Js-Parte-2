class Dispositivo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    ligar() {
        console.log("Dispositivo Ligado");
    }
}

class Smartphone extends Dispositivo {
    constructor(marca, modelo, sistemaOperacional) {
        super(marca, modelo);
        this.sistemaOperacional = sistemaOperacional;
    }
    ligar() {
        console.log(`Smartphone com ${this.sistemaOperacional} ligado`);
    }
}

let dispositivo = new Dispositivo("AFONE", "Aifone 14");
let smartphone = new Smartphone("Sangunda", "Galaxia", "ifone");

dispositivo.ligar();   
smartphone.ligar();    
