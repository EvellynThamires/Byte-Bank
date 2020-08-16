//Ser autenticavel significa ter o metódo autenticar.

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if(SistemaAutenticacao.eAutenticavel(autenticavel)){
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static eAutenticavel(autenticavel) {
    //Verifica se essa chave, existe dentro do objeto.
    return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function
  }
  
}