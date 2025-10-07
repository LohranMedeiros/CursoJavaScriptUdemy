class ContaBancaria {
    #saldo;
 
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
 
    depositar(valor) {
        if (this.#validarValor(valor)) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        }
    }
 
    sacar(valor) {
        if (this.#validarValor(valor) && this.#saldo >= valor) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Saque não realizado. Verifique o valor e o saldo.");
        }
    }
 
    #validarValor(valor) {
        if (valor <= 0) {
            console.log("Valor deve ser positivo.");
            return false;
        }
        return true;
    }
 
    consultarSaldo() {
        console.log(`Saldo atual: R$${this.#saldo}`);
    }
}
 
const minhaConta = new ContaBancaria(1000);
minhaConta.depositar(200);
minhaConta.sacar(50);
minhaConta.consultarSaldo();