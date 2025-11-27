function cumprimento() {
    let NomePessoa = prompt("Digite seu nome: ")

    let horAtual = new Date().getHours()

    if (horAtual > 6 && horAtual < 13) {
        alert("Bom dia " + NomePessoa)
    } else if (horAtual >= 13 && horAtual < 18) {
        alert("Boa tarde " + NomePessoa)
    } else {
        alert("Boa noite " + NomePessoa)
    }
}

cumprimento()

let pessoa = {
    nome: "Artur",
    idade: 17,
    sobrenome: "Oliveira",
    estado: "SP",
    cidade: "SCS",
}

console.log(pessoa.nome)
console.log(pessoa.idade)

for(let chave in pessoa){
    console.log(chave + " : " + pessoa[chave])
}