/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Aiming to achieve exceed expectations grade

// Creates an array of quotes

const quotes = [
  {
    quote: "If you fail to plan, you are planning to fail",
    source: "Benjamin Franklin",
    nationality: ", American" // EXCEED EXPECTATIONS - added an additional property
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm",
    source: "Winston Churchill",
    nationality: ", English"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    source: "Steve Jobs",
    year: 2005,
    nationality: ", American"
  },
  {
    quote: "The biggest risk is not taking any risk",
    source: "Mark Zuckerberg",
    citation:"Interview at Y Combinator's Startup School",
    year: 2011,
    nationality: ", American"
  },
  {
    quote: "A goal is a dream with a deadline",
    source: "Napoleon Hill",
    nationality: ", American"
  },
]

// Creates a random number and displays the quote assigned to that number

function getRandomQuote () {
  const RandomNumber = Math.floor(Math.random () * quotes.length);
  return quotes[RandomNumber];
}

// EXCEED EXPECTATIONS - changes the background to a random colour

function getbackgroundColour () {
  const getrandomValue = () => Math.floor(Math.random()*256);
  const colour = `rgb(${getrandomValue()},${getrandomValue()}, ${getrandomValue()})`;
  document.querySelector("body").style.backgroundColor=colour;
  return;
}

// EXCEED EXPECTATIONS - changes the background colour and the printed quote every 10 seconds

function quoteTimer () {
setInterval(getbackgroundColour,10000);
setInterval(printQuote,10000);
}


// The function updates the current printed quote with a new random quote from the array

function printQuote () {
  const quote = getRandomQuote();
  let html = `
  
    <p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}
  `;

  if(quote.citation) {
    html += `<span class="citation"> ${quote.citation} </span> `;
  }

  if(quote.year) {
    html += `<span class="year"> ${quote.year} </span> `;
  }
  
  if(quote.nationality) {
    html += `<span class="nationality"> ${quote.nationality} </span> `;
  }

  html += "</p>"; //Addition of the final paragraph closing tag

  document.getElementById('quote-box').innerHTML = html; 

  getbackgroundColour();
};

quoteTimer ();
getbackgroundColour();
printQuote ();



document.getElementById('load-quote').addEventListener("click", printQuote, false);