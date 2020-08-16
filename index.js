import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js';

const cliente1 = new Cliente('Evellyn', 11155566689);

//Atribui a variável . atributos.
//cliente1.nome = "Evellyn"

//Cliente, vai possuir as informações da variável cliente 1.
const contaCorrenteEvellyn = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(0, cliente1, 100);

contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);


