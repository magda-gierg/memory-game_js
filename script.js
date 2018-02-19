document.addEventListener('DOMContentLoaded', startGame)
function startGame () {
//  document.getElementById("table").innerHTML="";//Clean the board
createBoard()
}

function createBoard () {
  let cell = document.getElementsByClassName("cell");
console.log(cell)
 cell[0].classList.add("hidden");
 cell[0].innerHTML = "A"
//  return board;
}
