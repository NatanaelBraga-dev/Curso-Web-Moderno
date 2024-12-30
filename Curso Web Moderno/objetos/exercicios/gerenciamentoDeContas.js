/**
 *Exercício Difícil
    Crie um sistema de gerenciamento de contas bancárias utilizando prototipagem ou classes.

    Crie uma classe ContaBancaria com:

    Propriedades: titular (nome do titular), saldo.
    Métodos:
    depositar(valor): Adiciona o valor ao saldo.
    sacar(valor): Subtrai o valor do saldo se houver saldo suficiente, caso contrário,
    exiba:
    "Saldo insuficiente."

    verSaldo(): Retorna uma mensagem com o saldo atual:
    "O saldo da conta de [titular] é R$ [saldo]."

    Crie uma classe filha chamada ContaPoupanca, que herda de ContaBancaria e adiciona:

    Uma propriedade taxaJuros (em percentual).
    Um método aplicarJuros() que aumenta o saldo com base na taxa de juros.
    Teste:

    Crie uma conta bancária para "João" com saldo inicial de R$ 1000.
    Deposite R$ 500, saque R$ 200 e verifique o saldo.
    Crie uma conta poupança para "Maria" com saldo inicial de R$ 2000 e taxa de juros de 5%.
    Aplique os juros e verifique o saldo.
 */

class ContaBancaria {
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor){
        valor > 0 ? this.saldo += valor: console.log("valor inválido")
    }

    sacar(valor){
        valor > this.saldo ? console.log("não é possivel sacar esse valor pois seu saldo é de", this.saldo) : this.saldo -= valor
    }

    verificarSaldo(){
        return(
            console.log(`O saldo do(a) ${this.titular} é ${this.saldo}`)
        )
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(titular, saldo, taxaJuros){
        super(titular,saldo)
        this.taxaJuros = taxaJuros
    }

    aplicarJuros(){
        this.saldo = this.saldo + (this.saldo * this.taxaJuros)
    }
}

const conta1 = new ContaBancaria("João",1000)
conta1.depositar(500)
conta1.sacar(200)
conta1.verificarSaldo()

const conta2 = new ContaPoupanca("Maria",2000,0.05)
conta2.aplicarJuros()
conta2.verificarSaldo()