console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
  constructor(name, creatureType){
    this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }

  cry() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
  };
  puke() {
    this.health--;
    console.log('Bleeeeh! Sick!!!!!!');
    console.log(this.name + ' has current health = ' + this.health);
  };

  yawn(){
    this.restedness--;
    console.log('Yaaaawwwwn! So tired');
    console.log(this.name + ' has current restedness = ' + this.restedness);
  };
}   



//create new Tamagotchis
var samuel = new Tamagotchi
var samantha = new Tamagotchi

//test out your Tamagotchies below via console.logs
