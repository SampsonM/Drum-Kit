function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;  //stops function running if no match
    audio.currentTime = 0; //rewinds to start
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e) {
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //removes transition

window.addEventListener('keydown', playSound); //plays sound when key pressed

let background = document.querySelector("body");
let glasto = document.querySelector('#glasto');
let download = document.querySelector('#download');
let parklife = document.querySelector('#parklife');

parklife.addEventListener("click", function() {
    background.style.backgroundImage = "url('images/parklife.jpg')";
});

download.addEventListener("click", function() {
    background.style.backgroundImage = "url('images/download.jpg')";    
});

glasto.addEventListener("click", function() {
    background.style.backgroundImage = "url('images/glasto.jpg')";    
});