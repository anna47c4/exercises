"use stricts";
const name = "Peter";
const animalType = "cat";
const animalName = "Mandu";
/* console log the following text by using template literals: My name is peter
I have a cat called Mandu */
console.log(`My name is ${name}, I have a ${animalType} called ${animalName}.`);

/* console log that will output the result on two lines - with a linebreak
before "I have a"-part */
console.log(`My name is ${name}, 
I have a ${animalType} called ${animalName}.`);

/* putting new things in the variable (own name and pet name) */

const myName = "Anna";
const myAnimal = "cat";
const myAnimalName = "Bixe";

console.log(
  `My name is ${myName}, I have a ${myAnimal} called ${myAnimalName}.`
);
