var nSorteado;
var tentativas;

function iniciarGame(){
  nSorteado = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  document.getElementById('feedback').innerHTML = '';
  document.getElementById('guessInput').value = '';
}

function EnviarPalpite() {
  const nEscolhido = parseInt(document.getElementById("guessInput").value)

  if (nEscolhido < 1 ||  nEscolhido > 100) {
    document.getElementById("feedback").innerHTML = '<div class="alert alert-danger">Por favor, insira um número entre 1 a 100.</div>'
    return
  }

  tentativas++;

  if (nSorteado === nEscolhido) {
    document.getElementById("feedback").innerHTML =`<div class="alert alert-success">Parabens você acertou em ${tentativas} tentativas.</div>`
  } else if (nEscolhido < nSorteado){
     document.getElementById("feedback").innerHTML ='<div class="alert alert-warning">Chute mais alto</div>'
  } else if(nEscolhido > nSorteado){
 document.getElementById("feedback").innerHTML ='<div class="alert alert-warning">Chute mais baixo</div>'
  }
  
}

function resetGame() {
  iniciarGame();
}

iniciarGame()


// Jogo de Adivinhação de Números
// Descrição: Crie um jogo onde o usuário deve adivinhar um número aleatório gerado pelo computador dentro de um intervalo (por exemplo, 1 a 100).

// Funcionalidades:

// [x]Geração de um número aleatório.
// [x]Campo de entrada para o usuário inserir seu palpite.
// [x]Feedback sobre o palpite (muito alto, muito baixo, correto).
// [x]Fazer com que sorteia apenas um número por rodada.
// [x]Contador de tentativas.
// [x]Botão para reiniciar o jogo.(número de tentativas, reinício do jogo).

// Desafios:
// [x]Geração e comparação de números aleatórios.
// [x]Feedback dinâmico ao usuário com base no palpite.
// [x]Gerenciamento do estado do jogo.
