# fight-club
For this challenge, you will create a JavaScript game that simulates a fight between two characters.

The fight is composed of multiple rounds, which run repeatedly while both characters have health remaining. In each round, characters will take turns attacking each other. The game ends when one character's health falls below zero.

![img](https://cdn2.vox-cdn.com/thumbor/wSQrj3Ricbj3dlNK5lA_w83LBUQ=/cdn0.vox-cdn.com/uploads/chorus_asset/file/4185735/nVv7paM.0.gif)
> deal with it :sunglasses:

## Project Guidelines
- We recommend using [Node.js](https://nodejs.org/en/) to run JavaScript on your machine.
- Fork this repository and implement the `attackCharacter` and `runRound` functions in `fight.js`.
- Once complete, commit your code and submit a pull request on this repository
- We'll review your code and get back to you!
- If you are unable to complete the project within the given timeframe, please let us know what your next steps would be if you had more time.

## Characters
Each character is represented by the `Character` class, where each character has properties for their name, health, attack and defense:
```js
class Character {
  constructor(name, health, attack, defense) {
    this.name    = name;    // string
    this.health  = health;  // number
    this.attack  = attack;  // number
    this.defense = defense; // number
  }
}
```

## Attacking
The character class also has a prototype function that allows an instantiated character to attack another character:

```js
Character.prototype.attackCharacter = function(defender) {}
```

You will be implementing the `attackCharacter` prototype function. It accepts a `Character` object as the `defender`, and must satisfy these requirements:
  - It determines the base damage, equal to the  difference between attacker's attack and the  defenders defense.
  - It determines the random damage, equal to a  random integer between 0 and 5, chosen using the `Math` library
  - It decrements the total damage from the  `defender`'s health
  - It logs `<attackerName> does <totalDamage> damage to <defenderName>` to the console

Example `attackCharacter` output:
```
Edward Norton does 7 damage to Tyler Durden
```

## Rounds
In addition to the `attackCharacter` function, you must also implement the `runRound` function.  The `runRound` function is the core component of the fight, and contains turn logic.

```js
function runRound(round, p1, p2) {}
```

It accepts three arguments, the current round, and the two character objects.

The `runRound` function must satisfy the following requirements:
  - It logs `----- Round <round> -----` at the beginning of the round
  - It attacks `p2` with `p1`
  - It attacks `p1` with `p2`
  - It checks if the game has ended after each attack
  - It will log each player's health in the format `<name> health: <health>` at the end of the round

Example `runRound` output (including `attackCharacter` output):
```
----- Begin Round 13 -----
Edward Norton does 6 damage to Tyler Durden
Tyler Durden does 8 damage to Edward Norton
Edward Norton health: 9
Tyler Durden health: 4
```

## Ending the game
Once a character is out of health, the `endGame` function is called:
```js
function endGame(winner, loser) {}
```
The `endGame` function accepts two character objects, and logs end-of-game info to the console. You do NOT need to implement `endGame` - it has been written for you.

Example `endGame` output:
```
======== GAME OVER ========
Edward Norton wins against Tyler Durden with 9 health remaining!
```
