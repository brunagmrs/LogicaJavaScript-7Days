
# Projeto de Lógica com JavaScript #7DaysOfCode alura

Neste projeto estão os arquivos que eu desenvolvi ao longo dessa semana de aprendizado da linguagem JavaScript com o auxílio da alura!

Este arquivo contém pequenos trechos dos códigos escritos nos 7 dias, para verificar com mais detalhes cada código, clique no link do código específico

## 👩‍💻 Day 01

**Tipagem de Variáveis**

Neste dia pude verificar que no JavaScript as variáveis podem possuir tipos difentes, mas carregarem mesmo valor, indicando que elas possuem mesma equivalência.


```javascript
//declaração de variáveis
let numDez = 10
let stringNumDez = '10'´

//verificação de valores equivalentes
if(stringNumDez == numDez){
  console.log('As variáveis stringNumDez e numDez possuem valores iguais, entretanto não são de mesmo tipo de variável.') //true
} else {
  console.log('As variáveis possuem valores distintos.')
}
```
link do código: [logicajsday01.js](https://github.com/brunagmrs/LogicaJavaScript-7Days/blob/main/logicajsday01.js)

## 👩‍💻 Day 02

**Comando Alert**

No desafio do dia 02 utilizei as variáveis para apresentarem Strings na tela do navegador com o  uso de JavaScript e HTML.


```javascript
//declaração de variáveis
let nome = prompt('Qual o seu nome?')
let idade = prompt('Quantos anos você tem?')
let linguagem = prompt('Qual linguagem você está estudando no momento?')

//Apresentação em tela com valores inseridos
alert('Olá ' + nome + '! você tem ' + idade + ', e no momento está aprendendo a linguagem de programação ' + linguagem + '!')
```
link do código JavaScript: [logicajsday02.js](https://github.com/brunagmrs/LogicaJavaScript-7Days/blob/main/logicajsday02.js)

link do código HTML: [htmlday02.html](https://github.com/brunagmrs/LogicaJavaScript-7Days/blob/main/htmlday02.html)
## 👩‍💻 Day 03

**Condicionais**

No dia 03 utilizei condicionais para apresentar diferentes escolhas do usuário, e respostas de acordo com as opções selecionadas do usuário.


```javascript
//entrada do usuário
let area = prompt('Qual área da programação você deseja ingressar?\n1 - Front-End\n2 - Back-End')

//saída com condicionais

//Opção 1
if (area == 1){
 nomeArea = 'Front-End'
 alert(`Você está ingressando na área de ${nomeArea}!`)

//Opção 2
} else if (area == 2){
    nomeArea = 'Back-End'
     alert(`Você está ingressando na área de ${nomeArea}!`)

//Opção Inválida
} else {
    alert('Opção Inválida...')
}
```
link do código: [logicajsday03.js](https://github.com/brunagmrs/LogicaJavaScript-7Days/blob/main/logicajsday03.js)

link do código HTML: [htmlday03.html](https://github.com/brunagmrs/LogicaJavaScript-7Days/blob/main/htmlday03.html)

## 👩‍💻 Day 04

**Random**

No dia 04 utilizei a função Random do JavaScript para gerar números aletórios de modo que o usuário pudesse deduzir o número gerado.

```
//gerar número aleatório de um a dez
numCorreto = parseInt(Math.random() * 10)
```

link do código: [logicajsday04.js](https://github.com/brunagmrs/LogicaJavaScript-7Days/blob/main/logicajsday04.js)

link do código HTML: [htmlday03.html](https://github.com/brunagmrs/LogicaJavaScript-7Days/blob/main/htmlday04.html)