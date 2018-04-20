/*eslint-env browser*/
/*eslint-env browser*/
//STEP1
/*//Named Class
function Cat() {}
//Anonymous Class
var Dog = function () {
    "use strict";
};*/

//STEP2
/*//Named Class
function Cat() {}
var cat = new Cat();
//Anonymous Class
var Dog = function () {
    "use strict";
};
var dog = new Dog();*/

//STEP3
/*function Animal(){
    this.animalMethod = function () {
      "use strict";
        window.console.log("The Animal has been created");
    };
}
var animal = new Animal();
animal.animalMethod();*/

//STEP4
/*function Animal(vin) {
    "use strict";
    this.vin = vin;
}
var animal = new Animal("The Animal has been created");
window.console.log(animal.vin);*/

//STEP5
/*function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}
var dog = new Animal("Dogs", "Hybrid Dogs", "White", "60inches", "60inches");*/

//STEP6
/*function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}
var dog = new Animal("Dog", "Hybrid Dogs", "White", "60inches", "60inches");
var property;
for (property in dog) {
    window.console.log(property);
}*/

//STEP7
/*function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
this.speak = function () {
    "use strict";
    if (this.type === "Dog") {
        window.console.log("The " + dog.color + " dog is barking!");
    } else 
        {
        window.console.log("The " + cat.color + " cat is meowing!");  
        }
};
}
var dog = new Animal("Dog", "Hybrid Dogs", "White", "60inches", "60inches")
var cat = new Animal("Cat", "Korat Cat", "black", "30inches", "45inches");
dog.speak();
cat.speak();*/

//STEP8
/*function Animal(type, breed, color, height, length) {
    "use strict";
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;
    var checkType = function () {
        if (type === "Dog") {
            return dog;
        } else  {
            return cat;
        }
    }
        this.speak = function () {
        "use strict";
        checkType(); 
        window.console.log("The " + type + " has made a noise!");    
    };
}
    
        var dog = new Animal("Dog", "Hybrid Dogs", "White", "60inches", "60inches")
        var cat = new Animal("Cat", "Korat Cat", "black", "30inches", "45inches");
        dog.speak();*/
//STEP9

/*String.prototype.findWords = function (paragraph) {
	"use strict";
   var count = 0;
    count = (paragraph.match(/fox/g) || []).length;
    return count;
};
var paragraph = "foxes are swift and agile runners which live in family groups. A female fox is called a vixen, and the male is called a dog, foxes tails are multi-purpose organs. Their bushy tail helps them keep warm while they are sleeping in cold weather.It is also part of the animals food store for wintertime,foxes plump bushy tail is easily seen, and is used for sending signals to its family members. The tail is also used for balance while running.";
window.alert(paragraph.findWords(paragraph));*/

