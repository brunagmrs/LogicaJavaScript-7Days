
let numUm = 1
let stringNumUm = '1'
let numTrinta = 30
let stringNumTrinta = '30'
let numDez = 10
let stringNumDez = '10'

//verificação entre numUm e stringNumUm
if (numUm == stringNumUm){
  console.log('As variáveis numUm e stringNumUm tem o mesmo valor, mas estão declaradas em diferentes tipos.')
} else {
  console.log('As variáveis não possuem o mesmo valor.')
}

//verificação entre numTrinta e stringNumTrinta
if(numTrinta == stringNumTrinta){
  console.log('As variáveis numTrinta tem o mesmo valor que stringNumTrinta, porém possuem tipos diferentes.')
} else {
  console.log('As variáveis tem valores diferentes.')
}

//verificação entre stringNumDez e numDez
if(stringNumDez == numDez){
  console.log('As variáveis stringNumDez e numDez possuem valores iguais, entretanto não são de mesmo tipo de variável.')
} else {
  console.log('As variáveis possuem valores distintos.')
}
