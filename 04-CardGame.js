import Deck from "./02-Deck.js";

export default class CardGame {
    constructor() {
        this.deck = new Deck();
        this.deck.shuffleCards();
    }
}