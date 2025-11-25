//For - loop contato

//Contador do 0 ao 10
//for(inicializador; condicação; contador)

// for(let num = 0; num <= 10; num++){
//     console.log("Eu vim Barganhar " + num)
// }

let salario = 1000

while (salario < 5000) {
    salario += 100

    console.log("O salário é de R$: " + salario)

}

//Do While - loop condicional
// let aumento = 1000

// do{

//     console.log("Esse é o seu saldo: " + aumento)
//     aumento += 100

// }while(aumento < 5000)

//Array
let frutas = ["Banana", "Laranja", "Maça", "Pitaya", "Melancia", "Uva"]

// console.log(frutas[3])
// console.log(frutas[5])

//forEach => percorre uma lista
frutas.forEach(frutas => {
    console.log("A fruta é: " + frutas)
})
//Percorrer uma lista com for
for (let indice = 0; indice < frutas.length; indice++) {
    console.log(frutas[indice])

    if (frutas[indice] == "Uva") {
        console.log("Eu gosto de " + frutas[indice])
    }
}