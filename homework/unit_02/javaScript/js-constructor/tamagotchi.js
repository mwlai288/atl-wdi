console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType) {
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

    yawn() {
        this.restedness--;
        console.log('Yaaaawwwwn! So tired');
        console.log(this.name + ' has current restedness = ' + this.restedness);
    };
    start() {
        this.hungerTimer = setInterval(function () {
            name.cry();
        }, 6000);
        this.yawnTimer = setInterval(function () {
            name.yawn();
        }, 10000);
        this.sickTimer = setInterval(function () {
            name.puke();
        }, 25000);
    };
    stop() {
        console.log('Stop ' + this.name);
        clearInterval(this.hungerTimer);
        clearInterval(this.yawnTimer);
        clearInterval(this.sickTimer);

    };
}




//create new Tamagotchis
var samuel = new Tamagotchi
var samantha = new Tamagotchi

//test out your Tamagotchies below via console.logs
