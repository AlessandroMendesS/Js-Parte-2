const cachorro = {
    raca: "Border Collie",
    uivar: function(){
        console.log("Auuuuuuuuuuuuuuuuuuuuuuuuu!!!!!!!!!!!!!!");       
    },
    rosnar: function() {
        console.log("grrrrrrrrrrrrh!!!");
    },
    setRaca : function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
       return "A raça do cachorro é: " + this.raca;
    }
}
console.log(cachorro.raca);
cachorro.setRaca("Vira-lata");
console.log(cachorro.raca);

console.log(cachorro.getRaca());
cachorro.rosnar();
cachorro.uivar();