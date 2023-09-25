const numUm = parseFloat(prompt("Digite o primeiro número: "))
const numDois = parseFloat(prompt("Digite o segundo número: "))

let soma = numUm + numDois
let sub = numUm - numDois
let multi = numUm * numDois
let div = numUm / numDois

alert(numUm + " + " + numDois + " = " + soma + "\n" +
      numUm + " - " + numDois + " = " + sub + "\n" +
      numUm + " * " + numDois + " = " + multi + "\n" +
      numUm + " / " + numDois + " = " + div + "\n"
)