window.onload = function () {

    var relogio = document.getElementById("relogioDigital");

    var horas, minutos, segundos;

    var time = setInterval(function relogioDigital() {
        ({ horas, minutos, segundos } = pegarHoraAtual(horas, minutos, segundos));
        ({ horas, minutos, segundos } = ajustaFormatoHora(horas, minutos, segundos));
        exibirRelogio(horas, relogio, minutos, segundos);
    }, 1000); 
}

function exibirRelogio(horas, relogio, minutos, segundos) {
relogio.innerHTML = "<h1>" + horas + ":" + minutos + ":" + segundos + "</h1>" +
    "<br /> <h2>" + verificarTurno(horas) + "</h2>";
}

function verificarTurno(horas) {
if (horas >= 6 && horas < 12) {
    return "Bom dia";
} else if (horas >= 12 && horas < 18) {
    return "Boa Tarde";
} else {
    return "Boa Noite";
}
}

function pegarHoraAtual(horas, minutos, segundos){
var data = new Date();
horas = data.getHours();
minutos = data.getMinutes();
segundos = data.getSeconds();

return { horas, minutos, segundos };
}

function ajustaFormatoHora(horas, minutos, segundos) {
if (horas < 10) {
    horas = "0" + horas;
}
if (minutos < 10) {
    minutos = "0" + minutos;
}
if (segundos < 10) {
    segundos = "0" + segundos;
}
return { horas, minutos, segundos };
}