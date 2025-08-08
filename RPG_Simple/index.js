// Declaring and initialization of starting points[XP]
let XP = 0;
// Declaring and initialization of starting health[health]
let health = 100;
// Declaring and initialization of starting wealth[gold]
let gold = 50;
// Declaring and initialization of starting number of weapons[currentWeaponIndex]
let currentWeaponIndex = 0;
// Declaring of starting fights[fighting]
let fighting;
// Declaring of starting health of monster[monsterHealth]
let monsterHealth;
// Declaring and initialization of starting weapons having[inventory]
let inventory = ["stick"];
// Accessing the buttons under controls
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
// Accessing the stats
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
// Initializing buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
// Creating goStore function to handle all goToStore logic
function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
}
// Creating goCave function to handle all goToCave logic
function goCave() {

}
// Creating fightDragon function to handle all fightDragon logic
function fightDragon() {

}