var cards = [{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
		},
		{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
		},
		{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
		},
		{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
		}
		];



var cardsInPlay = [];


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("sorry, try again!");
	}
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src' , "images/back.png");
    cardElement.setAttribute('data-Id' , i);
    cardElement.addEventListener('click' , flipCard);
    document.getElementById('game-board').appendChild(cardElement);

	}
}
var flipCard = function() {
	var cardId = this.getAttribute('data-Id')
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src' , cards[cardId].cardImage);
	if (cardsInPlay.length > 1) {
		checkForMatch();
	}
}
var replay = function() {
	var replayButton = document.getElementById('play-Again');
	replayButton.addEventListener('click' , function(){
		window.location.reload();
	});
	document.getElementById('play-Again').appendChild(replayButton);
}

createBoard();
replay();

