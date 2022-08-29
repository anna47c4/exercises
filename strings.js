"use strict";

const longLine =
  "a very very very very very very very long line of text, that spans across the width of the editor, \
omg what to do!!!! this is a bit annoying"; /* the backslash makes a line break in the editor */
console.log(longLine);

const longLine2 =
  "a very very very very very very very long line of text, that spans across the width of the editor, \n \
omg what to do!!!! this is a bit annoying"; /* the backslash x 2 with n in the middle makes a line break in the text, browser as well */
console.log(longLine2);

const longLine3 =
  "a very very very very very very very long line of text, that spans across the width of the editor, \nomg what to do!!!! this is a bit annoying"; /* the backslash x 1 with n afterwards makes a line break in the string(text), not in the editor(here) */
console.log(longLine3);

/* Template literals */
const name = "Peter";
const drink = "Pepsi";

console.log(`Hello ${name}, would you like a ${drink}?`);
/* ${valuable} inserts the value of the variable into the string */

/* with the back-tick, the line break is the same in the editor and in the browser */
/* you can use spaces, linebreaks etc. to layout the text inside the backticks  */

/* it could also be done with classic concatenation */
console.log("Hello " + name + ", would you like a " + drink + "?");

/* the template literals exercises is continued in the template files in this folder */

/* get the length of the variable and see it in the console */
const len = name.length;
console.log(`${name} is ${len} characters long.`);

/* you can also get just a single character if u use [index-of-the-character], example down under */
const letter = name[0];
console.log(`The first letter of ${name} is ${letter}`);
/* ____________________________________________________________________ */

/* EXERCISE with .length and [index] */
const newName = "Albus Percival Wulfric Brian Dumbledore";
const leng = newName.length;
const letters = newName[29];
const indexx = 39;

/* what is the total number of characters including spaces? */
const total = newName.length;
console.log(`Total number of characters is ${total}`);

/* what is the character at index 2? */
console.log(`Character at index 2 is ${letters}`); /* b */

/* which character is at index 6? */
console.log(
  `Character at index 6 is ${letters}`
); /* p, i just switched the number in the index */

/* What is the index of the first D in Dumbledore */
/* 29. When u put that in the index it will return with D */
console.log(
  `The first character in the last name is at index 29 and it is the letter ${letters}`
);

/* what is the index of the last 'e' in Dumbledore */
console.log(`Index of the last character in Dumbledore is ${indexx}`);

/* STRING - METHODS */
const str1 = "/T  There is  space here /n  ";
const str2 = str1.trim();
console.log(str2); /* str2 contains the string from str1 */
/* don't work, wrote the same as in the video */

/* u can use underscore to check for spaces */

const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 5);
const lastName = fullName.substring(17);
console.log(`First name is: _${firstName}_`);
/* get to the very end of the string */
console.log(`Lastname is: ${lastName}`);

/* SUBSTRING EXERCISES */

const fullDumName = "Albus Percival Wulfric Brian Dumbledore";
/* value in substring to get 'Albus' */
const firstDumName = fullDumName.substring(0, 5);
console.log(`${firstDumName}`);

/* value in substring to get 'Dumbledore' */
const lastDumName = fullDumName.substring(28);
console.log(`_${lastDumName}`); /* there is a space in front of Dumbledore */

/* Wulfric */
/* " Wulfric" */
/* ian */
/* bus */
