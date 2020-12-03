
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>"
    //alert("obrigado por clicar")
}

function redirecionar(){
    window.open("https://globallab.org/en/")
    //window.location.href = "https://globallab.org/en/"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse"
    elemento.innerHTML = "obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui"
    elemento.innerHTML = "passe o mouse aqui"
}

function load(){
    alert("pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/* function soma(n1,n2){
    return n1 + n2
}

var validar = 0

function validaIdade(idade){
    

    if(idade >= 18 ){
        validar = true
    }else{
        validar = false
    }
    return  validar
}
var idade = prompt("qual a sua idade?")
validaIdade(idade)
console.log(validar) */


/* var d = new Date();
alert(d.getDay() -1 )
alert(d.getHours())
alert(d.getMinutes())
alert(d.getSeconds()) */



/* repeticao 
for(let count = 0; count < 5; count++){
    alert(count)
}
 */
/* repeticao
var count = 0
while( count <= 5 ){
    console.log( count )
    count++
} */

/* condicional

var idade = prompt("qual sua idade?")
if( idade >= 18 ){
    alert("maior de idade")
}else{
    alert("menor de idade")
} */


/* var nome = "rodrigo barbosa"
var n1 = 32
var n2 = 14
var frase = "Flamengo melhor time"

console.log(nome)
console.log(n1 + n2)
console.log(frase.replace("Flamengo", "Palmeiras"))
console.log(frase.toLowerCase()) */

//alert(frase.replace("Flamengo", "Palmeiras"))

//arrays
/* var lista = ["maca","acerola","uva"]
console.log(lista[0])
console.log(lista)
alert(lista)
//adiciona elemento ao final da lista
lista.push("caja")
console.log(lista)
//remove elemento ao final da lista
lista.pop()
console.log(lista)
//tamanho da lista
console.log(lista.length)
//invertendo a ordem dos elementos
console.log(lista.reverse())
console.log(lista[0])
//converti para string
console.log(lista.toString()[0])
//separando os elementos com hifen
console.log(lista.join(" - "))
//dicionario
var frutas = { nome: "maca", cor:'vermelha' }
console.log(frutas)
//lista de dicionarios
var frutas = [{ nome: "maca", cor:'vermelha' }, { nome: "uva", cor:'roxa' } ]
console.log(frutas[1].nome) */
