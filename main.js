// Dichiaro le variabili per gli input
let nome = document.getElementById("nomeCognome");
let km = document.getElementById("kmPercorsi");
let eta = document.getElementById("etaUtente");

// Dichiaro le variabili per i button
let genera = document.getElementById("send");

genera.addEventListener('click',
    function () {

        // Assegno ale variabili i valori inseriti
        nome = nome.value;
        km = Number(km.value);
        eta = eta.value;

        let priceKm = 0.21;
        let priceTicket;

        if (eta == 1) {

            // Prezzo ticket con 20% di sconto
            priceKm -= (priceKm * 0.2);
            priceTicket = priceKm * km;
            console.log(`${priceTicket}" prezzo da Minorenne"`);

        } else if (eta == 2) {

            // Prezzo standanrd
            priceTicket = priceKm * km;
            console.log(`${priceTicket}"Maggiorenne"`);

        }
        if (eta == 3) {

            // Prezzo con 40% di sconto
            priceKm -= (priceKm * 0.4);
            priceTicket = priceKm * km;
            console.log("Over 65");

        }

        // Faccio comparire il ticket al click
        document.getElementById("blockTicket").classList.remove("d-none");

        
        document.getElementById("nomeUtente").innerHTML = nome;
    }
)