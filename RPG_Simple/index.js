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
// Monsters
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
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
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
  }
];
// Initializing buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
// Creation of function to refractor repetitions in locations
function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
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
  fighting = 0;
  goFight();
}

// Creation of functions to be used in the cave object
function fightBeast() {
  fighting = 1;
  goFight();
}
// Creating fightDragon function to handle all fightDragon logic
function fightDragon() {
  fighting = 2;
  goFight();
}

// Creating goFight function to handle all monsterFighting logic
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

// Creating attack function to handle attacking logics
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
  health -= monsters[fighting].level;
  monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * XP) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    defeatMonster();
    if (fighting === 2) {
        winGame();
    } else {
      defeatMonster();
    }
  }
}
// Creating dodge function to handle dodging logics
function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

// Creating defeatMonster function to handle monsterBeingDefeated logics
function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  XP += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = XP;
  update(locations[4]);
}

// Creating lose function to handle oneLoosing logics
function lose() {
  update(locations[5]);
}

// Creating winGame function to handle winning logics
function winGame() {
  update(locations[6]);
}

// Creating a restart function to handle allRestartingGameAgain logics
function restart() {
  XP = 0;
  health = 100;
  gold = 50;
  currentWeaponIndex = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = XP;
  goTown();
}