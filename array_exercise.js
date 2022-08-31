/* exercise basic Arrays */
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(letters[4]);

let newarr = letters;
newarr[4] = "*";
console.log(letters[4]);

/* exercise Array methods */
const people = ["Harry", "Ron", "Hermione"];

/* add an empty variable to store the result */
let result;
/* push Draco into the array */
result = people.push("Draco");
console.log(result);
console.log(people);
/* popping people out */
result = people.pop();
console.log(result);
console.log(people);
/* pushing Newille to the Array */
result = people.push("Newille");
console.log(result);
console.log(people);
/* pushing Luna into the Array */
result = people.push("Luna");
console.log(result);
console.log(people);
/* slicing, I'm getting that part of the array that the index i'm typing in, covers over */
result = people.slice(0, 3);
console.log(result);
console.log(people);
/* splice (putting and placing something in, so that is a method for adding something to the array) */
result = people.splice(1, 0, "Cho");
/* console.log(result); */
console.log(people);
/* replaces what was there before (Cho), so now Ginny has place number 1 in the array */
people[1] = "Ginny";
console.log(people);
/*  */
result = people.push("Fred", "George");
console.log(result);
console.log(people);

//indexOF - gav mig tallet
result = people.indexOf("Fred");
//
result = people.splice(result, 1);
// shift/unshift
result = people.shift("");
//result = people.unshift("Neville");
console.log(result);
console.log(people);
/* shows Rebecca as a array */
const letter = Array.from("Rebecca");
console.log(letter);
/* puts string into an Array without seperating */
const str = "abcdefghijk";
const arr1 = str.split();
console.log(arr1);
/* puts string in an Array with seperation */
const str2 = "abcdefghijklmn";
const arr2 = Array.from(str);
console.log(arr2);
/* convert an array to a string */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();
console.log(text);
