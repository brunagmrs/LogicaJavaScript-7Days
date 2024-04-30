//1. Usuário escolhe entre Back-end ou Front-end
let area = prompt('Qual área da programação você deseja ingressar?\n1 - Front-End\n2 - Back-End')
let nomeArea
let tecnologias


// 2. Usuário escolhe uma das duas opções de tecnologia na área 
if (area == 1){
 nomeArea = 'Front-End'
 alert('Você está ingresso na área de Front-End!')
 let linguagem = prompt('Qual destas tecnologias você quer começar a aprender?\n1. React\n2. Vue')
 if (linguagem == 1){
  alert('Você escolheu React')
  tecnologias = '- React'
 } else if(linguagem == 2){
  alert('Você escolheu Vue')
  tecnologias = '- Vue'
 } else {
  alert('Opção Inválida')
 }
} 

else if (area == 2){
 nomeArea = 'Back-End'
 alert('Você está ingresso na área de Back-End')
 let linguagem = prompt('Qual destas linguagens você quer comecar a aprender?\n1 - Java/n2 - C#')
  if(linguagem == 1){
   alert('Você escolheu Java')
   tecnologias = '- Java'
  } else if (linguagem == 2){
   alert('Você escolheu C#')
   tecnologias = '- C#'
  }else{
   alert('Opção Inválida')
  }
} 

else {
 alert('Área não definida...')
}


// 3. Opção para o usuário se tornar Full-Stack
novaArea = prompt('Você deseja seguir sua área ou se especializar para ser um programador Full-Stack?\n1 - Continuar na área ' + nomeArea + '\n2 - Full-Stack')
if (novaArea == 2){
 nomeArea = 'Full-Stack'
} else if (novaArea != 2 && novaArea != 1){
 alert('Opção Inválida...')
}

alert ('Parabéns, você está na área ' + nomeArea)

// 4. Opção para o usuário adicionar tecnologias novas
let continuar = 0
let tecnologia
continuar = prompt('Você deseja inserir novas tecnologias para sua trilha de aprendizado?\n1 - Sim\n2 - Não')

do{
 tecnologia = prompt('Digite o nome da tecnologia que voce deseja inserir:')
 tecnologias += '\n- ' + tecnologia 
 
 continuar = prompt('Você deseja inserir novas tecnologias para sua trilha de aprendizado?\n1 - Sim\n2 - Não')
}while(continuar == 1)


// Impressão de área e tecnologias adicionadas
alert('Na sua área de ' + nomeArea + ' existe a seguinte lista de tecnologias:\n' + tecnologias)