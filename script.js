document.addEventListener('DOMContentLoaded', startGame)
function startGame () {
//  document.getElementById("table").innerHTML="";//Clean the board
createBoard()
}

function createBoard () {
  let cell = document.getElementsByClassName("cell");
  var letters = "aabbccddeeffgghhiijj"
    var assignedLetter = ""
    for (var i=0; i < 20; i++) {
        assignedLetter = letters[Math.floor(Math.random() * letters.length)]
        letters = letters.replace(assignedLetter, '')
        console.log(letters)
        cell[i].classList.add("hidden");
        cell[i].innerHTML = assignedLetter
    }
}
