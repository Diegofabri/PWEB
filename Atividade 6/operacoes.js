const PrimeiroNumero = prompt("Digite o Primeiro número")
const SegundoNumero = prompt("Digite o Segundo número")

const Soma = parseFloat(PrimeiroNumero) + parseFloat(SegundoNumero)
const Sub = parseFloat(PrimeiroNumero) - parseFloat(SegundoNumero)
const Div = parseFloat(PrimeiroNumero) / parseFloat(SegundoNumero)
const Rest = parseFloat(PrimeiroNumero) % parseFloat(SegundoNumero)

alert("Soma: " + Soma + "\n" + "Subtração: " + Sub + "\n" + "Divisão: " + Div + "\n" + "Resto Divisão: " + Rest)