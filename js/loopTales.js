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

}
