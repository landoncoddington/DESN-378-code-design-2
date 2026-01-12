// puts the h1 in a 'container' so you can manipulate it
const myHeading = document.querySelector("h1");
//changes what the heading says so now it says "Hello world!"
myHeading.textContent = "Hello world!";


// this code makes the image change when clicked
const myImage = document.querySelector("img");
// listens for clicks on the image
myImage.addEventListener("click", () => {
    //this gets the current source of the image
  const mySrc = myImage.getAttribute("src");
  // this changes the source of the image based on what it currently is
  if (mySrc === "images/firefox-icon.png") {
// changes the image to fox1.png
    myImage.setAttribute("src", "images/fox1.jpg");
  } else {
    // changes the image to fox2.png
    myImage.setAttribute("src", "images/fox2.jpg");
  }
});

// this code makes the button change the heading when clicked
let myButton = document.querySelector("button");

// function to set the user name
function setUserName() {
    // prompts the user to enter their name
  const myName = prompt("Please enter your name.");
  // saves the name to local storage
  localStorage.setItem("name", myName);
  // changes the heading to include the user's name
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

// checks if a name is already stored
if (!localStorage.getItem("name")) {
    // if not, set the user name
  setUserName();
  // if a name is stored, retrieve it and update the heading
} else {
    // gets the stored name from local storage
  const storedName = localStorage.getItem("name");
  // updates the heading with the stored name
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// when the button is clicked, call the setUserName function
myButton.addEventListener("click", () => {
// calls the function to set a new user name
  setUserName();
});


/*
  SUMMARY:
  This file does two things:
  1. On click the image will change between two pictures of my choice
  2. The H1 on the top of the page will be custom based on the user of the page

  The key pattern I learned: Using event listeners to respond to user interactions helps to personalize the web experience.
*/