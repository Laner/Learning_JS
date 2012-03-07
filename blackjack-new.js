/* Make a card object that contains suit and rank
Add methods to retrive the suit and rank so they are kept privat
*/

function Card(s,r) {
    var suit = s;
    var rank = r;
    this.getSuit = function() {
        return suit;
    };
    this.getRank = function() {
        return rank;
    };
    this.getCard = function() {
        return this.getRank() + " of " + this.getSuit();
    };
    
}

// make a number of decks from the predefined arrays
// that filles an array with cards
// make deck global
var deck = [];
function makeDeck(nrOfDecks) {
    // arrays to fill the deck from
    var suit = ["Diamonds", "Clubs", "Hearts", "Spades"];
    var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    // set the length of the arrays
    var suitlength = suit.length;
    var ranklength = rank.length;
    //fill the deck based on the parameters
    for (var i = 0; i < nrOfDecks; i++) {
        for (var s = 0; s < suitlength; s++) {
            for (var r = 0; r < ranklength; r++) {
                deck.push(new Card(suit[s], rank[r]));
            }
            
        }
    }
    // shuffles the deck by the built in .sort method
    deck.sort(function() {return 0.5 - Math.random()});
    return deck;
}

// test to see if the deck is correct and randomized
function listDeck(d) {
    var decklength = d.length;
    for (var i = 0; i < decklength; i++) {
        console.log( i + ": " + d[i].getCard());
    }
}

// make a player object that takes care of the scoring
// and have a hand to store the cards form the deck
function player(name) {
    this.name = name;
    this.hand = [];
    this.score = function() {
        var handsize = this.hand.length;
        var score = 0;
        //first we check for aces
        var haveace = false;
        for (var i = 0; i < handsize; i++) {
            if (this.hand[i].getRank() === "A") {
                haveace = true;
                break;
            }
        }
        //loop the hand and add score
        for (var h = 0; h < handsize; h++) {
            var rank = this.hand[i].getRank();
            if ( rank === "A") {
                score += 11;
            } else if ( rank === "Q") {
                score += 10;
            } else {
                score += this.hand[i].getRank();
            }
        }
        return score;
    };
}

makeDeck(1);
//listDeck(deck);
var Runar = new player("runar");
console.log(deck[0]);
console.log(Runar.hand.length);
var test = deck[0];
Runar.hand.push(test);
deck.splice(0,1);
console.log(Runar.hand.length);
console.log("here: " + Runar.hand[0].getSuit());
var test = Runar.hand[0];
console.log(test.getRank());
console.log(Runar.score());