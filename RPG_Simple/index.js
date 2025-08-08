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
// Creating goTown function to handle all goingToTown logic
function goTown() {
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says Store.";
}
// Creating goStore function to handle all goToStore logic
function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You enter the store.";
}
// Creating goCave function to handle all goToCave logic
function goCave() {

}
// Creating fightDragon function to handle all fightDragon logic
function fightDragon() {

}
// Creating buyHealth function to handle all healthBuying logic
function buyHealth() {

}
// Creating buyWeapon function to handle all weaponBuying logic
function buyWeapon() {
  
}