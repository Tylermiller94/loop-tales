# Loop Tales

#### RPG Game, 10/11/2017

#### By Tyler Miller, Kristen Marie

## Description

A RPG game where a player can have a character, level them, gather items, and have a grand ol' time :)))))))))

##Specifications

* Player can input a name that is used as their characters name at character creation.
  * Expected input: "Tyler"
  * Expected output: "Tyler"
* Player name input cannot be left blank
  * Expected input: ""
  * Expected output: "please give your character a name"
* Player can choose a class for their character at character creation
  * Expected input: "Troublemaker"
  * Expected output: "Troublemaker"
* Player can only choose from pre-established classes [bookworm, comp. geek, hick, jock....]     
  * Expected input: "night-elf mohawk"
  * Expected output: "Please choose a valid class"
* Player can choose an age for their character at character creation
  * Expected input: "15"
  * Expected output: "15"
* Player can only choose a age between 10-15 at character creation
  * Expected input: "17"
  * Expected output: "please enter a valid age you, are far too old/young"
* Player can set initial attributes during character creation.
  * Expected input: Body: 4, Tech: 4, Heart: 4, Mind: 3
  * Expected output: testCharacter.body = 4
* Players chosen character will set skills based on character class
  * Expected input: "Troublemaker"
  * Expected output: "force", "sneak", "lead"
  * Expected secondary output: "lighter and cigarettes"
* Players can Items to their inventory
  * Expected input: "pickup BB gun"
  * Expected output: ["lighter and cigarettes", "BB gun"]
* Players can drop items from their inventory
  * Expected input: "drop BB gun"
  * Expected output: ["lighter and cigarettes"]
*  players can have their characters evade enemies
  * Expected input: "Evade"
  * Expected output: "the Spider-Tank is too fast to escape"
* Players can attack an enemy dealing damage to them
  * Expected input: "attack"
  * Expected output: "you deal 7 damage to the Spider-tank"
* Enemies will attack the player dealing damage to them"
  * Expected output: "the Spider-Tank deals 5 damage"

## Setup/Installation Requirements

## Known Bugs

## Support and contact details

## Technologies Used

### License

Copyright (c) 2016 **_{List of contributors or company name}_**
