import CardGame from "./04-CardGame.js";
import OldMaidHand from "./05-OldMaidHand.js";

class OldMaidGame extends CardGame {
    play(playersArray) {

        const removeQueenOfClubs = this.deck.removeCard(this.deck.cards.filter(
            (queenOfClubs) => {
                if (queenOfClubs.rank == 12 && queenOfClubs.suit == 0) {
                    // console.log(card);
                    // console.log(otherCard);
                    console.log(queenOfClubs);
                    return queenOfClubs;
                }
            })[0]
        );
        if (removeQueenOfClubs) {
            console.log("Queen of Clubs removed from initial deck");
        } else {
            console.log("Queen of Clubs NOT removed from initial deck !");

        };

        this.hands = [];

        for (let player of playersArray) {
            this.hands.push(new OldMaidHand(player));
        };

        this.deck.deal(this.hands);

        console.log("----- Cards have been dealt -----");
        this.showHands();

        let matches = this.removeAllMatches();
        console.log("----- Matches discarded, play begins -----");
        this.showHands();

        let turn = 0;

        let numHands = this.hands.length;

        while (matches < 25) {
            matches = matches + this.playOneTurn(turn);
            turn = (turn + 1) % numHands;
        };
        console.log("----- Gave is over -----");
        this.showHands();
    };

    removeAllMatches() {
        let count = 0;
        for (let hand of this.hands) {
            count = count + hand.removeMatches();
        };
        return count;
    };

    showHands() {
        for (let hand of this.hands) {
            hand.showHand();
        }
    };

    playOneTurn(i) {
        if (this.hands[i].isEmpty()) {
            return 0;
        };
        let neighbor = this.findNeighbor(i);
        let pickedCard = this.hands[neighbor].popCard();
        this.hands[i].addCard(pickedCard);
        console.log(`${this.hands[i].name} picked ${pickedCard.name()}.`);
        let count = this.hands[i].removeMatches();
        this.hands[i].shuffleCards();
        return count;
    };

    findNeighbor(i) {
        let numHands = this.hands.length;
        for (let next = 1; next <= numHands; next++) {
            let neighbor = (i + next) % numHands;
            if (!this.hands[neighbor].isEmpty()) {
                return neighbor;
            };
        };
    };
};

export default OldMaidGame;