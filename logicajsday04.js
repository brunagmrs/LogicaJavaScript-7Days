//gera número aleatório de 0 a 10
numCorreto = parseInt(Math.random() * 10)

//dá 3 chances para o usuário
for(var i=3; i>0; i--){
 numUsuario = prompt('Digite o seu chute\nVocê possui ' + i + ' chances')
 if (numUsuario == numCorreto){
  alert('Parabéns, você acertou!')
  i = 0
 }
}

//mostra o número correto
alert(`O número correto era ${numCorreto}`)