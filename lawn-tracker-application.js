/**
 * App name: Lawn Tracker
 * Author: Nireesha
 * Purpose: An application developed using JavaScript to help homeowners track and manage their yard.
 */

/* PSEUDOCODE:
1. Set up variables for the user, weather, and how long it's been since the last yard work.
2. Create a "Mowing Helper" check: See if it's raining, too hot, or if the grass is actually long enough to cut.
3. Make a list of all the plants in the yard and add a new one user got.
4. Run a "Watering Check" which goes through the whole list of plants.
5. For each plant, check if it's been too many days since it was last watered or fertilized.
*/

//SKILL 1: Values, Data Types, and Operations

let userName = "Nireesha";
let temperature = 82;
let isRaining = false;
let daysSinceMowed = 10;
let daysSinceWatered = 4;
let wateringNeed = 3; // I want to water every 3 days
let daysSinceFertilized = 45;
let fertilizerNeed = 60; // Goal is to fertilize every 60 days
let daysOverdue = daysSinceMowed - 7; // calculating to see how many days late the mow is

//SKILL 2: Stringing Characters Together

// Just a simple welcome message for the console
console.log("========================================");
console.log(`   WELCOME TO ${userName.toUpperCase()}'S LAWN TRACKER   `);
console.log("========================================");

console.log("Checking the yard for " + userName + "...");
//SKILL 3: Control Structures and Logic

// MOWING HELPER: Deciding if today is a good day to get the mower out
if (isRaining) {
  console.log("It's raining, so definitely don't mow today.");
} else if (temperature > 90) {
  console.log("It's way too hot to mow right now.");
} else if (daysSinceMowed > 7) {
  console.log(
    "You're " +
      daysOverdue +
      " days late to mow. You should probably do it today!",
  );
} else {
  console.log("The grass isn't that long yet. You can relax.");
}

//SKILL 4: Building Arrays

// This is my master list of all the plants I'm keeping track of
let gardenList = ["Hydrangeas", "Boxwood Shrubs", "Fescue Grass"];

//SKILL 5: Using Arrays

// Adding a new plant to the end of my list and checking the total count
gardenList.push("Lavender");
console.log(`I'm currently tracking ${gardenList.length} different plants.`);

//SKILL 6: Working With Loops

// WATERING CHECK: Going through the list to see what needs water
console.log("--- Daily Yard Check ---");

for (let i = 0; i < gardenList.length; i++) {
  // Checking the timing logic inside the loop for watering
  if (daysSinceWatered >= wateringNeed) {
    console.log(
      `The ${gardenList[i]} looks thirsty! It's been ${daysSinceWatered} days.`,
    );
  } else {
    console.log(`The ${gardenList[i]} is doing fine for now.`);
  }
  // Logic to check for fertilizer
  if (daysSinceFertilized >= fertilizerNeed) {
    console.log(
      "Notice: The " + gardenList[i] + " could use some fertilizer soon!",
    );
  }
}

console.log("All done with the yard check!");
