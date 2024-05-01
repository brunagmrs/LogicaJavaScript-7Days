let nome = prompt('Qual o seu nome?')
let idade = prompt('Quantos anos você tem?')
let linguagem = prompt('Qual linguagem você está estudando no momento?')

//mensagem em tela com dados inseridos
alert('Olá ' + nome + '! você tem ' + idade + ', e no momento está aprendendo a linguagem de programação ' + linguagem + '!')

//pergunta com diferentes respostas
//exercício extra
resposta = prompt("Você está gostando da linguagem que você está estudando?\n1 - Sim\n2 - Não muito...")
if(resposta == 1){
    alert("Que bom, continue assim!")
} else if (resposta == 2){
    alert("Que pena... Que tal aprender outra linguagem?")
} else {
    alert("Opção Inválida")
}