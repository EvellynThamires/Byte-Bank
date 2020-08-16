export class Cliente {

    //É possível somente visualizar o CPF.
    get cpf(){
        return this._cpf;
    }

    //Função construtora. Campos para preenchimento na hora da construção. 
    //Quando é criado uma instância de "Cliente", automaticamente gera o construtor abaixo. 
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar() {
        return true;
    }
}