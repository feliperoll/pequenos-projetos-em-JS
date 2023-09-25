const nomeUm = prompt("Insira o primeiro nome: ")
const nomeDois = prompt("Insira o segundo nome: ")
const entradaUm = prompt("Insira a primeira velocidade: ")
const entradaDois = prompt("Insira a segunda velocidade: ")

const veloUm = parseFloat(entradaUm)
const veloDois = parseFloat(entradaDois)

if(veloUm > veloDois){
  alert(nomeUm + " é o mais rápido!")
} else if (veloUm < veloDois) {
  alert(nomeDois + " é o mais rápido")
} else {
  alert("Velocidades iguais")
}


