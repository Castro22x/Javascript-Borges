let nota1 = Number. parseFloat(prompt("Digite a nota de Português"))

let nota2 = Number. parseFloat(prompt("Digite a nota de matemática"))

let nota3 = Number. parseFloat(prompt("Digite a nota de história"))

let nota4 = Number. parseFloat(prompt("Digite a nota de química"))


let soma = nota1 + nota2 + nota3 + nota4

console.log (soma)

let media = (soma / 4)

console.log (media)

if (media >= 7) {
    console.log("Aprovado")
} else if (media > 5 && media < 7) {
    console.log("Recuperação")
}

else {
    console.log("Reprovado")
}