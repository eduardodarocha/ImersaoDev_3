function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".JPG") || filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}

var listaFilmes = [];


function listarFilmesNaTela(filmeFavorito) {
  console.log("filme favorito vindo da outra função", filmeFavorito);
  console.log("Lista de filmes", listaFilmes);
  if (listaFilmes.length == 0) {
    listaFilmes.push(filmeFavorito);
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    // var elementoFilmeFavorito = "<img src=" + filmeFavorito + " id='listaAnime'>";
    elementolistaFilmes = document.getElementById("listaAnimes");
    elementolistaFilmes.innerHTML += elementoFilmeFavorito;
  } else {   
      if (listaFilmes.includes(filmeFavorito)) {
        console.log("Filme já adicionado");
        // break;
      } else {
        listaFilmes.push(filmeFavorito);
        var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
        elementolistaFilmes = document.getElementById("listaAnimes");
        elementolistaFilmes.innerHTML += elementoFilmeFavorito;
        // break;
      }
    }
  }
