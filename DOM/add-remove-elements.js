let secao = document.getElementsByTagName("section");
let novoparagrafo = document.createElement("p");  //cria um elemento no meu HTML
let formularioElemento = document.getElementById("formulario");
let labelElemento = document.getElementById("label");

novoparagrafo.textContent = "Paragrafo criado via JS"; //Poe um conteudo no p

// secao[0].appendChild(novoparagrafo);

document.body.appendChild(novoparagrafo);

// remover a tag label 
formularioElemento.removeChild(labelElemento); //remove o elemento label do formulario