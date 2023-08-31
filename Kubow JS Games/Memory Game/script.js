const cardArray = [
  {
    name: 'fries',
    image: 'img/fries.png'
  },
  {
    name: 'cheeseburger',
    image: 'img/cheeseburger.png'
  },
  {
    name: 'hotdog',
    image: 'img/hotdog.png'
  },
  {
    name: 'ice-cream',
    image: 'img/ice-cream.png'
  },
  {
    name: 'milkshake',
    image: 'img/milkshake.png'
  },
  {
    name: 'pizza',
    image: 'img/pizza.png'
  },
  {
    name: 'fries',
    image: 'img/fries.png'
  },
  {
    name: 'cheeseburger',
    image: 'img/cheeseburger.png'
  },
  {
    name: 'hotdog',
    image: 'img/hotdog.png'
  },
  {
    name: 'ice-cream',
    image: 'img/ice-cream.png'
  },
  {
    name: 'milkshake',
    image: 'img/milkshake.png'
  },
  {
    name: 'pizza',
    image: 'img/pizza.png'
  }
];

cardArray.sort(() => 0.5 - Math.random()); // Shuffle through the array randomly
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'img/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();


function checkMatch() {
  const cards = document.querySelectorAll('#grid img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'img/blank.png');
    cards[optionTwoId].setAttribute('src', 'img/blank.png');
    alert('You have clicked the same image!');
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match!');
    cards[optionOneId].setAttribute('src', 'img/white.png');
    cards[optionTwoId].setAttribute('src', 'img/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'img/blank.png');
    cards[optionTwoId].setAttribute('src', 'img/blank.png');
    alert('Sorry. Please try again!');
  }
  cardsChosen = [];
  cardsChosenIds = [];

  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length == (cardArray.length / 2)) {
    resultDisplay.textContent = 'Congratulations You got them all!';
  }
}


function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].image);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

flipCard();