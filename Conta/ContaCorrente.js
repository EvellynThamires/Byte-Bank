//Coloca-se atributos dentro da classe.
//Getter e Setter são acessores, não são funções.

import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{
    //Atributo estático. Ele é atribuido para toda a classe, mexendo em todas as novas instâncias.
    static numeroDeContas = 0;

    //Pode ser usado os acessores, como "Cliente".
    constructor(cliente, agencia){
        super(0, cliente, agencia); //Ele acessa o construtor dentro da classe "Conta" Ele herda a classe extendida.
        ContaCorrente.numeroDeContas += 1; //Jeito de chamar um atributo estático.
    }

    //Função. Em orientação a objetos é chamado de métodos.
    sacar(valor) {
        //Ele está sobreescrevendo o comportamento de sacar da Conta.
        let taxa = 1.1
        return this._sacar(valor, taxa); //Isso só é possível por Conta Corrente herdar Conta.
    }
}