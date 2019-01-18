const catsArray = [{
        'name' : 'fenris',
        'img' : 'img/fenris.jpg'
    },
    {
        'name' : 'findus',
        'img' : 'img/findus.jpg'
    },
    {
        'name' : 'lotus',
        'img' : 'img/lotus.jpg'
    },
    {
        'name' : 'luvan',
        'img' : 'img/luvan.jpg'
    },
    {
        'name' : 'norna',
        'img' : 'img/norna.jpg'
    },
    {
        'name' : 'corona',
        'img' : 'img/corona.jpg'
    },
    {
        'name' : 'rut',
        'img' : 'img/rut.jpg'
    },
    {
        'name' : 'samus',
        'img' : 'img/samus.jpg'
    },
    {
        'name' : 'tiger',
        'img' : 'img/tiger.jpg'
    },
    {
        'name' : 'zefyrus',
        'img' : 'img/zefyrus.jpg'
    },
    {
        'name' : 'kittens',
        'img' : 'img/cats.jpg'
    },
    {
        'name' : 'octarine',
        'img' : 'img/octarine.jpg'
    }
];
const gameGrid = catsArray
  .concat(catsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

let matchCount = 0;
let popup = document.getElementById('winpop');
let close = document.querySelector('.close');

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

/* Makes the divs and the grid */
gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
    matchCount++;
    console.log('It is a match!');
  });
};

/* Reset the Guesses */
const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

/* Checks if the clicks have a match or not */
grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});

/* Pop up code */
function congratz () {
    if (matchCount == 2) {
        popup.classList.add('show');
        closeModal();
        console.log('majs')
    };
}
function closeModal () {
    close.addEventListener('click', function(e){
        popup.classList.remove('show');
    })
}
/*
var second = 0, minute = 0;
var timer = document.querySelector('.timer');
var interval;
function startTimer() {
    interval = setInterval(function() {
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if (second == 60){
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}
/* Move Counter */
/*
function moveCounter () {
    matchCount++;
    moveCounter.innerHTML = moves;

    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}
 */
