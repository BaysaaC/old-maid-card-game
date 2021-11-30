import Deck from "./02-Deck.js";

class Hand extends Deck {

    constructor(name = "") {
        super();
        this.name = name;
    };

    cards = [];

    addCard(card) {
        this.cards.push(card);
    };

    showHand() {
        if (this.isEmpty()) {
            console.log(`Hand of ${this.name} is empty`);
        } else {
            console.log(`--- Hand of ${this.name} contains: ---`);

            this.showCards();
        }
    }


}

export default Hand;