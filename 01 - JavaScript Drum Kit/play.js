function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) {
    console.log('Not a valid key.')
    return
  }; // does not move on to play
  audio.currentTime = 0; // allows repeating of keys faster than audio length
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if(e.propertyName !== 'transition') {
    return; // skip it it's not a transform
  }
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionEnd', removeTransition));

window.addEventListener('keydown', playSound);
