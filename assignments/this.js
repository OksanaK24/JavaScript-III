/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - "this" refers to whole JS on this page, in this case the Object is whole JS content
* 2. Implicit Binding - "this" refers to the object that is "on the left of the dot" before function name
* 3. New Binding - "this" is binding "new" object with the object that we refer to
* 4. Explicit Binding - here we can bind function that is outside of the object with object by using certaing methods
    (call, apply, bind etc)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function addNums (num1, num2){
  console.log (this);
  return num1+num2;
}
addNums (28, 13);


// Principle 2

// code example for Implicit Binding

var student = {
  name: "Lesley",
  age: 35,
  pet: {
    type: "dog",
    name: "Tuzik"
  },
  shortIntro(){
    console.log (`Hello, my name is ${this.name}. I'm ${this.age}-years-old. I have ${this.pet.type} and his name is ${this.pet.name}`)
  }
}

student.shortIntro ();

// Principle 3

// code example for New Binding

function pet (type, name, age) {
  this.pettype = type;
  this.petname = name;
  this.age = age;
}

console.log(new pet ("cat", "Leo", "4 month"));



// Principle 4

// code example for Explicit Binding

function sayHi(country1, country2, country3){
  console.log (`Hi, my name is ${this.name}. I like to ${this.hobby}. During last year I visited ${country1}, ${country2}, ${country3} and few more`)
}

var person = {
  name: "Lesley",
  hobby: "travel"
}

let countries = ["Spain", "Italy", "France"]

sayHi.call(person, countries[0], countries[1], countries[2]);
sayHi.apply(person, countries);

const sayHiagain = sayHi.bind(person, ...countries);
sayHiagain();