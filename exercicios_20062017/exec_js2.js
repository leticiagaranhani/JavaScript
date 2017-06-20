/* Criar uma função que recebe um vetor, usando FOR. Mostrar cada uma das posições do vetor
  no console com seu respectivo valor, assim:
  vetor1 = ["a","e","i",0,true];
  vetor2 = [true, true, true, true, "mentiroso", true];
  vetor3 = ["Pera", "Uva", "Maçã", "Graviola, tá pensando o que?"];
  sua_funcao(vetor1) mostra:
  0 : "a"
  1 : "e"
  2 : "i"
  3 : 0
  4 : true*/

  leticia_vetor1 = ["la","le","li","lo","lu"];
  leticia_vetor2 = ["Eu","quero","ir","para","Fernando de Noronha", "de novo."];
  leticia_vetor3 = ["Baratinha","Galinha Pintadinha","Sapo não lava o pé","Sítio do Pica-Pau Amarelo"];

  function le_vetor(vetor){

    for (var i = 0; i < vetor.length; i++) {

      console.log(i + "  : " + vetor[i]);
      
    }

  }
