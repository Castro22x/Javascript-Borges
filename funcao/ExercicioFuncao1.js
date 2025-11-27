//Funcao login e senha corretos

function Login() {
    let user = window.prompt("Qual seu usuario")

    let senha = window.prompt("Digite sua senha")

    if (user == "admin" && senha == "senha123") {
        console.log("Bem sucedido")
    }

    else {
        console.log("Algo errado")
    }
}

//Funcao 2 = Numeros par ou impar

function Numeros() {

    let number = window.prompt("Números par ou ímpar")

    if (number % 2 == 0) {
        console.log("Ele é par")
    }

    else {
        console.log("Ele é ímpar")
    }

}

//Funcao 3 = Se esta no peso idadeal ou nao

function Peso() {

    let peso = parseFloat(prompt("Digite seu peso em quilogramas: "));
    let altura = parseFloat(prompt("Digite sua altura em metros: "));

    let imc = peso / (altura * altura);

    console.log("Seu IMC é: " + imc.toFixed(2));


    let classificacao = ""

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    console.log("Classificação: " + classificacao);

}

//Funcao 4 = numeros crescente

function crescente() {

    let n1 = Number(prompt("Digite o primeiro número: "));
    let n2 = Number(prompt("Digite o segundo número: "));
    let n3 = Number(prompt("Digite o terceiro número: "));

    if (n1 < n2 && n2 < n3) {
        console.log("Os números estão em ordem crescente.");
    } else {
        console.log("Os números NÃO estão em ordem crescente.");
    }
}

//Funcao 5 = Data de nascimento idade

function anoNascimento() {

    let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))

    let anoAtual = new Date().getFullYear()

    let idade = anoAtual - anoNascimento

    if (idade >= 18) {
        console.log("Maior de idade")
        console.log("Sua idade é " + idade)
    }
    else {
        console.log("Menor de idade")
        console.log("Sua idade é: " + idade)
    }
}

let selecionado = window.prompt("Digite o numero do exercício")


while (selecionado !== "0") {

    switch (selecionado) {
        case "1":
            Login()
            selecionado = window.prompt("Digite o numero do exercício")
            break;

        case "2":
            Numeros()
            break;
        case "3":
            Peso()
            break;

        case "4":
            crescente()
            break;

        case "5":
            anoNascimento()
            break;

        case "0":
            selecionado = 0;
            break;


        default:
            console.log("Valor não aceita")
            break;
    }
    selecionado = window.prompt("Digite o numero do exercício: ")
}