let valor = parseFloat(prompt("Digite um valor para converter: "))
let convert = parseFloat(prompt ("Escolha para qual medida você deseja converter: \n1-mm\n2-cm\n3-dm\n4-dam\n5-hm\n6-km"))

let convertido = 0;

switch(convert){
  case 1:
    convertido = valor * 1000;
    alert(convertido);
    break
  case 2:
    convertido = valor * 100;
    alert(convertido);
    break
  case 3:
    convertido = valor * 10;
     alert(convertido);
     break
  case 4:
    convertido = valor / 10;
     alert(convertido);
     break
  case 5:
    convertido = valor / 100;
     alert(convertido);
     break
  case 6:
    convertido = valor / 1000;
     alert(convertido);
     break
  default:
    alert("Opção Inválida.")

}