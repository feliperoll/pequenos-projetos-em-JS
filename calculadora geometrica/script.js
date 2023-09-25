function triangulo() {
  const base = parseFloat(prompt("Informe a base: "));
  const altura = parseFloat(prompt("Informe a altura: "));
  return (base * altura) / 2;
}
function retangulo() {
  const base = parseFloat(prompt("Informe a base: "));
  const altura = parseFloat(prompt("Informe a altura: "));
  return base * altura;
}
function quadrado() {
  const lado = parseFloat(prompt("Informe o lado: "));
  return lado * lado;
}
function trapezio() {
  const base = parseFloat(prompt("Informe a base: "));
  const altura = parseFloat(prompt("Informe a altura: "));
  return (base * altura) / 2;
}
function trapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior: "));
  const baseMenor = parseFloat(prompt("Informe a base menor: "));
  const altura = parseFloat(prompt("Informe a altura: "));
  const pi = 3.14;
  return ((baseMaior + baseMenor) * altura) / 2;
}
function circulo() {
  const pi = 3.14;
  const raio = parseFloat(prompt("Informe o raio: "));
  return pi * (raio * raio);
}
function menu() {
  return prompt(
    "Qual forma deseja calcular? \n1- Área de triângulo\n2- Área de retângulo\n3- Área de quadrado\n4- Área de trapézio\n5- Área de círculo\n6- Sair"
  );
}
function executar() {
  let opcao = "";

  do {
    opcao = menu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = triangulo();
        alert("O resultado é " + resultado);
        break;
      case "2":
        resultado = retangulo();
        alert("O resultado é " + resultado);
        break;
      case "3":
        resultado = quadrado();
        alert("O resultado é " + resultado);
        break;
      case "4":
        resultado = trapezio();
        alert("O resultado é " + resultado);
        break;
      case "5":
        resultado = circulo();
        alert("O resultado é " + resultado);
        break;
      case "6":
        alert("Saindo...");
        break;

      default:
        alert("Opção Inválida");
        break;
    }
  } while (opcao !== "6");
}

executar();
