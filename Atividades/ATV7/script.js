class Pagamento {
    constructor(valor) {
        this.valor = valor
    }
}
class PagamentoDinheiro extends Pagamento {
    constructor(valor) {
        super(valor);
    }
    tipoPagamento() {
        console.log("Pagamento em dinheiro");
    }
}
class PagamentoCartao extends Pagamento {
    constructor(valor) {
        super(valor);
    }
    tipoPagamento() {
        console.log("Pagamento em com cartão");
    }
}

let pagamentoDinheiro = new PagamentoDinheiro('100000000');
let pagamentoCartao = new  PagamentoCartao('10');

pagamentoCartao.tipoPagamento();
pagamentoDinheiro.tipoPagamento();
 
console.log(pagamentoDinheiro instanceof PagamentoDinheiro);
console.log(pagamentoCartao instanceof PagamentoCartao);