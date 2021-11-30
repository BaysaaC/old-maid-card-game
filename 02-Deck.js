import Card from "./01-Card.js";

export default class Deck {
    constructor() {
        this.cards = [];
        for (let suit of Array(4).keys()) {
            for (let rank = 1; rank <= 13; rank++) {
                this.cards.push(new Card(rank, suit));
            };
        };
    };

    showCards() {
        for (let card of this.cards) {
            console.log(card.name());
        };
    };

    shuffleCards() {
        let nCards = this.cards.length;
        for (let i of Array(nCards).keys()) {
            let j = Math.floor(i + Math.random() * (nCards - i));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        };
    };

    removeCard(card) {
        if (this.cards.includes(card)) {
            let index = this.cards.indexOf(card);
            this.cards.splice(index, 1);
            return true;
        } else {
            console.log("fail");
            return false;
        };
    };

    popCard() {
        return this.cards.pop();
    };

    isEmpty() {
        return (this.cards.length === 0);
    }

    deal(hands) {
        let nHands = hands.length;
        let nCards = this.cards.length;
        for (let i of Array(nCards).keys()) {
            if (this.isEmpty()) {
                break;
            } else {
                let card = this.popCard();
                let hand = hands[i % nHands];
                hand.addCard(card);
            };
        };
    };
};


// const deck1 = new Deck();
// console.log(deck1.isEmpty());