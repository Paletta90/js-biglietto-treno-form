// Dichiaro le variabili per gli input
let nome = document.getElementById("nomeCognome");
let km = document.getElementById("kmPercorsi");
let eta = document.getElementById("etaUtente");

// Dichiaro le variabili per i button
let genera = document.getElementById("send");
let annulla = document.getElementById("delete");

// Genero il ticket al click
genera.addEventListener('click',
    function () {

        // Assegno ale variabili i valori inseriti
        km = Number(km.value);
        eta = eta.value;

        let priceKm = 0.21;
        let priceTicket;
        let tipoBiglietto;

        // Controllo se i Km inseriti sono validi
        if (km > 0) {

            // Controllo se è statto inserito un nome
            if (nome.value.trim() != "") {

                if (eta == 1) {

                    // Prezzo ticket con 20% di sconto
                    priceKm -= (priceKm * 0.2);
                    priceTicket = priceKm * km;
                    // Tipo di biglietto
                    tipoBiglietto = "Biglietto 20% di sconto";

                } else if (eta == 2) {

                    // Prezzo standanrd
                    priceTicket = priceKm * km;
                    // Tipo di biglietto
                    tipoBiglietto = "Biglietto standard";
                }
                if (eta == 3) {

                    // Prezzo con 40% di sconto
                    priceKm -= (priceKm * 0.4);
                    priceTicket = priceKm * km;
                    // Tipo di biglietto
                    tipoBiglietto = "Biglietto 40% di sconto";
                    console.log("Over 65");

                }

                // Faccio comparire il ticket al click
                document.getElementById("blockTicket").classList.remove("d-none");


                // Mando in stampa i vari dati
                document.getElementById("nomeUtente").innerHTML = nome.value;
                document.getElementById("tipoTicket").innerHTML = tipoBiglietto;
                document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
                document.getElementById("codiceCP").innerHTML = Math.floor(Math.random() * 5000) + 4999;
                document.getElementById("prezzo").innerHTML = priceTicket.toFixed(2) + "&#8364;";
                
            } else {
                alert("Nome non inserito");
                location.reload();
            }


        } else {
            alert("I km deveno essere maggiori di zero");
            location.reload();
        }



    }
)

// Cancello il ticket e ricarico la pagina
annulla.addEventListener('click',
    function () {
        document.getElementById("blockTicket").classList.add("d-none");
        location.reload();
    }
)