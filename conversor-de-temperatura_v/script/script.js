function converterEmCelsiusInFahrenheit(inputvalue) {
    var valueFahrenheit = (parseFloat(inputvalue) * (9 / 5) + 32).toFixed(2);
    return valueFahrenheit;
}

function converterCelsiusInKelvin(inputvalue) {
    var valueKelvin = (parseFloat(inputvalue) + 273.15).toFixed(2)
    return valueKelvin;
}

function converterKelvinInCelsius(inputValue) {
    var valueCelsius = (parseFloat(inputValue) - 273.15).toFixed(2);
    return valueCelsius;
}

function converterKelvinInFahrenheit(inputValue) {
    var valueFahrenheit = ((parseFloat(inputValue) - 273.15) * (9 / 5) + 32).toFixed(2);
    return valueFahrenheit;
}

function converterFahrenheitInCelsius(inputvalue) {
    var valueCelsius = ((parseFloat(inputvalue) - 32) * (5 / 9)).toFixed(2);
    return valueCelsius;
}

function converterFahrenheitInKelvin(inputvalue) {
    var valueCelsius = ((parseFloat(inputvalue) - 32) * (5 / 9) + 273.15).toFixed(2);
    return valueCelsius;
}

function converter() {
    var inputValue = document.getElementById("inputvalue").value;
    var outputChoice = document.querySelector('input[name="temperaturaChoiceOutput"]:checked').value
    var inputChoice = document.querySelector('input[name="temperaturaChoiceInput"]:checked').value

    if (inputChoice == "celsius") {
        if (outputChoice == "fahrenheit") {
            var FinalValue = converterEmCelsiusInFahrenheit(inputValue);
            document.getElementById("valueconverted").innerHTML = "Valor convertido " +
                FinalValue + "°F";
        } else if (outputChoice == "kelvin") {
            var FinalValue = converterCelsiusInKelvin(inputValue);
            document.getElementById("valueconverted").innerHTML = "Valor convertido " +
                FinalValue + "K";
        } else {
            alert("Selecione uma opção de conversão");
        }

    } else if (inputChoice == "fahrenheit") {
        if (outputChoice == "celsius") {
            var FinalValue = converterFahrenheitInCelsius(inputValue);
            document.getElementById("valueconverted").innerHTML = "Valor convertido " +
                FinalValue + "°C";
        } else if (outputChoice == "kelvin") {
            var FinalValue = converterFahrenheitInKelvin(inputValue);
            document.getElementById("valueconverted").innerHTML = "Valor convertido " +
                FinalValue + "K";
        } else {
            alert("Selecione uma opção de conversão");
        }

    } else if (inputChoice == "kelvin") {
        if (outputChoice == "celsius") {
            var FinalValue = converterKelvinInCelsius(inputValue);
            document.getElementById("valueconverted").innerHTML = "Valor convertido " +
                FinalValue + "°C";
        } else if (outputChoice == "fahrenheit") {
            var FinalValue = converterKelvinInFahrenheit(inputValue);
            document.getElementById("valueconverted").innerHTML = "Valor convertido " +
                FinalValue + "°F";
        } else {
            alert("Selecione uma opção de conversão");
        }
    }
}