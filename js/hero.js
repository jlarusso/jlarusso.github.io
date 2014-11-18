var pressCapsLock = function() {
  // var capslock = document.getElementById("capslock");
  // capslock.classList.remove('inverted')
}

var anim = document.getElementById("svg-hand");
anim.addEventListener("webkitAnimationEnd", pressCapsLock, false);
