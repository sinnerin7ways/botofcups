const deck = [
  // Major Arcana
  { name: "The Fool", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-fool-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Magician", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-magician-meaning-major-arcana-tarot-card-meanings" },
  { name: "The High Priestess", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-high-priestess-meaning-tarot-card-meanings" },
  { name: "The Empress", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-empress-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Emperor", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-emperor-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Hierophant", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-hierophant-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Lovers", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-lovers-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Chariot", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-chariot-meaning-major-arcana-tarot-card-meanings" },
  { name: "Strength", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/strength-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Hermit", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-hermit-meaning-major-arcana-tarot-card-meanings" },
  { name: "Wheel of Fortune", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/wheel-of-fortune-meaning-major-arcana-tarot-card-meanings" },
  { name: "Justice", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/justice-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Hanged Man", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-hanged-man-meaning-major-arcana-tarot-card-meanings" },
  { name: "Death", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/death-meaning-major-arcana-tarot-card-meanings" },
  { name: "Temperance", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/temperance-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Devil", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-devil-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Tower", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-tower-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Star", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-star-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Moon", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-moon-meaning-major-arcana-tarot-card-meanings" },
  { name: "The Sun", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-sun-meaning-major-arcana-tarot-card-meanings" },
  { name: "Judgement", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/judgement-meaning-major-arcana-tarot-card-meanings" },
  { name: "The World", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/the-world-meaning-major-arcana-tarot-card-meanings" },

  // Minor Arcana – Wands
  { name: "Ace of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/ace-of-wands-meaning-tarot-card-meanings" },
  { name: "Two of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/two-of-wands-meaning-tarot-card-meanings" },
  { name: "Three of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/three-of-wands-meaning-tarot-card-meanings" },
  { name: "Four of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/four-of-wands-meaning-tarot-card-meanings" },
  { name: "Five of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/five-of-wands-meaning-tarot-card-meanings" },
  { name: "Six of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/six-of-wands-meaning-tarot-card-meanings" },
  { name: "Seven of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/seven-of-wands-meaning-tarot-card-meanings" },
  { name: "Eight of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/eight-of-wands-meaning-tarot-card-meanings" },
  { name: "Nine of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/nine-of-wands-meaning-tarot-card-meanings" },
  { name: "Ten of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/ten-of-wands-meaning-tarot-card-meanings" },
  { name: "Page of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/page-of-wands-meaning-tarot-card-meanings" },
  { name: "Knight of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/knight-of-wands-meaning-tarot-card-meanings" },
  { name: "Queen of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/queen-of-wands-meaning-tarot-card-meanings" },
  { name: "King of Wands", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/king-of-wands-meaning-tarot-card-meanings" },

  // Minor Arcana – Cups
  { name: "Ace of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/ace-of-cups-meaning-tarot-card-meanings" },
  { name: "Two of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/two-of-cups-meaning-tarot-card-meanings" },
  { name: "Three of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/three-of-cups-meaning-tarot-card-meanings" },
  { name: "Four of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/four-of-cups-meaning-tarot-card-meanings" },
  { name: "Five of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/five-of-cups-meaning-tarot-card-meanings" },
  { name: "Six of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/six-of-cups-meaning-tarot-card-meanings" },
  { name: "Seven of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/seven-of-cups-meaning-tarot-card-meanings" },
  { name: "Eight of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/eight-of-cups-meaning-tarot-card-meanings" },
  { name: "Nine of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/nine-of-cups-meaning-tarot-card-meanings" },
  { name: "Ten of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/ten-of-cups-meaning-tarot-card-meanings" },
  { name: "Page of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/page-of-cups-meaning-tarot-card-meanings" },
  { name: "Knight of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/knight-of-cups-meaning-tarot-card-meanings" },
  { name: "Queen of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/queen-of-cups-meaning-tarot-card-meanings" },
  { name: "King of Cups", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/king-of-cups-meaning-tarot-card-meanings" },

  // Minor Arcana – Swords
  { name: "Ace of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/ace-of-swords-meaning-tarot-card-meanings" },
  { name: "Two of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/two-of-swords-meaning-tarot-card-meanings" },
  { name: "Three of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/three-of-swords-meaning-tarot-card-meanings" },
  { name: "Four of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/four-of-swords-meaning-tarot-card-meanings" },
  { name: "Five of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/five-of-swords-meaning-tarot-card-meanings" },
  { name: "Six of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/six-of-swords-meaning-tarot-card-meanings" },
  { name: "Seven of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/seven-of-swords-meaning-tarot-card-meanings" },
  { name: "Eight of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/eight-of-swords-meaning-tarot-card-meanings" },
  { name: "Nine of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/nine-of-swords-meaning-tarot-card-meanings" },
  { name: "Ten of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/ten-of-swords-meaning-tarot-card-meanings" },
  { name: "Page of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/page-of-swords-meaning-tarot-card-meanings" },
  { name: "Knight of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/knight-of-swords-meaning-tarot-card-meanings" },
  { name: "Queen of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/queen-of-swords-meaning-tarot-card-meanings" },
  { name: "King of Swords", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/king-of-swords-meaning-tarot-card-meanings" },

  // Minor Arcana – Pentacles
  { name: "Ace of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/ace-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Two of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/two-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Three of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/three-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Four of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/four-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Five of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/five-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Six of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/six-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Seven of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/seven-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Eight of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/eight-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Nine of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/nine-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Ten of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/ten-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Page of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/page-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Knight of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/knight-of-pentacles-meaning-tarot-card-meanings" },
  { name: "Queen of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/queen-of-pentacles-meaning-tarot-card-meanings" },
  { name: "King of Pentacles", upright: true, wiki: "https://labyrinthos.co/blogs/tarot-card-meanings-list/king-of-pentacles-meaning-tarot-card-meanings" }
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