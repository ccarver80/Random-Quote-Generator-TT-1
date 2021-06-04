/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Array to store objects containing certain poperties of the quotes
var quotes = [
  {
    quote: "Tis But A Scratch",
    source: "The Black Knight",
    citation: "Monty Python and the Holy Grail",
    year: "1975"
  },

  {
    quote: "Talk to me, Goose!",
    source: "Maverick",
    citation: "Top Gun",
    year: "1986",
    catagory: "Movies" // EXTRA CREDIT *Bonus Property*
  },

  {
    quote: "SSSSSSSSSSS",
    source: "Creeper",
    citation: "Minecraft",
    catagory: "Gaming" // EXTRA CREDIT *Bonus Property*

  },

  {
    quote: "Praying for the end of time...",
    source: "Meatloaf",
    citation: "Paradise By The Dashboard Light",
    year: "1977",
    catagory: "Music" // EXTRA CREDIT *Bonus Property*
  },

  {
    quote: "Gimme, gimme, symphonies",
    source: "Dan Black & Kid Cudi",
    citation: "Symphonies",
    year: 2009
  },



];


//picks a random quote from the quotes array
function getRandomQuote() {
  let randNum = Math.floor(Math.random() * quotes.length); // picks a random number between 0 and 1 and muliplys it by the length of the array and rounds down
  return quotes[randNum];
}

//EXTRA CREDIT BACKGROUND CHANGER *over 16 million possible colors!!*
      // simple random number function, will get a random number between 1 and 255 for the rgb value
      function randomNum() {
        return Math.floor(Math.random() * 255);
      };

      //creates a blank array to store rgb values in
        let num = [];


      function newClick() {
        for (let i = 1; i<=3; i++) { // will only loop 3 times
          if (num.length > 2) { // makes sure there is only 3 numbers in the array at all times
           num.shift(); //deletes 4th number from array if there is one
         }
          num.push(randomNum()); //each time of the for loop a random number gets pushed to "num array"
      };
      //changes background color to the 3 random numbers in array
      document.querySelector('body').style.backgroundColor = `rgb(${num[0]}, ${num[1]}, ${num[2]})`;

      }


function printQuote() {
  let randQuote = getRandomQuote(); // stores random quote into a varible

  let htmlString = `<p class='quote'>${randQuote.quote}</p>  <p class='source'>${randQuote.source}`

   // found "in" operator at https://dmitripavlutin.com/check-if-object-has-property-javascript/
   //checks to see if "randQuote" has a citation value
    if ('citation' in randQuote == true ) {
      htmlString += `<span class='citation'>${randQuote.citation}</span>`// adds citation value to htmlString
    }

    //checks to see if "randQuote" has a year value
    if ('year' in randQuote == true) {
      htmlString += `<span class='year'>${randQuote.year}</span>` //add year value to htmlString
    }

    if ('catagory' in randQuote == true) {
      htmlString += `<span class='catagory'>, ${randQuote.catagory}</span>` // adds BONUS property
    }

 //close the last <p>
  htmlString +=`</p>`;

  //adds the htmlString to the webpage
  document.getElementById('quote-box').innerHTML = htmlString;

  newClick();// changes background color on each click

  }



setInterval(printQuote,10000); //EXTRA CREDIT refreshes as if button was clicked every 10 secs (10,000 milliseconds)



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
