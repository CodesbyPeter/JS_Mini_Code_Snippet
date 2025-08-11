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
// Weaponry
const weapons = [
    {
    name: "stick",
    power: 5
},
{
    name: "dagger",
    power: 30
},
{
    name: "claw hammer",
    power: 50
},
{
    name: "sword",
    power: 100
}
];
// Locations
const locations = [
    {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  }
];
// Initializing buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
// Creation of function to refractor repetitions in locations
function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}
// Creating goTown function to handle all goingToTown logic
function goTown() {
  update(locations[0]);
}
// Creating goStore function to handle all goToStore logic
function goStore() {
  update(locations[1]);
}
// Creating goCave function to handle all goToCave logic
function goCave() {
  update(locations[2]);
}
// Creating fightDragon function to handle all fightDragon logic
function fightDragon() {

}
// Creating buyHealth function to handle all healthBuying logic
function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}
// Creating buyWeapon function to handle all weaponBuying logic
function buyWeapon() {
  if (currentWeaponIndex < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}
// Creating sellWeapon function to handle all weaponSelling logic
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}
// Creation of functions to be used in the cave object
function fightSlime() {
  
}

function fightBeast() {
  
}