/*- Organize o código a seguir e procure explicar o que ele faz.
function getRandom(max){var resultado=Math.floor(Math.random()*max+1);returnresultado;}*/


//randomiza, multiplica pelo max, soma 1 à multiplucação, e arredonta para baixo para o próximo inteiro
function getRandom(max){
  var resultado = Math.floor( (Math.random() * max) + 1);
  return resultado;
}
