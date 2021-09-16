function converterEmKm() {
  let valueInput = document.getElementById("inputvalue").value;
  let valueEmKm = ((parseFloat(valueInput) * 9460528404879.4).toExponential(4)).replace(".", ",");
  document.getElementById(
    "valuekmconverted"
  ).innerHTML = `O valor em quilômetros é: ${valueEmKm} Km`;
}
function converterEmLY() {
  var valueInputKm = document.getElementById("inputvalue").value;
  var valueEmKm = ((parseFloat(valueInputKm) / 9460528404879.4).toExponential(4)).replace(".", ",");

  document.getElementById(
    "valuekmconverted"
  ).innerHTML = `O valor em ano luz é: ${valueEmKm}`;
}