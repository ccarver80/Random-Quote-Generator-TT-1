/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Array to store objects containing certain poperties of the quotes
let quotes = [

  {
    quote: "Am I weird? Yeah. But so what? Everybody's weird.",
    source: "Steven King",
    citation: "Differnt Seasons",
    image: "imgs/steven.jpg"
  },

  {
    quote: "It's over Anakin, I have the high ground.",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars Episode III Revenge Of The Sith ",
    image: "imgs/Obiwan.jpg"
  },


  {
    quote: "Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.",
    source: "Tyrion Lannister",
    citation: "Game Of Thrones",
    image: "imgs/GOT.jpeg"
  },

  {
    quote: "She Turn Me Into A Newt..... Well I Got Better",
    source: "Random Villager",
    citation: "Monty Python and the Holy Grail",
    year: "1975",
    image: "imgs/newt.jpg"

  },

  {
    quote: "You Miss 100% Of The Shots You Dont Take - Wayne Gretzky",
    source: "Michael Scott",
    citation: "The Office",
    image: "imgs/office_wayne.jpeg"
  },

  {
    quote: "Tis But A Scratch",
    source: "The Black Knight",
    citation: "Monty Python and the Holy Grail",
    year: "1975",
    image: "imgs/black_knight.png"
  },

  {
    quote: "Talk to me, Goose!",
    source: "Maverick",
    citation: "Top Gun",
    year: "1986",
    catagory: "Movies",
    image: "imgs/maverick.jpg" // EXTRA CREDIT *Bonus Property*
  },

  {
    quote: "SSSSSSSSSSS",
    source: "Creeper",
    citation: "Minecraft",
    catagory: "Gaming",
    image: "imgs/creeper.jpg" // EXTRA CREDIT *Bonus Property*

  },

  {
    quote: "Praying for the end of time...",
    source: "Meatloaf",
    citation: "Paradise By The Dashboard Light",
    year: "1977",
    catagory: "Music", // EXTRA CREDIT *Bonus Property*
    image: "imgs/meatloaf.jpeg"
  },

  {
    quote: "Gimme, gimme, symphonies",
    source: "Dan Black & Kid Cudi",
    citation: "Symphonies",
    year: 2009,
    image: "imgs/danBlack.jpg"
  },



];


/*************
**************/


//picks a random quote from the quotes array

let quotenumber;// varible for which quote to get

function getRandomQuote() {
  let randNum = Math.floor(Math.random() * quotes.length); // picks a random number between 0 and 1 and muliplys it by the length of the array and rounds down


  if (randNum == quotenumber) {
    quotenumber= randNum + 1;
  } else {                    // if else statment to make sure there is no repeated quotes
    quotenumber = randNum;
  }
  return quotes[quotenumber];
}

/*************
**************/


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

      /*************
      **************/



// this function is what changes the innerHTML each time the button is clicked
function printQuote() {
  let randQuote = getRandomQuote(); // stores random quote into a varible

  let imgString = ""; // create empty img varible for later

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

  if ('image' in randQuote == true) {
   imgString += `<img class="imgs" src="${randQuote.image}">`
  }

  //adds the htmlString to the webpage
  document.getElementById('quote-box').innerHTML = htmlString;

  //adds the imgString to the website
  document.getElementById('images').innerHTML = imgString;

  newClick();// changes background color on each click

  }

  /*************
  **************/

// button click event
document.getElementById('load-quote').addEventListener("click", printQuote, false);


setInterval(printQuote,10000); //EXTRA CREDIT refreshes as if button was clicked every 10 secs (10,000 milliseconds)
