function converter() {
    var valueDolar = document.getElementById("valueinput").value;
    var valueReal = (parseFloat(valueDolar) * 5.5).toFixed(2);
  
    document.getElementById("valueconverted").innerHTML =
      "R$" + valueReal.replace(".", ",");
  }  