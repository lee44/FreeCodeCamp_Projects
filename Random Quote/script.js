var Quotes = [
  {
    quote: "I'll be back.",
    link:"https://www.youtube.com/embed/Ymc1eww7od0",
    author: "Arnold Schwartzneggar"
  },
  {
    quote:'I am Daenerys Stormborn of the House Targaryen. Daenerys Targaryen: The First of Her Name, the Unburnt, Queen of Meereen, Queen of the Andals and the Rhoynar and the First Men, Khalisee of the Great Grass Sea, Breaker of Chains and Mother of Dragons.',
    link:'https://www.youtube.com/embed/_j09iA0dxFg',
    author: 'Daenerys Targaryen'
  },
  {
    quote:'It\'s not who I am underneath, but what I do that defines me.',
    link:'https://www.youtube.com/embed/WW1a_cNKapY',
    author: 'Batman'
  },
  {
    quote:'Try not. Do – or do not. There is no try.',
    link:'https://www.youtube.com/embed/BQ4yd2W50No',
    author: 'Yoda'
  },
  {
    quote:'Maximum Effort.',
    author: 'Deadpool',
    link:'https://www.youtube.com/embed/W2FwDM5VGJ8'
  },
  {
    quote: 'Because he\'s the hero gotham deserves but not the one it needs right. now',
    author: 'Officer Gordon',
    link: 'https://www.youtube.com/embed/oL7PSlUuWPs'
  },
  {
  quote:'Space the final frontier. These are the voyages of the Starship Enterprise. There ongoing mission to explore strange new worlds, to seek out new lifeforms and new civilizations, to boldly go where no one has gone before.',
  author: 'Spoc',
  link:'https://www.youtube.com/embed/gAKiWvjfCiQ'
  }
]
$("#frame").hide();

$("#getQuote").on("click", function() {
  var rand = Math.floor(Math.random() * Quotes.length);
  $("#quote").text(Quotes[rand].quote)
  $("#author").text('--' + Quotes[rand].author);
  $("#frame").show();
  $('#frame').attr('src', Quotes[rand].link);
  
});