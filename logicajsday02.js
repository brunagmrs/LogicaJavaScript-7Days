let nome = prompt('Qual o seu nome?')
let idade = prompt('Quantos anos você tem?')
let linguagem = prompt('Qual linguagem você está estudando no momento?')

alert('Olá ' + nome + '! você tem ' + idade + ', e no momento está aprendendo a linguagem de programação ' + linguagem + '!')

let pergunta = prompt('Você gosta da linguagem que está estudando?\n1 - Sim\n2 - Não Muito...')
if(pergunta == 1){
    alert('Que bom que você está gostando, continue assim!')
} else if (pergunta == 2)