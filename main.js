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
        'name' : 'tiger_02',
        'img' : 'img/tiger_02.jpg'
    },
    {
        'name' : 'zefyrus',
        'img' : 'img/zefyrus.jpg'
    }
    {
        'name' : 'kittens',
        'img' : 'img/cats.jpg'
    }
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

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

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
  });
};

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
