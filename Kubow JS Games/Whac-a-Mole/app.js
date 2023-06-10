const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;

function randomSquares() {
  squares.forEach(square => {
    square.classList.remove('mole');
  })

  let randomSquare =squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add('mole');
}

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquares, 500);
}

moveMole();