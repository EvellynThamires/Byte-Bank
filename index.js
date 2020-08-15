import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Evellyn', 11155566689);

//Atribui a variável . atributos.
//cliente1.nome = "Evellyn"

//Cliente, vai possuir as informações da variável cliente 1.
const contaCorrenteEvellyn = new ContaCorrente(cliente1, 1001);
contaCorrenteEvellyn.depositar(500);
contaCorrenteEvellyn.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

console.log(contaCorrenteEvellyn);
console.log(contaPoupanca);
