'use strict';

// Character Class definition
class Character {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }
}

//REQUIRES: defender is a vlaid character
//MODIFIES: defender
//EFFECTS:  Carries out the attacks in accordance with the spec
Character.prototype.attackCharacter = function(defender) {
  var base_dmg = this.attack - defender.defense;
  //times 6 because we use floor function for even distribution of probabilities
  var rand_dmg = Math.floor(Math.random()*6);
  var tot_dmg = base_dmg + rand_dmg;
  
  //Kills or damages the defender
  if(tot_dmg >= defender.health)
    defender.health = 0;
  else
    defender.health -= tot_dmg;
  
  console.log(this.name + " does " + tot_dmg + " damage to " + defender.name); 
}

// Main Fight Logic
var player = new Character('Edward Norton', 100, 25, 20);
var enemy  = new Character('Tyler Durden', 100, 25, 20);
var round  = 1;

while (player.health && enemy.health) {
  runRound(round, player, enemy);
  round++;
  console.log('');
}

//REQUIERS: p1, p2 are valid characters
//MODIFIES: p1, p2
//EFFECTS:  Plays a round of the fight
function runRound(round, p1, p2) {
  console.log("----- Round " + round + " -----");

  //perform attacks
  p1.attackCharacter(p2);
  if(p2.health <= 0){
    endGame(p1, p2); //p2 lost
    return;
  }

  p2.attackCharacter(p1);
  if(p1.health <= 0){
    endGame(p2, p1); //p1 lost
    return;
  }

  //print health
  console.log(p1.name + " health: " + p1.health);
  console.log(p2.name + " health: " + p2.health);
}

function endGame(winner, loser) {
  console.log('\n======== GAME OVER ========');
  console.log(winner.name + " wins against " + loser.name + " with " + winner.health + " health remaining!");
  process.exit();
}
