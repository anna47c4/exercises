"use strict";

/* function exercise 1A */
const firstName = "Anna";
const lastName = "Lester";
sayHello(firstName, lastName);
function sayHello() {
  console.log(`Hello ${firstName}`);
}

/* function exercise 1B - what happens if */

//1. The function is called on an earlier line than it is created?
//then the firstName can't be accessed and you will get an error
//2. The function is called with a variable called myName?
//then you'll get that myName is not defined
//3. There is another valuable outside the function that is called firstName?
//then you'll get an error because you redeclare the const firstName
//4. The function is called without any parameter?
//then it still works
//5. The function is called with firstName and lastName?
//then it works with firstName still, but you have to add to the console message also
//6. And if the function is called with lastName before firstName?
//Still works

/* function exercise 2A */
const animalType = "cat";
const animalName = "Bix";
presentPet(animalType, animalName, firstName);
function presentPet() {
  console.log(
    `My name is ${firstName}, and I have a ${animalType}, called ${animalName}`
  );
}

/* function exercise 2B - what happens if */

//1. The function is called with variables named the same as the parameters?
//then it works
//2. The function is called with variables called something different?
//then you'll get that the parameters are not defined
//3. The function is called with strings?
//then it still works without errors
//4. The function is called with a mix og strings and variables?
//then it still works
//5. The function is called with firstName and lastName?
//then it works with firstName still, but you have to add to the console message also
//6. The function is called with variables, but in a different order?
//Still works

/* More experiments */
//Can you declare a variable in a function with the same name as the parameter?
//- YES
//which one is used?
//- The one you declare in the function
const animalAge = "7";

detailsPet(animalAge);

function detailsPet() {
  const animalAge = "5";
  console.log(`${animalAge}`);
}

//Can you have a parameter with the same name as a global variable?
//but still get a different value? - yes, we got that in the example above.

//Can you change the value of a paramter inside the function? - Yes, now the firstName is Daniel
function sayHello() {
  const firstName = "Daniel";
  console.log(`Hello ${firstName}`);
}

//can you change the value of global variables from inside a function?
//Yes, we did that in the example above
