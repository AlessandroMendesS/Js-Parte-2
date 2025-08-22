class Funcionario {
    constructor(nomeFuncionario, salario) {
        this.nomeFuncionario = nomeFuncionario;
        this.salario = salario;
    }

    calcularSalario() {
        return this.salario;
    }
}

class Gerente extends Funcionario {
    constructor(nomeFuncionario, salario, bonus) {
        super(nomeFuncionario, salario);
        this.bonus = bonus;
    }

    calcularSalario() {
        return this.salario + this.bonus;
    }
}

let funcionario = new Funcionario('Alessandro', 1000);
let gerente = new Gerente('jao', 2000, 500);

console.log(`Salário do funcionário: ${funcionario.calcularSalario()}`);  
console.log(`Salário do gerente: ${gerente.calcularSalario()}`);          
