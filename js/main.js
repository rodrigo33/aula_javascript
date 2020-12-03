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
var lista = ["maca","acerola","uva"]
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
console.log(frutas[1].nome)
