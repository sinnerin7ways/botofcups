const deck = [
  { name: "The Fool", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Fool_(tarot_card)" },
  { name: "The Magician", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Magician_(tarot_card)" },
  { name: "The High Priestess", upright: true, wiki: "https://en.wikipedia.org/wiki/The_High_Priestess" },
  { name: "The Empress", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Empress_(Tarot_card)" },
  { name: "The Emperor", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Emperor_(tarot_card)" },
  { name: "The Hierophant", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Hierophant" },
  { name: "The Lovers", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Lovers" },
  { name: "The Chariot", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Chariot" },
  { name: "Strength", upright: true, wiki: "https://en.wikipedia.org/wiki/Strength_(Tarot_card)" },
  { name: "The Hermit", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Hermit_(tarot_card)" },
  { name: "Wheel of Fortune", upright: true, wiki: "https://en.wikipedia.org/wiki/Wheel_of_Fortune_(tarot_card)" },
  { name: "Justice", upright: true, wiki: "https://en.wikipedia.org/wiki/Justice_(tarot_card)" },
  { name: "The Hanged Man", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Hanged_Man_(tarot_card)" },
  { name: "Death", upright: true, wiki: "https://en.wikipedia.org/wiki/Death_(Tarot_card)" },
  { name: "Temperance", upright: true, wiki: "https://en.wikipedia.org/wiki/Temperance_(Tarot_card)" },
  { name: "The Devil", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Devil_(tarot_card)" },
  { name: "The Tower", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Tower_(Tarot_card)" },
  { name: "The Star", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Star_(tarot_card)" },
  { name: "The Moon", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Moon_(tarot_card)" },
  { name: "The Sun", upright: true, wiki: "https://en.wikipedia.org/wiki/The_Sun_(tarot_card)" },
  { name: "Judgement", upright: true, wiki: "https://en.wikipedia.org/wiki/Judgement_(tarot_card)" },
  { name: "The World", upright: true, wiki: "https://en.wikipedia.org/wiki/The_World_(tarot_card)" },

  // Minor Arcana - Wands
  { name: "Ace of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Ace_of_Wands" },
  { name: "Two of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Two_of_Wands" },
  { name: "Three of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Three_of_Wands" },
  { name: "Four of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Four_of_Wands" },
  { name: "Five of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Five_of_Wands" },
  { name: "Six of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Six_of_Wands" },
  { name: "Seven of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Seven_of_Wands" },
  { name: "Eight of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Eight_of_Wands" },
  { name: "Nine of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Nine_of_Wands" },
  { name: "Ten of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Ten_of_Wands" },
  { name: "Page of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Page_of_Wands" },
  { name: "Knight of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Knight_of_Wands" },
  { name: "Queen of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/Queen_of_Wands" },
  { name: "King of Wands", upright: true, wiki: "https://en.wikipedia.org/wiki/King_of_Wands" },

  // Minor Arcana - Cups
  { name: "Ace of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Ace_of_Cups" },
  { name: "Two of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Two_of_Cups" },
  { name: "Three of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Three_of_Cups" },
  { name: "Four of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Four_of_Cups" },
  { name: "Five of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Five_of_Cups" },
  { name: "Six of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Six_of_Cups" },
  { name: "Seven of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Seven_of_Cups" },
  { name: "Eight of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Eight_of_Cups" },
  { name: "Nine of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Nine_of_Cups" },
  { name: "Ten of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Ten_of_Cups" },
  { name: "Page of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Page_of_Cups" },
  { name: "Knight of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Knight_of_Cups" },
  { name: "Queen of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/Queen_of_Cups" },
  { name: "King of Cups", upright: true, wiki: "https://en.wikipedia.org/wiki/King_of_Cups" },

  // Minor Arcana - Swords
  { name: "Ace of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Ace_of_Swords" },
  { name: "Two of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Two_of_Swords" },
  { name: "Three of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Three_of_Swords" },
  { name: "Four of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Four_of_Swords" },
  { name: "Five of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Five_of_Swords" },
  { name: "Six of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Six_of_Swords" },
  { name: "Seven of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Seven_of_Swords" },
  { name: "Eight of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Eight_of_Swords" },
  { name: "Nine of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Nine_of_Swords" },
  { name: "Ten of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Ten_of_Swords" },
  { name: "Page of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Page_of_Swords" },
  { name: "Knight of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Knight_of_Swords" },
  { name: "Queen of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/Queen_of_Swords" },
  { name: "King of Swords", upright: true, wiki: "https://en.wikipedia.org/wiki/King_of_Swords" },

  // Minor Arcana - Pentacles
  { name: "Ace of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Ace_of_Pentacles" },
  { name: "Two of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Two_of_Pentacles" },
  { name: "Three of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Three_of_Pentacles" },
  { name: "Four of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Four_of_Pentacles" },
  { name: "Five of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Five_of_Pentacles" },
  { name: "Six of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Six_of_Pentacles" },
  { name: "Seven of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Seven_of_Pentacles" },
  { name: "Eight of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Eight_of_Pentacles" },
  { name: "Nine of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Nine_of_Pentacles" },
  { name: "Ten of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Ten_of_Pentacles" },
  { name: "Page of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Page_of_Pentacles" },
  { name: "Knight of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Knight_of_Pentacles" },
  { name: "Queen of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/Queen_of_Pentacles" },
  { name: "King of Pentacles", upright: true, wiki: "https://en.wikipedia.org/wiki/King_of_Pentacles" }
];

var selections = [];


function shuffleCards() {
  for (var i=0; i<deck.length; i++) {
    let rev = Math.round(Math.random());
    if (rev == 0) {
      deck[i].upright = true;
    }else {
      deck[i].upright = false;
    }
  }
}

function drawCards() {
  var index = Math.floor(Math.random() * deck.length);
  selections.push(deck[index]);
  deck.splice(index, -1);
                    
  index = Math.floor(Math.random() * deck.length);
  selections.push(deck[index]);
  deck.splice(index, -1);

  index = Math.floor(Math.random() * deck.length);
  selections.push(deck[index]);
  deck.splice(index, -1);
}
