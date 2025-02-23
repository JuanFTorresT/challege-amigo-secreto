let amigos = [];


function agregarAmigo() { 
    let amigoSelector = document.querySelector("#amigo");       
    let amigo = amigoSelector.value      
    if (amigo==="") {
        alert("Por favor inserte un nombre");      
    }
    else{
        amigos.push(amigo);
        amigoSelector.value="";
        document.getElementById("amigo").focus();
        console.log(amigos);
        actualizarAmigos();
        
    }
}

function actualizarAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML="";
    for (let i = 0; i < amigos.length; i++) {
        let listItem = document.createElement("li");
        let texto = document.createTextNode(amigos[i]);
        listItem.appendChild(texto);
        lista.appendChild(listItem);        
    }
}

function sortearAmigo() {  
    let ulresultado = document.querySelector("#resultado");
    ulresultado.innerHTML="";
    if (amigos.length>0) {
        let indiceAmigo = Math.floor(Math.random()*amigos.length);
        
        let listItem = document.createElement("li");
        let texto = document.createTextNode(amigos[indiceAmigo]);
        listItem.appendChild(texto);
        ulresultado.appendChild(listItem);
    }
}