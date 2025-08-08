class Conta {
    constructor(saldoInicial) {
        this.saldo = saldoInicial
    }

    deposito(valor){
        this.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valor;
    }
    verSaldo(valor) {
        return this.saldo
        
    }
} // fim da classe Conta
let conta1 = new Conta(1000);
conta1.deposito(1000);
console.log(conta1.verSaldo());
conta1.saque(500);
console.log(conta1.verSaldo());




