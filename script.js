// Elementi del DOM: app container, i video ecc...
const appContainerEl = document.querySelector('#app-container');

// Variabili globali: è il volume attivo

// Eventi: allo scroll dell'app container, al click dell'icona del volume
appContainerEl.addEventListener('scroll', function () {
    console.log("Scroll dell'app container");
});