/*
modelar uma sala
sofa, rack, estante com livros, lustre com ventilador, janela
a sala é um objeto, e cada móvel é um outro objeto. Interruptor pode ser uma função.
Estante pode ter 3 prateleiras, cada uma vetor.
Criar do mais detalhado para o menos detalhado: da prateleira do armário para a sala.
fazer função que liga e desliga*/

var prateleira = [];
prateleira[0] = 'livros';
prateleira[1] = 'documentos';
prateleira[2] = 'Enciclopédia';

var objetosRack = [];
objetosRack[0] = "TV";
objetosRack[1] = "vaso de flores";

var armario = {
  'altura': 1.2,
  'largura': 0.9,
  'prateleira':prateleira
}

var sofa = {
  'largura': 2.9,
  'cor': "cinza",
  'lugares': 3,
  'material': "suede"
}

var rack = {
  'largura' : 1.85,
  'objetos': true,
  'objetosRack': objetosRack
}

/*var janela*/
var janela = {
  'largura': 1.2,
  'estaAberta': false
}

/*lustre*/
var lustre = {
  'estaAceso' : true,
  'ventiladorLigado' : false
}

function liga(obj, atributo){
  obj.atributo = true;
  return obj.atributo
}

function desliga(obj, atributo){
  obj.atributo = false;
  return obj.atributo
}

var moveis = [];
moveis[0] = armario;
moveis[1] = sofa;
moveis[2] = rack;

var sala = {
  'area': 25,
  'moveis': moveis,
}
