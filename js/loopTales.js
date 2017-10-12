export class Character {
  constructor(name, type, age){
    this.name = name;
    this.kidType = type;
    this.age = age;
  }

  kidTypes() {
    const kidTypes = ["Bookworm", "Computer Geek", "Hick", "Jock", "Popular Kid", "Rocker", "Troublemaker", "Weirdo"];
    return kidTypes;
  }

  setAttributes(body, tech, heart, mind){
    this.body = body;
    this.tech = tech;
    this.heart = heart;
    this.mind = mind;
  }

  setSkillsAndItem(){
    if(this.kidType === "Bookworm") {
      this.skills = ["calculate", "investigate", "comprehend"];
      this.inventory = ["dog named Plutten"];
    }else if(this.kidType === "Computer Geek") {
      this.skills = ["calculate", "program", "comprehend"];
      this.inventory = ["pocket calculator"];
    }else if(this.kidType === "Hick") {
      this.skills = ["force", "move", "tinker"];
      this.inventory = ["tractor"];
    }else if(this.kidType === "Jock") {
      this.skills = ["force", "move", "contact"];
      this.inventory = ["hockey stick"];
    }else if(this.kidType === "Popular Kid") {
      this.skills = ["lead", "charm", "contact"];
      this.inventory = ["hairspray bottle"];
    }else if(this.kidType === "Rocker") {
      this.skills = ["move", "charm", "empathize"];
      this.inventory = ["leather jacket"];
    }else if(this.kidType === "Troublemaker") {
      this.skills = ["force", "sneak", "lead"];
      this.inventory = ["lighter and cigarettes"];
    }else {
      this.skills = ["sneak", "investigate", "empathize"];
      this.inventory = ["razorblade"];
    }
  }

  addItem(item){
    this.inventory.push(item);
  }

  dropItem(item){
    let itemIndex = this.inventory.indexOf(item);
    this.inventory.splice(itemIndex, 1);
  }
}


export class Velociraptor {
  constructor(){
    this.healthPoints = 7;
    this.moveLevel = 5;
    this.atkDamage = 3;
    this.lootItem = "velociraptor claw";
    this.expDrop = 200;
    this.isDead = false;
  }

  takeDamage(value) {
    this.healthPoints -= value;
    if(this.healthPoints <= 0) {
      this.isDead = true;
    }
  }
}

export class HumanoidRobot {
  constructor(){
    this.healthPoints = 8;
    this.moveLevel = 3;
    this.atkDamage = 2;
    this.lootItem = "robot arm";
    this.expDrop = 75;
    this.isDead = false;
  }

  takeDamage(value) {
    this.healthPoints -= value;
    if(this.healthPoints <= 0) {
      this.isDead = true;
    }
  }
}

export class TRex{
  constructor(){
    this.healthPoints = 15;
    this.moveLevel = 2;
    this.atkDamage = 5;
    this.lootItem = "giant tooth";
    this.expDrop = 400;
    this.isDead = false;
  }

  takeDamage(value) {
    this.healthPoints -= value;
    if(this.healthPoints <= 0) {
      this.isDead = true;
    }
  }
}
