var nome = document.getElementById("nome");
var nota1Bim = document.getElementById("nota1");
var nota2Bim = document.getElementById("nota2");
var nota3Bim = document.getElementById("nota3");
var nota4Bim = document.getElementById("nota4");
document.getElementById("resultado").innerHTML = "";

function calculaMedia(e) {
  e.preventDefault();

  var nomeObj = document.getElementById("nome");
  var nome = nomeObj.value;

  var nota1Bim = document.getElementById("nota1");
  var nota2Bim = document.getElementById("nota2");
  var nota3Bim = document.getElementById("nota3");
  var nota4Bim = document.getElementById("nota4");

  let nota1 = parseFloat(nota1Bim.value);
  let nota2 = parseFloat(nota2Bim.value);
  let nota3 = parseFloat(nota3Bim.value);
  let nota4 = parseFloat(nota4Bim.value); 

  var mediaAno = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);
  if (mediaAno >= 7.0) {
    resultado = "Aprovado";
  } else if (mediaAno >= 5.0 && mediaAno < 7.0) {
    resultado = "Recuperação";
  } else {
    resultado = "Reprovado";
  }

  document.getElementById("resultado").innerHTML = `A media do aluno ${nome} é ${mediaAno} -> ${resultado}`

  //desafio
  console.log("Média: ", ((nota1 + nota2 + nota3 + nota4)/4).toFixed(1));

};
function resetFrase() {
  document.getElementById("resultado").innerHTML = "";
}


//-> Outra forma de fazer o calculo da media
// form.addEventListener("submit", function (e) {
//   let nota1 = parseFloat(nota1Bim.value);
//   let nota2 = parseFloat(nota2Bim.value);
//   let nota3 = parseFloat(nota3Bim.value);
//   let nota4 = parseFloat(nota4Bim.value);
//   // alerta o valor do campo
//   let mediaAno = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);

//   // impede o envio do form
//   e.preventDefault();
//   document.getElementById(
//     "resultado"
//   ).innerHTML = `A media do aluno ${nome.value} é ${mediaAno}`;
// });