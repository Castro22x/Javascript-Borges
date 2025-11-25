// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.


let numero = window.prompt("Digite um número para ver a tabuada")

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`); 
}