function converte() {
    moeda = document.getElementById("currencyinput");
    moedaInput = moeda.value;
    console.log(moedaInput);
    if (moedaInput == "USD") {
        var url = "https://economia.awesomeapi.com.br/last/USD-BRL";
        // var endpoint = "USD-BRL";
        var moedaSimbolo = "USD";
    } else if (moedaInput == "EUR") {
        var url = "https://economia.awesomeapi.com.br/last/EUR-BRL";
        // var endpoint = "EUR-BRL";
        var moedaSimbolo = "EUR";
    } else {
        var url = "https://www.mercadobitcoin.net/api/BTC/ticker/";
        // var endpoint = "BTC-BRL";
        var moedaSimbolo = "BTC";
    }
    // const url = `https://economia.awesomeapi.com.br/last/${endpoint}`;

    let casaDec = 2;
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            if (moedaInput == "USD") {
                var valordata = data.USDBRL.bid;
            } else if (moedaInput == "EUR") {
                var valordata = data.EURBRL.bid;
            } else {
                var valordata = data.ticker.buy;
                // var valordata = data.BTCBRL.bid;
                casaDec = 10;
            }

            var valor = parseFloat(valordata);
            console.log("Valor da moeda: " + valor + " " + moedaSimbolo);

            let quantReal = document.getElementById("valueinput");
            let real = quantReal.value;
            let valueReal = (parseFloat(real) / valor).toFixed(casaDec);

            document.getElementById("valueconverted").innerHTML = `O valor convertido de Real para ${moedaSimbolo} é: ${valueReal.replace(".", ",")}`;
        })
        .catch(function (error) {
            console.log(error);
        });
}