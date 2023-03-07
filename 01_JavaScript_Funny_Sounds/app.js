function playSound(e) {
  // console.log(e);
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  // console.log(key);
  
  // if no audio then
  // stop the function from running all together
  if (!audio) return; 

  audio.currentTime = 0; // rewind to the start

  audio.play();

  key.classList.add('playing');
}

function removeTransition(e) {
  // console.log(e);
  // console.log(e.propertyName);

  if (e.propertyName !== 'transform') return; // skip it if it's not a transform
  // console.log(e.propertyName);
  
  // console.log(this);
  this.classList.remove('playing');
}

// Use a transition end event that will fire when it stopped animating itself
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);