// Elementi del DOM: app container, i video ecc...
const appContainerEl = document.querySelector("#app-container")
const videosEls = document.querySelectorAll("video")
const audioIconsEls = document.querySelectorAll(".volume")
const likeIconsEls = document.querySelectorAll(".like-icon")

// Variabili globali: è il volume attivo
const halfScreenHeight = window.innerHeight / 2
let isVolumeEnabled = false

// Eventi: allo scroll dell'app container, al click dell'icona del volume
appContainerEl.addEventListener("scroll", function () {
    videosEls.forEach(function (video, index) {
        const videoRect = video.getBoundingClientRect()
        if (videoRect.top >= 0 && videoRect.top <= halfScreenHeight) {
            video.currentTime = 0
            video.play()
        } else {
            video.pause()
        }
    })
})

audioIconsEls.forEach(function (audioIcon) {
    audioIcon.addEventListener("click", function () {
        isVolumeEnabled = !isVolumeEnabled
        videosEls.forEach(function (video) {
            if (isVolumeEnabled == true) {
                video.muted = false
            } else {
                video.muted = true
            }
        })

        let iconClass = ""
        if (isVolumeEnabled == true) {
            iconClass = "fa-solid fa-volume-high volume"
        } else {
            iconClass = "fa-solid fa-volume-xmark volume"
        }
        audioIconsEls.forEach(function (audioIcon) {
            audioIcon.className = iconClass
        })
    })
})

likeIconsEls.forEach(function (likeIcon) {
    likeIcon.addEventListener("click", function () {
        likeIcon.classList.toggle("liked");
    })
})