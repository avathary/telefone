const listaDeBotoes = document.querySelectorAll('input[type=button]');
const typeTel = document.querySelector('input[type=tel]');

for (let digito = 0; digito < listaDeBotoes.length; digito++) {
  const botao = listaDeBotoes[digito];
  
  botao.onclick = function () {
       typeTel.value = typeTel.value + botao.value;
    }

    botao.onkeydown = function (evento){
      if (evento.code === 'Enter' || evento.code === 'Space') {
        botao.classList.add('ativa');
    }
  }
    botao.onkeyup = function(){
      botao.classList.remove('ativa');
  }

}