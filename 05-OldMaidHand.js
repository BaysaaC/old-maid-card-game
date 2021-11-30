import Hand from "./03-Hand.js";

class OldMaidHand extends Hand {
    removeMatches() {
        let count = 0;
        let originalCards = [... this.cards];
        for (let card of originalCards) {
            let match = this.cards.filter(
                (otherCard) => {
                    if (otherCard.rank == card.rank && otherCard.suit == (3 - card.suit)) {
                        // console.log(card);
                        // console.log(otherCard);
                        return otherCard;
                    };
                }
            );
            // console.log(this.cards.includes(match[0]));
            if (this.cards.includes(match[0])) {
                console.log(`Hand of ${this.name}: ${match[0].name()} matches ${card.name()}.`)
                this.removeCard(card);
                this.removeCard(match[0]);
                count = count + 1;
            } else {
                continue;
            };
        };
        return count;
    };
};

export default OldMaidHand;