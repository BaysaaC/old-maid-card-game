import Card from "./01-Card.js";
import Deck from "./02-Deck.js";
import Hand from "./03-Hand.js";
import CardGame from "./04-CardGame.js";
import OldMaidHand from "./05-OldMaidHand.js";
import OldMaidGame from "./06-OldMaidGame.js";

// let game = new CardGame();
// let hand = new OldMaidHand("Player1");
// hand.showHand();
// console.log(hand.isEmpty());
// game.deck.deal([hand]);

// hand.removeMatches();

// console.log(hand);

let game = new OldMaidGame();
game.play(["Player 1", "Player 2", "Player 3"]);