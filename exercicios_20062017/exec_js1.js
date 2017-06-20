/*Modificar o programa de verificar senha para que o usuário possa tentar somente
  quatro vezes. Caso ele falhe, deverá ser mostrado um alerta de erro.*/

  for(var valor = 1; valor <= 3; valor = valor + 1){

    var senha = prompt('Digite sua senha: (tentativa '+ valor +')');

    if(senha.length < 6){
      alert("AEW É 6 letra véi");
      if(valor == 3){
        alert("Sistema bloqueado. Tente novamente mais tarde.");
      }
    }
    else {
      alert("Senha cadstrada com sucesso! EEEEEE");
      valor = 4;
    }
  }
  alert("Fim.");
