/* OBJECTS EXERCISES */
//adding properties
/* let person1 = {
  firstName: "Peter",
  age: 43,
  student: false,
};

person1.lastName = "Tolstrup"; */
/* console.log(person1.lastName); */

/* how can we see the entire object? (All the propeties) */
/* console.log(person1); */

//Removing properties
/* person1.lastName = undefined;
console.log(person1.lastName);
console.log(person1); */

/* console.log("person1.lastName:", person1.lastName); //does the object still have a property called 'lastName'? 
console.log("person1.middleName:", person1.middleName); //gives the same output as the one above - 'undefined'
 */
//we can remove a property completely
/* delete person1.lastName;
console.log(person1.lastName);
console.log(person1); */

//so what is the difference between an undefined variable and deleting?
//when we delete it goes away from the object, but when we have an undefined object, it still appears

/* Modify the object  */
/* person1.age++;
console.log(person1); */ //now the age has increased to 44, so we modified the object from what it was when we declared it

/* Declare with const - varibale cannot be reassigned */
/* let person2 = {
  firstName: "Bob",
  age: 34,
  student: true,
};
console.log((person1 = person2)); */

/* Mutability References and Copies */
/* const person1 = {
  firstName: "Peter",
  age: 43,
  student: false,
};

const person2 = person1;
person2.firstName = "Bob";
console.log(person1.firstName); */ //person1's firstname is now Bob, the object is the same but the valuables are different!
//what is going on with that? - the values is passed by reference

/* Comparing Objects */
/* const student1 = {
  firstName: "Harry Potter",
  lastName: "Potter",
};

const student2 = student1; */

//are student1 and student2 now the same?
/* if (student1 === student2) {
  console.log("They are the same!");
} else {
  console.log("They are not....");
}  */ //the console log now says that they are the same!

//but what abot these two ways? are they then the same?
const student1 = {
  firstName: "Harry Potter",
  lastName: "Potter",
};

const student2 = {
  firstName: "Harry Potter",
  lastName: "Potter",
};

/* if (student1 === student2) {
  console.log("They are the same!");
} else {
  console.log("They are not....");
} */ //now they are not the same, they are to different objects!

//what about?
student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

if (student1 === student2) {
  console.log("They are the same!");
} else {
  console.log("They are not....");
} //they are not the same
