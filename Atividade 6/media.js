const nomeAluno = prompt("Digite o nome do aluno")

const PrimeiraNota = prompt("Digite a 1a nota")
const SegundaNota = prompt("Digite a 2a nota")
const TerceiraNota = prompt("Digite a 3a nota")

const media = (parseFloat(PrimeiraNota) + parseFloat(SegundaNota) + parseFloat(TerceiraNota)) / 3

alert("O aluno " + nomeAluno + " teve a média " + media)