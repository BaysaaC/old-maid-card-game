export default class Card {
    suitList = ["Clubs", "Diamonds", "Hearts", "Spades"];
    rankList = ["zero", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

    constructor(rank = 2, suit = 0) {
        this.rank = rank;
        this.suit = suit;
    };
    name() {
        return `${this.rankList[this.rank]} of ${this.suitList[this.suit]}`;
    };
};