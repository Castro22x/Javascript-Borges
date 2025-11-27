let elementosPorClass = document.getElementsByClassName("texto");
let elementoPorID = document.getElementById("formulario");


//exibindo
let ElementoPorTag = document.getElementsByTagName("p") 
console.log(ElementoPorTag)
console.log(elementosPorClass[0]); //acessa a 1 posicao da array
console.log(elementoPorID);
ElementoPorTag[0].textContent = "Rap de Anime";


//modificando
console.log(ElementoPorTag[0].innerText); //Modifica o conteudo do elemento
ElementoPorTag[0].style.color = "red";
ElementoPorTag[0].style.fontSize = "30px";





//Desafios
//crie uma variavel que tenha o valor de um elemento buscado pela sua tag🆗
//exiba o 2 segundo elementos da variavel elementos🆗
//Acesse a propriedade innerText da variavel elementoPorTag(é uma array, vao ter que acessar a posicao do elemnto) e exiba🆗
//Acesse a propriedade style.color e atribui (=) uma nova cor para a posicao 1 da variavel ElementoPorTag🆗