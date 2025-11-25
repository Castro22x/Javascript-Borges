

let idade = parseInt(prompt("Digite sua idade: "));

while (idade < 18) {
    console.log("Você é menor de idade. Tente novamente.");
    idade = parseInt(prompt("Digite sua idade: "));
}

console.log("Você é maior de idade!");