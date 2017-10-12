import {Character, Velociraptor, HumanoidRobot} from './../js/loopTales.js';


describe("Character", function(){
  let testCharacter;
  beforeEach(function(){
    testCharacter = new Character("Tyler", "Troublemaker", 15);
  });

  it('will create a instance of a character with a name the user desires', function(){
    expect(testCharacter.name).toEqual("Tyler");
  });

  it('will create a instance of a character with a designated class the user desires', function() {
    expect(testCharacter.kidType).toEqual("Troublemaker");
  });

  it('will create a instance of a character with an age', function(){
    expect(testCharacter.age).toEqual(15);
  });

  it('will return a list of kids types', function() {
    expect(testCharacter.kidTypes()).toEqual(["Bookworm", "Computer Geek", "Hick", "Jock", "Popular Kid", "Rocker", "Troublemaker", "Weirdo"]);
  });

  it('will allow user to set initial character attributes', function(){
    testCharacter.setAttributes(4,4,4,3)
    expect(testCharacter.body).toEqual(4);
  });

  it('will set skills and initial inventory to player character based upon character class', function(){
    testCharacter.setSkillsAndItem();
    expect(testCharacter.skills).toEqual(["force", "sneak", "lead"]);
    expect(testCharacter.inventory).toEqual(["lighter and cigarettes"]);
  });

  it('will add item to player inventory', function(){
    testCharacter.setSkillsAndItem();
    testCharacter.addItem("BB gun");
    expect(testCharacter.inventory).toEqual(["lighter and cigarettes", "BB gun"]);
  });

  it('will drop an item from a players inventory', function(){
    testCharacter.setSkillsAndItem();
    testCharacter.addItem("BB gun");
    testCharacter.dropItem("BB gun");
    expect(testCharacter.inventory).toEqual(["lighter and cigarettes"]);
  });
});

describe("Velociraptor", function(){
  let testRaptor;

  beforeEach(function(){
    testRaptor = new Velociraptor();
  });

  it('will create an instance of a Velociraptor', function(){
    expect(testRaptor.healthPoints).toEqual(7);
    expect(testRaptor.moveLevel).toEqual(5);
    expect(testRaptor.atkDamage).toEqual(3);
    expect(testRaptor.lootItem).toEqual("velociraptor claw");
    expect(testRaptor.expDrop).toEqual(200);
  });

  it('will decrease health points when taking damage', function(){
    testRaptor.takeDamage(2);
    expect(testRaptor.healthPoints).toEqual(5);
  });

  it('will be dead if health points are <= 0', function(){
    testRaptor.takeDamage(7);
    expect(testRaptor.isDead).toEqual(true);
  });
});

describe("HumanoidRobot", function(){
  let testRobot;

  beforeEach(function(){
    testRobot = new HumanoidRobot();
  });

  it('will create an instance of a HumanoidRobot', function(){
    expect(testRobot.healthPoints).toEqual(8);
    expect(testRobot.moveLevel).toEqual(3);
    expect(testRobot.atkDamage).toEqual(2);
    expect(testRobot.lootItem).toEqual("robot arm");
    expect(testRobot.expDrop).toEqual(75);
  });

  it('will decrease health points when taking damage', function(){
    testRobot.takeDamage(2);
    expect(testRobot.healthPoints).toEqual(6);
  });

  it('will be dead if health points are <= 0', function(){
    testRobot.takeDamage(8);
    expect(testRobot.isDead).toEqual(true);
  });
});

describe("TRex", function(){
  let testRex;

  beforeEach(function(){
    testRex= new TRex();
  });

  it('will create an instance of a TRex', function(){
    expect(testRex.healthPoints).toEqual(15);
    expect(testRex.moveLevel).toEqual(2);
    exoect(testRex.atkDamage).toEqual(5);
    expect(testRex.lootItem).toEqual("");
    expect(testRex.expDrop).toEqual(400);
  });

  it('will decrease health points qhwn taking damage', function(){
    testRex.takeDamage(5);
    expect(testRex.healthPoints).toEqual(10);
  });

  it('will be dead if health points <= 0', function(){
    testRex.takeDamage(15);
    expect(testRex.isDead).toEqual(true);
  });
})
