/*- Escreva uma função que recebe um usuário (objeto) e um valor de empréstimo. As regras para
  empréstimo aprovado são:
  - Idade entre 20 e 65 anos,
  - Renda mensal maior que 2000 reais,
  - Valor do empréstimo menor que 20% da renda da pessoa.
  Dois objetos (pessoas) são fornecidos para teste:
var joao = {
  'idade': 35,
  'renda': 3500
};
var jose = {
  'idade': 25,
  'renda': 15.99
};
var maria = {
  'idade': 18,
  'renda': 6000
};
var luiza = {
  'idade': 30,
  'renda': 10000
};
Por exemplo, sua_funcao(joao,500) deve retornar "Aprovado" e sua_funcao(maria,100)
  deve retornar "Reprovado".*/

function emprestimo(pessoa, valor_emprestimo){
  var emprestimo = "Reprovado";

  if(pessoa.idade >= 20 && pessoa.idade <= 65){

    if(pessoa.renda > 2000) {

      if (valor_emprestimo <= pessoa.renda * 0.2 ) {
        emprestimo = "Aprovado";
      }

    }

  }

  return emprestimo;
}
