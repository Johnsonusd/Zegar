var dzisiaj = new Date(); 

function odliczanie() {
    dzisiaj = new Date();
    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth() + 1;
    var rok = dzisiaj.getFullYear();

    var godzina = dzisiaj.getHours();
    var minuta = dzisiaj.getMinutes();
    var sekunda = dzisiaj.getSeconds();

    minuta = String(minuta).padStart(2, '0');
    sekunda = String(sekunda).padStart(2, '0');

    document.getElementById("zegar").innerHTML = dzien + "/" + miesiac + "/" + rok + "<br>" + godzina + ":" + minuta + ":" + sekunda;

    setTimeout(odliczanie, 1000);
}

odliczanie();