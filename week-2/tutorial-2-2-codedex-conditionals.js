/ ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: Landon Coddington
// Date: 1-21-2026
// ============================================
​
// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------
​let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

3- tails 
2-heads
// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------
    let hour = 9
if (hour < 12) {
  console.log("Good Morning")
}
// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// --------------------------------------------
let hour = 15
if (hour < 12) {
  console.log("Good Morning")
} else {
  console.log ("Good Afternoon")
}
// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------
let ph = 7
if (ph > 7) {
  console.log("Basic")
} else if (ph < 7) {
  console.log("Acidic")
} else {
  console.log("Neutral")
}
// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------
let randomNum = Math.floor(Math.random() * 9);
let answer = "";

if (randomNum === 0) {
  answer = "It is certain.";
} else if (randomNum = 1) {
  answer = "Ask again later.";
} else if (randomNum = 2) {
  answer = "Don't count on it.";
} else if (randomNum = 3) {
  answer = "Yes, definitely.";
} else if (randomNum = 4) {
  answer = "My sources say no.";
} else if (randomNum = 5) {
  answer = "Outlook good.";
} else if (randomNum = 6) {
  answer = "Very doubtful.";
} else if (randomNum = 7) {
  answer = "Signs point to yes.";
} else {
  answer = "Reply hazy, try again.";
}

console.log("Question: Will I ace the test?");
console.log("Magic 8 Ball Answer: " + answer);  
// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------

let aqi = 46 
if (aqi < 50) {
  console.log("good")
} else if (aqi > 100) { 
  console.log("Unhealthy(sensitive groups)")
} else if (aqi > 150) {
  console.log("Unhealthy")
} else if (aqi > 200) {
  console.log("Very Unhealthy")
} else if (aqi >300) {
  console.log("Hazardous")
}
// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------
let playerPick = 2
let computerPick = Math.floor(Math.random() * 3);

if (playerPick === computerPick) {
  console.log("It's a tie!");
} else if (
  (playerPick === 0 && computerPick === 2) ||
  (playerPick === 1 && computerPick === 0) ||
  (playerPick === 2 && computerPick === 1)
) {
  console.log("Player wins!");
} else {
  console.log("Computer wins!");
}