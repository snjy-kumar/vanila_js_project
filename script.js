// anonymous object 

class Card{
  constructor(value, suite){
    this.value = value;
    this.suite = suite;
  }
}

let cards = [new Card("A", "Heart"),
             new Card("2", "Heart"),
             new Card("3", "Heart"),
             new Card("4", "Heart")];

cards.forEach(card => console.log(`${card.value} ${card.suite}`));
             