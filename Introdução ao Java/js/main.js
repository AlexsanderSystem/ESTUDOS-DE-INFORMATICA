let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = 0; // Altere o valor da variável com o cálculo esperado
console.log("X = ", total);
output: X = 19
















function clicou() {
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
  //    console.log(document.getElementById("agradecimento"))
  //    alert("Obrigado por clicar")
}

function redirecionar() {
  window.open("http://www.wikidot.com/");
  //window.location.href = "http://www.wikidot.com/";
}

function trocar(elemento) {
  document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse";
  //alert("trocar texto");
}

function voltar(elemento) {
  elemento.innerHTML = "Passe o mouse aqui";
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; *Passe o mouse por cima aparece o conteudo*"tira o mouse e some"
}
function load() {
  alert("pagina carregada");
}
function funcaoChange(elemento){
  console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
var validar;
function validaIdade(idade){
    if(idade >= 18){ 
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade ?");
validaIdade(idade)
console.log(validar);

alert(soma(5, 10));
*/

//function soma(n1, n2){
//    return n1 + n2;
//}
//function setReplace(frase, nome, novo_nome){
//   return frase.replace(nome, novo_nome)
//}

//alert(soma(5, 10));
//alert(setReplace("Vai Aluno", "Vai professor", "Vai pai"));

/*
var lista = ["Alemanha", "Inglaterra", "Escócia"]/
lista.push("Polônia");
lista.pop("Inglaterra");
*/
/*
var count = 5;
while (count <5){
    console.log(count);
    count = count +1;
}
*/
/*
var idade = prompt("Qual sua idade ?");
if (idade > 18) {
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

//var frutas = [{nome: "maça", cor:"vermelho"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);

/*
var fruta = (nome: "maça", cor:"vermelho");
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ("maça", "pêra", "laranja");
//lista.push("uva");
//lispa.pop();

//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" "));

//var nome = "Alexsander Souza";
//var idade = 24;
//var idade = 25;
//var frase = "Meu primeiro Site JavaScript";
//alert(nome +" tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Skina", "Grémio Barueri"));
