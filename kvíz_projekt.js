const odpoved_ok = document.getElementById("odpoved_ok");
const obsah = document.getElementById("obsah");
const odpoved_na_ok = document.querySelectorAll(".odpoved_na_ok");
const tlacitko = document.querySelectorAll(".tlacitko");
const otazkaText =document.getElementById("otazka");
const start = document.getElementById("start")
const tlacitko_str = document.getElementById("tlacitko_str")


let zm_tlacitko = null;
let akt_hrac = Math.random()<0.5? "1":"2";
let hrac_sk1 = 0;
let hrac_sk2 = 0;
let sp_volba = null;
let aktualniOtazka = null;
let hodnoty =[ 100, 100, 100, 100, 200, 200, 200, 200, 500, 500, 500, 500, 750, 750, 750, 750,];

tlacitko_str.addEventListener("click", function() {
  start.classList.add("skr");
  alert("zacinat bude hrac " + akt_hrac + ".");
});



hodnoty.sort(()=> Math.random() - 0.5);

tlacitko.forEach(function(policko, index ){
let hodnota = hodnoty[index];

policko.setAttribute("data-hodnota", hodnota);
policko.textContent = "otazka za "+ hodnota + " bodů";

});


const seznam_otazek = [
{text: "Který rok skončila druhá světová válka v Evropě?",pocet: ["1943", "1945", "1950"], opdpoved_s: 1},
{text:"Kdo byl prvním československým prezidentem?",pocet: ["Edvard Beneš", "Tomáš Garrigue Masaryk", "Emil Hácha"], opdpoved_s: 1},
{text: "Ve kterém roce byla založena Karlova univerzita v Praze?", pocet: ["1348", "1415", "1526"], opdpoved_s: 0 },
{text: "Která říše postavila slavný Hadriánův val?",pocet: ["Římská říše", "Osmanská říše", "Perská říše"], opdpoved_s: 0 },
{text: "Kdo objevil Ameriku v roce 1492?",pocet: ["Vasco da Gama", "Kryštof Kolumbus", "Ferdinand Magellan"],opdpoved_s: 1},
{text: "Kdy došlo k sametové revoluci v Československu?", pocet: ["1968", "1989", "1993"], opdpoved_s: 1},
{text: "Která antická civilizace postavila slavné pyramidy v Gíze?",pocet: ["Starověcí Řekové", "Starověcí Egypťané", "Římané"],opdpoved_s: 1},
{text: "Kdo byl zavražděn v Sarajevo roku 1914, což vedlo k 1. světové válce?",pocet: ["František Ferdinand d'Este", "Gavrilo Princip", "TGM"],opdpoved_s: 0},
{text: "Který český panovník byl nazýván 'Otec vlasti'?",pocet: ["Jan Lucemburský", "Karel IV.", "Jiří z Poděbrad"],opdpoved_s: 1},
{text: "Ve kterém století začal letopočet 1901?",pocet: ["19. století", "20. století", "21. století"],opdpoved_s: 1},
{text: "Kdo vynalezl knihtisk s pohyblivými písmeny?",pocet: ["Johannes Gutenberg", "Thomas Edison", "Leonardo da Vinci"],opdpoved_s: 0},
{text: "Která země darovala Spojeným státům Sochu svobody?",pocet: ["Velká Británie", "Francie", "Španělsko"],opdpoved_s: 1},

{text: "Jaké je hlavní město Austrálie?",pocet: ["Sydney", "Melbourne", "Canberra"], opdpoved_s: 2},
{text: "Která hora je nejvyšší na světě?",pocet: ["Mont Blanc", "Mount Everest", "K2"], opdpoved_s: 1},
{text: "Který světadíl je svou rozlohou největší?",pocet: ["Afrika", "Asie", "Amerika"],opdpoved_s: 1},
{text: "Která řeka je považována za nejdelší na světě?", pocet: ["Amazonka", "Nil", "Dlouhá řeka"], opdpoved_s: 1},
{text: "Kolik světových oceánů máme na Zemi?",pocet: ["3", "5", "7"], opdpoved_s: 1},
{text: "Ve kterém státě se nachází slavná Eiffelova věž?",pocet: ["Itálie", "Francie", "Španělsko"], opdpoved_s: 1},
{text: "Jaké je hlavní město Velké Británie?",pocet: ["Londýn", "Dublin", "Edinburgh"],opdpoved_s: 0},
{text: "Který oceán je největší na světě?",pocet: ["Atlantský oceán", "Indický oceán", "Tichý oceán"],opdpoved_s: 2},
{text: "Který africký stát má největší počet obyvatel?",pocet: ["Egypt", "Nigérie", "Jihoafrická republika"],opdpoved_s: 1},
{text: "Kterým státem protéká řeka Dunaj nejdelší část svého toku?",pocet: ["Rakousko", "Rumunsko", "Maďarsko"],opdpoved_s: 1},
{text: "Jaký stát má tvar jako kozačka?",pocet: ["Řecko", "Itálie", "Španělsko"],opdpoved_s: 1},
{text: "Která poušť je největší horkou pouští na světě?",pocet: ["Gobi", "Sahara", "Atacama"],opdpoved_s: 1},

{text: "Které zvíře je největším živočichem na Zemi?",pocet: ["Slon africký", "Pravěký mamut", "Plejtvák obrovský"], opdpoved_s: 2},
{text: "Jaký plyn rostliny spotřebovávají při fotosyntéze?",pocet: ["Kyslík", "Oxid uhličitý", "Dusík"],opdpoved_s: 1},
{text: "Kolik srdcí má chobotnice?",pocet: ["Jedno", "Tři", "Čtyři"],opdpoved_s: 1},
{text: "Který pták neumí létat, ale je nejrychlejším běžcem?",pocet: ["Pštros", "Tučňák", "Kura"],opdpoved_s: 0},
{text: "Který lidský orgán čistí krev?",pocet: ["Srdce", "Ledviny", "Žaludek"],opdpoved_s: 1},
{text: "Který hmyz vyrábí med?",pocet: ["Vosa", "Čmelák", "Včela"],opdpoved_s: 2},
{text: "Který savec je jediný schopný aktivního letu?",pocet: ["Veverka létavá", "Netopýr", "Lemur"],opdpoved_s: 1},
{text: "Jak se nazývá největší druh kočkovité šelmy na světě?",pocet: ["Lev", "Tygr sibiřský", "Jaguár"],opdpoved_s: 1},
{text: "Který plyn tvoří většinu zemské atmosféry?",pocet: ["Kyslík", "Dusík", "Oxid uhličitý"],opdpoved_s: 1},
{text: "Kolik párů žeber má člověk (standardně)?",pocet: ["10", "12", "14"],opdpoved_s: 1},
{text: "Jaký kámen je nejtvrdší v přírodě?",pocet: ["Korund", "Diamant", "Křemen"],opdpoved_s: 1},
{text: "Který obojživelník dokáže kompletně regenerovat své končetiny?",pocet: ["Skokan zelený", "Axolotl mexický", "Ropucha obecná"],opdpoved_s: 1},

{text: "Jaká je fyzikální jednotka elektrického odporu?",pocet: ["Volt", "Ampér", "Ohm"],opdpoved_s: 2},
{text: "Která planeta naší sluneční soustavy je nejblíže Slunci?",pocet: ["Venuše", "Merkur", "Země"],opdpoved_s: 1},
{text: "Jakou rychlostí se šíří světlo ve vakuu (přibližně)?",pocet: ["300 000 km/s", "3 000 km/s", "30 000 km/s"],opdpoved_s: 0},
{text: "Kdo formuloval slavné pohybové zákony a zákon gravitace?",pocet: ["Albert Einstein", "Isaac Newton", "Nikola Tesla"],opdpoved_s: 1},
{text: "Jakou značkou se ve fyzice označuje elektrický proud?",pocet: ["U", "I", "R"],opdpoved_s: 1},
{text: "Při jaké teplotě za normálního tlaku zmrzne voda (taje led)?",pocet: ["0 °C", "100 °C", "-10 °C"],opdpoved_s: 0},
{text: "Jaká je jednotka elektrického napětí?",pocet: ["Volt", "Watt", "Ampér"],opdpoved_s: 0},
{text: "Která planeta je známá jako 'červená planeta'?",pocet: ["Jupiter", "Mars", "Saturn"],opdpoved_s: 1},
{text: "Co měříme v kilowatthodinách (kWh)?",pocet: ["Elektrický výkon", "Spotřebu elektrické energie", "Elektrický odpor"],opdpoved_s: 1},
{text: "Jak se nazývá stav, kdy těleso na nic netlačí a nepůsobí na něj gravitační síla (v praxi)?",pocet: ["Tlak", "Beztížný stav", "Tření"],opdpoved_s: 1},
{text: "Který fyzik je autorem teorie relativity?",pocet: ["Isaac Newton", "Albert Einstein", "Nikola Tesla"],opdpoved_s: 1},
{text: "Při jaké teplotě se voda za běžného tlaku mění v páru (bod varu)?",pocet: ["90 °C", "100 °C", "120 °C"],opdpoved_s: 1},
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

/**
 * AI Generated
 * Model Gemini 3
 */
odpoved_na_ok.forEach(function(tlacitko_M, index){
tlacitko_M.addEventListener("click", function(){

odpoved_ok.classList.add("skr");

let hodnotaPolicka = Number(zm_tlacitko.getAttribute("data-hodnota"));

let jesprvná =(index === aktualniOtazka.opdpoved_s)

if (jesprvná) {
    alert("Správně! Hráč " + akt_hrac + " získal body a pokračuje.");

/**
 * AI Generated
 * Model Gemini 3
 */
    if (akt_hrac === "1") {
        hrac_sk1 += hodnotaPolicka;
        document.getElementById("skore_1").textContent = hrac_sk1;
    } else {
        hrac_sk2 += hodnotaPolicka;
        document.getElementById("skore_2").textContent = hrac_sk2;
    }

    zm_tlacitko.disabled = true;
    zm_tlacitko.style.backgroundColor = "gray";

    
    if (hrac_sk1 >= 3200) {
        otazkaText.textContent="Gratuluji hráči 1, vyhrál jsi zlatého bludišťáka!";
        document.getElementById("vyber_od").style.display ="none";
        odpoved_ok.classList.remove("skr");
  
    } else if (hrac_sk2 >= 3200) {
        otazkaText.textContent="Gratuluji hráči 2, vyhrál jsi zlatého bludišťáka!";
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






















