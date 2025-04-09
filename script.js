// Elementi del DOM: app container, i video ecc...
const appContainerEl = document.querySelector('#app-container');
const videoEls = document.querySelectorAll('video');
const audioIconEl = document.querySelector('.volume');

// Variabili globali: è il volume attivo
const halfScreenHeight = window.innerHeight / 2;
let isVolumeEnabled = false;

// Eventi: allo scroll dell'app container, al click dell'icona del volume
appContainerEl.addEventListener('scroll', function () {
    videoEls.forEach(function (video, index) {
        const videoRect = video.getBoundingClientRect();
        if (videoRect.top >= 0 && videoRect.top <= halfScreenHeight) {
            video.play();
        } else {
            video.pause();
        }
    });
});

audioIconEl.addEventListener('click', function () {
    isVolumeEnabled = !isVolumeEnabled;
    console.log(isVolumeEnabled);

    videoEls.forEach(function (video) {
        video.muted = !isVolumeEnabled;
    });

    let iconsClass = '';
    if (isVolumeEnabled) {
        iconsClass = 'fa-solid fa-volume-high volume';
    } else {
        iconsClass = 'fa-solid fa-volume-xmark volume';
    }

    audioIconEl.className = iconsClass;
});