var card = document.getElementsByClassName("card");
var catImg = [];

// Loops through all the images and adds event listener to each image.
for (var i = 0; i < catImg.length; i++) {
    catImg[i].addEventListener("click", displayCard)
};

// The Displayed cards get a function which toggles (Open, show and disabled) cards.
var displayCard = function () {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
}





/*

buildHTML: function(){
    var frag = '';
    this.$cards.each(function(k, v){
        frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
        <div class="front"><img src="'+ v.img +'"\
        alt="'+ v.name +'" /></div>\
        <div class="back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png"\
        alt="Codepen" /></div></div>\
        </div>';
    });
    return frag;
}
};

*/