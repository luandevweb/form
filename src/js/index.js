alert("E ae, blz? tenta não copiar, o desenvolvimento é pessoal, você precisa aprender ;) qualquer dúvida: luandevweb@gmail.com")
function Pega(){

    var nome = document.getElementById("nome").value

    var sobrenome = document.getElementById("sobrenome").value

    // criando variaveis
    var java = document.getElementById("java")
    var csharp = document.getElementById("csharp")
    var php = document.getElementById("php")

// testing if checked

    if(java.checked){

        var pegaChecked = document.getElementById("java")

        pegaChecked.setAttribute("value","Java")

    
    }

    if(csharp.checked){

var pegaChecked = document.getElementById("java")

pegaChecked.setAttribute("value","C#")


}


if(php.checked){

var pegaChecked = document.getElementById("java")

pegaChecked.setAttribute("value","Php")

}

// criando variaveis second radio

var jogar = document.getElementById("jogar-bola")
var andar = document.getElementById("andar-bike")
var correr = document.getElementById("correr")

if(jogar.checked){

var pegaJogar = document.getElementById("jogar-bola")

pegaJogar.setAttribute("value","Sim")

} else{

    var pegaJogar = document.getElementById("jogar-bola")

    pegaJogar.setAttribute("value","Não")
}



if(andar.checked){

var pegaAndar = document.getElementById("andar-bike")

pegaAndar.setAttribute("value","Sim")

}  else{

    var pegaAndar = document.getElementById("andar-bike")
    pegaAndar.setAttribute("value","Não")
}


if(correr.checked){

var pegaCorrer = document.getElementById("correr")

pegaCorrer.setAttribute("value","Sim")

} else {
    var pegaCorrer = document.getElementById("correr")

    pegaCorrer.setAttribute("value","Não")
}

 var pegaBebida = document.getElementById("bebida")


var pegaShow = document.getElementById("showhere")




pegaShow.setAttribute("id","hacking")
pegaShow.innerHTML = "Olá! <br>" + "O seu nome é:  " +
nome + "<br>" +
"O seu sobrenome é: " + sobrenome + "<br>"+
"A sua linguagem de preferência é: " +
pegaChecked.value + "<br>"+
"Joga bola: " + pegaJogar.value + "<br>" +
"Andar de Bike: " + pegaAndar.value + "<br>" +
"Corre: " + pegaCorrer.value + "<br>" +
"A sua bebida preferida é: " + pegaBebida.value + "<br>" +
"<h1>Desenvolvido por Luan DevWeb</h1>"


}