import {Character, Velociraptor, HumanoidRobot, TRex, SpiderBot, Walker, SpiderTank, Enemy} from './../js/loopTales.js';


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

  it('will decrease in healthpoints when taking damage', function(){
    testCharacter.takeDamage(8);
    expect(testCharacter.healthPoints).toEqual(2);
  });

  it('will be dead if character health points is <= 0', function(){
    testCharacter.takeDamage(10);
    expect(testCharacter.isDead).toEqual(true);
  });

  it('will attempt to evade a enemy by comparing moveLevel', function(){
    let enemy = new Enemy("Spider-Tank", 20, 5, 5, "metal plating", 600);
    expect(testCharacter.evade(enemy.moveLevel)).toEqual(false);
  });
});

//enemy
describe("Enemy", function(){
  let testEnemy;

  beforeEach(function(){
    testEnemy = new Enemy("Spider-Tank", 20, 5, 5, "metal plating", 600);
  });

  it('will create an instance of an enemy', function(){
    expect(testEnemy.enemyType).toEqual("Spider-Tank");
    expect(testEnemy.healthPoints).toEqual(20);
    expect(testEnemy.moveLevel).toEqual(5);
    expect(testEnemy.atkDamage).toEqual(5);
    expect(testEnemy.lootItem).toEqual("metal plating");
    expect(testEnemy.expDrop).toEqual(600);
  });

  it('will decrease in healthPoints when taking damage', function(){
    testEnemy.takeDamage(10);
    expect(testEnemy.healthPoints).toEqual(10);
  });

  it('will be dead if health poins <= 0', function(){
    testEnemy.takeDamage(20);
    expect(testEnemy.isDead).toEqual(true);
  });
});
