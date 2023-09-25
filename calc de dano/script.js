const nomeUm = prompt("Digite o nome: ")
const atq = parseFloat(prompt("Digite o poder de ataque: "))

const nomeDois = prompt("Digite o nome do outro personagem: ")
let def = parseFloat(prompt("Digite o poder de defesa: "))
const escudo = prompt("O personagem " + nomeDois + " possui escudo? S/N")

let dano = 0
let vida = def

if (atq > def && escudo === "n"){
  dano = atq - def
  vida = vida - dano
} 
if (atq > def && escudo === "s"){
  dano = (atq - def) / 2
  vida = vida - dano
} 

if (atq == def){
  dano = 0 
  vida = vida - dano
} 

alert ("No momento " + nomeDois + " possui " + vida + " de vida")


