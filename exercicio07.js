let valor = Number(prompt("Digite o valor total da compra: "));
let desconto = 0;

if (valor <= 100) {
    desconto = 0;
} else if (valor <= 200) {
    desconto = valor * 0.10;  // 10%
} else {
    desconto = valor * 0.20;  // 20%
}

let valorFinal = valor - desconto;

console.log("Preço original: R$", valor);
console.log("Valor do desconto: R$", desconto);
console.log("Preço final: R$", valorFinal);
