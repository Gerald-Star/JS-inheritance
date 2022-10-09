//inheritance prototype methods

/*
In JS you use prototype objkect to hold properties that can be shared
with various other objects
*/
//using Object .create prototype method in inheritance
//
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
    // doEat: true
   
}

var eagle1 = Object.create(bird); // first create an object prototype
console.log("eagle1: ", eagle1);

//create objects to access it
console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 has feathers:", eagle1.hasFeathers);


//use Object.create to create another object fly. 
//with inheratance you can create several object proptypes

var fly1 = Object.create(bird);
console.log("fly1: ", fly1);

//assig 3 object prototypes to fly1
fly1.doEat = false;

console.log("fly1 can eat: ", fly1.doEat);
console.log("fly1 has wings:", fly1.hasWings);
console.log("fly1 can fly:", fly1.canFly);
console.log("fly1 has feathers: ", fly1.hasFeathers);

// var bird2 = {
//     hasWings: true,
// }

/*
It is possible to use object.create method access
an inheritance prototype.

But the best useful method is to use class
*/



//CLASSES OOP Inheritance EXERCISE




class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
console.log(mySecondTrain);
var myThirdTrain = new Train('white', true);
console.log(myThirdTrain)

 var train4 = new Train('red', false);
 console.log(train4);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('yellow', true);
console.log(train5);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
console.log(highSpeed1);

// train5.toggleLights(); // undefined
// train5.lightsStatus(); // Lights on? true
// highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.





//HOW TO CREATE CLASSES USING Keyword Class and adding new
// ADD Constructor to class and methods, create more classes with keyword new


/*
it is good to use class keyword to create OOP. 
uising class keyowrd helps using inheritance to alter
behaviour within child classes.

using class keyword makes codes easy to understand and read

you use the new keyword on Class to instantiate the 
Class object.
*/

//Define class keyword for student
//In between the curly braces, the first piece of code that you need to define is the constructor:
//The constructor will be used to build properties on the future object instance of the Train class.
//use the this to state the oject properties.
//The constructor is a special function in my Student class.

/*
N/B
notice that there is no function keyword. Also, notice 
that the keyword constructor is used to define this function.
 
You give your constructor function parameters inside an
  opening and closing parenthesis, just like in regular 
  functions. The names of parameters are color and lightsOn.  
*/

/*
N/B
inside the constructor function's body, 
assign the passed-in fail parameter's value to this.fail, 
and the passed-in pass parameter's value to this.pass.
*/ 

//This code allows me to build new instances of the Train class. 
//What does this this keyword here represent?

class Student {
    constructor (fail, pass){ //two properties that each object instance of the Student class should have at the time it gets instantiated: color and lightsOn.
        this.fail = fail;
        this.pass = pass;
    }

    // add methods to classes, and these methods will 
    //then be shared by all future instance objects of my Train class.

    examResults() {
        this.pass = !this.pass;
    }
    examsStatus() {
        console.log('pass?', this.pass);
    }
    examSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

//These mthods helps in building new instances for the class, using new keyword

//What does this this keyword here represent?
//build a new instance of the Student class, I need to use the following syntax:

var firstStudent = new Student('red', false);
console.log(firstStudent);
/*
Inside the parentheses, you need to pass values such as 
"red" and false, for example, meaning that the color 
property is set to "red" and the lightsOn property is set 
to false.

And, to be able to interact with the new object built this way, you need to assign it to a variable.
*/

//Just like any other variable, you can build more new Student
// now, for example, console log the myFirstTrain object:

//You can continue building more instances of the Student class. 

var secondStudent = new Student('green', true);
console.log(secondStudent);

var thirdStudent = new Student('white', true);
console.log(secondStudent);

//You can also add methods to classes, and these methods will then be 
//shared by all future instance objects of my Student class.



//NEXT STAGE IS POLYMORPHISM
/*
implement polymorphism using classes in JavaScript, by inheriting from the base class and then overriding the inherited behavior. To understand how this works, it is best to use an example.

In the code that follows, you will observe another class being coded, which is named HighSpeedTrain and inherits from the Train class.

This makes the Train class a base class, or the super-class of the HighSpeedTrain class. Put differently, the HighSpeedTrain class becomes the sub-class of the Train class, because it inherits from it.

To inherit from one class to a new sub-class, JavaScript provides the extends keyword, which works as follows

*/

//Example of polymorphism
//The only addition here is the extends keyword, and the name of the class from which the sub-class inherits.
//Now you can describe how the HighSpeedTrain works. Again, you can start by defining its constructor function:

class HighExamStudent extends Student {
    constructor (pupils, highExam, fail, pass) {
        super(fail, pass);
        this.pupils = pupils;
        this.highExam = highExam;

    }

}

// use of the super keyword.

//In JavaScript classes, super is used to specify what
// property gets inherited from the super-class in the sub-class
