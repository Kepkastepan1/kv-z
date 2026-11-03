const odpoved_ok = document.getElementById("odpoved_ok");
const obsah = document.getElementById("obsah");
const odpoved_na_ok = document.querySelectorAll(".odpoved_na_ok");
const tlacitko = document.querySelectorAll(".tlacitko");
const otazkaText =document.getElementById("otazka");

let zm_tlacitko = null;
let akt_hrac = Math.random()<0.5? "1":"2";
let hrac_sk1 = 0;
let hrac_sk2 = 0;
let sp_volba = null;
let aktualniOtazka = null;

alert("zacinat bude hrac " + akt_hrac + ".");

const seznam_otazek = [
{text: "Který rok skončila druhá světová válka v Evropě?",pocet: ["1943", "1945", "1950"], opdpoved_s: 1},
];

tlacitko.forEach(function(tlacitko) {
    tlacitko.addEventListener("click", function() {
        zm_tlacitko = tlacitko;  

        aktualniOtazka = seznam_otazek[Math.floor(Math.random() * seznam_otazek.length)];

        if (otazkaText) {
            otazkaText.textContent = aktualniOtazka.text;
        }

        odpoved_na_ok.forEach(function(tlacitko_M, i) {
            tlacitko_M.textContent = aktualniOtazka.pocet[i];
        });

        odpoved_ok.classList.remove("skr");
    });
});


odpoved_na_ok.forEach(function(tlacitko_M, index){
tlacitko_M.addEventListener("click", function(){

odpoved_ok.classList.add("skr");

let hodnotaPolicka = Number(zm_tlacitko.getAttribute("data-hodnota"));

let jesprvná =(index === aktualniOtazka.opdpoved_s)

if (jesprvná) {
    alert("Správně! Hráč " + akt_hrac + " získal body a pokračuje.");

    if (akt_hrac === "1") {
        hrac_sk1 += hodnotaPolicka;
        document.getElementById("skore_1").textContent = hrac_sk1;
    } else {
        hrac_sk2 += hodnotaPolicka;
        document.getElementById("skore_2").textContent = hrac_sk2;
    }

    zm_tlacitko.disabled = true;
    zm_tlacitko.style.backgroundColor = "gray";

    
    if (hrac_sk1 >= 100) {
        otazkaText.textContent="Gratuluji hráči 1, vyhrál jsi zlatého bludišťáka!";
        document.getElementById("vyber_od").style.display ="none";
        odpoved_ok.classList.remove("skr");
  
    } else if (hrac_sk2 >= 100) {
        otazkaText.textContent="Gratuluji hráči 1, vyhrál jsi zlatého bludišťáka!";
        document.getElementById("vyber_od").style.display ="none";
        odpoved_ok.classList.remove("skr");
    }
} else {
    
    if (akt_hrac === "1") {
        akt_hrac = "2";
    } else {
        akt_hrac = "1";
    }
    alert("Špatně! Další tah bude mít hráč " + akt_hrac + ".");
}

    });
});






















