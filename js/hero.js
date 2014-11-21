var likes = [
  "web-developer",
  "educator",
  "cyclist",
  "painter",
  "brewer",
  "geography-nerd",
  "drawer",
  "reader",
  "walker",
  "traveler",
  "rubyist",
  "tinkerer",
  "hiker",
  "skiier",
  "builder",
  "architect",
  "film-fan",
  "javascriptist",
  "rails-nut",
  "space-cadet",
  "science-fan"
]

function randomKey() {

  var i = 0
  var interval = 300
  var appendWord = function() {
    if (i < 7) {
      addWord()
      i++
    }
    setTimeout(appendWord, interval)
  }

  setTimeout(function(){appendWord()}, 300);
}

function addWord() {
  likes = shuffle(likes)
  var word = likes.shift()
  var context = document.getElementById("tagline")
  context.innerHTML = context.innerHTML + word + ' '
  context.scrollTop = context.scrollHeight;

  if (likes.length < 1) {
    capslock = document.getElementById("capslock")
    capslock.removeEventListener("click", addWord);
    capslock.classList.add('inverted')
  }
}

// Good ol Fisher-Yates
function shuffle(array) {
  var counter = array.length, temp, index;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}


document.getElementById("capslock").addEventListener("click", addWord);
randomKey()
