function Deck(){
	this.buildDeck();
}

// prototype method
Deck.prototype.buildDeck = function(){
	var suits = ['diamonds', 'clubs', 'hearts', 'spades'];
	var values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
	var self = this;

	// empty array
	this.cards = [];
	suits.forEach(function(suit) {
		values.forEach(function(value){
			self.cards.push(new Card(value, suit));
		});
	});
	return this;
}

Deck.prototype.shuffle = function() {
	var currentIndex = this.cards.length;
	var temp, randomIndex;

	// The Fisher-Yates (aka Knuth) shuffle
	while (currentIndex != 0) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		temp = this.cards[currentIndex];
		this.cards[currentIndex] = this.cards[randomIndex];
		this.cards[randomIndex] = temp;

	}
	return this;
}

Deck.prototype.reset = function() {
	this.buildDeck().shuffle();
	return this;
}

Deck.prototype.deal = function() {
	if (this.cards.length > 0) { // if the deck is not empty,
		return this.cards.pop();
	}
	else {
		return null;
	}
}

function Card(value, suit){
	this.value = value;
	this.suit = suit;
}

function Player(name){
	this.name = name;
	this.hand = [];
}

Player.prototype.takeCard = function(deck){
	this.hand.push(deck.deal());
	return this;
}

Player.prototype.discard = function(index){
	if (this.hand.length > index){
		this.hand.splice(index, 1);
	}
	return this;
}

deck = new Deck();
deck.shuffle();
// console.log(deck.cards);
// deck.shuffle();
tommy = new Player('Tommy');
tommy.takeCard(deck).takeCard(deck).takeCard(deck).takeCard(deck).takeCard(deck);
console.log(tommy.hand);
tommy.discard(1);
console.log(tommy.hand);
