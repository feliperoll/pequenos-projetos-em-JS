let capitalInicial = parseFloat(prompt("Digite o capital inicial: "))

let capital = capitalInicial
pergunta = ""

do {menu = parseFloat(prompt("No momento o capital é de R$" + capital + "\nVocê deseja:\n1- Adicionar\n2- Remover\n3 - Cancelar"))
  if(menu === 1){
    pergunta = parseFloat(prompt("Quanto deseja adicionar?"))
    capital = capital + pergunta
  }
  if(menu === 2){
    pergunta = parseFloat(prompt("Quanto deseja remover?"))
    capital = capital - pergunta
  }
} while (menu != 3);