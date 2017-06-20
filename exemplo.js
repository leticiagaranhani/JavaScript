/*
criar um vetor de usuários usuário vai ter username e password
19/06/2017
instrutor: Renan Rodrigo
*/
var usuarios = [];

usuarios[0] = {
  'username' : "Renan",
  'password' : "aviao11"
}

usuarios[1] = {
  'username' : "Ana",
  'password' : "abc123"
}

usuarios[2] = {
  'username' : "João",
  'password' : "CPMC"
}

//Função para verificar id, nome e senha
// utiliza vetor 'usuarios'
function verificar(id, nome, senha){
  return usuarios[id].username == nome && usuarios[id].password == senha;
}

verificar(0, "Renan", "123")

verificar(2, "João", "CPMC")
