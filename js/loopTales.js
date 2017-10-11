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
      this.items = ["dog named Plutten"];
    }else if(this.kidType === "Computer Geek") {
      this.skills = ["calculate", "program", "comprehend"];
      this.items = ["pocket calculator"];
    }else if(this.kidType === "Hick") {
      this.skills = ["force", "move", "tinker"];
      this.items = ["tractor"];
    }else if(this.kidType === "Jock") {
      this.skills = ["force", "move", "contact"];
      this.items = ["hockey stick"];
    }else if(this.kidType === "Popular Kid") {
      this.skills = ["lead", "charm", "contact"];
      this.items = ["hairspray bottle"];
    }else if(this.kidType === "Rocker") {
      this.skills = ["move", "charm", "empathize"];
      this.items = ["leather jacket"];
    }else if(this.kidType === "Troublemaker") {
      this.skills = ["force", "sneak", "lead"];
      this.items = ["lighter and cigarettes"];
    }else {
      this.skills = ["sneak", "investigate", "empathize"];
      this.items = ["razorblade"];
    }
  }
}
