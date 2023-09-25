const tabuadaInicial = prompt("Digite qual tababuada você deseja: ")

i = 0
let tabuada = [];
resultado = 0

for (; i <= 20; i++) {
  resultado = tabuadaInicial * i
  tabuada.push(resultado)
  alert(tabuadaInicial + " * " + i + " = " + resultado + "\n")  
}

