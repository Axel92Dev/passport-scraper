# Passport Appointment Availability Scraper (PaaS)
Stanco di non trovare disponibilità in Questura per l'appuntamento relativo al rilascio del passaporto? (https://www.passaportonline.poliziadistato.it/) Hai trovato lo script che fa per te!

## How to use
- ```npm install```
- Crea un file chiamato `credentials.js` contenente un oggetto di questo tipo:
    ```
    module.exports = {
        username: '<il tuo codice fiscale>',
        password: '<la tua password di accesso>'
    }
    ```
- ```npm start```

In console vedrai apparire la scritta ```no availability!``` se non dovesse essere trovato alcun appuntamento, altrimenti ```There is availability!``` con uno screenshot in ```screenshots/disp.png``` con la schermata di dove è possibile prendere appuntamento!

## How to improve
Lo script può essere migliorato:
- invio notifiche Telgram oppure mail in caso di disponibilità
- temporarizzarne lo start in modo automatico

Accetto volentieri MR/PR!