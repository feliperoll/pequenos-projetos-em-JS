const nome = prompt("Digite o nome do turista:")
let visita = prompt("O turista já visitou alguma cidade? Sim/Não")

cont = 0
const cidades = [];

while(visita == "Sim"){
  const cidade = prompt("Nome da cidade visitada:")
  cont ++
  cidades.push(cidade)
  visita = prompt("Mais alguma cidade?")
}

alert(nome + " visitou " + cont + " cidades " + "\nCidades: " + cidades)

