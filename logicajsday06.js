//

//criação dos Arrays para cada seção de produto
let frutas  = []
let vegetais = []
let doces = []
let laticineos = []
let outros = []

//pergunta inicial para entrar dentro do laço
continuar = prompt("Você deseja adicionar algum item na sua lista?\n1 - Sim\n2 - Não")
if (continuar > 2 || continuar < 1){
    alert("Opção Inválida")
}
else {
    while(continuar == 1 || continuar == 2){
        
        //se a opção adicionar for selecionada
        if(continuar == 1) {
            //nome do produto para adicionar dado pelo usuário
            produto= prompt("Digite o nome do produto:")

            //seção para adiconar o produto dada pelo usuário
            secao = prompt("Qual seção do produto inserido?\n\nAs opções definidas são:\n- Frutas\n- Vegetais\n- Doces\n- Laticineos\n- Outros")

            //seleção de seção de acordo com a resposta do usuário
            if (secao == "Frutas" || secao == "frutas"){
                frutas.push(produto)
            }
            else if (secao == "Vegetais" || secao == "vegetais"){
                vegetais.push(produto)
            } else if (secao == "Doces" || secao == "doces"){
                doces.push(produto)
            } else if (secao == "Laticineos" || secao == "laticineos"){
                laticineos.push(produto)
            } else if (secao == "Outros" || secao == "outros"){
                outros.push(produto)
            } else { //erro para lista escrita incorretamente
                alert("Lista não definida, seu produto não foi adicionado.\nTente novamente")
            }
        }

        if(continuar == 3){
            
        }
        

        //repetição da pergunta dentro do laço enquanto a resposta for sim (1)
        continuar = prompt("Você deseja fazer alguma alteração na lista?\n1 - Adicionar item novo\n2 - Excluir item\n3 - Não")
        if (continuar > 3 || continuar < 1){
        alert("Opção Inválida")
        }
    }
}

//impressão em tela da lista de compras
document.write("Lista de compras: <br>" +  
    "<br>Frutas: " + frutas.join(", ")
    + "<br>Vegetais: " + vegetais.join(", ")
    + "<br>Doces: " + doces.join(", ")
    + "<br>Laticíneos: " + laticineos.join(", ")
    + "<br>Outros: " + outros.join(", ")
);
