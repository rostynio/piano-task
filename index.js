
document.addEventListener('keydown', playPiano);
document.addEventListener('keyup', removeStyle);



function playPiano(event) {
    audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    pressedKey = document.querySelector(`button[data-key="${event.keyCode}"]`);
    pressedKey.className += " pressed_key";
    audio.play();
}


function removeStyle(event) {
    pressedKey = document.querySelector(`button[data-key="${event.keyCode}"]`);
    pressedKey.classList.remove('pressed_key');
}

