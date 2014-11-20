var heroText = document.getElementById("heroText");

var randomWord = function() {
  return 'a'
}

i = 30
var appendWord = function() {
  heroText.innerHTML = heroText.innerHTML + randomLetter()

  i--
  if (i > 0) { setTimeout(appendLetter, 100) }
}
appendLetter()
