console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchie
    constructor (name, creatureType){
    this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
}

cry() {
    this.foodInTummy --;
    console.log('"WAHH!!!"');

puke() {
    this.foodInTummy --;
}

restedness() {
    this.restedness ++;
}
}

//create new Tamagotchis
var Samuel = new Tamagotchie
var Samantha = new Tamagotchie

//test out your Tamagotchies below via console.logs
