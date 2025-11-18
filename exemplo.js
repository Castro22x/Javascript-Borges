// //Alert - Apresenta uma mensagem na tela
// window.alert("Hello todo o Worlds")


// //Confirm - Pergunta com OK/Cancela (Retorna verdadeiro ou falso)
// window.confirm("O Jonas vai ser pai!!")

// //Prompt - Pega o texto da tela
// window.prompt("Qual o seu nome?")


// //Comentario em linha

// /* 
// Comentaria em texto
// Pode ter varias linhas
// */



// console.log("Multimiders")

// let nome = prompt("Informe o seu nome: ")

// console.log("Bem Vindo" + nome)



// let numero1 = prompt("DIgite o primeiro número: ")
// let numero2 = prompt("DIgite o segundo número: ")

// let resultado = numero1 + numero2



//Int = Numero Inteiro

// let numero1 = Number.parseInt(prompt("DIgite o primeiro número: "))
// let numero2 = Number.parseInt(prompt("DIgite o segundo número: "))

// let resultado = numero1 + numero2



//Float = Numero Decimal

//let numero1 = Number.parseFloat(prompt("DIgite o primeiro número: "))
//let numero2 = Number.parseFloat(prompt("DIgite o segundo número: "))

//let resultado = numero1 + numero2

//console.log(resultado)
// Exibe o resultado da última soma no console.

let idade = window.prompt("Qual sua idade?")

if (idade >= 18) {
    console.log("Maior de idade!")
} else {
    console.log("Você é menor de idade!")
}

switch (idade) {
    case "18":
        console.log("Maior de idade!")
        break;

    case "27":
        console.log("Está perto dos 30")
        break;
    default:
        console.log("Nada a dizer")
        break;
}