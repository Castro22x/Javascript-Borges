
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let n3 = Number(prompt("Digite o terceiro número: "));

if (n1 < n2 && n2 < n3) {
    console.log("Os números estão em ordem crescente.");
} else {
    console.log("Os números NÃO estão em ordem crescente.");
}