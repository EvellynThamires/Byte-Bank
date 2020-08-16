//Classe abstrata. Ela não pode ser instanciada diretamente, mas pode ser herdada.

export class Conta{
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            //Lançando um novo erro.
            throw new Error('Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata.');
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    
    //Protege o atributo de ser reatribuido com algo que não seja um cliente. 
    //Instanceof: que seja de uma instância cliente. Caso seja, ele reatribui o novo valor.
    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    //Permite que seja visualizado o valor. 
    get cliente (){
        return this._cliente;
    }
    
    //É possível visualizar o saldo, mas não é possível reatribui-lo, porque só possui o método de visualização.
    get saldo(){
        return this._saldo; 
    }

    //Metódo abstrato. Serve para ser sobreescrito.
    sacar(valor) {
        throw new Error('O método Sacar da conta é abstrato')
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado; //Retorne o valor para quem chamou o método. Caso contrário, volta como undefined.
        }

        return 0;
    }

    depositar(valor) {
        this._saldo += valor; 
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor); //Sacar o valor da própria conta.
        conta.depositar(valorSacado); //Depositar na conta de outro cliente
    }
}