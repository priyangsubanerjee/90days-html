// declaration of an array 'quotes' that contains 7 quotes, index starts from 0 ends at 6

const quotes = [
  "You can get everything in life you want if you will just help enough other people get what they want.",
  "Inspiration does exist, but it must find you working.",
  "Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.",
  "Show up, show up, show up, and after a while the muse shows up, too.",
  "Don't bunt. Aim out of the ballpark. Aim for the company of immortals.",
  "I have stood on a mountain of no’s for one yes.",
  "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.",
];

// get a reference of the button with id 'motivate' and store it in a variable 'motivateButton'

const motivateButton = document.getElementById("motivate");

// add a click event listener to the button 'motivateButton' and do something when the button is clicked

motivateButton.addEventListener("click", () => {
  // this code will run when the button is clicked

  const randomIndex = Math.floor(Math.random() * quotes.length); // generate a random number between 0 and 6
  const randomQuote = quotes[randomIndex]; // get the quote at the random index
  alert(randomQuote); // show the quote in an alert box
});
