//Ser autenticavel significa ter o metódo autenticar.

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    return autenticavel.autenticar(senha);
  }
}