class Endereco{
    constructor(rua,bairro,cidade,estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
       
    }

    set novaRua(rua){
        this.rua = rua;
    }
    set novaBairro(bairro){
        this.bairro = bairro;
    }
    set novaCidade(cidade){
        this.cidade = cidade;
    }
    set novaEstado(estado){
        this.estado = estado;
    }




} // fim da classe Conta
let endereco1 = new Endereco("Antonio antoniol", "Jardim Santa Júlia", "São Carlos", "SP")
console.log(endereco1);
endereco1.novaRua = 'Rua do jao';
console.log(endereco1);
endereco1.novaCidade = 'Metropoles';
console.log(endereco1);







