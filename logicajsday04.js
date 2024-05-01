numCorreto = parseInt(Math.random() * 10)

for (var i = 3; i > 0; i--) {
    numUsuario = prompt('Digite o seu chute (0 à 10)\nVocê possui ' + i + ' chances')

    if (numUsuario == numCorreto) {
        alert(`Parabéns, você acertou!`)
        i = 0
    }
}

alert(`O número correto é ${numCorreto}`)
