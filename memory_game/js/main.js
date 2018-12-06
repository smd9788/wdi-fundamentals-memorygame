var cards = [{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
		},
		{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonnds.png'
		},
		{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-diamonnds.png'
		},
		{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonnds.png'
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
var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length > 1) {
		checkForMatch();
	}
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

flipCard(0);
flipCard(2);

