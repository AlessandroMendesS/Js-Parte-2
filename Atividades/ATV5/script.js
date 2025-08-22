class Animal {
    constructor(nomeAnimal) {
       this.nomeAnimal = nomeAnimal;
    }
    emitirSom() {
        console.log("som generico de animal");
    }
}
class Cachorro extends Animal {
    constructor(nomeAnimal) {
        super(nomeAnimal);
    }
    emitirSom() {
        console.log("latido");   
    }
}

class Gato extends Animal {
    constructor(nomeAnimal) {
        super(nomeAnimal);
    }
    emitirSom() {
        console.log("miauuuuuuuuuuuuuuuuuuuuuu");
    }
}

let animal = new Animal("Jão");
let cachorro = new Cachorro('Henrique');
let gato = new Gato('Alessandro');

animal.emitirSom();
cachorro.emitirSom();
gato.emitirSom()
         
 