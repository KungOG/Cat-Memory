var card = document.getElementsByClassName("card");
var catImg = [];
var drawCards = [];

// Loops through all the images and adds event listener to each image.
for (var i = 0; i < catImg.length; i++) {
  catImg[i].addEventListener("click", displayCard)
};

// The Displayed cards get a function which toggles (Open, show and disabled) cards.
var displayCard = function() {
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
}

function drawMemory(drawCards) {
  drawCards = [];
  for (let i = 1; i < 6; i++) {
    var htmlCards =
    `<div class="card" id="${i}">
      <div class="inside">
        <div class="front"><img src="1x1/${i}.jpg"></div>
        <div class="back"><img src="1x1/baksida.jpg"\ alt="?"></div>
      </div>
    </div>`;
    drawCards.push(htmlCards);
  };
  drawHtmlMemory(drawCards);
  return drawCards;
};

function drawHtmlMemory(drawCards) {
  //get memory and save it in memorydiv then
  //write out drawCards in memorydiv
  document.getElementById("memory").innerHTML = drawCards;
  }

document.addEventListener('DOMContentLoaded', function() {
  drawMemory();








});
