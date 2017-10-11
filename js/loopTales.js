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

  setSkills(){
    if(this.kidType === "Bookworm") {
      this.skills = ["calculate", "investigate", "comprehend"];
    }else if(this.kidType === "Computer Geek") {
      this.skills = ["calculate", "program", "comprehend"];
    }else if(this.kidType === "Hick") {
      this.skills = ["force", "move", "tinker"];
    }else if(this.kidType === "Jock") {
      this.skills = ["force", "move", "contact"];
    }else if(this.kidType === "Popular Kid") {
      this.skills = ["lead", "charm", "contact"];
    }else if(this.kidType === "Rocker") {
      this.skills = ["move", "charm", "empathize"];
    }else if(this.kidType === "Troublemaker") {
      this.skills = ["force", "sneak", "lead"];
    }else {
      this.skills = ["sneak", "investigate", "empathize"];
    }
  }
}
