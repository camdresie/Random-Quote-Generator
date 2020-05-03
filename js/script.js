
/* An array of quotes, including the quote, who said it (source), where it was said (citation),
the year it was said, and a tag to classify it. */

const quotes = [
  {
      quote: "Lady Gaga is my name. If you know me, and you call me Stefani, you don't really know me at all.",
      source: "Lady Gaga",
      citation: "Glamour Magazine",
      year: 2013,
      tag: "Inspirational"
  },
  {
      quote: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
      source: "Kobe Bryant",
      citation: "Interview",
      year: 2005,
      tag: "Motivational"
  },
  {
      quote: "Trust in dreams, for in them is hidden the gate to eternity.",
      source: "Kahlil Gibran",
      citation: "Selected Works",
      year: 1915,
      tag: "Motivational"
  },
  {
      quote: "Life is really simple, but we insist on making it complicated.",
      source: "Confucius",
      citation: "Journal",
      year: "5th Century",
      tag: "Life"
  },
  {
      quote: "Good friends, good books and a sleepy conscience: this is the ideal life.",
      source: "Mark Twain",
      citation: "Journal",
      year: 1888,
      tag: "Life"
  },
  {
      quote: "Never tell people how to do things. Tell them what to do and they will surprise you with their ingenuity.",
      source: "George S. Patton",
      citation: "Interview",
      year: 1925,
      tag: "Wisdom"
  },
  {
      quote: "Whatever you do in life, surround yourself with smart people who'll argue with you.",
      source: "John Wooden",
      citation: "Interview",
      year: 1995,
      tag: 'Inspirational'
  },
  {
      quote: "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.",
      source: "Audrey Hepburn",
      citation: "Interview",
      year: 1975,
      tag: "Beauty"
  },
  {
      quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
      source: "Barack Obama",
      citation: "Speech",
      year: 2008,
      tag: "Change"
  },
  {
      quote: "Change your opinions, keep to your principles; change your leaves, keep intact your roots.",
      source: "Victor Hugo",
      citation: "Journal",
      year: 1855,
      tag: 'Change'
  }
];

/* This function generates a random number and then uses that random number to 
select an object from the quotes array. */

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/*  This function uses the getRandomQuote function and assembles a string made up of a quote and relevant information
 about that quote and then inserts the string into the 'quote-box' <div> of index.HTML.
 This function also changes the color of the webpage each time a new quote is generated. The <style> tag targets the 
 body element on the main page, thereby changing the page background color. */

const printQuote = () => {
  let randomQuote = getRandomQuote();
  let red = Math.floor(Math.random() * 257);
  let green = Math.floor(Math.random() * 257);
  let blue = Math.floor(Math.random() * 257);
  let newBackground = 
      `<style>body {
        background-color: rgb(${red}, ${green}, ${blue})
      }
      </style>`;  
  let HTML = 
    `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    HTML += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    HTML += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tag) {
    HTML += `<span class="tag">, Category: ${randomQuote.tag}</span>`;
  }
  HTML += `</p>`;
  HTML += newBackground;
  return document.getElementById('quote-box').innerHTML = HTML;
}


//  The below code calls a random quote every 10 seconds, regardless of user input.

setInterval(printQuote, 10000);


// The code below writes the relevant JavaScript to the HTML file so that it can be displayed. 

document.getElementById('load-quote').addEventListener("click", printQuote, false);