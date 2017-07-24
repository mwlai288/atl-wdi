console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi
    constructor (name, creatureType){
    this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
}

cry() {
    this.foodInTummy --;
    console.log("The Tamagotchi is crying!!! WAAAH!!");
    console.log('current food in tummy: ' + this.foodInTummy);
  }
}

puke() {
    this.foodInTummy --;
    console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
}

yawn() {
    this.restedness --;
    console.log(this.name + ' has a current restedness of ' + this.restedness);
}



//create new Tamagotchis
var samuel = new Tamagotchi
var samantha = new Tamagotchi

//test out your Tamagotchies below via console.logs
