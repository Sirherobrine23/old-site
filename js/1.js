/* =======================================
=           typing animation             =
=========================================*/

function Typer(e) {
    var listaText = e.innerHTML.split("");
    e.innerHTML = "";
    listaText.forEach(function (letra, i) {
        setTimeout(function () {
            e.innerHTML += letra;
        }, 35 * i)
    })
}

var subtitulo = document.querySelector("h3");
Typer(subtitulo);

